"use client";

import dynamic from "next/dynamic";

const Globe = dynamic(() => import("@/components/magicui/globe").then((mod) => mod.Globe), {
  ssr: false,
  loading: () => <div className="hero-globe-canvas" aria-hidden="true" />,
});

const trustItems = ["Founder-led", "Full-day audit", "Decision-ready recommendations"];

export function HeroSection({ primaryHref, secondaryHref }: { primaryHref: string; secondaryHref: string }) {
  return (
    <section id="top" className="hero-section">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(241,198,122,0.18),transparent_28%),radial-gradient(circle_at_78%_40%,rgba(123,215,198,0.12),transparent_30%),linear-gradient(180deg,rgba(10,12,17,0.35),rgba(9,11,16,0))]" />

      <div className="section-container relative">
        <div className="hero-grid">
          <div className="reveal-up hero-copy-column">
            <p className="hero-kicker">AI Efficiency Audit for Service Businesses</p>

            <h1 className="hero-main-title">A full‑day audit that turns busy workflows into a clear AI roadmap.</h1>

            <p className="hero-subtitle">
              Temporary Utopia sits with you for a full day, maps how work actually moves, and delivers a report that shows
              where AI saves time, where it should not be used, and what to implement first.
            </p>

            <div className="hero-cta-row">
              <a href={primaryHref} className="btn-primary">
                Book a strategy call
              </a>
              <a href={secondaryHref} className="btn-secondary">
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
                  baseColor: [0.12, 0.16, 0.22],
                  markerColor: [0.96, 0.82, 0.48],
                  glowColor: [0.96, 0.82, 0.48],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
