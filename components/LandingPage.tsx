import Image from "next/image";

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://calendly.com/finlay-temporaryutopia/30min";
const emailAddress = "finlay@temporaryutopia.com";

const navItems = [
  { href: "#proof", label: "Proof", current: true },
  { href: "#services", label: "Services" },
  { href: "#ladder", label: "Access Ladder" },
  { href: "#advisory", label: "Advisory" },
  { href: "#verticals", label: "Verticals" },
  { href: "#about", label: "About" },
];

const trapCards = [
  { title: "Workflow Chaos", icon: "workflow", tone: "mist" },
  { title: "Tool Bloat", icon: "warning", tone: "dark" },
  { title: "Time Leakage", icon: "hourglass", tone: "gold" },
  { title: "Vendor Bias", icon: "bias", tone: "mist" },
];

const auditPoints = [
  "Map every manual touchpoint",
  "Identify shadow-work and tool overlap",
  "Quantify where slow response and rework are costing margin",
];

const proofHighlights = [
  {
    label: "Audits Shipped",
    value: "37",
    detail: "Mortgage, accounting, and boutique legal operators in the last 9 months.",
  },
  {
    label: "Hours Unlocked",
    value: "420+",
    detail: "Monthly hours returned by removing manual handoffs and follow-up noise.",
  },
  {
    label: "Systems in Build",
    value: "12",
    detail: "Active operator installs where we own the workflow alongside the team.",
  },
];

const proofStories = [
  {
    client: "Mortgage Collective",
    metric: "+14 hrs/week",
    deliverable: "AI Audit + Response Playbook",
    summary: "Automated document chase and underwriting prep across 9 brokers.",
  },
  {
    client: "Ledger & Co Accountants",
    metric: "-38% admin drag",
    deliverable: "Embedded Operator Sprint",
    summary: "Centralized intake and reporting copilot for an 18-person compliance team.",
  },
  {
    client: "Civic Legal",
    metric: "3 min lead reply",
    deliverable: "Lead Concierge System",
    summary: "Voice-qualified intake that routes briefs to partners with instant context packs.",
  },
];

const ladderSteps = [
  {
    stage: "01",
    name: "Operator Dispatch",
    type: "Free intelligence",
    description: "Weekly proof-of-work breakdowns, audit snapshots, and workflow math.",
    ctaLabel: "Get the briefing",
    href: "mailto:finlay@temporaryutopia.com?subject=Operator%20Dispatch",
  },
  {
    stage: "02",
    name: "Operator Circle",
    type: "Private community",
    description: "Invite-only Discord for teardown requests, Q&A, and live build sessions.",
  },
  {
    stage: "03",
    name: "Systems Blueprint",
    type: "Program",
    description: "Mid-ticket curriculum showing our full audit-to-implementation infrastructure.",
  },
  {
    stage: "04",
    name: "AI Efficiency Audit",
    type: "Flagship diagnostic",
    description: "One-day workflow investigation with a build vs. buy roadmap for leadership.",
    ctaLabel: "Book an audit",
    href: bookingUrl,
  },
  {
    stage: "05",
    name: "Embedded Operator",
    type: "Retained partnership",
    description: "We build and run the automation stack alongside your leadership team.",
    ctaLabel: "Discuss embed",
    href: bookingUrl,
  },
];

const promiseLevels = [
  {
    level: "Level 1",
    title: "See Time Loss",
    body: "Total visibility into where your team's energy is being drained by admin friction.",
  },
  {
    level: "Level 2",
    title: "Identify Fit",
    body: "Determine which AI models actually solve your specific vertical bottlenecks.",
  },
  {
    level: "Level 3",
    title: "Prioritize",
    body: "Stop doing everything. Start doing the 20% of automation that yields 80% of the result.",
  },
  {
    level: "Level 4",
    title: "Reduce Chaos",
    body: "Move toward quiet efficiency: calmer systems, cleaner handoffs, and less owner drag.",
  },
];

const comparisonRows = [
  {
    category: "Primary Goal",
    agency: "Billing for setups",
    reseller: "Software commissions",
    advisory: "Workflow optimization",
  },
  {
    category: "Bias",
    agency: "Specific stack preference",
    reseller: "Highly biased to one tool",
    advisory: "Zero vendor bias",
  },
  {
    category: "Focus",
    agency: 'Technical "plumbing"',
    reseller: "Feature adoption",
    advisory: "Strategic outcomes",
  },
];

const verticals = [
  {
    title: "Mortgage Brokers",
    body: "Automate the data-gathering and client update loop without losing the personal touch that closes deals.",
    icon: "mortgage",
  },
  {
    title: "Accountants",
    body: "Remove manual reconciliation and data entry so compliance work creates more advisory margin.",
    icon: "accounting",
  },
  {
    title: "Legal & Admin",
    body: "Design high-precision document and contract workflows for boutique firms where errors are expensive.",
    icon: "legal",
  },
];

const concerns = [
  {
    quote: "We're already using several AI tools.",
    body: "That is precisely why you need an audit. Most firms end up with a Frankenstein stack where tools do not talk, data is fragmented, and team adoption stays low. The job is to fix the system, not add another subscription.",
  },
  {
    quote: "Are we too small for this level of advisory?",
    body: "If you have more than five employees, manual friction is already costing real money. The earlier you architect cleaner workflows, the easier the next stage of growth becomes.",
  },
];

const footerLinks = [
  { href: "#advisory", label: "Method" },
  { href: "#verticals", label: "Verticals" },
  { href: `mailto:${emailAddress}`, label: "Contact" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4.5 10h10" />
      <path d="m10.5 4.5 5 5-5 5" />
    </svg>
  );
}

function SectionIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "workflow":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6h4v4H6z" />
          <path d="M14 6h4v4h-4z" />
          <path d="M6 14h4v4H6z" />
          <path d="M12 8h2m-4 8h4m4-6v6h-4" />
        </svg>
      );
    case "warning":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 4 4.5 19h15L12 4Z" />
          <path d="M12 9v4.5" />
          <path d="M12 16.5h.01" />
        </svg>
      );
    case "hourglass":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 4h10" />
          <path d="M7 20h10" />
          <path d="M8 4c0 3 2 4.5 4 6 2-1.5 4-3 4-6" />
          <path d="M8 20c0-3 2-4.5 4-6 2 1.5 4 3 4 6" />
        </svg>
      );
    case "bias":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 16c0-2.5 2-4.5 4.5-4.5H19" />
          <path d="m14 7 5 4.5-5 4.5" />
          <path d="M5 7h4" />
        </svg>
      );
    case "mortgage":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m4 11 8-6 8 6" />
          <path d="M7 10.5V19h10v-8.5" />
          <path d="M10.5 19v-4h3v4" />
        </svg>
      );
    case "accounting":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 4h10v16H7z" />
          <path d="M10 8h4" />
          <path d="M10 12h4" />
          <path d="M10 16h2" />
        </svg>
      );
    case "legal":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 5v14" />
          <path d="M7 8h10" />
          <path d="m9 8-3 5h6l-3-5Zm9 0-3 5h6l-3-5Z" />
          <path d="M9 20h6" />
        </svg>
      );
    default:
      return null;
  }
}

export function LandingPage() {
  return (
    <>
      <header className="landing-header">
        <div className="landing-shell header-shell">
          <a href="#top" className="brand-wordmark">
            FinnAI
          </a>

          <nav className="header-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className={item.current ? "is-current" : undefined}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href={bookingUrl} className="header-cta" target="_blank" rel="noreferrer">
            Book Strategy Call
          </a>
        </div>
      </header>

      <main id="main-content" className="editorial-page">
        <section id="top" className="hero-band">
          <div className="landing-shell hero-shell">
            <div className="hero-copy-block">
              <span className="section-chip">Independent AI Advisory</span>
              <h1 className="hero-display">
                Stop the <em>software bloat.</em>
              </h1>
              <p className="hero-lead">
                Find where slow follow-up, duplicated admin, and messy handoffs are costing leads, time, and margin before
                you buy another platform. Diagnose first, implement later.
              </p>

              <div className="hero-actions">
                <a href={bookingUrl} className="primary-button" target="_blank" rel="noreferrer">
                  <span>Book a Strategy Call with Finlay</span>
                  <ArrowIcon />
                </a>
                <a href="#methodology" className="secondary-button">
                  View Methodology
                </a>
              </div>
            </div>

            <div className="hero-portrait-column">
              <div className="hero-portrait-glow" aria-hidden="true" />
              <figure className="hero-portrait-card">
                <div className="hero-portrait-media">
                  <Image
                    src="/finlay-portrait.png"
                    alt="Portrait of Finlay Sturzaker"
                    fill
                    priority
                    sizes="(max-width: 980px) 100vw, 34rem"
                  />
                </div>
                <figcaption className="hero-portrait-caption">
                  <p>&ldquo;Efficiency isn&apos;t about the tool. It&apos;s about the workflow.&rdquo;</p>
                  <span>Finlay Sturzaker, Founder</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="proof" className="proof-band">
          <div className="landing-shell">
            <div className="proof-grid">
              <div className="proof-copy">
                <span className="section-chip">Proof-led Framing</span>
                <h2 className="section-heading">
                  The <em>Proof</em> Ledger.
                </h2>
                <p>
                  Every engagement starts with evidence. Real audits, shipped systems, and operator installs that are live
                  inside service firms today. No theory, just documented leverage.
                </p>

                <ul className="proof-list">
                  <li>Screen recordings of the exact audit deliverables you will receive.</li>
                  <li>Before/after workflow math so you know where the hours come from.</li>
                  <li>Operator journal that shows what is in build this week.</li>
                </ul>
              </div>

              <div className="proof-metrics">
                {proofHighlights.map((item) => (
                  <article key={item.label} className="proof-metric-card">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="proof-showcase" aria-label="Selected client outcomes">
              {proofStories.map((story) => (
                <article key={story.client} className="proof-story">
                  <div className="proof-story-head">
                    <span className="proof-client">{story.client}</span>
                    <span className="proof-metric">{story.metric}</span>
                  </div>
                  <h3>{story.deliverable}</h3>
                  <p>{story.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="problem-band">
          <div className="landing-shell problem-shell">
            <div className="problem-copy">
              <h2 className="section-heading">
                The &quot;More Tools&quot;
                <br />
                <em>Trap.</em>
              </h2>

              <div className="problem-copy-stack">
                <p>
                  Most businesses are adding complexity, not efficiency. Every new subscription promises a revolution but
                  usually results in more tabs, more notifications, and more friction.
                </p>

                <div className="truth-callout">
                  <p>
                    Most firms do not have a tooling problem first. They have a visibility problem: no clear view of where
                    leads, time, and margin are quietly leaking.
                  </p>
                </div>

                <p>We help you cut through the noise. We don&apos;t sell software. We sell clarity.</p>
              </div>
            </div>

            <div className="trap-grid" aria-label="Operational problems">
              {trapCards.map((card) => (
                <article key={card.title} className={`trap-card tone-${card.tone}`}>
                  <span className="tile-icon">
                    <SectionIcon icon={card.icon} />
                  </span>
                  <h3>{card.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="methodology" className="offer-band">
          <div className="landing-shell">
            <div className="section-intro is-centered">
              <h2 className="section-title">AI Efficiency Audit</h2>
              <p>
                A one-day diagnostic to show where slow response, admin rebuild, and workflow drag are actually costing the
                business.
              </p>
            </div>

            <div className="offer-grid">
              <article className="offer-card is-primary">
                <span className="offer-card-number">01</span>

                <div>
                  <h3>Full Workflow Diagnostic</h3>
                  <ul className="offer-points">
                    {auditPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="offer-price">
                  <p>Investment</p>
                  <strong>From $1,000</strong>
                </div>
              </article>

              <article className="offer-card is-accent">
                <div>
                  <h3>The Outcome</h3>
                  <p>
                    You receive a Build vs. Buy blueprint. No generic advice. Just specific actions to reclaim 10+ hours per
                    week per staff member.
                  </p>
                </div>

                <a href={bookingUrl} className="accent-button" target="_blank" rel="noreferrer">
                  Secure a Date
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="promise-band">
          <div className="landing-shell">
            <div className="section-intro on-dark">
              <h2 className="section-title">The Promise Ladder</h2>
              <p>Our four-stage evolution from chaos to automated calm.</p>
            </div>

            <div className="promise-grid">
              {promiseLevels.map((item) => (
                <article key={item.level} className="promise-card">
                  <span>{item.level}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="advisory" className="comparison-band">
          <div className="landing-shell narrow-shell">
            <div className="section-intro is-centered">
              <h2 className="section-title is-medium">Why Independent Advisory?</h2>
            </div>

            <div className="comparison-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Automation Agencies</th>
                    <th>Software Resellers</th>
                    <th>FinnAI Advisory</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.category}>
                      <th>{row.category}</th>
                      <td>{row.agency}</td>
                      <td>{row.reseller}</td>
                      <td className="is-highlight">{row.advisory}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="ladder" className="ladder-band">
          <div className="landing-shell">
            <div className="ladder-head">
              <div>
                <span className="section-chip">Access Ladder</span>
                <h2 className="section-heading">
                  Ascend through <em>proof</em> and proximity.
                </h2>
              </div>
              <p>
                Every layer deepens context. Start with free intelligence, move through structured programs, then graduate to
                operator-on-retainer once there is undeniable fit.
              </p>
            </div>

            <div className="ladder-grid">
              {ladderSteps.map((step) => (
                <article key={step.stage} className="ladder-card">
                  <header>
                    <span className="ladder-step">{step.stage}</span>
                    <div>
                      <p className="ladder-type">{step.type}</p>
                      <h3>{step.name}</h3>
                    </div>
                  </header>
                  <p>{step.description}</p>
                  {step.ctaLabel && step.href ? (
                    <a
                      href={step.href}
                      className="ladder-link"
                      target={step.href.startsWith("http") ? "_blank" : undefined}
                      rel={step.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {step.ctaLabel}
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="verticals" className="verticals-band">
          <div className="landing-shell">
            <div className="verticals-head">
              <div>
                <h2 className="section-heading">
                  Tailored for High-Value
                  <br />
                  <em>Service Firms.</em>
                </h2>
              </div>

              <p>We don&apos;t do e-commerce or SaaS. We do high-trust professional services.</p>
            </div>

            <div className="vertical-grid">
              {verticals.map((item) => (
                <article key={item.title} className="vertical-card">
                  <span className="tile-icon">
                    <SectionIcon icon={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="concerns-band">
          <div className="landing-shell narrow-shell">
            <div className="section-intro is-centered">
              <h2 className="section-title is-medium">Operational Concerns</h2>
            </div>

            <div className="concerns-stack">
              {concerns.map((item) => (
                <article key={item.quote} className="concern-card">
                  <h3>&ldquo;{item.quote}&rdquo;</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-band">
          <div className="final-glow final-glow-right" aria-hidden="true" />
          <div className="final-glow final-glow-left" aria-hidden="true" />

          <div className="landing-shell narrow-shell final-shell">
            <span className="section-kicker on-dark">Final Call</span>
            <h2 className="final-title">
              Selective Advisory.
              <br />
              Not an agency.
            </h2>
            <p className="final-copy">
              Finlay works with a maximum of a few firms each month to keep the work commercially sharp and operationally
              useful. The first step is a 15-minute alignment call.
            </p>

            <div className="final-actions">
              <a href={bookingUrl} className="accent-button is-large" target="_blank" rel="noreferrer">
                Talk to the Founder
              </a>

              <div className="availability-note">
                <div className="availability-avatar">
                  <Image src="/finlay-portrait.png" alt="" fill sizes="3rem" />
                </div>
                <div>
                  <strong>Now taking select calls</strong>
                  <p>Independent diagnostic work, founder-led.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="landing-shell footer-shell">
          <a href="#top" className="brand-wordmark">
            FinnAI
          </a>

          <div className="footer-links">
            {footerLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <p>© 2026 FinnAI Advisory. Independent. Selective. Impactful.</p>
        </div>
      </footer>
    </>
  );
}
