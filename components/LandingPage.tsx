import { BookingFlow } from "@/components/BookingFlow";
import {
  DeliverablePreview,
  OperationalClarityVisualization,
  ProofStrip,
  SectionHeader,
  SectionShell,
} from "@/components/landing/AdvisoryBlocks";
import { HeroSection } from "@/components/landing/HeroSection";
import { OperationsDiagnostic } from "@/components/landing/OperationsDiagnostic";

const CALENDLY_URL = "https://calendly.com/finlay-temporaryutopia/30min";

const deliverables = [
  "Current-state workflow map",
  "Bottleneck and friction diagnosis",
  "AI opportunity and constraint map",
  "Prioritised implementation sequence",
  "Strategic readout and next-step recommendations",
];

const previewSections = [
  {
    title: "Current-state view",
    items: ["Key workflows", "Operational bottlenecks", "Repeated admin load"],
  },
  {
    title: "Opportunity map",
    items: ["High-fit automation ideas", "Constraints and dependencies", "Readiness signals"],
  },
  {
    title: "Recommendation sequence",
    items: ["Priority order", "Quick wins vs deeper work", "Decision notes for implementation"],
  },
];

const topProofItems = [
  { label: "Founder-led", detail: "Direct diagnostic work, not delegated delivery." },
  { label: "Fixed-scope", detail: "A defined audit process with clear boundaries." },
  { label: "Decision-ready", detail: "Practical priorities for what to fix first." },
];

const workflowShowcases = [
  {
    title: "Slow lead response",
    before: [
      "Enquiries land in a shared inbox and wait for manual triage",
      "Replies get drafted from scratch with inconsistent context",
      "Follow-up drops when delivery work gets busy",
    ],
    after: [
      "Incoming leads are sorted by type and urgency immediately",
      "Reply drafts pull the right service and context automatically",
      "Follow-up has a clear owner and next action",
    ],
    outcome: "What looks like a small delay can quietly cost you revenue every week.",
  },
  {
    title: "Messy delivery handoffs",
    before: [
      "Project notes live across email, chat, and personal memory",
      "Handoffs depend on verbal context and repeated catch-ups",
      "Status updates are rebuilt manually every time",
    ],
    after: [
      "Key delivery context sits in one operational view",
      "Next-owner handoff is explicit and visible",
      "Status summaries are easier to generate and check",
    ],
    outcome: "This is where margin disappears while the business still feels 'busy.'",
  },
];

export function LandingPage() {
  return (
    <>
      <header className="site-header">
        <div className="section-container">
          <div className="site-header-panel">
            <a href="#top" className="site-brand">
              <span className="site-brand-mark" aria-hidden="true">
                TU
              </span>
              <span className="site-brand-copy">
                <span className="site-brand-name">Temporary Utopia</span>
                <span className="site-brand-tagline">AI operations audits for service businesses</span>
              </span>
            </a>

            <nav className="site-nav" aria-label="Primary">
              <a href="#examples">Examples</a>
              <a href="#how-it-works">Process</a>
              <a href="#deliverables">Deliverable</a>
              <a href="#booking">Book</a>
            </nav>

            <a href="#booking" className="btn-primary site-header-cta">
              Book a call
            </a>
          </div>
        </div>
      </header>

      <main id="main-content" className="site-main">
        <HeroSection primaryHref={CALENDLY_URL} secondaryHref="#examples" />

        <section className="top-proof-strip-shell" aria-label="Audit trust signals">
          <div className="section-container">
            <ProofStrip items={topProofItems} />
          </div>
        </section>

        <SectionShell id="examples" tone="contrast">
          <SectionHeader
            eyebrow="What You’re Missing"
            title="The expensive bottlenecks are usually hiding in plain sight."
            description="Most businesses are sitting on speed, margin, and follow-up gains they never see because the workflow looks 'fine' until it gets mapped properly."
          />

          <div className="workflow-showcase-grid">
            {workflowShowcases.map((showcase, index) => (
              <article key={showcase.title} className="workflow-showcase reveal-up" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="workflow-showcase-head">
                  <div>
                    <p className="workflow-showcase-kicker">Missed upside</p>
                    <h3>{showcase.title}</h3>
                  </div>
                  <p className="workflow-showcase-outcome">{showcase.outcome}</p>
                </div>

                <div className="workflow-showcase-columns">
                  <section className="workflow-showcase-state">
                    <span className="workflow-showcase-label">Before</span>
                    <ul>
                      {showcase.before.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="workflow-showcase-state workflow-showcase-state-after">
                    <span className="workflow-showcase-label">After</span>
                    <ul>
                      {showcase.after.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              </article>
            ))}
          </div>

          <div className="visual-proof-shell">
            <OperationalClarityVisualization />
          </div>
        </SectionShell>

        <OperationsDiagnostic />

        <SectionShell id="deliverables">
          <div className="two-column-balance deliverables-layout">
            <div className="reveal-up">
              <SectionHeader
                eyebrow="What You Get"
                title="You leave with the roadmap most businesses wish they had sooner."
                description="Instead of guessing where to spend time or budget, you get a clear sequence of the changes most likely to increase speed, reduce waste, and lift profit."
                className="section-header-left"
              />

              <ul className="deliverable-list">
                {deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="deliverable-preview-column">
              <div className="deliverable-stack">
                <DeliverablePreview sections={previewSections} />
                <aside className="pricing-inline-card reveal-up" aria-label="Pricing summary">
                  <p className="pricing-inline-label">Starting from</p>
                  <p className="pricing-inline-amount">$1,000</p>
                  <p className="pricing-inline-copy">
                    Final scope depends on workflow complexity, business context, and depth of review.
                  </p>
                </aside>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="booking">
          <SectionHeader
            eyebrow="Next Step"
            title="If there’s hidden money in your workflow, this is how you find it."
            description="Book a short call and we’ll see whether the audit can uncover quick wins, missed margin, or AI opportunities you’re currently leaving on the table."
          />

          <div className="booking-wrap reveal-up">
            <BookingFlow />
          </div>
        </SectionShell>
      </main>

      <footer className="site-footer">
        <div className="section-container site-footer-inner">
          <p>Temporary Utopia</p>
          <a href="mailto:finlay@temporaryutopia.com">finlay@temporaryutopia.com</a>
        </div>
      </footer>
    </>
  );
}
