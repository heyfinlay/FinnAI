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

      globe.style.transform = `rotateX(${state.x}deg) rotateY(${state.y}deg)`;
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
    <div className="relative mx-auto flex w-full max-w-[34rem] items-center justify-center">
      <div className="pointer-events-none absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.2),rgba(14,22,33,0)_58%)] blur-3xl" />
      <div className="pointer-events-none absolute h-[82%] w-[82%] rounded-full border border-sky-300/10" />
      <div className="pointer-events-none absolute h-[92%] w-[92%] rounded-full border border-white/5" />

      <div
        className="group relative aspect-square w-full touch-none select-none [perspective:1200px]"
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
        <div className="absolute inset-[7%] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(125,211,252,0.14),rgba(15,23,34,0)_58%)] blur-2xl" />

        <div
          ref={globeRef}
          className="absolute inset-[11%] rounded-full transition-shadow duration-300 group-hover:shadow-[0_0_60px_rgba(56,189,248,0.18)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_30%,rgba(148,163,184,0.18),rgba(15,23,34,0.08)_22%,rgba(9,13,18,0.96)_72%)] shadow-[inset_-34px_-30px_80px_rgba(0,0,0,0.62),inset_20px_20px_36px_rgba(125,211,252,0.06),0_30px_80px_rgba(2,6,23,0.65)]" />
          <div className="absolute inset-0 rounded-full bg-[repeating-linear-gradient(90deg,transparent,transparent_24px,rgba(125,211,252,0.12)_25px,transparent_26px),repeating-linear-gradient(0deg,transparent,transparent_22px,rgba(255,255,255,0.05)_23px,transparent_24px)] opacity-70 [mask-image:radial-gradient(circle_at_center,black_58%,transparent_78%)]" />
          <div className="absolute inset-[8%] rounded-full border border-sky-300/10" />
          <div className="absolute left-[18%] top-[18%] h-2.5 w-2.5 rounded-full bg-sky-300/80 shadow-[0_0_18px_rgba(125,211,252,0.8)]" />
          <div className="absolute right-[24%] top-[34%] h-1.5 w-1.5 rounded-full bg-cyan-200/70 shadow-[0_0_16px_rgba(165,243,252,0.55)]" />
          <div className="absolute bottom-[26%] left-[28%] h-2 w-2 rounded-full bg-sky-200/75 shadow-[0_0_16px_rgba(125,211,252,0.65)]" />
          <div className="absolute bottom-[18%] right-[20%] h-16 w-16 rounded-full border border-white/6 blur-[1px]" />
        </div>

        <div className="pointer-events-none absolute inset-[9%] rounded-full border border-sky-300/10 [transform:rotateX(70deg)]" />
        <div className="pointer-events-none absolute inset-[12%] rounded-full border border-white/6 [transform:rotateY(72deg)]" />
        <div className="pointer-events-none absolute inset-[16%] rounded-full border border-cyan-300/10 [transform:rotateZ(22deg)]" />
      </div>
    </div>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
