import { BookingFlow } from "@/components/BookingFlow";
import {
  DeliverablePreview,
  Eyebrow,
  FitChecklist,
  OperationalClarityVisualization,
  ProblemComparison,
  SectionHeader,
  SectionShell,
  SectionLead,
  SectionTitle,
} from "@/components/landing/AdvisoryBlocks";
import { HeroSection } from "@/components/landing/HeroSection";
import { OperationsDiagnostic } from "@/components/landing/OperationsDiagnostic";

const CALENDLY_URL = "https://calendly.com/finlay-temporaryutopia/30min";

const problemColumns = [
  {
    title: "Tool-first adoption",
    text: "Businesses trial tools in isolation, then struggle to connect them to the real work that creates value.",
    points: [
      "Scattered experiments across disconnected apps",
      "Unclear ownership, messy handoffs, and repeated admin",
      "More spend and complexity without a stronger operating model",
    ],
    tone: "muted" as const,
  },
  {
    title: "Diagnostic-first advisory",
    text: "The audit starts with workflow visibility, then identifies where AI can responsibly remove friction.",
    points: [
      "Map how leads, delivery, admin, and reporting actually move",
      "Identify delays, duplication, and repeated work before recommending tools",
      "Prioritise opportunities by fit, readiness, and business value",
    ],
    tone: "accent" as const,
  },
];

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

const valueRows = [
  {
    title: "Clearer decisions",
    text: "You can see where AI should help, where it should wait, and what to prioritise first.",
  },
  {
    title: "Less wasted software spend",
    text: "The audit helps avoid buying tools before the underlying workflow and ownership model are clear.",
  },
  {
    title: "Better follow-up consistency",
    text: "Lead handling, client communication, and handoffs become easier to standardise and improve.",
  },
  {
    title: "Lower admin friction",
    text: "Repeated summaries, routing, tracking, and reporting are assessed through an operational lens rather than tool hype.",
  },
];

const founderPoints = [
  "Practical before technical: workflow clarity comes first.",
  "Independent recommendations: advice is based on fit, not software incentives.",
  "Grounded implementation thinking: every recommendation should be realistic for the team using it.",
];

const founderSignals = ["Founder-led", "Independent advisory", "Workflow-first lens"];

const fitColumns = [
  {
    title: "Good fit",
    items: [
      "Service businesses with growing operational complexity",
      "Owners who want clarity before buying more tools",
      "Teams losing time to repeated admin, follow-up, or reporting work",
      "Businesses that want advisory guidance before implementation",
    ],
    tone: "fit" as const,
  },
  {
    title: "Not ideal",
    items: [
      "You want immediate automation build work without a diagnostic phase",
      "You mainly want tool demos or trend commentary",
      "You are looking for a large software rollout before core workflows are understood",
    ],
    tone: "unfit" as const,
  },
];

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="btn-primary">
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="btn-secondary">
      {children}
    </a>
  );
}

export function LandingPage() {
  return (
    <>
      <header className="site-header">
        <div className="section-container site-header-inner">
          <a href="#top" className="site-brand">
            Temporary Utopia
          </a>

          <nav className="site-nav" aria-label="Primary">
            <a href="#problem">Problem</a>
            <a href="#how-it-works">Method</a>
            <a href="#deliverables">Deliverables</a>
            <a href="#about">Founder</a>
            <a href="#booking">Booking</a>
          </nav>

          <a href="#booking" className="btn-secondary site-header-cta">
            Book a call
          </a>
        </div>
      </header>

      <main id="main-content" className="site-main">
        <HeroSection primaryHref={CALENDLY_URL} secondaryHref="#how-it-works" />

        <SectionShell id="problem" tone="contrast">
          <div className="editorial-grid">
            <div className="reveal-up">
              <Eyebrow>The real problem</Eyebrow>
              <SectionTitle className="section-title-compact">
                Most AI adoption stalls because the operating model is unclear, not because the tools are missing.
              </SectionTitle>
              <SectionLead>
                Owners are already juggling delivery, client communication, staffing, reporting, and growth. When AI gets
                layered on top without workflow clarity, the result is usually more experimentation than improvement.
              </SectionLead>
              <p className="body-copy">
                The audit reframes the problem. Instead of asking which tools are trending, it asks where work is delayed,
                duplicated, or inconsistently handled, and which changes are worth making first.
              </p>
            </div>

            <ProblemComparison columns={problemColumns} />
          </div>
        </SectionShell>

        <OperationsDiagnostic />

        <SectionShell id="examples" tone="contrast">
          <SectionHeader
            eyebrow="Operational clarity"
            title="From fragmented workflows to a system you can actually act on."
            description="The audit makes hidden handoffs, duplicated work, and realistic AI leverage points visible without reducing the business to generic before-and-after scenarios."
          />

          <OperationalClarityVisualization />
        </SectionShell>

        <SectionShell id="deliverables">
          <div className="two-column-balance deliverables-layout">
            <div className="reveal-up">
              <Eyebrow>What you receive</Eyebrow>
              <SectionTitle className="section-title-compact">
                A decision-ready audit, not a vague list of software suggestions.
              </SectionTitle>
              <SectionLead>
                The deliverable is built to help you decide what matters, what can wait, and how implementation should be sequenced.
              </SectionLead>

              <ul className="deliverable-list">
                {deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="deliverable-preview-column">
              <DeliverablePreview sections={previewSections} />
            </div>
          </div>
        </SectionShell>

        <SectionShell id="value" tone="contrast">
          <SectionHeader
            eyebrow="Why this matters"
            title="Better decisions, cleaner operations, and less wasted motion."
            description="The value is usually found in sharper priorities, stronger follow-up, and reduced admin friction, not in chasing the most tools."
          />

          <div className="value-grid">
            {valueRows.map((row, index) => (
              <article key={row.title} className="value-row reveal-up" style={{ animationDelay: `${index * 70}ms` }}>
                <h3>{row.title}</h3>
                <p>{row.text}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="about">
          <div className="founder-layout founder-section">
            <aside className="founder-profile reveal-up" aria-label="Founder profile">
              <div className="founder-profile-top">
                <div className="founder-avatar" aria-hidden="true">
                  F
                </div>
                <div>
                  <p className="founder-name">Finlay Sturzaker</p>
                  <p className="founder-role">Founder, Temporary Utopia</p>
                </div>
              </div>
              <div className="founder-signal-row" aria-label="Founder credibility">
                {founderSignals.map((signal) => (
                  <span key={signal}>{signal}</span>
                ))}
              </div>
              <p className="founder-summary">
                I work with service businesses that want grounded advice on where AI fits their operations and where it does not.
              </p>
            </aside>

            <div className="reveal-up">
              <Eyebrow>Founder perspective</Eyebrow>
              <SectionTitle className="section-title-compact">
                I keep the work practical: diagnose the business clearly, then recommend selectively.
              </SectionTitle>
              <SectionLead>
                Most owners do not need another app list. They need someone who can translate a fast-moving technical space into
                defensible operating decisions.
              </SectionLead>
              <ul className="advisory-points">
                {founderPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="section-actions">
                <PrimaryButton href="#booking">Start with a strategy call</PrimaryButton>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="fit">
          <SectionHeader
            eyebrow="Who this is for"
            title="A strong fit for businesses that want clarity before committing to implementation."
            description="The audit is most useful when there is real operational complexity to diagnose and the owner wants better decisions, not just faster tool shopping."
          />

          <FitChecklist columns={fitColumns} />
        </SectionShell>

        <SectionShell id="pricing" tone="contrast">
          <div className="pricing-wrap">
            <div className="pricing-block reveal-up">
              <div>
                <Eyebrow>Pricing</Eyebrow>
                <SectionTitle className="pricing-title">AI Operations Audit</SectionTitle>
                <p className="pricing-amount">From $1,000</p>
                <p className="pricing-copy">
                  Final scope depends on workflow complexity, business context, and the depth of operational review required.
                </p>
              </div>

              <div className="pricing-aside">
                <p>Includes the audit, tailored recommendations, risk and readiness notes, and a readout session.</p>
                <div className="section-actions section-actions-center">
                  <PrimaryButton href="#booking">Book a strategy call</PrimaryButton>
                  <SecondaryButton href="mailto:hello@temporaryutopia.com">Email Temporary Utopia</SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="booking">
          <SectionHeader
            eyebrow="Booking / next steps"
            title="Book directly or send a short request with your business context."
            description="Use the live scheduler if you are ready to choose a time. If not, send a short request and include the workflow area you want to review."
          />

          <div className="booking-wrap reveal-up">
            <BookingFlow />
          </div>
        </SectionShell>

        <SectionShell id="final-cta" tone="contrast">
          <div className="final-cta reveal-up">
            <Eyebrow>Next step</Eyebrow>
            <SectionTitle className="mx-auto max-w-3xl text-center">
              Get a clear view of where AI can support your operations and where it should stay out of the way.
            </SectionTitle>
            <SectionLead className="mx-auto max-w-2xl text-center">
              If you want practical guidance before bigger implementation decisions, start with a strategy call.
            </SectionLead>
            <div className="section-actions section-actions-center">
              <PrimaryButton href={CALENDLY_URL}>Request availability</PrimaryButton>
              <SecondaryButton href="#deliverables">Review deliverables</SecondaryButton>
            </div>
          </div>
        </SectionShell>
      </main>

      <footer className="site-footer">
        <div className="section-container site-footer-inner">
          <p>Temporary Utopia</p>
          <a href="mailto:hello@temporaryutopia.com">hello@temporaryutopia.com</a>
        </div>
      </footer>
    </>
  );
}
