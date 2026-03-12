import { BookingFlow } from "@/components/BookingFlow";

const CALENDLY_URL = "https://calendly.com/finlay-temporaryutopia/30min";

type UseCase = {
  name: string;
  context: string;
  flow: string;
  outcome: string;
};

const useCases: UseCase[] = [
  {
    name: "Call And Inquiry Handling",
    context: "Incoming enquiries are inconsistent and hard to track.",
    flow: "Caller -> AI triage -> CRM",
    outcome: "Faster first response and cleaner lead records.",
  },
  {
    name: "Follow-Up And Scheduling",
    context: "Leads drop between first contact and booked calls.",
    flow: "Inquiry -> AI follow-up -> Calendar",
    outcome: "More reliable follow-up without manual chasing.",
  },
  {
    name: "Internal Workflow Routing",
    context: "Manual handoffs create delays and rework.",
    flow: "Task -> AI routing -> Owner or team",
    outcome: "Clearer ownership and smoother execution.",
  },
  {
    name: "Reporting And Admin Support",
    context: "Weekly reporting and admin consume valuable time.",
    flow: "Data -> AI summary -> Action list",
    outcome: "Quicker insight cycles and reduced admin friction.",
  },
];

const deliverables = [
  "Current-state workflow map and friction analysis",
  "AI opportunity assessment with practical fit notes",
  "Prioritized recommendations with implementation sequence",
  "Risk, dependency, and readiness considerations",
  "Tool shortlist aligned to your real operating needs",
  "Readout call with decision-ready next steps",
];

const timeline = [
  {
    label: "Scoping Call",
    text: "Define business context, goals, and operational priorities.",
  },
  {
    label: "Operational Review",
    text: "Map workflows, repetitive work, and process bottlenecks.",
  },
  {
    label: "Audit Report",
    text: "Deliver tailored recommendations with clear rationale.",
  },
  {
    label: "Readout Session",
    text: "Walk through findings, priorities, and practical next steps.",
  },
];

const outcomes = [
  "Less repetitive admin and fewer workflow bottlenecks",
  "Clearer decisions on where AI should and should not be used",
  "Better response consistency across client and lead workflows",
  "A practical implementation path your team can follow",
  "More confidence before committing spend to new systems",
];

const fitList = [
  "Service businesses managing growing operational complexity",
  "Owners who want clarity before buying tools",
  "Teams spending too much time on repetitive workflows",
  "Businesses that need practical, implementation-aware advice",
  "Operators looking for better process quality and consistency",
];

const founderPoints = [
  "I study and test AI tools daily so recommendations stay current.",
  "I translate technical change into practical operating decisions.",
  "I focus on process clarity first, then selective implementation.",
  "I advise based on fit and usefulness, not software hype.",
];

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`relative py-16 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-[1200px] px-6">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className="mt-5 max-w-4xl font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
      {children}
    </h2>
  );
}

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

function HeroDiagram() {
  return (
    <div className="workflow-board reveal-up">
      <p className="workflow-kicker">What The Audit Examines</p>
      <div className="workflow-track">
        <div className="workflow-node">
          <p>Daily Operations</p>
          <span>How work flows through your team today</span>
        </div>
        <div className="workflow-arrow" aria-hidden="true" />
        <div className="workflow-node workflow-node-highlight">
          <p>Workflow Analysis</p>
          <span>Where time is lost, duplicated, or delayed</span>
        </div>
        <div className="workflow-arrow" aria-hidden="true" />
        <div className="workflow-node">
          <p>Practical Recommendations</p>
          <span>Where AI can help without adding complexity</span>
        </div>
      </div>
      <div className="workflow-foot">
        <span>Analysis first</span>
        <span>Implementation second</span>
      </div>
    </div>
  );
}

function UseCaseCard({ item, delay }: { item: UseCase; delay: number }) {
  return (
    <article className="usecase-card reveal-up" style={{ animationDelay: `${delay}ms` }}>
      <p className="usecase-title">{item.name}</p>
      <p className="usecase-flow">{item.flow}</p>
      <p className="usecase-challenge">{item.context}</p>
      <p className="usecase-outcome">{item.outcome}</p>
    </article>
  );
}

export function LandingPage() {
  return (
    <main className="relative overflow-hidden text-ink">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-16rem] h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(77,163,255,0.14),_rgba(14,17,22,0)_62%)]" />
        <div className="absolute inset-0 opacity-[0.1] [background:radial-gradient(circle_at_1px_1px,rgba(168,176,189,0.25)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-[#0E1116]/88 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1200px] items-center gap-3 px-6 py-3.5">
          <a href="#top" className="min-w-0 flex-1 truncate font-display text-lg tracking-tight text-ink sm:text-xl">
            Temporary Utopia
          </a>
          <nav className="hidden items-center gap-6 text-sm text-mute md:flex">
            <a className="transition hover:text-ink" href="#approach">
              Approach
            </a>
            <a className="transition hover:text-ink" href="#included">
              Deliverables
            </a>
            <a className="transition hover:text-ink" href="#about">
              Founder
            </a>
            <a className="transition hover:text-ink" href="#booking">
              Book
            </a>
          </nav>
          <a href="#booking" className="btn-secondary shrink-0 px-3 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm" aria-label="Request Availability">
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Request Availability</span>
          </a>
        </div>
      </header>

      <Section id="top">
        <div className="grid items-start gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="reveal-up">
            <Eyebrow>Founder-Led AI Advisory</Eyebrow>
            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.06] text-ink sm:text-5xl lg:text-[3.3rem]">
              Understand where AI fits in your business before you invest in the wrong systems.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mute">
              Temporary Utopia provides an AI Operations Audit for business owners who want practical guidance. We start by understanding how your business actually runs, then recommend what is worth implementing.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton href={CALENDLY_URL}>Book Your Audit</PrimaryButton>
              <SecondaryButton href="#fit">See If You Are A Fit</SecondaryButton>
            </div>
            <p className="mt-5 text-sm text-mute">
              Business understanding before tool selection. Clarity before complexity.
            </p>
          </div>

          <HeroDiagram />
        </div>
      </Section>

      <Section id="problem" className="section-contrast">
        <div className="problem-panel reveal-up">
          <Eyebrow>The Core Problem</Eyebrow>
          <SectionTitle>
            Most business owners are trying to run a company and keep up with AI at the same time, which is a difficult combination.
          </SectionTitle>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <p className="leading-relaxed text-mute">
              Day to day, owners are already managing delivery, client communication, staffing, and planning. On top of that, AI tools and workflows are evolving quickly enough that it is hard to separate what is genuinely useful from what is simply new.
            </p>
            <p className="leading-relaxed text-mute">
              A common pattern is to trial a handful of tools without a clear operational strategy. That experimentation usually consumes time and budget, but rarely creates lasting improvement because the tools are not aligned with how the business actually works.
            </p>
          </div>
          <p className="mt-6 max-w-4xl leading-relaxed text-mute">
            When AI initiatives fail, it is usually not because the technology is weak. It is because implementation starts before the underlying workflow has been understood. The audit exists to solve that exact problem.
          </p>
        </div>
      </Section>

      <Section id="approach">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Approach</Eyebrow>
          <SectionTitle>The difference is not the tools. The difference is the order of decisions.</SectionTitle>
          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-mute">
            We do not begin by prescribing software. We begin by understanding how your operations run, where friction appears, and which changes are likely to produce meaningful improvements.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="comparison-panel comparison-panel-left reveal-up">
            <p className="comparison-kicker">Typical AI service model</p>
            <h3 className="comparison-heading">Software first, context second.</h3>
            <ul className="comparison-list">
              <li>Starts with product demos before understanding workflows</li>
              <li>Encourages scattered adoption across disconnected tools</li>
              <li>Makes ROI harder to evaluate and sustain over time</li>
              <li>Often adds complexity without fixing the root process issue</li>
            </ul>
          </article>

          <article className="comparison-panel comparison-panel-right reveal-up">
            <p className="comparison-kicker">Temporary Utopia model</p>
            <h3 className="comparison-heading">Business understanding first, then selective implementation.</h3>
            <ul className="comparison-list">
              <li>Maps operations before any recommendations are made</li>
              <li>Finds workflow friction and repetitive work first</li>
              <li>Prioritizes high-fit opportunities based on real constraints</li>
              <li>Produces practical guidance your team can actually execute</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section id="solutions" className="section-contrast">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Illustrative Use Cases</Eyebrow>
          <SectionTitle>Examples of operational improvements this audit can surface.</SectionTitle>
          <p className="mx-auto mt-6 max-w-3xl text-mute">
            These are not generic templates. They illustrate the kinds of workflow improvements we assess and tailor to each business.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {useCases.map((item, index) => (
            <UseCaseCard key={item.name} item={item} delay={index * 70} />
          ))}
        </div>
      </Section>

      <Section id="offer">
        <div className="reveal-up">
          <Eyebrow>Service Overview</Eyebrow>
          <SectionTitle>AI Efficiency Audit / AI Operations Audit</SectionTitle>
          <p className="mt-6 max-w-3xl leading-relaxed text-mute">
            This is a paid advisory engagement focused on operational clarity. You receive a structured analysis of your workflows, a set of tailored recommendations, and a practical roadmap for implementation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="#booking">Request Availability</PrimaryButton>
            <SecondaryButton href="#report-depth">See Report Depth</SecondaryButton>
          </div>
        </div>
      </Section>

      <Section id="included">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>What Is Included</Eyebrow>
          <SectionTitle>A practical report built for real business decisions.</SectionTitle>
        </div>

        <div className="mt-11 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="deliverable-list reveal-up">
            {deliverables.map((item, index) => (
              <div key={item} className="deliverable-row" style={{ animationDelay: `${index * 60}ms` }}>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <aside className="report-preview reveal-up">
            <p className="report-preview-kicker">Report Preview</p>
            <h3 className="report-preview-title">How Findings Are Structured</h3>
            <div className="report-preview-grid">
              <div>Operational friction points</div>
              <div>Process quality observations</div>
              <div>AI opportunity map</div>
              <div>Priority recommendation table</div>
              <div>Implementation guidance</div>
              <div>Risk and dependency notes</div>
            </div>
          </aside>
        </div>
      </Section>

      <Section id="report-depth" className="section-contrast">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="reveal-up">
            <Eyebrow>Report Quality</Eyebrow>
            <SectionTitle>A detailed operational review, not surface-level tool recommendations.</SectionTitle>
            <p className="mt-6 max-w-2xl leading-relaxed text-mute">
              You receive clear reasoning behind each recommendation, where it fits in your operations, and what to prioritize first.
            </p>
          </div>

          <div className="architecture-grid reveal-up">
            <div className="architecture-card">
              <p>Current workflow analysis</p>
            </div>
            <div className="architecture-card">
              <p>Opportunity fit and constraints</p>
            </div>
            <div className="architecture-card">
              <p>Priority sequence for implementation</p>
            </div>
            <div className="architecture-card">
              <p>Practical next steps for your team</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="value-anchor">
        <div className="value-anchor reveal-up">
          <div>
            <Eyebrow>Where Value Is Usually Found</Eyebrow>
            <h2 className="mt-5 max-w-3xl font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Most gains come from reducing day-to-day friction, not adding more software.
            </h2>
            <p className="mt-5 max-w-2xl text-mute">
              The audit highlights where process quality can improve and where AI can responsibly reduce repetitive work.
            </p>
            <div className="metrics-grid">
              <div className="metric-block">
                <p>Follow-up reliability</p>
                <span>Reduce delays across leads and clients</span>
              </div>
              <div className="metric-block">
                <p>Workflow handoffs</p>
                <span>Lower rework between owner and team</span>
              </div>
              <div className="metric-block">
                <p>Admin consistency</p>
                <span>Streamline recurring operational tasks</span>
              </div>
            </div>
          </div>

          <div className="value-side">
            <p className="value-side-kicker">Before And After View</p>
            <div className="value-state">
              <p className="value-state-label">Before</p>
              <p className="value-state-text">Unclear priorities, fragmented processes, and inconsistent execution.</p>
            </div>
            <div className="value-divider" />
            <div className="value-state">
              <p className="value-state-label">After</p>
              <p className="value-state-text">A clear operating plan with focused, practical AI recommendations.</p>
            </div>
            <p className="mt-4 text-xs text-mute">Each recommendation is tailored to your business context and readiness.</p>
          </div>
        </div>
      </Section>

      <Section id="outcomes">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="reveal-up">
            <Eyebrow>Outcomes</Eyebrow>
            <SectionTitle>What this gives you as an owner.</SectionTitle>
            <p className="mt-6 max-w-xl text-mute">
              Better operational clarity, more deliberate AI adoption, and less uncertainty about what to do next.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="impact-badge">Clear priorities</span>
              <span className="impact-badge">Lower friction</span>
              <span className="impact-badge">Better consistency</span>
            </div>
          </div>

          <div className="reveal-up grid gap-3">
            {outcomes.map((item) => (
              <div key={item} className="outcome-row">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="about" className="section-contrast">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="founder-panel reveal-up">
            <div className="founder-avatar">F</div>
            <div>
              <p className="founder-name">Finlay Sturzaker</p>
              <p className="founder-role">Founder, Temporary Utopia</p>
            </div>
            <p className="founder-bio">
              I work with service businesses that want to use AI thoughtfully. My role is to help owners understand where AI fits their operations and where it does not.
            </p>
          </aside>

          <div className="reveal-up rounded-3xl border border-line bg-card p-7 sm:p-9">
            <Eyebrow>Founder Perspective</Eyebrow>
            <SectionTitle>I spend time with new AI tools every day, but my job is to keep your decisions grounded.</SectionTitle>
            <p className="mt-6 leading-relaxed text-mute">
              Most owners do not need another list of apps. They need someone who can translate a fast-moving space into practical decisions that improve operations without creating unnecessary disruption.
            </p>
            <p className="mt-4 leading-relaxed text-mute">
              That is the focus here: understand the business clearly, recommend selectively, and make sure every suggestion has a practical reason behind it.
            </p>
            <ul className="founder-points">
              {founderPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="mt-8">
              <PrimaryButton href="#booking">Start With A Strategy Call</PrimaryButton>
            </div>
          </div>
        </div>
      </Section>

      <Section id="process">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>How The Engagement Works</Eyebrow>
          <SectionTitle>A straightforward process designed for busy operators.</SectionTitle>
        </div>

        <div className="mt-10 timeline-panel reveal-up">
          <div className="timeline-track">
            {timeline.map((item) => (
              <div key={item.label} className="timeline-item">
                <span className="timeline-dot" />
                <div>
                  <p className="timeline-label">{item.label}</p>
                  <p className="timeline-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="trust" className="section-contrast">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Trust And Process</Eyebrow>
          <SectionTitle>A deliberate advisory process designed to reduce implementation risk.</SectionTitle>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="trust-card reveal-up">
            <p className="trust-title">Independent Advice</p>
            <p className="trust-body">Recommendations are based on operational fit, not software sales incentives.</p>
          </article>
          <article className="trust-card reveal-up" style={{ animationDelay: "80ms" }}>
            <p className="trust-title">Structured Analysis</p>
            <p className="trust-body">Each finding is tied to a real workflow and a practical action pathway.</p>
          </article>
          <article className="trust-card reveal-up" style={{ animationDelay: "160ms" }}>
            <p className="trust-title">Practical Delivery</p>
            <p className="trust-body">The output is designed to guide decisions, not overwhelm teams with complexity.</p>
          </article>
        </div>
      </Section>

      <Section id="fit">
        <div className="grid gap-6 rounded-3xl border border-line bg-card p-7 sm:p-9 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal-up">
            <Eyebrow>Who This Is For</Eyebrow>
            <h3 className="mt-5 text-2xl font-semibold text-ink sm:text-3xl">
              Best for businesses that want practical AI clarity before making bigger implementation decisions.
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-mute sm:text-base">
              {fitList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal-up rounded-2xl border border-line bg-[#131820] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-mute">Not Ideal If</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#c5cdd8]">
              <li>You want immediate automation implementation without a diagnostic phase.</li>
              <li>You mainly want tool demos rather than operational recommendations.</li>
              <li>You are looking for trend commentary instead of practical business guidance.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="pricing" className="section-contrast">
        <div className="pricing-panel reveal-up">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-5 font-display text-3xl text-ink sm:text-5xl">AI Efficiency Audit</h2>
          <p className="mt-4 text-4xl font-semibold text-accent sm:text-5xl">From $1,000</p>
          <p className="mx-auto mt-5 max-w-2xl text-mute">
            Final scope is set by workflow complexity and team context. Each engagement includes the audit report, recommendations, and a strategy readout call.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton href="#booking">Book Strategy Call</PrimaryButton>
            <SecondaryButton href="mailto:hello@temporaryutopia.com">Email Temporary Utopia</SecondaryButton>
          </div>
        </div>
      </Section>

      <Section id="booking">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Booking</Eyebrow>
          <SectionTitle>Book a strategy call or send a short booking request.</SectionTitle>
          <p className="mx-auto mt-6 max-w-3xl text-mute">
            Use the embedded scheduler for instant booking, or submit your details and I will confirm availability.
          </p>
        </div>

        <div className="mt-10 reveal-up">
          <BookingFlow />
        </div>
      </Section>

      <Section id="final-cta" className="section-contrast">
        <div className="final-cta reveal-up">
          <p className="final-kicker">Next Step</p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl text-ink sm:text-5xl">
            Get a clear, practical view of how AI can support your operations.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-mute">
            If you want thoughtful guidance before making implementation decisions, start with a strategy call.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={CALENDLY_URL} className="btn-primary">
              Request Availability
            </a>
            <a href="#offer" className="btn-secondary">
              Review The Service
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
