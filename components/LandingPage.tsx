const deliverables = [
  {
    title: "Workflow Analysis",
    description:
      "A practical review of how work currently moves through your business, from lead intake to delivery and follow-up.",
  },
  {
    title: "Inefficiency Mapping",
    description:
      "Pinpoint where friction, delays, and handoff gaps are slowing the team down or increasing error risk.",
  },
  {
    title: "Repetitive Task Review",
    description:
      "Identify recurring admin and manual tasks that can be reduced, standardized, or automated.",
  },
  {
    title: "AI Opportunity Identification",
    description:
      "Clear, ranked opportunities where AI can improve speed, consistency, and decision support.",
  },
  {
    title: "Recommended Systems",
    description:
      "Shortlist of tools and workflow patterns suited to your business model, team size, and operating constraints.",
  },
  {
    title: "Implementation Roadmap",
    description:
      "A staged plan showing what to do first, what to defer, and how to roll changes out with minimal disruption.",
  },
  {
    title: "Time-Saving Estimates",
    description:
      "Conservative projections of where hours can be reclaimed and how that capacity can be redirected to growth.",
  },
];

const outcomes = [
  "Less repetitive admin burden",
  "More founder and team time back",
  "Clearer, more reliable internal processes",
  "Stronger use of staff capability",
  "Reduced operational waste",
  "Smarter AI adoption decisions",
  "Better leverage from existing systems",
  "Higher profitability potential",
];

const audience = [
  "Businesses overloaded by admin and coordination work",
  "Owners who know AI matters but want a clear starting point",
  "Teams repeating manual tasks that drain focus",
  "Companies wanting practical guidance before tool spend",
  "Operators who value clarity before implementation",
];

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">{children}</div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center rounded-full border border-line bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-mute">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-5 font-display text-3xl leading-tight text-ink sm:text-4xl">
      {children}
    </h2>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      {children}
    </a>
  );
}

export function LandingPage() {
  return (
    <main className="relative overflow-x-hidden bg-surface text-ink">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(24,79,196,0.18),_rgba(248,249,252,0)_58%)]" />
        <div className="absolute right-[-8rem] top-[22rem] h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute left-[-8rem] top-[58rem] h-96 w-96 rounded-full bg-[#9fb1ce]/20 blur-3xl" />
      </div>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-7 lg:px-10">
        <p className="font-display text-xl font-semibold tracking-tight text-ink">
          Temporary Utopia
        </p>
        <a
          href="#pricing"
          className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-panel"
        >
          See Audit Options
        </a>
      </header>

      <Section className="pt-10 sm:pt-14">
        <div className="fade-in grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionLabel>AI Efficiency Audit For Service Businesses</SectionLabel>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Find exactly where AI should improve your business before you spend on tools.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mute">
              Temporary Utopia runs a paid AI Operations Audit for busy owners who want practical gains, not hype. We map your workflows, isolate repetitive load, and give you a clear, business-first plan for smarter AI adoption.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton href="#pricing">Book Your Audit</PrimaryButton>
              <SecondaryButton href="#offer">See How It Works</SecondaryButton>
            </div>
            <p className="mt-5 text-sm text-mute">
              Trusted by operators who want clarity before implementation and outcomes before complexity.
            </p>
          </div>

          <div className="stagger-1 rounded-card border border-line bg-white/90 p-6 shadow-soft backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-mute">Why Owners Reach Out</p>
            <ul className="mt-5 space-y-4 text-sm text-ink sm:text-base">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>"We know AI matters, but we do not know where to begin."</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>"Our team is drowning in repetitive admin and handoffs."</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>"We need a clear plan before buying tools or hiring implementation support."</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="problem">
        <div className="rounded-card border border-line bg-white px-7 py-10 shadow-card sm:px-10">
          <SectionLabel>The Problem</SectionLabel>
          <SectionTitle>Most businesses are stuck between inaction and random tool adoption.</SectionTitle>
          <div className="mt-8 grid gap-6 text-mute sm:grid-cols-2">
            <p className="leading-relaxed">
              AI is moving fast. Business owners are already stretched across clients, staff, and delivery. Very few have the time to evaluate every new model, platform, and workflow change.
            </p>
            <p className="leading-relaxed">
              The result is predictable: either nothing happens, or tools get trialed without a plan. That creates confusion, wasted time, avoidable spend, and even more operational noise.
            </p>
          </div>
        </div>
      </Section>

      <Section id="approach" className="bg-gradient-to-b from-transparent to-white/70">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel>Our Approach</SectionLabel>
          <SectionTitle>Diagnosis first. Recommendations second. Implementation last.</SectionTitle>
          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-mute">
            We do not start by pushing software or throwing automations at the wall. We start by understanding how your business actually runs, then identify where AI can genuinely improve flow, speed, and consistency.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Understand Operations",
              text: "Review real workflows, team responsibilities, bottlenecks, and repetitive activity.",
            },
            {
              step: "02",
              title: "Find High-Value Opportunities",
              text: "Prioritize where AI can create practical impact with low risk and clear ROI logic.",
            },
            {
              step: "03",
              title: "Deliver Actionable Guidance",
              text: "Provide recommendations and a rollout path tailored to your business and team capacity.",
            },
          ].map((item) => (
            <article
              key={item.step}
              className="rounded-card border border-line bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-0.5"
            >
              <p className="text-sm font-semibold tracking-[0.14em] text-accent">{item.step}</p>
              <h3 className="mt-4 text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-mute">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="offer">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionLabel>The Offer</SectionLabel>
            <SectionTitle>AI Efficiency Audit / AI Operations Audit</SectionTitle>
            <p className="mt-6 max-w-2xl leading-relaxed text-mute">
              This is a focused consulting engagement designed to give you operational clarity. You get an expert view of where AI belongs in your business, where it does not, and what to do next in practical order.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-mute">
              The deliverable is a structured recommendation framework you can use immediately, whether you implement internally or with outside support.
            </p>
          </div>
          <div className="rounded-card border border-line bg-panel p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-ink">Engagement Flow</h3>
            <ol className="mt-5 space-y-4 text-sm leading-relaxed text-mute sm:text-base">
              <li>
                <span className="font-semibold text-ink">1. Discovery Session:</span> scope your current operations, systems, and friction points.
              </li>
              <li>
                <span className="font-semibold text-ink">2. Audit Analysis:</span> map workflows, identify waste, and evaluate AI fit by process.
              </li>
              <li>
                <span className="font-semibold text-ink">3. Strategy Report:</span> deliver priority recommendations, tool options, and staged roadmap.
              </li>
              <li>
                <span className="font-semibold text-ink">4. Review Call:</span> walk through findings and decide next actions with confidence.
              </li>
            </ol>
          </div>
        </div>
      </Section>

      <Section id="included" className="bg-white/70">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel>What Is Included</SectionLabel>
          <SectionTitle>A complete view of where efficiency can be unlocked.</SectionTitle>
        </div>
        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => (
            <article
              key={item.title}
              className="fade-in rounded-card border border-line bg-white p-5 shadow-soft"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute sm:text-base">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="outcomes">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionLabel>Why It Matters</SectionLabel>
            <SectionTitle>Operational improvements that compound over time.</SectionTitle>
            <p className="mt-6 max-w-xl leading-relaxed text-mute">
              The goal is not AI for its own sake. The goal is a business that runs with less friction, better decision support, and more capacity for high-value work.
            </p>
            <div className="mt-8">
              <PrimaryButton href="#pricing">Start With An Audit</PrimaryButton>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item} className="rounded-xl border border-line bg-white p-4 text-sm font-medium text-ink shadow-soft">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="trust" className="bg-white/80">
        <div className="rounded-card border border-line bg-white p-8 shadow-card sm:p-10">
          <SectionLabel>Why Work With Me</SectionLabel>
          <SectionTitle>Current on AI. Grounded in business operations.</SectionTitle>
          <p className="mt-6 max-w-4xl leading-relaxed text-mute">
            I continuously track and test emerging AI tools, model changes, and workflow design patterns. The value I bring is translation: turning fast-moving AI capability into practical business decisions that fit real teams, real constraints, and real operating goals.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-line bg-surface p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-mute">Current</p>
              <p className="mt-2 text-sm text-ink">Actively monitoring releases, tools, and implementation patterns.</p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-mute">Practical</p>
              <p className="mt-2 text-sm text-ink">Recommendations are tied to workflow reality, not trend cycles.</p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-mute">Trustworthy</p>
              <p className="mt-2 text-sm text-ink">Clear rationale, clear priority order, no hype-driven pressure.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="fit">
        <div className="grid gap-6 rounded-card border border-line bg-white p-7 shadow-soft sm:grid-cols-2 sm:p-9">
          <div>
            <SectionLabel>Who This Is For</SectionLabel>
            <h3 className="mt-5 text-2xl font-semibold text-ink">Best fit for service-led businesses that want clarity first.</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-mute sm:text-base">
              {audience.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-card border border-line bg-panel p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-mute">Not Ideal If</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink">
              <li>You only want one-off prompt tricks without workflow improvement.</li>
              <li>You want immediate implementation without diagnostic review.</li>
              <li>You are looking for trend commentary instead of operational guidance.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="pricing" className="bg-gradient-to-b from-white/70 to-transparent">
        <div className="mx-auto max-w-4xl rounded-card border border-line bg-white p-8 text-center shadow-card sm:p-12">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="mt-5 font-display text-3xl text-ink sm:text-4xl">AI Efficiency Audit</h2>
          <p className="mt-3 text-3xl font-semibold text-accent sm:text-4xl">From $1,000</p>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-mute">
            Final scope depends on business complexity, team size, and number of workflows reviewed. Every engagement includes a full audit report, recommendation framework, and roadmap discussion call.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton href="#final-cta">Request Audit Availability</PrimaryButton>
            <SecondaryButton href="mailto:hello@temporaryutopia.com">Email Temporary Utopia</SecondaryButton>
          </div>
        </div>
      </Section>

      <Section id="final-cta" className="pt-8">
        <div className="rounded-card border border-line bg-ink px-7 py-12 text-center shadow-card sm:px-10 sm:py-14">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Build an AI strategy your business can actually use.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-300">
            If you want less admin drag, clearer workflows, and better operational leverage, start with a focused audit. You will leave with direction, not guesswork.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@temporaryutopia.com?subject=AI%20Efficiency%20Audit%20Inquiry"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Book Your First Conversation
            </a>
            <a
              href="#offer"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/15"
            >
              Review The Audit Process
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
