const deliverables = [
  {
    title: "Workflow Deep-Dive",
    description:
      "Map how leads, delivery, communication, and follow-up actually move through your business today.",
  },
  {
    title: "Admin Load Audit",
    description:
      "Identify repetitive tasks, handoff friction, and coordination overhead draining your week.",
  },
  {
    title: "AI Fit Assessment",
    description:
      "Separate high-impact opportunities from low-value noise before any tool spend.",
  },
  {
    title: "System Recommendations",
    description:
      "Get practical tool and workflow options matched to your team capability and operating model.",
  },
  {
    title: "Implementation Roadmap",
    description:
      "Receive a staged rollout plan: what to do first, what to delay, and why.",
  },
  {
    title: "Time And Capacity Estimate",
    description:
      "See conservative projections of reclaimed hours and where that capacity should be reinvested.",
  },
];

const outcomes = [
  "Reduce repetitive admin work across owner and team",
  "Create cleaner, more reliable operating workflows",
  "Use staff time on work that actually moves revenue",
  "Avoid wasted spend on disconnected AI tools",
  "Build AI capability in a controlled, strategic way",
  "Increase operational leverage and profitability potential",
];

const fitList = [
  "Service businesses with heavy admin and process complexity",
  "Owners who know AI matters but need a practical starting point",
  "Teams stuck in repetitive manual coordination",
  "Businesses wanting clarity before committing to tool spend",
  "Operators who want strategy first, implementation second",
];

const proofPlaceholders = [
  {
    title: "Case Study Placeholder",
    body: "Replace with one short before-and-after case: issue, recommendation, and measurable operational gain.",
  },
  {
    title: "Client Quote Placeholder",
    body: "Add a real owner testimonial focused on confidence, clarity, and reduced busywork.",
  },
  {
    title: "Sector Placeholder",
    body: "Insert approved logos or list sectors served once client permissions are in place.",
  },
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
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center rounded-full border border-[#2a3f66] bg-[#111c34] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b7c6eb]">
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
        <div className="absolute inset-x-0 top-[-14rem] h-[42rem] bg-[radial-gradient(circle_at_top,_rgba(97,145,255,0.42),_rgba(6,8,16,0)_62%)]" />
        <div className="absolute left-[-15rem] top-[28rem] h-[28rem] w-[28rem] rounded-full bg-[#375acc]/20 blur-[120px]" />
        <div className="absolute right-[-12rem] top-[64rem] h-[26rem] w-[26rem] rounded-full bg-[#39c4ff]/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_1px_1px,rgba(148,176,255,0.35)_1px,transparent_0)] [background-size:26px_26px]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-[#2a3f66] bg-[#070c18]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="font-display text-xl tracking-tight text-[#dbe7ff]">
            Temporary Utopia
          </a>
          <nav className="hidden items-center gap-6 text-sm text-mute md:flex">
            <a className="transition hover:text-ink" href="#approach">
              Approach
            </a>
            <a className="transition hover:text-ink" href="#about">
              About Finlay
            </a>
            <a className="transition hover:text-ink" href="#pricing">
              Pricing
            </a>
          </nav>
          <a href="#pricing" className="btn-secondary text-xs sm:text-sm">
            Request Availability
          </a>
        </div>
      </header>

      <Section id="top" className="pb-14 pt-16 sm:pt-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="reveal-up">
            <Eyebrow>Founder-Led AI Operations Advisory</Eyebrow>
            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.03] text-[#eff4ff] sm:text-5xl lg:text-6xl">
              Diagnose where AI should improve your business before you buy another tool.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#a7b8de]">
              I help business owners cut operational drag with a practical AI Efficiency Audit. We start with how your business actually runs, then build a clear strategy for where AI can save time, reduce friction, and improve profitability.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton href="#pricing">Book Your Audit</PrimaryButton>
              <SecondaryButton href="#fit">See If Your Business Is A Fit</SecondaryButton>
            </div>
            <p className="mt-5 text-sm text-[#91a4cd]">
              Practical before technical. Diagnosis before implementation. Business outcomes before tool hype.
            </p>
          </div>

          <aside className="reveal-up relative rounded-3xl border border-[#31476f] bg-[#101b34] p-6 shadow-[0_0_0_1px_rgba(116,164,255,0.15),0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#5a85ff]/25 blur-2xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9ab1e6]">Audit Preview</p>
            <h3 className="mt-3 text-xl font-semibold text-[#e9f0ff]">What you leave with</h3>
            <div className="mt-5 space-y-4">
              <div className="card-soft">
                <p className="text-xs uppercase tracking-[0.12em] text-[#8ea5da]">Clarity Map</p>
                <p className="mt-2 text-sm text-[#d7e2ff]">Where AI should and should not be introduced across your workflows.</p>
              </div>
              <div className="card-soft">
                <p className="text-xs uppercase tracking-[0.12em] text-[#8ea5da]">Priority Plan</p>
                <p className="mt-2 text-sm text-[#d7e2ff]">A staged implementation sequence your team can adopt without disruption.</p>
              </div>
              <div className="card-soft">
                <p className="text-xs uppercase tracking-[0.12em] text-[#8ea5da]">Economic Lens</p>
                <p className="mt-2 text-sm text-[#d7e2ff]">Expected time recovery and leverage opportunities tied to operations.</p>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section id="problem" className="pt-8">
        <div className="reveal-up rounded-3xl border border-[#2a3f66] bg-[#0b1428]/85 p-7 sm:p-10">
          <Eyebrow>The Real Problem</Eyebrow>
          <SectionTitle>
            Most owners are either frozen by AI noise or wasting money on disconnected experiments.
          </SectionTitle>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <p className="leading-relaxed text-mute">
              AI is moving faster than most operators can reasonably track. Between client delivery, team coordination, and everyday decisions, there is little room left to test every new platform.
            </p>
            <p className="leading-relaxed text-mute">
              So businesses either do nothing or adopt random tools without a plan. That usually increases complexity, creates adoption fatigue, and burns time that should be spent on growth.
            </p>
          </div>
        </div>
      </Section>

      <Section id="approach">
        <div className="text-center">
          <Eyebrow>Approach</Eyebrow>
          <SectionTitle>Most AI advice starts with tools. I start with your business.</SectionTitle>
          <p className="mx-auto mt-6 max-w-3xl text-mute">
            Temporary Utopia is deliberately strategy-first: diagnose your operating reality, then recommend AI systems where they create clear, practical value.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="reveal-up rounded-3xl border border-[#4a2c5f] bg-[#170f24]/80 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#cf9eff]">Typical AI Consulting</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#f2e7ff]">Tool-first, context-later</h3>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#c3abd8] sm:text-base">
              <li>Starts with software demos before workflow diagnosis</li>
              <li>Automates isolated tasks without systems thinking</li>
              <li>Adds stack complexity and team resistance</li>
              <li>Leaves owners with activity, not clarity</li>
            </ul>
          </article>

          <article className="reveal-up rounded-3xl border border-[#2a3f66] bg-[#101b34] p-7 shadow-[0_0_0_1px_rgba(116,164,255,0.13),0_20px_70px_rgba(0,0,0,0.35)]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9cc2ff]">Temporary Utopia</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#ecf3ff]">Diagnosis-first, implementation-ready</h3>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#b7c7eb] sm:text-base">
              <li>Understand how your business works before selecting tools</li>
              <li>Prioritize high-leverage opportunities with low adoption friction</li>
              <li>Recommend systems around outcomes, not hype cycles</li>
              <li>Deliver a roadmap your team can actually execute</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section id="offer" className="pt-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="reveal-up">
            <Eyebrow>Service Overview</Eyebrow>
            <SectionTitle>AI Efficiency Audit / AI Operations Audit</SectionTitle>
            <p className="mt-6 max-w-2xl leading-relaxed text-mute">
              This is a focused consulting engagement for business owners who want practical guidance, not AI noise. You get a strategic operating view: where AI creates real value, where it adds risk, and how to roll improvements out with control.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="#pricing">Request Audit Availability</PrimaryButton>
              <SecondaryButton href="#included">View Deliverables</SecondaryButton>
            </div>
          </div>

          <div className="reveal-up rounded-3xl border border-[#2a3f66] bg-[#0c1630]/85 p-7">
            <h3 className="text-lg font-semibold text-[#e5eeff]">Engagement flow</h3>
            <ol className="mt-6 space-y-4 text-sm leading-relaxed text-[#b7c8eb] sm:text-base">
              <li>
                <span className="font-semibold text-[#f1f6ff]">1. Discovery:</span> understand workflows, constraints, and bottlenecks.
              </li>
              <li>
                <span className="font-semibold text-[#f1f6ff]">2. Audit analysis:</span> map inefficiencies and rank AI opportunities.
              </li>
              <li>
                <span className="font-semibold text-[#f1f6ff]">3. Strategy report:</span> recommendations, systems, and sequencing.
              </li>
              <li>
                <span className="font-semibold text-[#f1f6ff]">4. Review call:</span> align on next steps and rollout logic.
              </li>
            </ol>
          </div>
        </div>
      </Section>

      <Section id="included" className="section-contrast">
        <div className="text-center">
          <Eyebrow>What Is Included</Eyebrow>
          <SectionTitle>Everything required to move from confusion to clear execution.</SectionTitle>
        </div>
        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => (
            <article key={item.title} className="reveal-up card-deliverable" style={{ animationDelay: `${index * 80}ms` }}>
              <h3 className="text-lg font-semibold text-[#edf4ff]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#a8bbdf] sm:text-base">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="outcomes">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="reveal-up">
            <Eyebrow>Why It Matters</Eyebrow>
            <SectionTitle>Operational and financial upside, not just technical novelty.</SectionTitle>
            <p className="mt-6 max-w-xl text-mute">
              Better systems do more than save time. They reduce avoidable errors, protect focus, and create more capacity for high-value work.
            </p>
            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              <div className="metric-tile">
                <p className="text-3xl font-semibold text-[#eaf2ff]">10-30h</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#89a0d2]">Monthly recovery potential</p>
              </div>
              <div className="metric-tile">
                <p className="text-3xl font-semibold text-[#eaf2ff]">3-5</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#89a0d2]">High-leverage opportunities typically found</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-[#8094c2]">Planning ranges are indicative and refined during audit analysis.</p>
          </div>

          <div className="reveal-up grid gap-3">
            {outcomes.map((item) => (
              <div key={item} className="rounded-2xl border border-[#2a3f66] bg-[#101b34] px-4 py-3 text-sm text-[#d9e5ff] shadow-[0_8px_24px_rgba(0,0,0,0.26)] sm:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="about" className="section-contrast">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <aside className="reveal-up rounded-3xl border border-[#2a3f66] bg-[#0c1834]/90 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9ebefe]">About The Founder</p>
            <div className="mt-5 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#6f95ff]/50 bg-[#182d5e] text-2xl font-display text-[#f0f5ff] shadow-[0_0_40px_rgba(107,167,255,0.35)]">
                F
              </div>
              <div>
                <p className="text-xl font-semibold text-[#edf3ff]">Finlay Sturzaker</p>
                <p className="text-sm text-[#9db4e0]">Founder, Temporary Utopia</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#b8c9ea]">
              I work at the intersection of modern AI systems and real-world business operations, translating fast-moving capability into practical decisions owners can trust.
            </p>
          </aside>

          <div className="reveal-up rounded-3xl border border-[#2a3f66] bg-[#111c35] p-7 sm:p-9">
            <Eyebrow>Founder Perspective</Eyebrow>
            <SectionTitle>I am not here to automate your business blindly.</SectionTitle>
            <p className="mt-6 leading-relaxed text-mute">
              I actively track model updates, tool shifts, and workflow patterns every week. But knowing tools is not the real value. The value is matching the right capability to the right operational bottleneck.
            </p>
            <p className="mt-4 leading-relaxed text-mute">
              My approach is simple: keep what works, remove repetitive drag, and introduce AI where it creates measurable leverage for owners and teams. The goal is a business that feels easier to run, not more complicated.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="mini-point">Current on model and tooling shifts</div>
              <div className="mini-point">Strong operations lens, not tool obsession</div>
              <div className="mini-point">Clear recommendation logic and priority tiers</div>
              <div className="mini-point">Implementation guidance grounded in team reality</div>
            </div>
            <div className="mt-8">
              <PrimaryButton href="#pricing">Start With A Strategy Call</PrimaryButton>
            </div>
          </div>
        </div>
      </Section>

      <Section id="trust">
        <div className="text-center">
          <Eyebrow>Trust And Proof</Eyebrow>
          <SectionTitle>Structured to lower uncertainty and build confidence.</SectionTitle>
          <p className="mx-auto mt-6 max-w-3xl text-mute">
            The modules below are intentional placeholders for approved proof assets. They are designed to be swapped quickly with real testimonials, case studies, and logos.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {proofPlaceholders.map((item, index) => (
            <article key={item.title} className="reveal-up rounded-3xl border border-[#2a3f66] bg-[#0f1a32] p-6" style={{ animationDelay: `${index * 80}ms` }}>
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#8fa8de]">{item.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#becfeb]">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 reveal-up rounded-3xl border border-[#2a3f66] bg-[#0b152d]/85 p-6 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#95afe8]">Engagement Guardrails</p>
          <div className="mt-4 grid gap-3 text-sm text-[#d6e1fb] sm:grid-cols-2">
            <p>Recommendations are tied to a specific process and business rationale.</p>
            <p>No forced stack changes when improving your current systems is better.</p>
            <p>Priority tiers prevent over-implementation and protect team focus.</p>
            <p>Clear handover supports internal teams or external implementers.</p>
          </div>
        </div>
      </Section>

      <Section id="fit" className="section-contrast">
        <div className="grid gap-6 rounded-3xl border border-[#2a3f66] bg-[#101b34] p-7 sm:p-9 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal-up">
            <Eyebrow>Who This Is For</Eyebrow>
            <h3 className="mt-5 text-2xl font-semibold text-[#eaf2ff] sm:text-3xl">
              Best for owners who want AI clarity before committing to execution.
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-[#b8c9ea] sm:text-base">
              {fitList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#7db3ff]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal-up rounded-2xl border border-[#2a3f66] bg-[#0d1730]/85 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#97afe2]">Not Ideal If</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#c2d2ef]">
              <li>You only want prompt tricks without process-level change.</li>
              <li>You want instant implementation with no diagnostic strategy.</li>
              <li>You want trend commentary more than practical outcomes.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="pricing">
        <div className="reveal-up rounded-3xl border border-[#597fdf]/45 bg-[linear-gradient(140deg,rgba(14,26,55,0.95),rgba(8,13,29,0.95))] p-8 text-center shadow-[0_0_0_1px_rgba(84,129,242,0.25),0_28px_90px_rgba(0,0,0,0.52)] sm:p-12">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-5 font-display text-3xl text-[#f4f8ff] sm:text-5xl">AI Efficiency Audit</h2>
          <p className="mt-4 text-4xl font-semibold text-[#82b6ff] sm:text-5xl">From $1,000</p>
          <p className="mx-auto mt-5 max-w-2xl text-[#a8bcdf]">
            Scope is adjusted to business complexity, team size, and workflow depth. Every engagement includes the audit report, recommendation framework, and strategic review call.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton href="#final-cta">Request Audit Availability</PrimaryButton>
            <SecondaryButton href="mailto:hello@temporaryutopia.com">Email Temporary Utopia</SecondaryButton>
          </div>
          <p className="mt-4 text-xs text-[#8197c6]">Pricing block is intentionally easy to update as your offer evolves.</p>
        </div>
      </Section>

      <Section id="final-cta" className="pt-8">
        <div className="reveal-up rounded-3xl border border-[#2a3f66] bg-[#060b18] px-7 py-12 text-center shadow-[0_30px_120px_rgba(0,0,0,0.7)] sm:px-10 sm:py-16">
          <p className="mx-auto w-fit rounded-full border border-[#5872c9]/60 bg-[#0f1a38]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#9db6ef]">
            Next Step
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl text-[#f2f7ff] sm:text-5xl">
            Give your business an AI strategy that feels clear, practical, and commercially smart.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[#a9bddf]">
            If you are ready to reduce operational drag and make better AI decisions with confidence, start with a focused audit conversation.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@temporaryutopia.com?subject=AI%20Efficiency%20Audit%20Inquiry"
              className="btn-primary"
            >
              Start With A Strategy Call
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
