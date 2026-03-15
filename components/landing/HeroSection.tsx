"use client";

import { useEffect, useRef } from "react";

const trustItems = ["Founder-led", "Practical scope", "Decision-ready recommendations"];

type RotationState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  dragging: boolean;
  lastX: number;
  lastY: number;
};

export function HeroSection({ primaryHref, secondaryHref }: { primaryHref: string; secondaryHref: string }) {
  return (
    <section id="top" className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(116,180,255,0.16),transparent_26%),radial-gradient(circle_at_78%_40%,rgba(115,212,197,0.12),transparent_24%),linear-gradient(180deg,rgba(9,13,18,0.35),rgba(9,13,18,0))]" />

      <div className="section-container relative">
        <div className="grid items-center gap-12 pb-12 pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(420px,540px)] lg:gap-10 lg:pb-20 lg:pt-10">
          <div className="reveal-up max-w-2xl">
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
              Founder-Led AI Operations Advisory
            </p>

            <h1 className="mt-6 max-w-[11ch] font-display text-4xl leading-[0.98] text-white sm:text-5xl lg:text-[4.15rem]">
              Understand where AI fits before you commit to the wrong systems.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
              Temporary Utopia runs practical AI Operations Audits for business owners who want clarity before implementation.
              We map how work actually moves, where friction exists, and where AI should — and should not — be introduced.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={primaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-sky-200/40 bg-[linear-gradient(180deg,#7fc0ff,#4b9bf7)] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_32px_rgba(75,155,247,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-[linear-gradient(180deg,#93caff,#60a8fb)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Book a strategy call
              </a>
              <a
                href={secondaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                See how the audit works
              </a>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              {trustItems.map((item, index) => (
                <span key={item}>
                  {index > 0 ? <span className="mx-2 text-slate-600">·</span> : null}
                  {item}
                </span>
              ))}
            </p>
          </div>

          <div className="reveal-up lg:justify-self-end" style={{ animationDelay: "80ms" }}>
            <InteractiveGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}

function InteractiveGlobe() {
  const globeRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const stateRef = useRef<RotationState>({
    x: -18,
    y: -24,
    vx: 0,
    vy: 0.16,
    dragging: false,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const animate = () => {
      const globe = globeRef.current;
      const state = stateRef.current;

      if (!globe) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      if (!state.dragging) {
        state.y += state.vy;
        state.x += state.vx;
        state.vx *= 0.96;
        state.vy *= 0.992;
        state.vy += 0.004;
        state.x = clamp(state.x, -32, 32);
      }

      const driftX = Math.sin((state.y * Math.PI) / 180) * 12;
      const driftY = Math.sin((state.x * Math.PI) / 180) * 8;
      const panPrimary = state.y * 1.2;
      const panSecondary = state.y * 0.55;

      globe.style.transform = `translate3d(${driftX}px, ${driftY}px, 0) scale(1.04)`;
      globe.style.backgroundPosition = `${panPrimary}px ${50 + driftY}px, ${panSecondary}px ${driftY}px, center center`;
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  function beginDrag(clientX: number, clientY: number) {
    const state = stateRef.current;
    state.dragging = true;
    state.lastX = clientX;
    state.lastY = clientY;
    state.vx = 0;
    state.vy = 0;
  }

  function moveDrag(clientX: number, clientY: number) {
    const state = stateRef.current;
    if (!state.dragging) {
      return;
    }

    const deltaX = clientX - state.lastX;
    const deltaY = clientY - state.lastY;

    state.y += deltaX * 0.28;
    state.x = clamp(state.x - deltaY * 0.18, -32, 32);
    state.vy = deltaX * 0.035;
    state.vx = -deltaY * 0.02;
    state.lastX = clientX;
    state.lastY = clientY;
  }

  function endDrag() {
    stateRef.current.dragging = false;
  }

  return (
    <div className="relative mx-auto flex w-full max-w-[34rem] items-center justify-center lg:min-h-[32rem]">
      <div className="pointer-events-none absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.28),rgba(14,22,33,0)_58%)] blur-3xl" />
      <div className="pointer-events-none absolute h-[92%] w-[92%] rounded-full border border-white/5 [transform:rotate(16deg)_scaleY(0.74)]" />
      <div className="pointer-events-none absolute h-[78%] w-[78%] rounded-full border border-sky-300/10 [transform:rotate(-12deg)_scaleX(0.82)]" />

      <div
        className="group relative h-[21rem] w-[21rem] touch-none select-none sm:h-[25rem] sm:w-[25rem] lg:h-[31rem] lg:w-[31rem]"
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          beginDrag(event.clientX, event.clientY);
        }}
        onPointerMove={(event) => moveDrag(event.clientX, event.clientY)}
        onPointerUp={(event) => {
          event.currentTarget.releasePointerCapture(event.pointerId);
          endDrag();
        }}
        onPointerCancel={endDrag}
        onKeyDown={(event) => {
          const state = stateRef.current;
          if (event.key === "ArrowLeft") {
            state.vy -= 0.22;
          } else if (event.key === "ArrowRight") {
            state.vy += 0.22;
          } else if (event.key === "ArrowUp") {
            state.vx -= 0.16;
          } else if (event.key === "ArrowDown") {
            state.vx += 0.16;
          }
        }}
        role="img"
        aria-label="Interactive globe representing strategic AI operations advisory"
        tabIndex={0}
      >
        <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(125,211,252,0.18),rgba(15,23,34,0)_58%)] blur-2xl" />

        <div className="absolute inset-[10%] rounded-full transition-shadow duration-300 group-hover:shadow-[0_0_60px_rgba(56,189,248,0.18)]">
          <div className="absolute inset-0 rounded-full border border-sky-300/20 bg-[radial-gradient(circle_at_30%_26%,rgba(255,255,255,0.16),rgba(13,19,28,0.05)_22%,rgba(7,11,16,0.98)_72%)] shadow-[0_20px_70px_rgba(2,6,23,0.78),inset_-38px_-34px_90px_rgba(0,0,0,0.72),inset_20px_18px_36px_rgba(147,197,253,0.08)]" />
          <div className="absolute inset-[1.8%] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute inset-[-3%] rounded-full border border-white/6 [transform:rotate(14deg)_scaleY(0.76)]" />

          <div
            ref={globeRef}
            className="absolute inset-[3%] overflow-hidden rounded-full border border-white/10 will-change-transform"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(125,211,252,0.22) 0 1px, transparent 1px 28px), radial-gradient(circle at 36% 28%, rgba(191,219,254,0.18), rgba(8,12,18,0) 22%)",
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_30%,rgba(255,255,255,0.14),rgba(255,255,255,0)_16%),linear-gradient(90deg,rgba(7,11,16,0)_0%,rgba(7,11,16,0.08)_44%,rgba(7,11,16,0.54)_76%,rgba(2,6,23,0.84)_100%)]" />

            {latitudeArcs.map((arc) => (
              <div
                key={arc.id}
                className="absolute left-1/2 rounded-full border"
                style={{
                  top: arc.top,
                  width: arc.width,
                  height: arc.height,
                  transform: "translateX(-50%)",
                  borderColor: arc.borderColor,
                  opacity: arc.opacity,
                }}
              />
            ))}

            {landmasses.map((mass) => (
              <div
                key={mass.id}
                className="absolute border"
                style={{
                  left: mass.left,
                  top: mass.top,
                  width: mass.width,
                  height: mass.height,
                  borderRadius: mass.radius,
                  transform: mass.transform,
                  background: mass.background,
                  borderColor: mass.borderColor,
                  opacity: mass.opacity,
                }}
              />
            ))}

            <div className="absolute left-[16%] top-[52%] h-[1px] w-[42%] rounded-full bg-sky-300/52 [transform:rotate(-12deg)]" />
            <div className="absolute left-[28%] top-[31%] h-[1px] w-[30%] rounded-full bg-cyan-300/36 [transform:rotate(-8deg)]" />
            <div className="absolute left-[26%] top-[30%] h-2.5 w-2.5 rounded-full bg-sky-300/85 shadow-[0_0_18px_rgba(125,211,252,0.8)]" />
            <div className="absolute left-[55%] top-[25%] h-2 w-2 rounded-full bg-cyan-200/80 shadow-[0_0_16px_rgba(165,243,252,0.7)]" />
            <div className="absolute left-[64%] top-[42%] h-2.5 w-2.5 rounded-full bg-sky-200/80 shadow-[0_0_18px_rgba(125,211,252,0.8)]" />
            <div className="absolute left-[42%] top-[49%] h-2 w-2 rounded-full bg-blue-100/70 shadow-[0_0_16px_rgba(191,219,254,0.6)]" />
          </div>

          <div className="pointer-events-none absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_34%_28%,rgba(255,255,255,0.18),rgba(255,255,255,0)_24%)]" />
          <div className="pointer-events-none absolute inset-[3%] rounded-full bg-[radial-gradient(circle_at_68%_68%,rgba(2,6,23,0),rgba(2,6,23,0.26)_54%,rgba(2,6,23,0.72)_100%)]" />
        </div>
      </div>
    </div>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

const latitudeArcs = [
  { id: "lat-1", top: "18%", width: "42%", height: "10%", borderColor: "rgba(255,255,255,0.14)", opacity: 0.75 },
  { id: "lat-2", top: "30%", width: "64%", height: "13%", borderColor: "rgba(125,211,252,0.18)", opacity: 0.8 },
  { id: "lat-3", top: "44%", width: "82%", height: "17%", borderColor: "rgba(125,211,252,0.24)", opacity: 0.92 },
  { id: "lat-4", top: "59%", width: "64%", height: "13%", borderColor: "rgba(125,211,252,0.18)", opacity: 0.8 },
  { id: "lat-5", top: "72%", width: "42%", height: "10%", borderColor: "rgba(255,255,255,0.14)", opacity: 0.75 },
];

const landmasses = [
  {
    id: "mass-1",
    left: "22%",
    top: "22%",
    width: "24%",
    height: "20%",
    radius: "44% 56% 42% 58% / 45% 42% 58% 55%",
    transform: "rotate(-14deg)",
    background: "linear-gradient(180deg, rgba(148,163,184,0.12), rgba(148,163,184,0.04))",
    borderColor: "rgba(191,219,254,0.12)",
    opacity: 0.78,
  },
  {
    id: "mass-2",
    left: "50%",
    top: "18%",
    width: "22%",
    height: "24%",
    radius: "50% 38% 54% 46% / 42% 56% 44% 58%",
    transform: "rotate(10deg)",
    background: "linear-gradient(180deg, rgba(103,232,249,0.12), rgba(103,232,249,0.03))",
    borderColor: "rgba(103,232,249,0.16)",
    opacity: 0.72,
  },
  {
    id: "mass-3",
    left: "34%",
    top: "54%",
    width: "28%",
    height: "18%",
    radius: "48% 52% 40% 60% / 52% 46% 54% 48%",
    transform: "rotate(8deg)",
    background: "linear-gradient(180deg, rgba(148,163,184,0.1), rgba(148,163,184,0.03))",
    borderColor: "rgba(191,219,254,0.12)",
    opacity: 0.76,
  },
];
