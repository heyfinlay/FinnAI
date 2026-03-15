"use client";

import { Globe } from "@/components/magicui/globe";

const trustItems = ["Founder-led", "Practical scope", "Decision-ready recommendations"];

export function HeroSection({ primaryHref, secondaryHref }: { primaryHref: string; secondaryHref: string }) {
  return (
    <section id="top" className="hero-section">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(116,180,255,0.16),transparent_26%),radial-gradient(circle_at_78%_40%,rgba(115,212,197,0.12),transparent_24%),linear-gradient(180deg,rgba(9,13,18,0.35),rgba(9,13,18,0))]" />

      <div className="section-container relative">
        <div className="hero-grid">
          <div className="reveal-up hero-copy-column">
            <p className="hero-kicker">Founder-Led AI Operations Advisory</p>

            <h1 className="hero-main-title">Know where AI belongs before you commit to the wrong systems.</h1>

            <p className="hero-subtitle">
              Temporary Utopia runs practical AI Operations Audits for owners who want operational clarity before
              implementation. We map how work moves, where friction sits, and where AI should and should not be introduced.
            </p>

            <div className="hero-cta-row">
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

            <p className="hero-trust">
              {trustItems.map((item, index) => (
                <span key={item}>
                  {index > 0 ? <span className="mx-2 text-slate-600">·</span> : null}
                  {item}
                </span>
              ))}
            </p>
          </div>

          <div className="reveal-up hero-globe-column" style={{ animationDelay: "80ms" }}>
            <div className="hero-globe-shell">
              <div className="hero-globe-backdrop" />
              <div className="hero-globe-ring hero-globe-ring-one" />
              <div className="hero-globe-ring hero-globe-ring-two" />
              <div className="hero-globe-ring hero-globe-ring-three" />

              <Globe
                className="hero-globe-canvas"
                autoRotateSpeed={0.0017}
                config={{
                  markers: [],
                  mapSamples: 12000,
                  baseColor: [0.11, 0.19, 0.27],
                  markerColor: [0.55, 0.82, 1],
                  glowColor: [0.39, 0.67, 0.92],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
