const trustItems = ["Founder-led review", "Decision-ready report", "30-minute strategy call"];

export function HeroSection({ primaryHref, secondaryHref }: { primaryHref: string; secondaryHref: string }) {
  return (
    <section id="top" className="hero-section">
      <div className="hero-backdrop" aria-hidden="true" />

      <div className="section-container relative">
        <div className="hero-grid">
          <div className="reveal-up hero-copy-column">
            <p className="hero-kicker">AI Operations Audit</p>

            <h1 className="hero-main-title">Turn your business into a faster, more profitable system.</h1>

            <p className="hero-subtitle">
              We pinpoint where admin drag, slow follow-up, and missed workflow opportunities are costing you time or profit,
              then turn that into a clear AI Efficiency Report and roadmap.
            </p>

            <div className="hero-cta-row">
              <a href={primaryHref} className="btn-primary">
                Book Your Audit
              </a>
              <a href={secondaryHref} className="btn-secondary">
                See Sample Audit
              </a>
            </div>

            <div className="hero-trust" aria-label="Audit trust signals">
              {trustItems.map((item) => (
                <span key={item} className="hero-trust-item">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="hero-visual reveal-up" style={{ animationDelay: "80ms" }} aria-label="Audit preview">
            <div className="hero-visual-shell">
              <div className="hero-visual-bar">
                <span />
                <span />
                <span />
              </div>

              <div className="hero-visual-body">
                <div className="hero-visual-head">
                  <div>
                    <p className="hero-visual-kicker">Audit Snapshot</p>
                    <h2>AI Operations Diagnostic</h2>
                  </div>
                  <div className="hero-visual-badge">Priority View</div>
                </div>

                <div className="hero-visual-metrics">
                  <div className="hero-metric-card">
                    <span>Revenue leak</span>
                    <strong>Slow lead follow-up</strong>
                    <p>Quoted opportunities cool off before the team responds.</p>
                  </div>
                  <div className="hero-metric-card hero-metric-card-alt">
                    <span>Fastest win</span>
                    <strong>Reply + routing automation</strong>
                    <p>Higher response speed without adding admin overhead.</p>
                  </div>
                </div>

                <div className="hero-visual-panel">
                  <div className="hero-flow-row">
                    <span>Enquiry</span>
                    <span className="hero-flow-arrow" />
                    <span>Quote</span>
                    <span className="hero-flow-arrow" />
                    <span>Delivery</span>
                    <span className="hero-flow-arrow" />
                    <span>Reporting</span>
                  </div>

                  <div className="hero-findings-list">
                    <div className="hero-finding hero-finding-high">
                      <span>High impact</span>
                      <p>Lead response time is the main conversion bottleneck.</p>
                    </div>
                    <div className="hero-finding">
                      <span>Operational drag</span>
                      <p>Delivery handoffs rely on manual context transfer.</p>
                    </div>
                    <div className="hero-finding hero-finding-sage">
                      <span>Recommended next step</span>
                      <p>Automate triage first, then tighten handoff visibility.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
