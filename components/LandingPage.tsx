import { BookingFlow } from "@/components/BookingFlow";

const deliverables = [
  {
    title: "Workflow Deep-Dive",
    detail:
      "Detailed process mapping across lead flow, delivery, communication, and follow-up cycles.",
  },
  {
    title: "Admin Burden Analysis",
    detail:
      "Task-level review of repetitive work, handoff delays, and coordination drag.",
  },
  {
    title: "AI Opportunity Ranking",
    detail:
      "Use cases ranked by impact, implementation complexity, and adoption fit.",
  },
  {
    title: "System Recommendations",
    detail:
      "Tailored tool and workflow recommendations based on your business context.",
  },
  {
    title: "Implementation Roadmap",
    detail:
      "Phased sequence with owner accountability and practical rollout pacing.",
  },
  {
    title: "Commercial Impact Estimate",
    detail:
      "Conservative estimate of reclaimed hours, leakage reduction, and leverage potential.",
  },
];

const solutionModules = [
  {
    name: "AI Call Handling",
    challenge: "Missed inbound calls and delayed first response",
    outcome: "Faster lead capture and fewer missed revenue moments",
  },
  {
    name: "Lead Follow-Up Automation",
    challenge: "Prospects dropping between inquiry and booking",
    outcome: "Consistent follow-up cadence and stronger conversion flow",
  },
  {
    name: "Workflow Routing",
    challenge: "Manual triage and internal handoff confusion",
    outcome: "Cleaner routing with lower coordination overhead",
  },
  {
    name: "Inbox Admin Assist",
    challenge: "Owner buried in repetitive admin responses",
    outcome: "Faster inbox throughput and lower admin drag",
  },
  {
    name: "Meeting Summary Extraction",
    challenge: "Decisions and action items lost after calls",
    outcome: "Automatic summaries and clearer accountability",
  },
  {
    name: "CRM Update Automation",
    challenge: "Stale pipeline records and reporting blind spots",
    outcome: "More accurate CRM data and decision quality",
  },
];

const reportDepth = [
  "Executive summary with recommendation priorities",
  "Workflow map with key bottlenecks and friction points",
  "Use-case matrix with impact and complexity scoring",
  "Recommended stack and implementation sequence",
  "Commercial upside estimate and risk considerations",
  "30/60/90 day implementation pathway",
];

const outcomes = [
  "Lower repetitive admin burden across owner and team",
  "Improved response speed and reduced follow-up leakage",
  "Cleaner workflows with fewer handoff failures",
  "Better use of staff capability on high-value work",
  "Smarter AI spend with less wasted experimentation",
  "More operating capacity without immediate headcount pressure",
];

const fitList = [
  "Service businesses with meaningful admin and process complexity",
  "Owners who want practical AI direction, not trend noise",
  "Teams repeating manual operational tasks each week",
  "Businesses wanting strategy before implementation spend",
  "Operators seeking commercial outcomes, not AI novelty",
];

const trustPoints = [
  "Recommendations are tied to process reality, not social hype",
  "Each priority includes rationale and sequencing logic",
  "No forced automation when process redesign is better",
  "Designed for internal execution or implementation support",
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
    <p className="inline-flex items-center rounded-full border border-[#4a3a5f] bg-[#1b1525] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c5b5dd]">
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

export function LandingPage() {
  return (
    <main className="relative overflow-hidden text-ink">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-14rem] h-[44rem] bg-[radial-gradient(circle_at_top,_rgba(190,103,255,0.30),_rgba(8,6,11,0)_62%)]" />
        <div className="absolute left-[-15rem] top-[26rem] h-[30rem] w-[30rem] rounded-full bg-[#cf4de5]/10 blur-[140px]" />
        <div className="absolute right-[-10rem] top-[74rem] h-[26rem] w-[26rem] rounded-full bg-[#9c6dff]/12 blur-[130px]" />
        <div className="absolute inset-0 opacity-15 [background:radial-gradient(circle_at_1px_1px,rgba(219,182,255,0.35)_1px,transparent_0)] [background-size:26px_26px]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-[#3a3049] bg-[#0b0910]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3.5 sm:px-6 lg:px-10">
          <a href="#top" className="min-w-0 flex-1 truncate font-display text-lg tracking-tight text-[#f0e8ff] sm:text-xl">
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
              About Finlay
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
        <div className="grid items-start gap-12 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="reveal-up">
            <Eyebrow>Founder-Led AI Operations Advisory</Eyebrow>
            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.02] text-[#f7f0ff] sm:text-5xl lg:text-6xl">
              Find where AI should improve your operations
              <span className="gradient-text"> before wasted time becomes lost revenue.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#b7acc8]">
              Temporary Utopia runs a practical AI Efficiency Audit for business owners. We diagnose how your operations actually work, then design recommendations that improve efficiency, response speed, and profitability.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton href="#booking">Book Your Audit</PrimaryButton>
              <SecondaryButton href="#fit">See If Your Business Is A Fit</SecondaryButton>
            </div>
            <p className="mt-5 text-sm text-[#9e94b4]">
              Diagnosis before implementation. Clarity before complexity. Outcomes before tool hype.
            </p>
          </div>

          <aside className="reveal-up relative rounded-3xl border border-[#4f3a64] bg-[#171222]/86 p-6 shadow-[0_0_0_1px_rgba(198,132,255,0.18),0_26px_90px_rgba(0,0,0,0.5)] backdrop-blur">
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#ea5fcc]/20 blur-2xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#bca7d8]">Live Audit Signals</p>
            <h3 className="mt-3 text-xl font-semibold text-[#f3e9ff]">Where owners usually leak capacity</h3>
            <div className="mt-5 grid gap-3">
              <div className="signal-card">
                <p>Unanswered inbound calls and delayed follow-up</p>
                <span className="signal-tag">Lead leakage</span>
              </div>
              <div className="signal-card">
                <p>Manual loops across inbox, CRM, scheduling, and reporting</p>
                <span className="signal-tag">Time drag</span>
              </div>
              <div className="signal-card">
                <p>Handoffs with inconsistent ownership and no clear routing</p>
                <span className="signal-tag">Execution friction</span>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section id="problem" className="pt-8">
        <div className="reveal-up rounded-3xl border border-[#45355a] bg-[#140f1e]/86 p-7 sm:p-10">
          <Eyebrow>The Real Problem</Eyebrow>
          <SectionTitle>
            Most owners are either frozen by AI noise or running disconnected tool experiments without a business plan.
          </SectionTitle>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <p className="leading-relaxed text-mute">
              AI is moving faster than most operators can track while running client delivery, team management, and growth responsibilities.
            </p>
            <p className="leading-relaxed text-mute">
              The result is usually indecision or random implementation. Both create wasted spend, slower execution, and more operational complexity.
            </p>
          </div>
        </div>
      </Section>

      <Section id="approach">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Approach</Eyebrow>
          <SectionTitle>Most AI services sell software first. I diagnose operations first.</SectionTitle>
          <p className="mx-auto mt-6 max-w-3xl text-mute">
            Temporary Utopia is strategy-first by design: understand how your business runs, then identify and sequence AI opportunities with practical business impact.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="reveal-up rounded-3xl border border-[#5b3c5c] bg-[#231426]/84 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e4b2de]">Typical AI Consulting</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#ffeafb]">Tool-first, context-later</h3>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#d5bad5] sm:text-base">
              <li>Starts with demos before workflow diagnosis</li>
              <li>Automates tasks without process architecture</li>
              <li>Creates stack complexity and adoption fatigue</li>
              <li>Produces activity, not operational clarity</li>
            </ul>
          </article>

          <article className="reveal-up rounded-3xl border border-[#4f3d69] bg-[#181326]/86 p-7 shadow-[0_0_0_1px_rgba(190,120,255,0.12),0_20px_80px_rgba(0,0,0,0.38)]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d8bcff]">Temporary Utopia</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#f3eaff]">Diagnosis-first, implementation-ready</h3>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#cbbbe4] sm:text-base">
              <li>Business understanding before tool selection</li>
              <li>Opportunities ranked by impact and implementation fit</li>
              <li>Recommendations tied to team and workflow constraints</li>
              <li>Roadmap your business can execute with confidence</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section id="solutions" className="section-contrast">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Practical AI Solution Map</Eyebrow>
          <SectionTitle>Examples of the use cases this audit can uncover.</SectionTitle>
          <p className="mx-auto mt-6 max-w-3xl text-mute">
            Not templates. Not random automation. These are representative categories we assess against your business context.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutionModules.map((item, index) => (
            <article key={item.name} className="reveal-up solution-card" style={{ animationDelay: `${index * 70}ms` }}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#c8b2e8]">{item.name}</p>
              <p className="mt-3 text-sm text-[#f0e5ff]">{item.challenge}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-[#7a46ad] via-[#ea60d1] to-transparent" />
              <p className="mt-4 text-sm text-[#d6ff8a]">{item.outcome}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="offer" className="pt-12">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="reveal-up">
            <Eyebrow>Service Overview</Eyebrow>
            <SectionTitle>AI Efficiency Audit / AI Operations Audit</SectionTitle>
            <p className="mt-6 max-w-2xl leading-relaxed text-mute">
              This is a focused consulting engagement for owners who want commercially useful AI guidance. You get clarity on where AI creates value, where it does not, and how to execute changes without operational disruption.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="#booking">Request Audit Availability</PrimaryButton>
              <SecondaryButton href="#report-depth">See Report Depth</SecondaryButton>
            </div>
          </div>

          <div className="reveal-up rounded-3xl border border-[#47355f] bg-[#151024]/86 p-7">
            <h3 className="text-lg font-semibold text-[#f1e9ff]">Engagement flow</h3>
            <ol className="mt-6 space-y-4 text-sm leading-relaxed text-[#c9bbdf] sm:text-base">
              <li>
                <span className="font-semibold text-[#fff4ff]">1. Discovery:</span> workflow reality, constraints, and bottlenecks.
              </li>
              <li>
                <span className="font-semibold text-[#fff4ff]">2. Audit analysis:</span> inefficiency mapping and opportunity ranking.
              </li>
              <li>
                <span className="font-semibold text-[#fff4ff]">3. Strategic report:</span> recommendations, systems, and sequence.
              </li>
              <li>
                <span className="font-semibold text-[#fff4ff]">4. Review call:</span> implementation direction and next-step decisions.
              </li>
            </ol>
          </div>
        </div>
      </Section>

      <Section id="included">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>What Is Included</Eyebrow>
          <SectionTitle>Comprehensive, business-first deliverables.</SectionTitle>
        </div>
        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => (
            <article key={item.title} className="reveal-up card-deliverable" style={{ animationDelay: `${index * 70}ms` }}>
              <h3 className="text-lg font-semibold text-[#f4ebff]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c8badc] sm:text-base">{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="report-depth" className="section-contrast">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="reveal-up">
            <Eyebrow>Report Quality</Eyebrow>
            <SectionTitle>This is a serious operational review, not surface-level tool advice.</SectionTitle>
            <p className="mt-6 max-w-2xl text-mute">
              The output is detailed, strategic, and implementation-aware. You receive an operationally grounded report that supports immediate decisions.
            </p>
            <ul className="mt-7 grid gap-3 text-sm text-[#d6c9eb] sm:grid-cols-2 sm:text-base">
              {reportDepth.map((item) => (
                <li key={item} className="report-bullet">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="reveal-up report-card">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c7b3e6]">Audit Report Snapshot</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#f7ecff]">Strategy + Implementation Alignment</h3>
            <div className="mt-5 space-y-3">
              <div className="report-row">
                <span>Opportunity tiering</span>
                <strong>High / Medium / Low</strong>
              </div>
              <div className="report-row">
                <span>Execution complexity</span>
                <strong>Low / Moderate / Advanced</strong>
              </div>
              <div className="report-row">
                <span>Expected impact</span>
                <strong>Time, speed, conversion, quality</strong>
              </div>
              <div className="report-row">
                <span>Implementation path</span>
                <strong>30 / 60 / 90 day sequence</strong>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section id="value-anchor">
        <div className="reveal-up value-anchor">
          <div>
            <Eyebrow>Commercial Value Anchor</Eyebrow>
            <h2 className="mt-5 max-w-3xl font-display text-3xl leading-tight text-[#f9efff] sm:text-4xl lg:text-5xl">
              Hidden operational leakage is usually more expensive than owners expect.
            </h2>
            <p className="mt-5 max-w-2xl text-[#c6b5dd]">
              Manual workflows, delayed responses, and admin overload quietly burn capacity each month. The audit identifies exactly where that leakage sits and what reclaiming it can unlock.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="value-chip">
                <p className="text-3xl font-semibold text-[#f8efff]">8-15h</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#c0b1d6]">Weekly admin drag commonly seen</p>
              </div>
              <div className="value-chip">
                <p className="text-3xl font-semibold text-[#f8efff]">2-6%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#c0b1d6]">Lead leakage from slow follow-up</p>
              </div>
            </div>
          </div>

          <div className="value-comparison">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#cebde4]">Illustrative Impact View</p>
            <div className="mt-4 space-y-4">
              <div className="comparison-block">
                <p className="comparison-label">Current state</p>
                <p className="comparison-value">High admin load, inconsistent follow-up, avoidable handoff errors</p>
              </div>
              <div className="comparison-divider" />
              <div className="comparison-block">
                <p className="comparison-label">Post-audit state</p>
                <p className="comparison-value">Prioritized AI systems, faster response cycles, clearer operational leverage</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-[#b7a8ca]">
              Commercial impact depends on workflow volume and team structure. Estimates are refined inside your audit report.
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
              The goal is not AI adoption for its own sake. The goal is less friction, better execution quality, and higher-value use of your team.
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
              <div key={item} className="rounded-2xl border border-[#46385a] bg-[#171322]/88 px-4 py-3 text-sm text-[#eadfff] shadow-[0_8px_24px_rgba(0,0,0,0.30)] sm:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="about" className="section-contrast">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <aside className="reveal-up rounded-3xl border border-[#4a3b61] bg-[#171224]/90 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#cfbce8]">About The Founder</p>
            <div className="mt-5 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#a871ff]/45 bg-[#2a1b3a] text-2xl font-display text-[#f8eeff] shadow-[0_0_40px_rgba(205,102,255,0.32)]">
                F
              </div>
              <div>
                <p className="text-xl font-semibold text-[#f5eaff]">Finlay Sturzaker</p>
                <p className="text-sm text-[#c3b0dc]">Founder, Temporary Utopia</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#cbbbe3]">
              I work at the intersection of current AI capability and real operational realities, translating fast-moving tech into practical decisions owners can trust.
            </p>
          </aside>

          <div className="reveal-up rounded-3xl border border-[#4b3b63] bg-[#1a1528]/90 p-7 sm:p-9">
            <Eyebrow>Founder Perspective</Eyebrow>
            <SectionTitle>I am not trying to automate everything. I am trying to make your business easier to run.</SectionTitle>
            <p className="mt-6 leading-relaxed text-mute">
              I track model updates, tooling changes, and workflow patterns every week. The real value is knowing where AI belongs in a business and where it does not.
            </p>
            <p className="mt-4 leading-relaxed text-mute">
              The outcome is practical leverage: lower repetitive drag, faster response cycles, and clearer operational control without unnecessary complexity.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <div key={item} className="mini-point">
                  {item}
                </div>
              ))}
            </div>
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
          <article className="reveal-up trust-card">
            <p className="trust-title">Strategic First</p>
            <p className="trust-body">Decisions are driven by workflow realities and commercial logic, not software excitement.</p>
          </article>
          <article className="reveal-up trust-card" style={{ animationDelay: "80ms" }}>
            <p className="trust-title">Implementation Aware</p>
            <p className="trust-body">Recommendations include sequencing so execution is realistic for your team capacity.</p>
          </article>
          <article className="reveal-up trust-card" style={{ animationDelay: "160ms" }}>
            <p className="trust-title">Commercially Grounded</p>
            <p className="trust-body">Each priority is evaluated against time recovery, response speed, and leverage potential.</p>
          </article>
        </div>
      </Section>

      <Section id="fit" className="section-contrast">
        <div className="grid gap-6 rounded-3xl border border-[#47385c] bg-[#171321]/88 p-7 sm:p-9 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal-up">
            <Eyebrow>Who This Is For</Eyebrow>
            <h3 className="mt-5 text-2xl font-semibold text-[#f7ecff] sm:text-3xl">
              Best for owners who want AI clarity before committing budget and execution effort.
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-[#ccbedf] sm:text-base">
              {fitList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d6ff71]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal-up rounded-2xl border border-[#443757] bg-[#130f1e]/90 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#c2b2d8]">Not Ideal If</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#d7c9ea]">
              <li>You only want prompt tricks with no process-level strategy.</li>
              <li>You want immediate implementation without diagnostic analysis.</li>
              <li>You want trend commentary more than practical business outcomes.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="pricing">
        <div className="reveal-up rounded-3xl border border-[#6a4c84]/58 bg-[linear-gradient(140deg,rgba(32,18,44,0.96),rgba(11,9,16,0.95))] p-8 text-center shadow-[0_0_0_1px_rgba(201,131,255,0.2),0_30px_90px_rgba(0,0,0,0.56)] sm:p-12">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-5 font-display text-3xl text-[#fdf2ff] sm:text-5xl">AI Efficiency Audit</h2>
          <p className="mt-4 text-4xl font-semibold text-[#f06cc5] sm:text-5xl">From $1,000</p>
          <p className="mx-auto mt-5 max-w-2xl text-[#c8b6db]">
            Scope is tailored to workflow complexity, team size, and context. Every engagement includes the full report, recommendation framework, and strategy review call.
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
            Choose a preferred time, share context, and generate a booking draft instantly. You can also open the live scheduler if you prefer direct booking.
          </p>
        </div>

        <div className="mt-10 reveal-up">
          <BookingFlow />
        </div>
      </Section>

      <Section id="final-cta" className="pt-8">
        <div className="reveal-up rounded-3xl border border-[#513f67] bg-[#0a080f] px-7 py-12 text-center shadow-[0_34px_120px_rgba(0,0,0,0.74)] sm:px-10 sm:py-16">
          <p className="mx-auto w-fit rounded-full border border-[#6d4b8f]/65 bg-[#1a1325]/72 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#c7b2e1]">
            Next Step
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl text-[#f8eeff] sm:text-5xl">
            Build an AI strategy that saves time, protects revenue, and gives your team clearer operational control.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[#c4b5d8]">
            Start with a focused strategy call and see whether the AI Efficiency Audit is the right fit for your business now.
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
