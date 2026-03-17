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
    title: "Lead response",
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
    outcome: "Faster first response and fewer missed conversations.",
  },
  {
    title: "Delivery handoffs",
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
    outcome: "Cleaner delivery flow without more admin overhead.",
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
            eyebrow="Show, don’t tell"
            title="A few workflow shifts the audit is built to surface."
            description="Instead of promising generic efficiency gains, the audit maps where work gets stuck and what a cleaner operating flow could look like."
          />

          <div className="workflow-showcase-grid">
            {workflowShowcases.map((showcase, index) => (
              <article key={showcase.title} className="workflow-showcase reveal-up" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="workflow-showcase-head">
                  <div>
                    <p className="workflow-showcase-kicker">Example</p>
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
                eyebrow="Deliverable"
                title="One audit, one report, one sequence of decisions."
                description="The output is designed to help you decide what to fix, what to automate, and what to leave alone without commissioning a large implementation project first."
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
            eyebrow="Book"
            title="If the workflow problem is real, book the audit conversation."
            description="Use the scheduler if you want to review your current setup, pressure points, and whether an audit is the right next step."
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
