"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Mic, MicOff, Activity, MessageSquare, AlertCircle, Play } from "lucide-react";

/* ----------------------
   Helpers (audio + encoding)
   ---------------------- */

function float32To16BitPCM(float32: Float32Array): ArrayBuffer {
  const buffer = new ArrayBuffer(float32.length * 2);
  const view = new DataView(buffer);
  for (let i = 0; i < float32.length; i++) {
    let s = Math.max(-1, Math.min(1, float32[i]));
    s = s < 0 ? s * 0x8000 : s * 0x7fff;
    view.setInt16(i * 2, s, true);
  }
  return buffer;
}

function base64EncodeArrayBuffer(arrayBuffer: ArrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer);
  const chunkSize = 0x8000;
  let binary = "";
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const sub = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode(...sub);
  }
  return btoa(binary);
}

function downsample(input: Float32Array, srcRate: number, targetRate: number) {
  if (Math.round(srcRate) === Math.round(targetRate)) return input;
  const ratio = srcRate / targetRate;
  const newLength = Math.floor(input.length / ratio);
  const result = new Float32Array(newLength);
  for (let i = 0; i < newLength; i++) {
    result[i] = input[Math.floor(i * ratio)];
  }
  return result;
}

/* ----------------------
   Chat types
   ---------------------- */

type ChatRole = "user" | "assistant";
type ChatStatus = "streaming" | "final";

type ChatMessage = {
  id: string;
  role: ChatRole;
  status: ChatStatus;
  text: string;
  ts: number;
};

function newId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : String(Date.now() + Math.random());
}

/* ----------------------
   VoiceLab Component
   ---------------------- */

export default function VoiceLab() {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState("Disconnected");
  const [error, setError] = useState<string | null>(null);
  const [volume, setVolume] = useState(0);

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const wsRef = useRef<WebSocket | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const micStreamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);

  const playbackCtxRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef<number>(0);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Helpers to update chat smoothly
  const upsertStreamingMessage = useCallback((role: ChatRole, delta: string) => {
    setMessages((prev) => {
      const last = prev[prev.length - 1];

      if (last && last.role === role && last.status === "streaming") {
        // IMPORTANT: don't force spaces; just normalize extra whitespace
        const nextText = (last.text + delta).replace(/\s+/g, " ");
        return [...prev.slice(0, -1), { ...last, text: nextText }];
      }

      return [
        ...prev,
        {
          id: newId(),
          role,
          status: "streaming",
          text: delta,
          ts: Date.now(),
        },
      ];
    });
  }, []);

  const finalizeLastStreaming = useCallback((role: ChatRole) => {
    setMessages((prev) => {
      const last = prev[prev.length - 1];
      if (!last || last.role !== role || last.status !== "streaming") return prev;
      return [
        ...prev.slice(0, -1),
        { ...last, status: "final", text: last.text.replace(/\s+/g, " ").trim() },
      ];
    });
  }, []);

  const setOrCreateUserSpeakingBubble = useCallback(() => {
    setMessages((prev) => {
      const last = prev[prev.length - 1];
      if (last && last.role === "user" && last.status === "streaming") return prev;

      return [
        ...prev,
        {
          id: newId(),
          role: "user",
          status: "streaming",
          text: "Speaking…",
          ts: Date.now(),
        },
      ];
    });
  }, []);

  // Play base64 PCM16@24k -> schedule into audio context (keeps order)
  const playAudioChunk = useCallback(async (base64: string) => {
    try {
      if (!playbackCtxRef.current) {
        playbackCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({
          sampleRate: 24000,
        });
      }
      const ctx = playbackCtxRef.current;

      const binary = atob(base64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

      const pcm16 = new Int16Array(bytes.buffer);
      const float32 = new Float32Array(pcm16.length);
      for (let i = 0; i < pcm16.length; i++) float32[i] = pcm16[i] / 32768;

      const audioBuffer = ctx.createBuffer(1, float32.length, 24000);
      audioBuffer.getChannelData(0).set(float32);

      const src = ctx.createBufferSource();
      src.buffer = audioBuffer;
      src.connect(ctx.destination);

      const startTime = Math.max(ctx.currentTime, nextStartTimeRef.current);
      src.start(startTime);
      nextStartTimeRef.current = startTime + audioBuffer.duration;
    } catch (e) {
      console.error("Playback error", e);
    }
  }, []);

  const sendWs = useCallback((obj: any) => {
    const ws = wsRef.current;
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    ws.send(JSON.stringify(obj));
  }, []);

  // stop session + cleanup (idempotent)
  const stopSession = useCallback(() => {
    // Only send "end" if socket is open
    try {
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        wsRef.current.send(JSON.stringify({ type: "end" }));
      }
    } catch {}

    setIsActive(false);
    setStatus("Disconnected");

    try {
      wsRef.current?.close();
    } catch {}
    wsRef.current = null;

    try {
      micStreamRef.current?.getTracks().forEach((t) => t.stop());
    } catch {}
    micStreamRef.current = null;

    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
    }
    audioCtxRef.current = null;

    if (processorRef.current) {
      try {
        processorRef.current.disconnect();
      } catch {}
    }
    processorRef.current = null;

    finalizeLastStreaming("user");
    finalizeLastStreaming("assistant");
  }, [finalizeLastStreaming]);

  // start: open ws and start mic -> send base64 PCM16@24k
  const startSession = useCallback(async () => {
    // Guard: don’t create multiple sockets
    if (wsRef.current) {
      console.warn("Session already active, ignoring start.");
      return;
    }

    setError(null);
    setVolume(0);
    nextStartTimeRef.current = 0;
    setMessages([]);

    try {
      const ws = new WebSocket("https://p8vj4w2w-8000.use.devtunnels.ms/ws");
      wsRef.current = ws;
      setStatus("Connecting...");

      ws.onopen = () => {
        console.log("✅ WebSocket OPEN");
        setStatus("Connected");
      };

      ws.onclose = () => {
        console.log("❌ WebSocket CLOSED");
        // If server dies, cleanup
        stopSession();
      };

      ws.onerror = () => {
        setError("WebSocket Connection Failed");
      };

      ws.onmessage = (e) => {
        try {
          const msg = JSON.parse(e.data);

          if (msg.type === "session_ready") {
            setStatus("Azure Connected");
            return;
          }

          if (msg.type === "speech_started" || msg.type === "user_speech_started") {
            setOrCreateUserSpeakingBubble();
            return;
          }

          if (msg.type === "speech_stopped" || msg.type === "user_speech_stopped") {
            finalizeLastStreaming("user");
            return;
          }

          // Assistant text streaming
          if (msg.type === "assistant_text_delta" || msg.type === "text_delta") {
            if (typeof msg.data === "string" && msg.data.length > 0) {
              upsertStreamingMessage("assistant", msg.data);
            }
            return;
          }

          if (msg.type === "response_done") {
            finalizeLastStreaming("assistant");
            return;
          }

          // Assistant audio
          if (msg.type === "audio_delta") {
            if (msg.data) playAudioChunk(msg.data);
            return;
          }

          if (msg.type === "error") {
            setError(msg.payload ?? "Server error");
            return;
          }

          if (msg.type === "pong") {
            return;
          }
        } catch (err) {
          console.warn("Invalid WS message", err);
        }
      };

      // microphone capture setup
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micStreamRef.current = stream;

      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioCtxRef.current = audioCtx;

      if (audioCtx.state === "suspended") {
        try {
          await audioCtx.resume();
        } catch {}
      }

      const src = audioCtx.createMediaStreamSource(stream);

      // NOTE: ScriptProcessorNode is deprecated, but ok for now. We can migrate to AudioWorklet later.
      const processor = audioCtx.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;

      // silent output to keep processor alive
      const silentGain = audioCtx.createGain();
      silentGain.gain.value = 0;
      processor.connect(silentGain);
      silentGain.connect(audioCtx.destination);

      processor.onaudioprocess = (e) => {
        try {
          const input = e.inputBuffer.getChannelData(0);

          // volume meter
          let sum = 0;
          for (let i = 0; i < input.length; i++) sum += input[i] * input[i];
          setVolume(Math.sqrt(sum / input.length) * 100);

          // downsample to 24k and send
          const resampled = downsample(input, audioCtx.sampleRate, 24000);
          const pcm16 = float32To16BitPCM(resampled);
          const b64 = base64EncodeArrayBuffer(pcm16);

          const sock = wsRef.current;
          if (sock && sock.readyState === WebSocket.OPEN) {
            sock.send(JSON.stringify({ type: "audio_chunk", data: b64 }));
          }
        } catch (err) {
          console.error("Microphone processing error", err);
        }
      };

      src.connect(processor);

      setIsActive(true);
      setStatus("Listening");
    } catch (err: any) {
      setError(err?.message ?? String(err));
      stopSession();
    }
  }, [
    finalizeLastStreaming,
    playAudioChunk,
    setOrCreateUserSpeakingBubble,
    stopSession,
    upsertStreamingMessage,
  ]);

  // cleanup when component unmounts
  useEffect(() => {
    return () => {
      stopSession();
    };
  }, [stopSession]);

  const statusBadge = useMemo(() => {
    const ok = isActive && (status === "Listening" || status === "Connected" || status === "Azure Connected");
    return (
      <div
        className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 ${
          ok ? "bg-green-500/20 text-green-400" : "bg-slate-700 text-slate-400"
        }`}
      >
        <div className={`w-2 h-2 rounded-full ${ok ? "bg-green-500 animate-pulse" : "bg-slate-500"}`} />
        {status}
      </div>
    );
  }, [isActive, status]);

  /* ----------------------
     UI
     ---------------------- */
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans text-slate-900">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2">
              <Activity className="text-blue-400" size={20} />
              Voice AI Lab
            </h1>
            <p className="text-slate-400 text-xs mt-1">Target: ws://localhost:8000/ws</p>
          </div>
          {statusBadge}
        </div>

        {/* Controls */}
        <div className="p-8 flex flex-col items-center gap-4">
          <div className="relative">
            <div
              className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center transition-all duration-75 border-4 border-white shadow-inner"
              style={{
                boxShadow: isActive ? `0 0 ${volume * 2}px rgba(59, 130, 246, 0.5)` : "none",
                transform: `scale(${1 + volume / 200})`,
              }}
            >
              {isActive ? (
                <Mic className="text-blue-600 animate-bounce" size={40} />
              ) : (
                <MicOff className="text-slate-300" size={40} />
              )}
            </div>
          </div>

          {!isActive ? (
            <button
              onClick={startSession}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
            >
              <Play size={20} fill="currentColor" />
              Start Real-Time Session
            </button>
          ) : (
            <button
              onClick={stopSession}
              className="w-full py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-200"
            >
              <div className="w-3 h-3 bg-white rounded-sm" />
              Stop Session
            </button>
          )}

          <div className="w-full flex gap-2">
            <button
              onClick={() => sendWs({ type: "end" })}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg font-semibold"
              disabled={!isActive}
            >
              Force AI to Reply
            </button>
            <button
              onClick={() => setMessages([])}
              className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 p-2 rounded-lg font-semibold"
            >
              Clear Chat
            </button>
          </div>

          {error && (
            <div className="w-full p-4 bg-red-50 border border-red-100 rounded-lg flex items-start gap-3 text-red-700 text-sm">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <p>{error}</p>
            </div>
          )}
        </div>

        {/* Chat */}
        <div className="border-t border-slate-100 bg-slate-50 p-6">
          <div className="flex items-center gap-2 mb-4 text-slate-500 font-semibold text-sm uppercase tracking-wider">
            <MessageSquare size={16} />
            Live Transcript
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 min-h-[200px] max-h-[360px] overflow-y-auto space-y-3">
            {messages.length === 0 ? (
              <span className="text-slate-300 italic">
                {isActive ? "Listening for your voice..." : "Conversation will appear here once session starts."}
              </span>
            ) : (
              <>
                {messages.map((m) => (
                  <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                        m.role === "user"
                          ? "bg-blue-600 text-white rounded-br-md"
                          : "bg-slate-100 text-slate-800 rounded-bl-md"
                      }`}
                    >
                      {m.text || (m.status === "streaming" ? "…" : "")}
                      {m.status === "streaming" && (
                        <span className="inline-block w-2 h-2 ml-2 rounded-full bg-current opacity-50 align-middle" />
                      )}
                    </div>
                  </div>
                ))}
                <div ref={bottomRef} />
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 text-[10px] text-slate-400 text-center uppercase tracking-widest">
          PCM16 @ 24kHz • Mono • Real-Time Streaming
        </div>
      </div>
    </div>
  );
}