"use client";

import dynamic from "next/dynamic";

const Globe = dynamic(() => import("@/components/magicui/globe").then((mod) => mod.Globe), {
  ssr: false,
  loading: () => <div className="hero-globe-canvas" aria-hidden="true" />,
});

const trustItems = ["Founder-led", "Fixed-scope", "Decision-ready output"];

const heroProofItems = [
  {
    label: "Workflow visibility",
    text: "See where leads, delivery, admin, and reporting actually slow down.",
  },
  {
    label: "AI fit",
    text: "Separate genuine automation leverage from process issues and tool noise.",
  },
  {
    label: "Priority sequence",
    text: "Leave with a practical order for what to fix now and stage later.",
  },
];

export function HeroSection({ primaryHref, secondaryHref }: { primaryHref: string; secondaryHref: string }) {
  return (
    <section id="top" className="hero-section">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(201,109,66,0.18),transparent_30%),radial-gradient(circle_at_78%_40%,rgba(46,125,111,0.14),transparent_32%),linear-gradient(180deg,rgba(255,248,238,0.5),rgba(255,248,238,0))]" />

      <div className="section-container relative">
        <div className="hero-grid">
          <div className="reveal-up hero-copy-column">
            <p className="hero-kicker">AI Operations Audit</p>

            <h1 className="hero-main-title">See where work gets stuck. Leave with a plan for what to fix, automate, and ignore.</h1>

            <p className="hero-subtitle">
              A founder-led audit for service businesses that maps lead flow, delivery handoffs, admin load, and reporting
              friction before recommending any tooling.
            </p>

            <div className="hero-proof-grid" aria-label="Audit outcomes">
              {heroProofItems.map((item) => (
                <article key={item.label} className="hero-proof-card">
                  <span>{item.label}</span>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="hero-cta-row">
              <a href={primaryHref} className="btn-primary">
                Book a strategy call
              </a>
              <a href={secondaryHref} className="btn-secondary">
                See what the audit includes
              </a>
            </div>

            <p className="hero-trust">
              {trustItems.map((item) => (
                <span key={item} className="hero-trust-item">
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
                  baseColor: [0.21, 0.27, 0.24],
                  markerColor: [0.79, 0.43, 0.26],
                  glowColor: [0.18, 0.49, 0.43],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
