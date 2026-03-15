import { BookingFlow } from "@/components/BookingFlow";
import {
  AuditDiagram,
  BeforeAfterWorkflow,
  DeliverablePreview,
  Eyebrow,
  FitChecklist,
  ProblemComparison,
  ProcessTimeline,
  ProofStrip,
  SectionLead,
  SectionShell,
  SectionTitle,
} from "@/components/landing/AdvisoryBlocks";

const CALENDLY_URL = "https://calendly.com/finlay-temporaryutopia/30min";

const heroProof = [
  { label: "Founder-led", detail: "Independent advice without software bias" },
  { label: "Practical scope", detail: "Workflow clarity before technical change" },
  { label: "Decision-ready", detail: "Report, priorities, and readout session" },
];

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

const auditSteps = [
  {
    title: "Understand current operations",
    text: "Review how work moves through the business today, from enquiries and follow-up to delivery, admin, and reporting.",
  },
  {
    title: "Identify friction and repeated work",
    text: "Surface the points where delays, bottlenecks, duplicate effort, and inconsistent execution are costing time.",
  },
  {
    title: "Map high-fit AI opportunities",
    text: "Assess where automation or AI support could improve quality, speed, or follow-up without adding unnecessary complexity.",
  },
  {
    title: "Prioritise implementation sequence",
    text: "Turn the findings into a practical order of decisions so the next step is clear and defensible.",
  },
];

const workflowExamples = [
  {
    title: "Inbound enquiries and triage",
    before: ["Email, phone, and web enquiries arrive in different places", "Follow-up depends on manual attention"],
    after: ["Central triage and logging flow", "AI-assisted routing, context capture, and CRM entry"],
    outcome: "Faster first response and a cleaner pipeline without relying on memory.",
  },
  {
    title: "Follow-up and booking",
    before: ["Prospects go quiet after the first contact", "Reminder steps are inconsistent across the team"],
    after: ["Prompted follow-up sequence", "Clear status tracking and easier booking handoff"],
    outcome: "Better booking consistency and fewer leads lost between touchpoints.",
  },
  {
    title: "Internal admin and reporting",
    before: ["Weekly updates and summaries are assembled manually", "Actions get buried across threads and notes"],
    after: ["Structured summaries and action capture", "Repeatable reporting process with less manual cleanup"],
    outcome: "Lower admin drag and clearer visibility on what needs attention next.",
  },
  {
    title: "Ownership and handoffs",
    before: ["Tasks sit between people without a clear owner", "Context gets dropped during transitions"],
    after: ["Defined routing logic and ownership", "Context packaged before work moves to the next person"],
    outcome: "Less rework, better accountability, and smoother delivery across the team.",
  },
];

const deliverables = [
  "Current-state workflow map",
  "Friction and bottleneck analysis",
  "AI opportunity map with fit notes",
  "Priority recommendations",
  "Implementation sequence",
  "Risk and readiness notes",
  "Readout session with next-step guidance",
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

const engagementSteps = [
  { title: "Scoping call", text: "Confirm business context, priorities, and the workflows worth reviewing." },
  { title: "Operational review", text: "Examine current processes, repeated work, and the points where execution slows down." },
  { title: "Audit and report", text: "Deliver the workflow map, recommendation set, and implementation sequence." },
  { title: "Readout session", text: "Walk through the findings, answer questions, and align on next decisions." },
];

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
        <SectionShell id="top">
          <div className="hero-layout">
            <div className="reveal-up">
              <Eyebrow>Founder-led AI operations advisory</Eyebrow>
              <h1 className="hero-title">
                Understand where AI fits in your business before you commit to the wrong systems.
              </h1>
              <p className="hero-copy">
                Temporary Utopia runs an AI Operations Audit for business owners who want practical clarity. The work starts
                with how your operations actually function, then turns that diagnosis into a focused implementation path.
              </p>

              <div className="hero-cta-group">
                <PrimaryButton href={CALENDLY_URL}>Book a strategy call</PrimaryButton>
                <SecondaryButton href="#how-it-works">See how the audit works</SecondaryButton>
              </div>

              <ProofStrip items={heroProof} />
            </div>

            <AuditDiagram />
          </div>
        </SectionShell>

        <SectionShell id="problem" tone="contrast">
          <div className="editorial-grid">
            <div className="reveal-up">
              <Eyebrow>The real problem</Eyebrow>
              <SectionTitle>Most AI adoption stalls because the operating model is unclear, not because the tools are missing.</SectionTitle>
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

        <SectionShell id="how-it-works">
          <div className="section-heading-center">
            <Eyebrow>How the audit works</Eyebrow>
            <SectionTitle>The method is simple, structured, and designed to produce a clear next step.</SectionTitle>
            <SectionLead>
              The process is deliberately diagnostic. It turns operational ambiguity into a map of where AI can add value and
              where it should not be forced.
            </SectionLead>
          </div>

          <ProcessTimeline steps={auditSteps} />
        </SectionShell>

        <SectionShell id="examples" tone="contrast">
          <div className="section-heading-center">
            <Eyebrow>Example improvements</Eyebrow>
            <SectionTitle>Practical workflow changes the audit can uncover.</SectionTitle>
            <SectionLead>
              These are illustrative transformations, not canned packages. The point is to make the outcomes concrete.
            </SectionLead>
          </div>

          <div className="workflow-examples">
            {workflowExamples.map((example, index) => (
              <BeforeAfterWorkflow key={example.title} example={example} delay={index * 80} />
            ))}
          </div>
        </SectionShell>

        <SectionShell id="deliverables">
          <div className="two-column-balance">
            <div className="reveal-up">
              <Eyebrow>What you receive</Eyebrow>
              <SectionTitle>A decision-ready audit, not a vague list of software suggestions.</SectionTitle>
              <SectionLead>
                The deliverable is built to help you decide what matters, what can wait, and how implementation should be sequenced.
              </SectionLead>

              <ul className="deliverable-list">
                {deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <DeliverablePreview sections={previewSections} />
          </div>
        </SectionShell>

        <SectionShell id="value" tone="contrast">
          <div className="section-heading-center section-heading-left">
            <Eyebrow>Why this is valuable</Eyebrow>
            <SectionTitle>Better decisions, cleaner operations, and less wasted motion.</SectionTitle>
            <SectionLead>
              The value is usually found in sharper priorities, stronger follow-up, and reduced admin friction, not in chasing the most tools.
            </SectionLead>
          </div>

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
          <div className="founder-layout">
            <aside className="founder-profile reveal-up" aria-label="Founder profile">
              <div className="founder-avatar" aria-hidden="true">
                F
              </div>
              <div>
                <p className="founder-name">Finlay Sturzaker</p>
                <p className="founder-role">Founder, Temporary Utopia</p>
              </div>
              <p className="founder-summary">
                I work with service businesses that want grounded advice on where AI fits their operations and where it does not.
              </p>
            </aside>

            <div className="reveal-up">
              <Eyebrow>Founder perspective</Eyebrow>
              <SectionTitle>I keep the work practical: diagnose the business clearly, then recommend selectively.</SectionTitle>
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

        <SectionShell id="engagement" tone="contrast">
          <div className="section-heading-center">
            <Eyebrow>Engagement process</Eyebrow>
            <SectionTitle>What happens after you book.</SectionTitle>
            <SectionLead>The engagement is lightweight to start and structured enough to keep the output useful.</SectionLead>
          </div>

          <ol className="engagement-timeline">
            {engagementSteps.map((step, index) => (
              <li key={step.title} className="engagement-step reveal-up" style={{ animationDelay: `${index * 70}ms` }}>
                <span className="engagement-step-index">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </SectionShell>

        <SectionShell id="fit">
          <div className="section-heading-center section-heading-left">
            <Eyebrow>Who this is for</Eyebrow>
            <SectionTitle>A strong fit for businesses that want clarity before committing to implementation.</SectionTitle>
            <SectionLead>
              The audit is most useful when there is real operational complexity to diagnose and the owner wants better decisions, not just faster tool shopping.
            </SectionLead>
          </div>

          <FitChecklist columns={fitColumns} />
        </SectionShell>

        <SectionShell id="pricing" tone="contrast">
          <div className="pricing-block reveal-up">
            <div>
              <Eyebrow>Pricing</Eyebrow>
              <SectionTitle className="max-w-none">AI Operations Audit</SectionTitle>
              <p className="pricing-amount">From $1,000</p>
              <p className="pricing-copy">
                Final scope depends on workflow complexity, business context, and the depth of operational review required.
              </p>
            </div>

            <div className="pricing-aside">
              <p>Includes the audit, tailored recommendations, risk and readiness notes, and a readout session.</p>
              <div className="section-actions">
                <PrimaryButton href="#booking">Book a strategy call</PrimaryButton>
                <SecondaryButton href="mailto:hello@temporaryutopia.com">Email Temporary Utopia</SecondaryButton>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="booking">
          <div className="section-heading-center">
            <Eyebrow>Booking</Eyebrow>
            <SectionTitle>Book directly or send a short request with your business context.</SectionTitle>
            <SectionLead>
              Use the live scheduler if you are ready to choose a time. If not, send a short request and include the workflow area you want to review.
            </SectionLead>
          </div>

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
