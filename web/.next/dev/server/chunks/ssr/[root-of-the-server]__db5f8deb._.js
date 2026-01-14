module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VoiceLab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-ssr] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
"use client";
;
;
;
/* ----------------------
   Helpers (audio + encoding)
   ---------------------- */ function float32To16BitPCM(float32) {
    const buffer = new ArrayBuffer(float32.length * 2);
    const view = new DataView(buffer);
    for(let i = 0; i < float32.length; i++){
        let s = Math.max(-1, Math.min(1, float32[i]));
        s = s < 0 ? s * 0x8000 : s * 0x7fff;
        view.setInt16(i * 2, s, true);
    }
    return buffer;
}
function base64EncodeArrayBuffer(arrayBuffer) {
    const bytes = new Uint8Array(arrayBuffer);
    const chunkSize = 0x8000;
    let binary = "";
    for(let i = 0; i < bytes.length; i += chunkSize){
        const sub = bytes.subarray(i, i + chunkSize);
        binary += String.fromCharCode(...sub);
    }
    return btoa(binary);
}
function downsample(input, srcRate, targetRate) {
    if (Math.round(srcRate) === Math.round(targetRate)) return input;
    const ratio = srcRate / targetRate;
    const newLength = Math.floor(input.length / ratio);
    const result = new Float32Array(newLength);
    for(let i = 0; i < newLength; i++){
        result[i] = input[Math.floor(i * ratio)];
    }
    return result;
}
function newId() {
    return typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : String(Date.now() + Math.random());
}
function VoiceLab() {
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Disconnected");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const wsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioCtxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const micStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const processorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playbackCtxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nextStartTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages
    ]);
    // Helpers to update chat smoothly
    const upsertStreamingMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((role, delta)=>{
        setMessages((prev)=>{
            const last = prev[prev.length - 1];
            if (last && last.role === role && last.status === "streaming") {
                // IMPORTANT: don't force spaces; just normalize extra whitespace
                const nextText = (last.text + delta).replace(/\s+/g, " ");
                return [
                    ...prev.slice(0, -1),
                    {
                        ...last,
                        text: nextText
                    }
                ];
            }
            return [
                ...prev,
                {
                    id: newId(),
                    role,
                    status: "streaming",
                    text: delta,
                    ts: Date.now()
                }
            ];
        });
    }, []);
    const finalizeLastStreaming = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((role)=>{
        setMessages((prev)=>{
            const last = prev[prev.length - 1];
            if (!last || last.role !== role || last.status !== "streaming") return prev;
            return [
                ...prev.slice(0, -1),
                {
                    ...last,
                    status: "final",
                    text: last.text.replace(/\s+/g, " ").trim()
                }
            ];
        });
    }, []);
    const setOrCreateUserSpeakingBubble = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setMessages((prev)=>{
            const last = prev[prev.length - 1];
            if (last && last.role === "user" && last.status === "streaming") return prev;
            return [
                ...prev,
                {
                    id: newId(),
                    role: "user",
                    status: "streaming",
                    text: "Speaking…",
                    ts: Date.now()
                }
            ];
        });
    }, []);
    // Play base64 PCM16@24k -> schedule into audio context (keeps order)
    const playAudioChunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (base64)=>{
        try {
            if (!playbackCtxRef.current) {
                playbackCtxRef.current = new (window.AudioContext || window.webkitAudioContext)({
                    sampleRate: 24000
                });
            }
            const ctx = playbackCtxRef.current;
            const binary = atob(base64);
            const bytes = new Uint8Array(binary.length);
            for(let i = 0; i < binary.length; i++)bytes[i] = binary.charCodeAt(i);
            const pcm16 = new Int16Array(bytes.buffer);
            const float32 = new Float32Array(pcm16.length);
            for(let i = 0; i < pcm16.length; i++)float32[i] = pcm16[i] / 32768;
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
    const sendWs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((obj)=>{
        const ws = wsRef.current;
        if (!ws || ws.readyState !== WebSocket.OPEN) return;
        ws.send(JSON.stringify(obj));
    }, []);
    // stop session + cleanup (idempotent)
    const stopSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Only send "end" if socket is open
        try {
            if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
                wsRef.current.send(JSON.stringify({
                    type: "end"
                }));
            }
        } catch  {}
        setIsActive(false);
        setStatus("Disconnected");
        try {
            wsRef.current?.close();
        } catch  {}
        wsRef.current = null;
        try {
            micStreamRef.current?.getTracks().forEach((t)=>t.stop());
        } catch  {}
        micStreamRef.current = null;
        if (audioCtxRef.current) {
            audioCtxRef.current.close().catch(()=>{});
        }
        audioCtxRef.current = null;
        if (processorRef.current) {
            try {
                processorRef.current.disconnect();
            } catch  {}
        }
        processorRef.current = null;
        finalizeLastStreaming("user");
        finalizeLastStreaming("assistant");
    }, [
        finalizeLastStreaming
    ]);
    // start: open ws and start mic -> send base64 PCM16@24k
    const startSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
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
            ws.onopen = ()=>{
                console.log("✅ WebSocket OPEN");
                setStatus("Connected");
            };
            ws.onclose = ()=>{
                console.log("❌ WebSocket CLOSED");
                // If server dies, cleanup
                stopSession();
            };
            ws.onerror = ()=>{
                setError("WebSocket Connection Failed");
            };
            ws.onmessage = (e)=>{
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
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            micStreamRef.current = stream;
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            audioCtxRef.current = audioCtx;
            if (audioCtx.state === "suspended") {
                try {
                    await audioCtx.resume();
                } catch  {}
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
            processor.onaudioprocess = (e)=>{
                try {
                    const input = e.inputBuffer.getChannelData(0);
                    // volume meter
                    let sum = 0;
                    for(let i = 0; i < input.length; i++)sum += input[i] * input[i];
                    setVolume(Math.sqrt(sum / input.length) * 100);
                    // downsample to 24k and send
                    const resampled = downsample(input, audioCtx.sampleRate, 24000);
                    const pcm16 = float32To16BitPCM(resampled);
                    const b64 = base64EncodeArrayBuffer(pcm16);
                    const sock = wsRef.current;
                    if (sock && sock.readyState === WebSocket.OPEN) {
                        sock.send(JSON.stringify({
                            type: "audio_chunk",
                            data: b64
                        }));
                    }
                } catch (err) {
                    console.error("Microphone processing error", err);
                }
            };
            src.connect(processor);
            setIsActive(true);
            setStatus("Listening");
        } catch (err) {
            setError(err?.message ?? String(err));
            stopSession();
        }
    }, [
        finalizeLastStreaming,
        playAudioChunk,
        setOrCreateUserSpeakingBubble,
        stopSession,
        upsertStreamingMessage
    ]);
    // cleanup when component unmounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            stopSession();
        };
    }, [
        stopSession
    ]);
    const statusBadge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const ok = isActive && (status === "Listening" || status === "Connected" || status === "Azure Connected");
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 ${ok ? "bg-green-500/20 text-green-400" : "bg-slate-700 text-slate-400"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-2 h-2 rounded-full ${ok ? "bg-green-500 animate-pulse" : "bg-slate-500"}`
                }, void 0, false, {
                    fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, this),
                status
            ]
        }, void 0, true, {
            fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
            lineNumber: 378,
            columnNumber: 7
        }, this);
    }, [
        isActive,
        status
    ]);
    /* ----------------------
     UI
     ---------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 p-8 font-sans text-slate-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-900 p-6 text-white flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-bold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                            className: "text-blue-400",
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                            lineNumber: 399,
                                            columnNumber: 15
                                        }, this),
                                        "Voice AI Lab"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-xs mt-1",
                                    children: "Target: ws://localhost:8000/ws"
                                }, void 0, false, {
                                    fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                            lineNumber: 397,
                            columnNumber: 11
                        }, this),
                        statusBadge
                    ]
                }, void 0, true, {
                    fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                    lineNumber: 396,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 flex flex-col items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center transition-all duration-75 border-4 border-white shadow-inner",
                                style: {
                                    boxShadow: isActive ? `0 0 ${volume * 2}px rgba(59, 130, 246, 0.5)` : "none",
                                    transform: `scale(${1 + volume / 200})`
                                },
                                children: isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                    className: "text-blue-600 animate-bounce",
                                    size: 40
                                }, void 0, false, {
                                    fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                    lineNumber: 418,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                    className: "text-slate-300",
                                    size: 40
                                }, void 0, false, {
                                    fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                    lineNumber: 420,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                            lineNumber: 409,
                            columnNumber: 11
                        }, this),
                        !isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: startSession,
                            className: "w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    size: 20,
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                    lineNumber: 430,
                                    columnNumber: 15
                                }, this),
                                "Start Real-Time Session"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                            lineNumber: 426,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: stopSession,
                            className: "w-full py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3 h-3 bg-white rounded-sm"
                                }, void 0, false, {
                                    fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                    lineNumber: 438,
                                    columnNumber: 15
                                }, this),
                                "Stop Session"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                            lineNumber: 434,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>sendWs({
                                            type: "end"
                                        }),
                                    className: "flex-1 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg font-semibold",
                                    disabled: !isActive,
                                    children: "Force AI to Reply"
                                }, void 0, false, {
                                    fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                    lineNumber: 444,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMessages([]),
                                    className: "flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 p-2 rounded-lg font-semibold",
                                    children: "Clear Chat"
                                }, void 0, false, {
                                    fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                    lineNumber: 451,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full p-4 bg-red-50 border border-red-100 rounded-lg flex items-start gap-3 text-red-700 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    size: 18,
                                    className: "shrink-0 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                    lineNumber: 461,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                    lineNumber: 462,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                            lineNumber: 460,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                    lineNumber: 408,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-slate-100 bg-slate-50 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-4 text-slate-500 font-semibold text-sm uppercase tracking-wider",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                    lineNumber: 470,
                                    columnNumber: 13
                                }, this),
                                "Live Transcript"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                            lineNumber: 469,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-slate-200 rounded-xl p-4 min-h-[200px] max-h-[360px] overflow-y-auto space-y-3",
                            children: messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-300 italic",
                                children: isActive ? "Listening for your voice..." : "Conversation will appear here once session starts."
                            }, void 0, false, {
                                fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                lineNumber: 476,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    messages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${m.role === "user" ? "bg-blue-600 text-white rounded-br-md" : "bg-slate-100 text-slate-800 rounded-bl-md"}`,
                                                children: [
                                                    m.text || (m.status === "streaming" ? "…" : ""),
                                                    m.status === "streaming" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block w-2 h-2 ml-2 rounded-full bg-current opacity-50 align-middle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                                        lineNumber: 492,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                                lineNumber: 483,
                                                columnNumber: 21
                                            }, this)
                                        }, m.id, false, {
                                            fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                            lineNumber: 482,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: bottomRef
                                    }, void 0, false, {
                                        fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                                        lineNumber: 497,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                            lineNumber: 474,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                    lineNumber: 468,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-slate-100 text-[10px] text-slate-400 text-center uppercase tracking-widest",
                    children: "PCM16 @ 24kHz • Mono • Real-Time Streaming"
                }, void 0, false, {
                    fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
                    lineNumber: 504,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
            lineNumber: 394,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/WorkSpace/Resso/avatar-mircroservice/web/app/components/VoiceLab/VoiceLab.tsx",
        lineNumber: 393,
        columnNumber: 5
    }, this);
}
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Mic
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 19v3",
            key: "npa21l"
        }
    ],
    [
        "path",
        {
            d: "M19 10v2a7 7 0 0 1-14 0v-2",
            key: "1vc78b"
        }
    ],
    [
        "rect",
        {
            x: "9",
            y: "2",
            width: "6",
            height: "13",
            rx: "3",
            key: "s6n7sd"
        }
    ]
];
const Mic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("mic", __iconNode);
;
 //# sourceMappingURL=mic.js.map
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript) <export default as Mic>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript)");
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MicOff
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 19v3",
            key: "npa21l"
        }
    ],
    [
        "path",
        {
            d: "M15 9.34V5a3 3 0 0 0-5.68-1.33",
            key: "1gzdoj"
        }
    ],
    [
        "path",
        {
            d: "M16.95 16.95A7 7 0 0 1 5 12v-2",
            key: "cqa7eg"
        }
    ],
    [
        "path",
        {
            d: "M18.89 13.23A7 7 0 0 0 19 12v-2",
            key: "16hl24"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ],
    [
        "path",
        {
            d: "M9 9v3a3 3 0 0 0 5.12 2.12",
            key: "r2i35w"
        }
    ]
];
const MicOff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("mic-off", __iconNode);
;
 //# sourceMappingURL=mic-off.js.map
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-ssr] (ecmascript) <export default as MicOff>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MicOff",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-ssr] (ecmascript)");
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Activity
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
            key: "169zse"
        }
    ]
];
const Activity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("activity", __iconNode);
;
 //# sourceMappingURL=activity.js.map
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Activity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript)");
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MessageSquare
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
            key: "18887p"
        }
    ]
];
const MessageSquare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("message-square", __iconNode);
;
 //# sourceMappingURL=message-square.js.map
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageSquare",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript)");
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleAlert
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
];
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-alert", __iconNode);
;
 //# sourceMappingURL=circle-alert.js.map
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)");
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Play
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
            key: "10ikf1"
        }
    ]
];
const Play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("play", __iconNode);
;
 //# sourceMappingURL=play.js.map
}),
"[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Play",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WorkSpace$2f$Resso$2f$avatar$2d$mircroservice$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WorkSpace/Resso/avatar-mircroservice/web/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__db5f8deb._.js.map