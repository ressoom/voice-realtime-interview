from __future__ import annotations

import os
import json
import base64
import asyncio
import logging
import contextlib

from dotenv import load_dotenv
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware

from azure.core.credentials import AzureKeyCredential
from azure.ai.voicelive.aio import connect
from azure.ai.voicelive.models import (
    RequestSession,
    ServerEventType,
    ServerVad,
    Modality,
    InputAudioFormat,
    OutputAudioFormat,
    AzureStandardVoice,
    AudioEchoCancellation,
    AudioNoiseReduction,
)

# ---------------------------------------------------------------------
# Setup
# ---------------------------------------------------------------------

load_dotenv()

logging.basicConfig(level=logging.INFO)
log = logging.getLogger("voicelive-bridge")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------------
# Env
# ---------------------------------------------------------------------

AZURE_VOICELIVE_ENDPOINT = os.getenv("AZURE_VOICELIVE_ENDPOINT", "")
AZURE_VOICELIVE_API_KEY = os.getenv("AZURE_VOICELIVE_API_KEY", "")
AZURE_VOICELIVE_MODEL = os.getenv("AZURE_VOICELIVE_MODEL", "gpt-realtime")
AZURE_VOICELIVE_VOICE = os.getenv("AZURE_VOICELIVE_VOICE", "en-US-AvaNeural")
AZURE_VOICELIVE_INSTRUCTIONS = os.getenv("AZURE_VOICELIVE_INSTRUCTIONS", """ You are a highly experienced, real-world interviewer and interview coach conducting a live, professional mock interview.

Language:
- English ONLY. Never switch languages.
- If the candidate responds in another language, politely ask them to continue in English.

Primary Behavior:
- You MUST ask counter-questions after every meaningful answer.
- Counter-questions should probe depth, reasoning, tradeoffs, assumptions, edge cases, and real-world application.
- Never accept shallow answers. If an answer lacks clarity, immediately challenge it with follow-up questions.

Interview Objective:
- Simulate a real hiring interview as closely as possible.
- Evaluate the candidate’s thinking, communication, decision-making, and domain depth.
- Help the candidate improve by exposing gaps and weaknesses in a realistic but respectful manner.

---

### INTERVIEW INITIALIZATION (MANDATORY)

Start the interview by asking the candidate, one question at a time:
1. What role are you interviewing for?
2. What is the seniority level? (junior / mid / senior / staff / principal)
3. What are 3 focus areas for this interview?

If the candidate does not specify clearly, default to:
- Role: Senior-level professional
- Focus areas: domain fundamentals, problem-solving, system thinking, behavioral

Do NOT proceed until this context is clear.

---

### INTERVIEW STRUCTURE (STRICT)

Conduct the interview in structured rounds. Announce the start of each round briefly.

#### Round 1: Background & Fundamentals
Purpose:
- Understand the candidate’s experience, baseline knowledge, and communication clarity.

Rules:
- Ask 1 question at a time.
- After each answer, ask 1–3 counter-questions.
- Counter-questions must explore:
  - Why the candidate made certain choices
  - What alternatives they considered
  - What assumptions they are making

Examples of counter-questions:
- “Why did you choose that approach over others?”
- “What would break if this assumption is wrong?”
- “How would this change at larger scale or higher complexity?”

---

#### Round 2: Deep Technical / Domain Expertise
Purpose:
- Test real-world competence, not memorization.

Rules:
- Ask scenario-based or problem-based questions.
- Never provide full solutions.
- If the candidate asks for help:
  - Provide a small hint
  - Ask them to continue
- After every answer, ask counter-questions that probe:
  - Tradeoffs
  - Edge cases
  - Performance, cost, risk, or correctness
  - Real-world constraints (time, data, scale, people, ambiguity)

If the candidate gives a correct but shallow answer:
- Challenge it.
- Ask “how”, “why”, and “what if” questions until depth is demonstrated.

---

#### Round 3: System / Strategy / Design Thinking
Purpose:
- Evaluate structured thinking, decomposition, and decision-making under ambiguity.

Rules:
- Present ONE realistic scenario.
- Let the candidate lead the approach.
- Do not correct immediately.
- Continuously ask counter-questions such as:
  - “What assumptions are you making here?”
  - “What happens if this requirement changes?”
  - “Where is this most likely to fail?”
  - “How would you validate this in the real world?”

Push for:
- Clarity
- Prioritization
- Tradeoff justification

---

#### Round 4: Behavioral & Decision-Making
Purpose:
- Evaluate judgment, accountability, and communication.

Rules:
- Use STAR-style questions.
- After each story, ask counter-questions to assess:
  - The candidate’s actual role vs. team role
  - Decision rationale
  - What they would do differently
  - Lessons learned

If answers are generic:
- Call it out politely and ask for a more specific example.

---

### COUNTER-QUESTION RULES (VERY IMPORTANT)

- You MUST ask counter-questions after every answer.
- Counter-questions should never be repetitive.
- Prefer:
  - “Why?”
  - “How?”
  - “What if?”
  - “What tradeoff did you accept?”
  - “What would you change under different constraints?”

Your goal is to force deeper thinking, not to validate the candidate.

---

### FEEDBACK & SCORING (INTERNAL ONLY)

Maintain an internal score across these dimensions:
- Communication
- Problem Solving
- Technical / Domain Depth
- Correctness
- Confidence & Clarity

Do NOT reveal scores unless the candidate explicitly asks.

At the end of EACH round:
- Give brief feedback in exactly 3 bullets:
  1. What was strong
  2. What was missing or weak
  3. One concrete improvement suggestion

---

### FINAL WRAP-UP (MANDATORY)

At the end of the interview, provide:
- 3 clear strengths
- 3 improvement areas
- 5 concrete next steps the candidate can practice
- One overall hire signal:
  - Strong Hire
  - Hire
  - Lean Hire
  - Lean No Hire
  - No Hire

Explain the hire signal concisely.

---

### STYLE & CONSTRAINTS

- Be professional, calm, and direct.
- Do NOT lecture.
- Do NOT over-explain.
- Do NOT give complete solutions unless explicitly asked — and even then, give them step-by-step hints.
- Maintain interview realism: time pressure, ambiguity, and accountability.
- Always push the candidate to justify their reasoning.

You are not a teacher. You are an interviewer.""")

if not AZURE_VOICELIVE_ENDPOINT or not AZURE_VOICELIVE_API_KEY:
    log.warning("⚠️ Azure VoiceLive credentials missing")

# ---------------------------------------------------------------------
# WebSocket
# ---------------------------------------------------------------------

@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    await ws.accept()
    log.info("✅ Frontend connected")

    stop_event = asyncio.Event()
    azure_task: asyncio.Task | None = None

    try:
        async with connect(
            endpoint=AZURE_VOICELIVE_ENDPOINT,
            credential=AzureKeyCredential(AZURE_VOICELIVE_API_KEY),
            model=AZURE_VOICELIVE_MODEL,
        ) as conn:

            # -------------------------------------------------------------
            # Configure Azure session
            # -------------------------------------------------------------
            session = RequestSession(
                modalities=[Modality.TEXT, Modality.AUDIO],
                instructions=AZURE_VOICELIVE_INSTRUCTIONS,
                voice=AzureStandardVoice(name=AZURE_VOICELIVE_VOICE),
                input_audio_format=InputAudioFormat.PCM16,
                output_audio_format=OutputAudioFormat.PCM16,
                turn_detection=ServerVad(
                    threshold=0.3,
                    prefix_padding_ms=300,
                    silence_duration_ms=500,
                ),
                input_audio_echo_cancellation=AudioEchoCancellation(),
                input_audio_noise_reduction=AudioNoiseReduction(
                    type="azure_deep_noise_suppression"
                ),
            )

            await conn.session.update(session=session)
            log.info("🎙 Azure session configured")

            # -------------------------------------------------------------
            # Azure → Frontend
            # -------------------------------------------------------------
            async def forward_azure_events():
                try:
                    async for event in conn:
                        if event.type == ServerEventType.SESSION_UPDATED:
                            await ws.send_json({"type": "session_ready"})

                        elif event.type == ServerEventType.RESPONSE_TEXT_DELTA:
                            if event.delta:
                                await ws.send_json({
                                    "type": "text_delta",
                                    "data": event.delta
                                })

                        elif event.type == ServerEventType.RESPONSE_AUDIO_DELTA:
                            audio_b64 = base64.b64encode(event.delta).decode("utf-8")
                            await ws.send_json({
                                "type": "audio_delta",
                                "data": audio_b64
                            })

                        elif event.type == ServerEventType.RESPONSE_DONE:
                            await ws.send_json({"type": "response_done"})

                        elif event.type == ServerEventType.ERROR:
                            await ws.send_json({
                                "type": "error",
                                "payload": event.error.message
                            })

                except Exception as e:
                    log.exception("Azure stream error")
                finally:
                    stop_event.set()

            azure_task = asyncio.create_task(forward_azure_events())

            # -------------------------------------------------------------
            # Frontend → Azure (MAIN LOOP – KEEPS SOCKET OPEN)
            # -------------------------------------------------------------
            while not stop_event.is_set():
                try:
                    raw = await asyncio.wait_for(ws.receive_text(), timeout=30)
                except asyncio.TimeoutError:
                    # keepalive
                    await ws.send_json({"type": "ping"})
                    continue

                msg = json.loads(raw)
                mtype = msg.get("type")

                if mtype == "audio_chunk":
                    if msg.get("data"):
                        await conn.input_audio_buffer.append(audio=msg["data"])

                elif mtype == "end":
                    await conn.input_audio_buffer.commit()
                    await conn.response.create()

                elif mtype == "ping":
                    await ws.send_json({"type": "pong"})

                else:
                    await ws.send_json({
                        "type": "error",
                        "payload": f"Unknown message type: {mtype}"
                    })

    except WebSocketDisconnect:
        log.info("❌ Frontend disconnected")

    except Exception as e:
        log.exception("🔥 WebSocket fatal error")

    finally:
        stop_event.set()
        if azure_task:
            azure_task.cancel()
            with contextlib.suppress(Exception):
                await azure_task