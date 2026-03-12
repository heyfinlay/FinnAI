import { BookingFlow } from "@/components/BookingFlow";

type UseCase = {
  name: string;
  challenge: string;
  outcome: string;
  from: string;
  to: string;
};

const useCases: UseCase[] = [
  {
    name: "AI Call Handling",
    challenge: "Missed inbound calls and delayed first response",
    outcome: "Faster lead capture and fewer missed opportunities",
    from: "Caller",
    to: "CRM",
  },
  {
    name: "Lead Follow-Up Automation",
    challenge: "Prospects drop between inquiry and booking",
    outcome: "Consistent follow-up cadence and higher conversion reliability",
    from: "Inquiry",
    to: "Booked Call",
  },
  {
    name: "Workflow Routing",
    challenge: "Manual triage causes handoff delays",
    outcome: "Cleaner routing and less internal friction",
    from: "Tasks",
    to: "Owner",
  },
  {
    name: "AI Reporting",
    challenge: "Manual reporting drains weekly capacity",
    outcome: "Faster insight cycles with better management visibility",
    from: "Data",
    to: "Insights",
  },
  {
    name: "Inbox And Admin Assist",
    challenge: "Owner buried in repetitive communication",
    outcome: "Reduced admin load and faster response time",
    from: "Inbox",
    to: "Actions",
  },
  {
    name: "Meeting Task Extraction",
    challenge: "Decisions lost after meetings",
    outcome: "Automatic summaries and clearer accountability",
    from: "Meeting",
    to: "Tasks",
  },
];

const deliverables = [
  "Workflow map with bottlenecks and drag points",
  "AI opportunity matrix with impact scoring",
  "Operational risk and readiness assessment",
  "Tailored tool and system recommendations",
  "Implementation sequence with owner accountability",
  "Commercial upside and time-recovery estimate",
];

const timeline = [
  {
    label: "Discovery",
    text: "Map current operations, roles, and friction points.",
  },
  {
    label: "Diagnostics",
    text: "Identify inefficiencies, repetitive tasks, and leakage zones.",
  },
  {
    label: "Blueprint",
    text: "Design AI opportunity architecture and priority sequence.",
  },
  {
    label: "Implementation Path",
    text: "Deliver practical rollout plan with near-term actions.",
  },
];

const outcomes = [
  "Lower repetitive admin burden",
  "Faster lead and client response cycles",
  "Cleaner handoffs and fewer process errors",
  "Better use of team capability",
  "Smarter AI spend decisions",
  "More operating capacity without immediate hiring pressure",
];

const fitList = [
  "Service businesses with meaningful admin and process complexity",
  "Owners who want practical AI guidance, not trend noise",
  "Teams repeating manual operational tasks each week",
  "Businesses wanting clarity before implementation spend",
  "Operators seeking commercial outcomes, not AI novelty",
];

const founderPoints = [
  "Tracks model and tooling shifts continuously",
  "Translates technical change into operational decisions",
  "Prioritizes business outcomes over software novelty",
  "Builds implementation-aware recommendations",
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
    <section id={id} className={`relative py-20 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-10">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center rounded-full border border-[#33455a] bg-[#111923] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b6c3d5]">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-5 max-w-4xl font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
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
      <p className="workflow-kicker">Operational Transformation Visual</p>
      <div className="workflow-track">
        <div className="workflow-node">
          <p>Business Operations</p>
          <span>Leads · Admin · Delivery · Reporting</span>
        </div>
        <div className="workflow-arrow" aria-hidden="true" />
        <div className="workflow-node workflow-node-highlight">
          <p>AI Efficiency Audit</p>
          <span>Diagnostics · Opportunity Map · Priority Logic</span>
        </div>
        <div className="workflow-arrow" aria-hidden="true" />
        <div className="workflow-node">
          <p>Automation Blueprint</p>
          <span>Roadmap · Systems · Commercial Impact</span>
        </div>
      </div>
      <div className="workflow-foot">
        <span>Diagnose first</span>
        <span>Implement with precision</span>
      </div>
    </div>
  );
}

function UseCaseCard({ item, delay }: { item: UseCase; delay: number }) {
  return (
    <article className="usecase-card reveal-up" style={{ animationDelay: `${delay}ms` }}>
      <p className="usecase-title">{item.name}</p>
      <div className="mini-flow" aria-hidden="true">
        <span>{item.from}</span>
        <i />
        <span className="mini-flow-ai">AI</span>
        <i />
        <span>{item.to}</span>
      </div>
      <p className="usecase-challenge">{item.challenge}</p>
      <p className="usecase-outcome">{item.outcome}</p>
    </article>
  );
}

export function LandingPage() {
  return (
    <main className="relative overflow-hidden text-ink">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-12rem] h-[40rem] bg-[radial-gradient(circle_at_top,_rgba(102,215,236,0.13),_rgba(8,9,12,0)_62%)]" />
        <div className="absolute right-[-10rem] top-[48rem] h-[22rem] w-[22rem] rounded-full bg-[#63d8ff]/8 blur-[120px]" />
        <div className="absolute left-[-12rem] top-[96rem] h-[26rem] w-[26rem] rounded-full bg-[#f06bc6]/7 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.14] [background:radial-gradient(circle_at_1px_1px,rgba(214,214,224,0.3)_1px,transparent_0)] [background-size:28px_28px]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-[#273445] bg-[#0b1017]/82 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3.5 sm:px-6 lg:px-10">
          <a href="#top" className="min-w-0 flex-1 truncate font-display text-lg tracking-tight text-[#eef3fb] sm:text-xl">
            Temporary Utopia
          </a>
          <nav className="hidden items-center gap-6 text-sm text-mute md:flex">
            <a className="transition hover:text-ink" href="#approach">
              Approach
            </a>
            <a className="transition hover:text-ink" href="#value-anchor">
              Value
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

      <Section id="top" className="pb-14 pt-16 sm:pt-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="reveal-up">
            <Eyebrow>Founder-Led AI Operations Advisory</Eyebrow>
            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.03] text-[#edf3fb] sm:text-5xl lg:text-6xl">
              Find where AI should improve your operations
              <span className="gradient-text"> before wasted time becomes lost revenue.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#aeb8c7]">
              Temporary Utopia runs a practical AI Efficiency Audit for business owners. We diagnose how your operations really work, then build a targeted blueprint for implementation.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton href="#booking">Book Your Audit</PrimaryButton>
              <SecondaryButton href="#fit">See If Your Business Is A Fit</SecondaryButton>
            </div>
            <p className="mt-5 text-sm text-[#97a5b7]">
              Diagnosis before implementation. Clarity before complexity. Outcomes before tool hype.
            </p>
          </div>

          <HeroDiagram />
        </div>
      </Section>

      <Section id="problem" className="pt-8">
        <div className="problem-panel reveal-up">
          <Eyebrow>The Real Problem</Eyebrow>
          <SectionTitle>
            Most owners are either frozen by AI noise or running disconnected experiments without an operating plan.
          </SectionTitle>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <p className="leading-relaxed text-mute">
              AI moves faster than most teams can track while managing delivery, growth, and staffing.
            </p>
            <p className="leading-relaxed text-mute">
              The result is indecision or random tooling. Both create unnecessary spend, process friction, and avoidable leakage.
            </p>
          </div>
        </div>
      </Section>

      <Section id="approach">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Approach Comparison</Eyebrow>
          <SectionTitle>Why this model outperforms tool-first AI advice.</SectionTitle>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="comparison-panel comparison-panel-left reveal-up">
            <p className="comparison-kicker">Typical AI approach</p>
            <h3 className="comparison-heading">Random tools. Weak operational fit.</h3>
            <ul className="comparison-list">
              <li>Starts with software demos, not process diagnostics</li>
              <li>Creates stack complexity without clear ROI</li>
              <li>Encourages hype-driven spend decisions</li>
              <li>Leaves owners with fragmented workflows</li>
            </ul>
          </article>

          <article className="comparison-panel comparison-panel-right reveal-up">
            <p className="comparison-kicker">Operational audit approach</p>
            <h3 className="comparison-heading">Workflow analysis. Targeted implementation.</h3>
            <ul className="comparison-list">
              <li>Maps operations before recommending systems</li>
              <li>Identifies inefficiencies and leverage points first</li>
              <li>Delivers implementation-ready priorities</li>
              <li>Optimizes for outcomes, not tool novelty</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section id="solutions" className="section-contrast">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>AI Use-Case Visuals</Eyebrow>
          <SectionTitle>Representative solution modules this audit can identify.</SectionTitle>
          <p className="mx-auto mt-6 max-w-3xl text-mute">
            The audit connects real operational problems to practical AI workflows your team can actually use.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item, index) => (
            <UseCaseCard key={item.name} item={item} delay={index * 70} />
          ))}
        </div>
      </Section>

      <Section id="offer" className="pt-12">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="reveal-up">
            <Eyebrow>Service Overview</Eyebrow>
            <SectionTitle>AI Efficiency Audit / AI Operations Audit</SectionTitle>
            <p className="mt-6 max-w-2xl leading-relaxed text-mute">
              A focused consulting engagement for owners who want commercially relevant AI direction. You get clarity on what to implement, what to avoid, and how to sequence change without disruption.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="#booking">Request Audit Availability</PrimaryButton>
              <SecondaryButton href="#report-depth">See Report Depth</SecondaryButton>
            </div>
          </div>

          <div className="timeline-panel reveal-up">
            <h3 className="text-lg font-semibold text-[#eaf1fb]">Engagement Timeline</h3>
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
        </div>
      </Section>

      <Section id="included">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>What Is Included</Eyebrow>
          <SectionTitle>Comprehensive deliverables with commercial depth.</SectionTitle>
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
            <h3 className="report-preview-title">Operational Audit Output Structure</h3>
            <div className="report-preview-grid">
              <div>Operational inefficiencies</div>
              <div>AI opportunity map</div>
              <div>Automation architecture</div>
              <div>Implementation roadmap</div>
              <div>Risk and dependency notes</div>
              <div>ROI projection summary</div>
            </div>
          </aside>
        </div>
      </Section>

      <Section id="report-depth" className="section-contrast">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Report Quality</Eyebrow>
          <SectionTitle>This is a serious operational review, not surface-level tool advice.</SectionTitle>
          <p className="mx-auto mt-6 max-w-3xl text-mute">
            The output is strategic, implementation-aware, and built for decision-making.
          </p>
        </div>

        <div className="mt-10 architecture-grid reveal-up">
          <div className="architecture-card">
            <p>Current-state workflow architecture</p>
          </div>
          <div className="architecture-card">
            <p>Target-state AI system architecture</p>
          </div>
          <div className="architecture-card">
            <p>Priority sequence and execution logic</p>
          </div>
          <div className="architecture-card">
            <p>Commercial impact and implementation risk profile</p>
          </div>
        </div>
      </Section>

      <Section id="value-anchor">
        <div className="value-anchor reveal-up">
          <div>
            <Eyebrow>Commercial Value Anchor</Eyebrow>
            <h2 className="mt-5 max-w-3xl font-display text-3xl leading-tight text-[#edf3ff] sm:text-4xl lg:text-5xl">
              Hidden operational leakage is usually more expensive than owners expect.
            </h2>
            <p className="mt-5 max-w-2xl text-[#afbbcc]">
              The audit quantifies where time and revenue are leaking, then maps practical improvements your business can implement.
            </p>
            <div className="metrics-grid">
              <div className="metric-block">
                <p>15 hrs/week</p>
                <span>Lost to manual admin loops</span>
              </div>
              <div className="metric-block">
                <p>24%</p>
                <span>Potential revenue leakage from slow follow-up</span>
              </div>
              <div className="metric-block">
                <p>8 hrs/week</p>
                <span>Manual reporting and reconciliation work</span>
              </div>
            </div>
          </div>

          <div className="value-side">
            <p className="value-side-kicker">Before / After Operating View</p>
            <div className="value-state">
              <p className="value-state-label">Current state</p>
              <p className="value-state-text">High admin drag, inconsistent follow-up, avoidable process leakage.</p>
            </div>
            <div className="value-divider" />
            <div className="value-state">
              <p className="value-state-label">Post-audit state</p>
              <p className="value-state-text">Prioritized systems, faster response flow, clearer operational leverage.</p>
            </div>
            <p className="mt-4 text-xs text-[#93a2b6]">
              Impact ranges are indicative and refined to your business profile in the audit report.
            </p>
          </div>
        </div>
      </Section>

      <Section id="outcomes">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="reveal-up">
            <Eyebrow>Outcomes</Eyebrow>
            <SectionTitle>What better systems can unlock for your business.</SectionTitle>
            <p className="mt-6 max-w-xl text-mute">
              The goal is less friction, faster execution, and stronger operational leverage.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="impact-badge">Less admin drag</span>
              <span className="impact-badge">Faster response cycles</span>
              <span className="impact-badge">Cleaner handoffs</span>
              <span className="impact-badge">Better team leverage</span>
              <span className="impact-badge">Smarter AI spend</span>
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
              I translate fast-moving AI capability into practical operational systems for real businesses. No hype, no forced automation, no generic playbooks.
            </p>
          </aside>

          <div className="reveal-up rounded-3xl border border-[#334255] bg-[#131b26]/90 p-7 sm:p-9">
            <Eyebrow>Founder Perspective</Eyebrow>
            <SectionTitle>I am not trying to automate everything. I am trying to make your business easier to run.</SectionTitle>
            <p className="mt-6 leading-relaxed text-mute">
              The advantage is knowing where AI belongs in your workflows and where it does not.
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

      <Section id="trust">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Trust Reinforcement</Eyebrow>
          <SectionTitle>A clear process that lowers risk before implementation spend.</SectionTitle>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="trust-card reveal-up">
            <p className="trust-title">Strategic First</p>
            <p className="trust-body">Decisions are grounded in workflow realities and commercial logic.</p>
          </article>
          <article className="trust-card reveal-up" style={{ animationDelay: "80ms" }}>
            <p className="trust-title">Implementation Aware</p>
            <p className="trust-body">Recommendations include sequence and adoption pacing for real teams.</p>
          </article>
          <article className="trust-card reveal-up" style={{ animationDelay: "160ms" }}>
            <p className="trust-title">Commercially Grounded</p>
            <p className="trust-body">Each priority is evaluated against time recovery and revenue impact.</p>
          </article>
        </div>
      </Section>

      <Section id="fit" className="section-contrast">
        <div className="grid gap-6 rounded-3xl border border-[#334255] bg-[#131b26]/88 p-7 sm:p-9 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal-up">
            <Eyebrow>Who This Is For</Eyebrow>
            <h3 className="mt-5 text-2xl font-semibold text-[#ecf2fb] sm:text-3xl">
              Best for owners who want AI clarity before committing execution budget.
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-[#c0ccdc] sm:text-base">
              {fitList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d4ff6f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal-up rounded-2xl border border-[#324052] bg-[#101720]/90 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#bcc8d8]">Not Ideal If</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#d0dced]">
              <li>You only want prompt tricks without process-level strategy.</li>
              <li>You want immediate implementation without diagnostics.</li>
              <li>You want trend commentary more than business outcomes.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="pricing">
        <div className="pricing-panel reveal-up">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-5 font-display text-3xl text-[#f4f8ff] sm:text-5xl">AI Efficiency Audit</h2>
          <p className="mt-4 text-4xl font-semibold text-[#f06fc6] sm:text-5xl">From $1,000</p>
          <p className="mx-auto mt-5 max-w-2xl text-[#bcc8d8]">
            Scope is tailored to workflow complexity, team size, and business context. Every engagement includes the report, recommendation framework, and strategy review call.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton href="#booking">Book Strategy Call</PrimaryButton>
            <SecondaryButton href="mailto:hello@temporaryutopia.com">Email Temporary Utopia</SecondaryButton>
          </div>
        </div>
      </Section>

      <Section id="booking" className="section-contrast">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Booking</Eyebrow>
          <SectionTitle>Book your strategy call in two steps.</SectionTitle>
          <p className="mx-auto mt-6 max-w-3xl text-mute">
            Choose a preferred time, share context, and send a booking request instantly. Or open the live scheduler for direct booking.
          </p>
        </div>

        <div className="mt-10 reveal-up">
          <BookingFlow />
        </div>
      </Section>

      <Section id="final-cta" className="pt-8">
        <div className="final-cta reveal-up">
          <p className="final-kicker">Next Step</p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl text-[#f3f8ff] sm:text-5xl">
            Build an AI strategy that saves time, protects revenue, and gives your team clearer operational control.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[#b9c7d9]">
            Start with a focused strategy call and see whether the AI Efficiency Audit is the right fit now.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="#booking" className="btn-primary">
              Book Your Audit
            </a>
            <a href="#offer" className="btn-secondary">
              Review The Audit Process
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
