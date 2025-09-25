// app/page.tsx
"use client";

import React from "react";

/**
 * Sepia "I'm Sorry" card — v5
 * - Bigger teddy 🧸
 * - Sparkles (twinkles + orbiters)
 * - NEW: Rising bubbles and bouncing bubbles across the page
 * - Deterministic CSS animations (no randomness) → clean hydration
 * - 10-step flows; her name appears in every line
 */

const HER_NAME = "Vedanti";   // ← change to her name
const FROM_NAME = "Your Friend";  // ← your signature

// ---------- Copy ----------
// ---- Longer, deeper phrases ----
const forgiveSteps: string[] = [
  `🌹 ${HER_NAME}, thank you for even giving me this moment. Your presence feels like a small miracle, and I don’t take it lightly.`,
  `You’ve always been on my side, ${HER_NAME} — steady when I wobble and gentle when I’m sharp. I want to be that steady place for you too.`,
  `I’m sorry for the hurt I caused. I won’t defend myself; I’ll repair myself — with actions you can feel, not promises you must trust.`,
  `You’re the best friend I’ve ever known, ${HER_NAME} — the kind of soul who makes ordinary days feel like home. I want you to feel that safe with me.`,
  `I will learn your language of care — your pace, your boundaries, your soft answers — and I will honor them every single day.`,
  `When you speak, I will listen. When you pause, I will wait. When you need space, I will guard it for you, ${HER_NAME}.`,
  `I choose patience over pride, tenderness over being right, and your peace over my ego. That is the life I want with you.`,
  `If trust is a bridge, I’ll lay one plank at a time: consistency, honesty, accountability — again and again, ${HER_NAME}.`,
  `Your laughter turns rooms into sunlight, ${HER_NAME}. I want to protect the light in you, never dim it.`,
  `Thank you for forgiving me, ${HER_NAME}. I’ll spend the quiet, ordinary days proving that your heart is safe with me. ✨`,
];

const notForgiveSteps: string[] = [
  `I understand if you can’t say yes today, ${HER_NAME}. Your feelings are not an obstacle; they’re my map, and I will follow them with care.`,
  `You are more than this moment. If you need time, I’ll keep my pace soft and my words smaller, so your heart can breathe, ${HER_NAME}.`,
  `I won’t ask you to forget. I’ll ask for the chance to help the hurt loosen its grip — one gentle day at a time.`,
  `You’ve been on my side in more ways than I can count, ${HER_NAME}. If you can’t stand with me right now, I will stand for you — quietly and faithfully.`,
  `You’re the best friend I’ve ever had — kind, brave, beautifully honest. I’ll honor that honesty even when it isn’t what I hope to hear, ${HER_NAME}.`,
  `If trust is heavy, I will carry the weight. If distance is needed, I’ll keep my hands open and my heart respectful.`,
  `I will show up without noise: small, consistent acts that make safety real, so you never have to wonder, ${HER_NAME}.`,
  `If today is a “not yet”, I’ll meet you here again tomorrow — the same care, no pressure, only respect.`,
  `Whatever you decide, I am grateful for you, ${HER_NAME}, for what you’ve taught me about love, patience, and courage.`,
  `I’m sorry for the pain I caused. Even if forgiveness doesn’t arrive now, I will bless your path and keep becoming someone worthy of your trust. 🕊️`,
];


const forgiveLabels = ["I forgive (next) 🌹","Continue ✨","Go on","Next","Next","Next","Next","Next","Almost there","Finish ✅"];
const notForgiveLabels = ["Not yet (next)","Continue","Next","Next","Next","Next","Next","Next","Almost there","Finish 🕊️"];

// ---------- Deterministic floaters ----------
const ROSES = [
  { left: "8%",  size: 14, duration: 22, delay: 0,  opacity: 0.25 },
  { left: "22%", size: 12, duration: 18, delay: 2,  opacity: 0.28 },
  { left: "38%", size: 16, duration: 24, delay: 4,  opacity: 0.22 },
  { left: "56%", size: 12, duration: 20, delay: 1,  opacity: 0.26 },
  { left: "72%", size: 16, duration: 23, delay: 3,  opacity: 0.24 },
  { left: "88%", size: 14, duration: 21, delay: 5,  opacity: 0.22 },
];

const BOKEH = [
  { top: "12%", left: "10%", size: 120, opacity: 0.18 },
  { top: "22%", left: "78%", size: 140, opacity: 0.16 },
  { top: "65%", left: "20%", size: 160, opacity: 0.14 },
  { top: "72%", left: "70%", size: 180, opacity: 0.12 },
];

// NEW: rising bubbles (bottom → top) with gentle sway
const BUBBLES_RISE = [
  { left: "6%",  size: 14, duration: 22, delay: 0,  sway: 6,  opacity: 0.18 },
  { left: "14%", size: 10, duration: 18, delay: 3,  sway: 8,  opacity: 0.16 },
  { left: "27%", size: 12, duration: 26, delay: 6,  sway: 7,  opacity: 0.18 },
  { left: "39%", size: 16, duration: 24, delay: 2,  sway: 9,  opacity: 0.2  },
  { left: "52%", size: 12, duration: 20, delay: 5,  sway: 7,  opacity: 0.17 },
  { left: "63%", size: 10, duration: 18, delay: 7,  sway: 6,  opacity: 0.16 },
  { left: "74%", size: 14, duration: 23, delay: 4,  sway: 8,  opacity: 0.18 },
  { left: "86%", size: 12, duration: 21, delay: 8,  sway: 7,  opacity: 0.16 },
];

// NEW: bouncing bubbles (gently bounce up/down and drift sideways)
const BUBBLES_BOUNCE = [
  { top: "18%", left: "8%",  size: 18, dur: 6, amp: 32, drift: 18, opacity: 0.18 },
  { top: "28%", left: "78%", size: 14, dur: 5, amp: 26, drift: 16, opacity: 0.16 },
  { top: "58%", left: "22%", size: 16, dur: 7, amp: 30, drift: 20, opacity: 0.17 },
  { top: "66%", left: "68%", size: 20, dur: 6.5, amp: 34, drift: 22, opacity: 0.2  },
];

// twinkles positioned around teddy (relative)
const TWINKLES = [
  { top: "-14%", left: "10%", delay: 0,   size: 14 },
  { top: "-22%", left: "72%", delay: 0.7, size: 13 },
  { top: "18%",  left: "-12%", delay: 1.4, size: 12 },
  { top: "22%",  left: "92%", delay: 2.1, size: 13 },
  { top: "60%",  left: "-8%",  delay: 2.8, size: 12 },
  { top: "66%",  left: "96%", delay: 3.5, size: 12 },
];

// orbiting sparkles — circle around teddy
const ORBITERS = [
  { r: 98, size: 11, dur: 14, start: 0   },
  { r: 86, size: 10, dur: 12, start: 60  },
  { r: 76, size: 10, dur: 10, start: 120 },
  { r: 92, size: 11, dur: 16, start: 180 },
];

// ---------- UI helpers ----------
function Progress({ step, tone }: { step: number; tone: "rose" | "stone" }) {
  const on = tone === "rose" ? "bg-rose-600" : "bg-stone-600";
  const off = "bg-stone-300";
  return (
    <div className="mt-5 flex justify-center gap-1.5" aria-label="progress">
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i} className={`h-1.5 w-5 rounded-full ${i <= step ? on : off}`} style={{ boxShadow: "inset 0 0 0 1px #ffffff88" }} />
      ))}
    </div>
  );
}

function TeddySticker() {
  // BIG teddy + twinkles + orbiters
  return (
    <div className="mx-auto mb-6 flex items-center justify-center">
      <div className="relative animate-bob" style={{ width: 240, height: 240 }}>
        {/* twinkles */}
        {TWINKLES.map((s, i) => (
          <span
            key={`t-${i}`}
            className="absolute text-yellow-400/90 animate-twinkle select-none"
            style={{
              top: s.top, left: s.left, animationDelay: `${s.delay}s`,
              fontSize: `${s.size}px`,
              textShadow: "0 0 10px rgba(255,215,140,0.9), 0 0 16px rgba(255,220,160,0.6)",
            }}
          >
            ✦
          </span>
        ))}

        {/* orbiters */}
        {ORBITERS.map((o, i) => (
          <span
            key={`o-${i}`}
            className="orbiter"
            style={
              {
                ["--r" as any]: `${o.r}px`,
                ["--dur" as any]: `${o.dur}s`,
                ["--start" as any]: `${o.start}deg`,
                ["--size" as any]: `${o.size}px`,
              } as React.CSSProperties
            }
          >
            ✧
          </span>
        ))}

        {/* dashed ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#b79a78]/70" />
        {/* teddy disc */}
        <div className="absolute inset-[12px] rounded-full bg-[#e9d8bd] ring-1 ring-[#cbb28f] shadow-[0_16px_30px_rgba(0,0,0,0.24)] grid place-items-center">
          <span className="select-none" style={{ fontSize: 136 }}>🧸</span>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [mode, setMode] = React.useState<"idle" | "forgive" | "nfg">("idle");
  const [step, setStep] = React.useState(0);

  const headline = mode === "idle" ? "I’M SORRY !" : mode === "forgive" ? `Thank you for staying, ${HER_NAME}` : `I understand, ${HER_NAME}`;
  const intro = mode === "idle"
    ? `I realized I have hurt you, ${HER_NAME}. It wasn’t my intention. Please forgive me.`
    : mode === "forgive"
    ? "Walking forward with honesty and actions that match my words."
    : "No pressure. I respect your pace and I’ll earn trust quietly.";
  const body = mode === "idle" ? `Dear ${HER_NAME}, I’m truly sorry.` : mode === "forgive" ? forgiveSteps[step] : notForgiveSteps[step];

  const primaryText = mode === "idle" ? "I forgive you" : mode === "forgive" ? forgiveLabels[step] : notForgiveLabels[step];
  const secondaryText = mode === "idle" ? "I don’t want to forgive" : mode === "forgive" ? "Not yet…" : "Maybe forgive…";
  const isDone = step >= 9 && mode !== "idle";

  function onPrimary() {
    if (mode === "idle") { setMode("forgive"); setStep(0); return; }
    setStep((s) => Math.min(9, s + 1));
  }
  function onSecondary() {
    if (mode === "idle") { setMode("nfg"); setStep(0); return; }
    setMode((m) => (m === "forgive" ? "nfg" : "forgive"));
  }
  function resetAll() { setMode("idle"); setStep(0); }

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#f1e5d1]">
      {/* Backdrop: paper + vignette + bokeh + wood floor */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_10%,#fffaf1,transparent)] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_70%,rgba(0,0,0,0.08),transparent)]" />
        <div className="absolute inset-0 grain" />
        {BOKEH.map((b, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/60 blur-2xl animate-bokeh"
            style={{ top: b.top, left: b.left, width: b.size, height: b.size, opacity: b.opacity, boxShadow: "0 0 60px 20px rgba(255,255,255,0.25)" }}
          />
        ))}
        <div className="absolute bottom-0 h-24 w-full bg-[linear-gradient(#d8c0a1,#c8af8c)] shadow-[0_-10px_20px_#00000010]" />
      </div>

      {/* Floating roses */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {ROSES.map((r, i) => (
          <span
            key={i}
            className="absolute bottom-[-32px] animate-float select-none"
            style={{ left: r.left, animationDelay: `${r.delay}s`, animationDuration: `${r.duration}s`, opacity: r.opacity, fontSize: `${r.size}px` }}
          >
            🌹
          </span>
        ))}
      </div>

      {/* NEW: Rising bubbles (bottom to top with sway) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {BUBBLES_RISE.map((b, i) => (
          <span
            key={`rb-${i}`}
            className="bubble-rise"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              opacity: b.opacity,
              animationDuration: `${b.duration}s, ${6 + (i % 3)}s`,
              animationDelay: `${b.delay}s, 0s`,
            }}
          />
        ))}
      </div>

      {/* NEW: Bouncing bubbles (up/down + sideways drift) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {BUBBLES_BOUNCE.map((b, i) => (
          <span
            key={`bb-${i}`}
            className="bubble-bounce"
            style={
              {
                ["--start-top" as any]: b.top,
                ["--left" as any]: b.left,
                ["--dur" as any]: `${b.dur}s`,
                ["--amp" as any]: `${b.amp}px`,
                ["--drift" as any]: `${b.drift}px`,
                width: b.size,
                height: b.size,
                opacity: b.opacity,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Card */}
      <div className="relative mx-auto w-full max-w-sm px-4 py-8">
        <div className="card relative rounded-[26px] bg-[#fbf4e7]/92 p-6 shadow-2xl ring-1 ring-[#e0cfb4]">
          <div className="corner" />
          <div className="seal"><span className="text-xl">🌹</span></div>

          <h1 className="text-center text-4xl font-black tracking-wide text-[#5c4021] drop-shadow-[0_1px_0_#fff]">{headline}</h1>
          <p className="mt-1 text-center text-[13.5px] text-[#765a37]">{intro}</p>

          <TeddySticker />

          <blockquote key={`${mode}-${step}`} className="quote text-center text-[15px] leading-relaxed text-[#5a4631] px-1">{body}</blockquote>

          {mode !== "idle" && <Progress step={step} tone={mode === "forgive" ? "rose" : "stone"} />}

          {/* Buttons */}
          <div className="mt-6 grid grid-cols-1 gap-3">
            <button
              onClick={onPrimary}
              className={`group relative h-12 rounded-[14px] font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.2)] active:translate-y-[1px] transition
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-[#fbf4e7]
                          bg-[linear-gradient(180deg,rgba(255,255,255,0.25),rgba(255,255,255,0)_32%),linear-gradient(90deg,#d26a6a,#e08b78)]
                          hover:brightness-[1.05]`}
            >
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[14px]">
                <span className="absolute -inset-y-2 -left-16 w-20 rotate-12 bg-white/35 blur-md group-hover:animate-shine" />
              </span>
              {isDone ? (mode === "forgive" ? "Thank you 💖" : "I understand 🕊️") : primaryText}
            </button>

            <button
              onClick={onSecondary}
              className={`h-12 rounded-[14px] font-semibold text-[#6f5434] bg-[#fff8ec]/90 border border-[#d9c6a8]
                          hover:bg-[#fff2de] active:translate-y-[1px] transition
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e6d5b7]`}
            >
              {secondaryText}
            </button>

            {mode !== "idle" && (
              <button onClick={resetAll} className="h-10 text-xs underline text-[#9b8466]">Start over</button>
            )}
          </div>

          <div className="mt-5 text-right text-[#6b4e2e]">
            <div className="text-xs">From,</div>
            <div className="text-lg font-bold italic">{FROM_NAME}</div>
          </div>
        </div>

        <p className="mt-4 text-center text-[11px] text-[#8a6f4e]">Made with care. I’m sorry — and I’ll prove it with actions.</p>
      </div>

      {/* Page-scoped CSS */}
      <style jsx>{`
        .quote { animation: fadeSlide 420ms ease both; }
        @keyframes fadeSlide { from { opacity: 0; transform: translateY(8px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }

        .animate-bob { animation: bob 4.5s ease-in-out infinite; }
        @keyframes bob { 0%,100%{ transform: translateY(0);} 50%{ transform: translateY(-6px);} }

        .animate-float { animation-name: floatY, swayX; animation-timing-function: linear, ease-in-out; animation-iteration-count: infinite, infinite; }
        @keyframes floatY { 0%{ transform: translateY(0);} 100%{ transform: translateY(-120vh);} }
        @keyframes swayX { 0%{ transform: translateX(0);} 50%{ transform: translateX(12px);} 100%{ transform: translateX(0);} }

        .animate-bokeh { animation: bokehPulse 8s ease-in-out infinite; }
        @keyframes bokehPulse { 0%,100%{ transform: scale(1); opacity: .9; } 50%{ transform: scale(1.08); opacity: 1; } }

        .grain {
          background-image:
            radial-gradient(circle at 10% 10%, rgba(0,0,0,0.03) 0.5px, transparent 0.5px),
            radial-gradient(circle at 30% 50%, rgba(0,0,0,0.02) 0.5px, transparent 0.5px),
            radial-gradient(circle at 70% 30%, rgba(0,0,0,0.025) 0.5px, transparent 0.5px),
            radial-gradient(circle at 90% 70%, rgba(0,0,0,0.02) 0.5px, transparent 0.5px);
          background-size: 8px 8px, 9px 9px, 7px 7px, 10px 10px;
          opacity: .7; position: absolute; inset: 0;
        }

        .card::before { content: ""; position: absolute; inset: 2px; border-radius: 24px; box-shadow: inset 0 0 0 1px #ffffffa6, inset 0 8px 22px rgba(0,0,0,0.08); pointer-events: none; }
        .corner { position: absolute; right: 10px; top: 10px; width: 36px; height: 36px; background: radial-gradient(120% 120% at 100% 0%, #ffffff, #f4e7cf 60%, #e6d4b7 80%); border-bottom-left-radius: 12px; clip-path: polygon(0 0, 100% 0, 100% 100%); box-shadow: -2px 2px 4px rgba(0,0,0,.08); }
        .seal { position: absolute; right: 20px; top: -14px; height: 42px; width: 42px; display: grid; place-items: center; border-radius: 9999px; background: radial-gradient(80% 80% at 30% 30%, #ffb3b3, #e36a6a); box-shadow: 0 8px 16px rgba(0,0,0,.2), inset 0 2px 4px rgba(255,255,255,.5); transform: rotate(-6deg); }

        .animate-twinkle { animation: twinkle 2.4s ease-in-out infinite; }
        @keyframes twinkle { 0%, 100% { opacity: 0.35; transform: scale(0.9) rotate(0deg); } 50% { opacity: 1; transform: scale(1.25) rotate(8deg); } }

        .orbiter {
          position: absolute; left: 50%; top: 50%;
          width: var(--size); height: var(--size);
          margin-left: calc(var(--size) / -2); margin-top: calc(var(--size) / -2);
          color: #ffd88f;
          text-shadow: 0 0 10px rgba(255,215,140,0.9), 0 0 16px rgba(255,220,160,0.6);
          animation: orbit var(--dur) linear infinite;
          transform-origin: 0 0;
        }
        @keyframes orbit { from { transform: rotate(var(--start)) translateX(var(--r)); } to { transform: rotate(calc(360deg + var(--start))) translateX(var(--r)); } }

        .group:hover .group-hover\\:animate-shine { animation: shine 1.2s ease-in-out; }
        @keyframes shine { 0% { transform: translateX(0); opacity: 0; } 20% { opacity: .9; } 100% { transform: translateX(180%); opacity: 0; } }

        /* === Bubbles === */
        .bubble-shape {
          position: absolute;
          border-radius: 9999px;
          background:
            radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(255,255,255,0.45) 40%, rgba(255,255,255,0.12) 70%),
            radial-gradient(circle at 70% 70%, rgba(255,220,180,0.14), transparent 60%);
          box-shadow:
            inset 0 0 10px rgba(255,255,255,0.7),
            0 6px 18px rgba(255, 170, 120, 0.25);
          will-change: transform, top, left, bottom;
        }
        .bubble-shape::after {
          content: "";
          position: absolute;
          top: 15%;
          left: 20%;
          width: 35%;
          height: 35%;
          border-radius: 9999px;
          background: rgba(255,255,255,0.5);
          filter: blur(4px);
        }

        /* Rising bubbles: animate bottom + sway transform */
        .bubble-rise {
          bottom: -40px;
          animation-name: risePos, swayX;
          animation-timing-function: linear, ease-in-out;
          animation-iteration-count: infinite, infinite;
        }
        .bubble-rise { composes: bubble-shape; } /* styled-jsx "composes" hint — safe no-op if not supported */

        /* Bouncing bubbles: animate top + left drift (via custom props) */
        .bubble-bounce {
          top: var(--start-top);
          left: var(--left);
          animation:
            bounceYPos var(--dur) ease-in-out infinite alternate,
            driftLeftRight calc(var(--dur) * 3) ease-in-out infinite alternate;
        }
        .bubble-bounce { composes: bubble-shape; }

        @keyframes risePos { 0% { bottom: -40px; } 100% { bottom: 110vh; } }
        @keyframes bounceYPos {
          0% { top: var(--start-top); }
          100% { top: calc(var(--start-top) + var(--amp)); }
        }
        @keyframes driftLeftRight {
          0% { transform: translateX(calc(var(--drift) * -1px)); }
          100% { transform: translateX(calc(var(--drift) * 1px)); }
        }
      `}</style>
    </main>
  );
}
