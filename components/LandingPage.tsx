import { BookingFlow } from "@/components/BookingFlow";

const primaryCtaHref = "#booking";
const secondaryCtaHref = "#outcomes";

const navItems = [
  { href: "#why", label: "Why this first" },
  { href: "#outcomes", label: "What you get" },
  { href: "#process", label: "How it works" },
  { href: "#booking", label: "Book" },
];

const heroSignals = [
  "Independent recommendations",
  "Operator-led sequencing",
  "No vendor bias",
];

const signalCards = [
  {
    label: "What this is",
    title: "Founder-level AI advisory before you commit to software or implementation.",
  },
  {
    label: "What this avoids",
    title: "Bloated rollouts, premature tooling, and agency advice shaped by resale incentives.",
  },
  {
    label: "What you leave with",
    title: "A clear view of what to do now, what can wait, and where AI is actually useful.",
  },
];

const comparisonCards = [
  {
    eyebrow: "The default market path",
    title: "Most AI advice starts downstream.",
    body: "You get shown tools, dashboards, automations, or implementation retainers before anyone proves which operating problem is worth solving first.",
    points: ["Tool-led recommendations", "Big rollout energy", "Hard to separate advice from vendor incentives"],
  },
  {
    eyebrow: "The founder advisory path",
    title: "This starts with commercial judgment.",
    body: "The work is to pressure-test the business need first, then sequence the smallest sensible move. Sometimes that means new software. Sometimes it means keeping the stack and fixing the process.",
    points: ["Operator's view of the bottleneck", "Smallest useful next move", "Independent recommendations that can include 'do less'"],
  },
];

const outcomeCards = [
  {
    label: "Decision clarity",
    title: "Where AI should help and where it should stay out of the way.",
    body: "Separate real leverage from attractive distractions so you do not buy complexity you will regret six weeks later.",
    tone: "wide",
  },
  {
    label: "Sequence",
    title: "What to do now, next, and later.",
    body: "You leave with a practical order of operations instead of a pile of disconnected ideas.",
  },
  {
    label: "Tooling call",
    title: "Whether your current stack is enough.",
    body: "A grounded answer on whether the issue is tooling, workflow design, handoff discipline, or follow-up speed.",
  },
  {
    label: "Implementation scope",
    title: "If build work is warranted, how small the first scope should be.",
    body: "No giant rollout by default. Just the minimum intervention required to create a meaningful operational shift.",
  },
  {
    label: "Risk reduction",
    title: "Independent advice before money gets spent in the wrong place.",
    body: "This is designed to help owners buy slower, sequence better, and avoid implementation momentum for its own sake.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Pressure-test the operating reality",
    body: "Look at where the business is actually slowing down, what the owner is carrying manually, and where visibility is weak.",
  },
  {
    step: "02",
    title: "Separate bottlenecks from tooling noise",
    body: "Work out whether the constraint is process design, current-stack usage, staffing friction, or a genuinely good AI use case.",
  },
  {
    step: "03",
    title: "Recommend the practical sequence",
    body: "Set out the most sensible order of moves, including what should be parked, deferred, or avoided completely.",
  },
  {
    step: "04",
    title: "Only scope implementation if it earns the right",
    body: "If a tool change or build is justified, the next step becomes tighter and smaller because the decision groundwork has already been done.",
  },
];

const fitGroups = [
  {
    title: "Best fit",
    items: [
      "Founders who distrust agency advice and want an independent view before buying tools",
      "Owner-led businesses where workflow drag, follow-up gaps, or manual context-switching are already visible",
      "Teams that want strategic sequencing, not a giant software program",
    ],
  },
  {
    title: "Not for",
    items: [
      "Businesses looking for a generic AI keynote or a trend deck",
      "Teams that have already decided on a major rollout and only want execution support",
      "Operators who want maximum automation regardless of workflow quality or commercial fit",
    ],
  },
];

const faqs = [
  {
    question: "Is this consulting or implementation?",
    answer:
      "It starts as independent advisory. The point is to get clear before implementation. If build work is justified afterwards, that can be scoped separately and more tightly.",
  },
  {
    question: "Will you just recommend more tools?",
    answer:
      "No. The positioning here is explicitly tool-agnostic. Sometimes the right recommendation is to keep the current stack and change the operating sequence around it.",
  },
  {
    question: "What makes this different from an agency discovery session?",
    answer:
      "The advice is meant to stand on its own. The first objective is decision quality, not manufacturing momentum for a larger implementation sale.",
  },
  {
    question: "Who is the call with?",
    answer:
      "The conversation is directly with Finlay Sturzaker. It is founder-led, selective, and designed to help you think through the commercial logic before anything gets built.",
  },
];

export function LandingPage() {
  return (
    <>
      <header className="site-header">
        <div className="page-shell">
          <div className="site-header-shell">
            <a href="#top" className="site-brand">
              <span className="site-brand-mark" aria-hidden="true">
                FS
              </span>
              <span className="site-brand-copy">
                <span className="site-brand-name">Finlay Sturzaker</span>
                <span className="site-brand-tagline">Independent AI advisory by Temporary Utopia</span>
              </span>
            </a>

            <nav className="site-nav" aria-label="Primary">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <a href={primaryCtaHref} className="button-primary site-header-cta">
              Talk it through
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="hero-section">
          <div className="page-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">The founder advisory angle</p>
              <p className="hero-context">For owners who want clarity before buying software or commissioning a rollout.</p>
              <h1 className="hero-title">
                Before you buy more software, get an operator&apos;s view of what your business actually needs.
              </h1>
              <p className="hero-summary">
                Independent AI advisory for founders who want clarity before tools, automation scope, or implementation
                commitments start driving the decision.
              </p>

              <div className="hero-actions">
                <a href={primaryCtaHref} className="button-primary">
                  Talk it through with Finlay
                </a>
                <a href={secondaryCtaHref} className="button-secondary">
                  See what you leave with
                </a>
              </div>

              <div className="hero-signal-row" aria-label="Hero signals">
                {heroSignals.map((signal) => (
                  <span key={signal}>{signal}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="signal-section">
          <div className="page-shell signal-grid">
            {signalCards.map((card) => (
              <article key={card.label} className="signal-card">
                <p>{card.label}</p>
                <h2>{card.title}</h2>
              </article>
            ))}
          </div>
        </section>

        <section id="why" className="editorial-section section-soft">
          <div className="page-shell editorial-grid">
            <div className="section-intro">
              <p className="eyebrow">Why founders come here first</p>
              <h2 className="section-title">
                The first decision is not which AI tool to buy. It is whether AI should be involved at all.
              </h2>
              <p className="section-copy">
                Most owners do not need a giant AI program. They need someone to look at the business with clean incentives,
                isolate what is actually broken, and sequence the smallest move with real commercial upside.
              </p>
            </div>

            <div className="comparison-stack">
              {comparisonCards.map((card) => (
                <article key={card.eyebrow} className="comparison-card">
                  <p className="card-kicker">{card.eyebrow}</p>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <ul>
                    {card.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="outcomes" className="editorial-section">
          <div className="page-shell">
            <div className="section-intro section-intro-wide">
              <p className="eyebrow">What you leave with</p>
              <h2 className="section-title">Clear next decisions, not another layer of AI theatre.</h2>
              <p className="section-copy">
                This page converts best when the advisory promise is paired with stronger outcomes. The objective is to help
                the owner buy well, sequence well, and avoid rolling momentum into the wrong answer.
              </p>
            </div>

            <div className="outcome-grid">
              {outcomeCards.map((card) => (
                <article
                  key={card.label}
                  className={card.tone === "wide" ? "outcome-card outcome-card-wide" : "outcome-card"}
                >
                  <p className="card-kicker">{card.label}</p>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="editorial-section section-deep">
          <div className="page-shell">
            <div className="section-intro section-intro-on-dark">
              <p className="eyebrow">How it works</p>
              <h2 className="section-title">High-trust advisory with a deliberate sequence.</h2>
              <p className="section-copy">
                The process is simple on purpose. The goal is not to overwhelm you with frameworks. It is to create enough
                clarity that the next move feels obvious.
              </p>
            </div>

            <div className="process-grid">
              {processSteps.map((item) => (
                <article key={item.step} className="process-card">
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="editorial-section">
          <div className="page-shell advisory-panel">
            <div className="section-intro section-intro-compact">
              <p className="eyebrow">The trust style</p>
              <h2 className="section-title">Independent recommendations. Practical sequencing. No vendor bias.</h2>
            </div>

            <div className="advisory-note-grid">
              <article className="advisory-note-card">
                <p className="card-kicker">A founder note</p>
                <blockquote>
                  &ldquo;The easiest way to waste money on AI is to let implementation momentum outrun decision quality.
                  Good advisory slows that down before it speeds anything up.&rdquo;
                </blockquote>
                <p className="advisory-signature">Finlay Sturzaker</p>
              </article>

              <article className="advisory-detail-card">
                <p className="card-kicker">What the positioning signals</p>
                <ul>
                  <li>You are speaking directly with the operator, not being handed to a junior delivery team.</li>
                  <li>The recommendation can be conservative if the business does not need a bigger AI move yet.</li>
                  <li>The outcome is a cleaner buying decision, even if that means postponing implementation.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="fit" className="editorial-section section-soft">
          <div className="page-shell">
            <div className="section-intro section-intro-wide">
              <p className="eyebrow">Who this is for</p>
              <h2 className="section-title">Best for owners who want strategic clarity without signing up for a software saga.</h2>
            </div>

            <div className="fit-grid">
              {fitGroups.map((group) => (
                <article key={group.title} className="fit-card">
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="editorial-section booking-section">
          <div className="page-shell booking-section-grid">
            <div className="section-intro section-intro-compact">
              <p className="eyebrow">Book the conversation</p>
              <h2 className="section-title">Talk it through with Finlay before you buy, build, or roll anything out.</h2>
              <p className="section-copy">
                Use the call to test the business need, challenge your assumptions, and understand whether a smaller, smarter
                next move exists.
              </p>
            </div>

            <BookingFlow />
          </div>
        </section>

        <section className="editorial-section">
          <div className="page-shell">
            <div className="section-intro section-intro-wide">
              <p className="eyebrow">FAQ</p>
              <h2 className="section-title">Short answers before you book.</h2>
            </div>

            <div className="faq-grid">
              {faqs.map((faq) => (
                <article key={faq.question} className="faq-card">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="page-shell closing-shell">
            <div>
              <p className="eyebrow">Final call to action</p>
              <h2 className="section-title">If you want a founder&apos;s view before committing to AI spend, start with the call.</h2>
            </div>

            <div className="closing-actions">
              <a href={primaryCtaHref} className="button-primary">
                Talk it through with Finlay
              </a>
              <a href="mailto:finlay@temporaryutopia.com" className="button-tertiary">
                finlay@temporaryutopia.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell site-footer-shell">
          <p>Finlay Sturzaker</p>
          <p>Independent AI advisory by Temporary Utopia</p>
          <a href="mailto:finlay@temporaryutopia.com">finlay@temporaryutopia.com</a>
        </div>
      </footer>
    </>
  );
}
