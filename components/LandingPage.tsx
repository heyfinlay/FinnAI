import Image from "next/image";

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://calendly.com/finlay-temporaryutopia/30min";
const emailAddress = "finlay@temporaryutopia.com";

const navItems = [
  { href: "#audit", label: "Audit", current: true },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#difference", label: "Difference" },
  { href: "#process", label: "Process" },
  { href: "#founder", label: "Founder" },
];

const auditSummaryCards = [
  {
    title: "A full audit of your business",
    items: ["Workflows and operations", "Marketing systems", "Website, funnels, and lead capture"],
  },
  {
    title: "Identifying what’s working and what isn’t",
    items: ["Where time and money are being lost", "Where AI creates real leverage", "Where it should not be used"],
  },
  {
    title: "A clear path forward",
    items: ["System-level improvements", "Priority implementation plan", "Practical next steps you can act on immediately"],
  },
];

const problemPoints = [
  "The website explains the business, but does not convert enough visitors into useful enquiries.",
  "Content is inconsistent, disconnected from sales, or too generic to build trust.",
  "Lead capture, follow-up, reporting, and handoffs depend on memory and manual effort.",
  "AI tools get added before anyone has decided where AI should actually belong.",
];

const auditAreas = [
  {
    eyebrow: "01",
    title: "Client-facing digital presence",
    body: "Website, landing pages, offer clarity, proof, enquiry paths, sales funnels, booking flow, and the points where trust or conversion breaks down.",
  },
  {
    eyebrow: "02",
    title: "Marketing and content strategy",
    body: "Positioning, useful industry content, educational assets, email ideas, trust-building material, and repeatable ways to turn expertise into demand.",
  },
  {
    eyebrow: "03",
    title: "AI agent opportunities",
    body: "Reporting agents, campaign monitoring, lead follow-up support, knowledge retrieval, admin assistance, and areas where automation can reduce repeated work.",
  },
  {
    eyebrow: "04",
    title: "Operational workflows",
    body: "Handoffs, repeated admin, communication loops, owner bottlenecks, manual reporting, tool overlap, and friction between sales, delivery, and follow-up.",
  },
  {
    eyebrow: "05",
    title: "Human judgment zones",
    body: "The decisions where AI should assist, not replace: strategy, taste, compliance, relationship management, final approvals, and commercially sensitive judgement.",
  },
];

const useCases = [
  {
    title: "Weekly industry report agent",
    body: "Monitors relevant changes, competitor signals, search trends, or market updates, then drafts useful client-facing insights for review.",
  },
  {
    title: "Campaign analysis assistant",
    body: "Summarises ad performance, flags waste, highlights anomalies, and suggests the next questions a human should ask before changing spend.",
  },
  {
    title: "Lead capture and follow-up system",
    body: "Tightens forms, routing, reminders, qualification, and response templates so enquiries do not quietly disappear between inboxes and calendars.",
  },
  {
    title: "Website and funnel renovation plan",
    body: "Clarifies offers, improves page hierarchy, strengthens proof, and turns traffic into a cleaner path from attention to enquiry.",
  },
  {
    title: "Expertise-to-content engine",
    body: "Turns founder or team knowledge into practical posts, emails, landing page sections, FAQs, and sales support assets.",
  },
];

const differences = [
  {
    title: "Diagnostic-first, not tool-first",
    body: "The audit starts with the business system, not a preferred app stack or automation recipe.",
  },
  {
    title: "Honest about AI fit",
    body: "Some work should be automated, some should be redesigned, and some should stay deliberately human.",
  },
  {
    title: "Independent recommendations",
    body: "Advice is based on leverage, readiness, risk, and practicality. Not software commissions.",
  },
  {
    title: "Marketing and systems together",
    body: "Digital presence, content, lead capture, reporting, and AI are reviewed as one connected operating picture.",
  },
];

const deliverables = [
  "Current-state digital and workflow map",
  "AI opportunity map with impact and readiness notes",
  "Website, funnel, and lead capture review",
  "Content and marketing system recommendations",
  "Priority implementation roadmap",
  "Risk notes and what not to automate",
  "Founder-led readout session",
];

const processSteps = [
  {
    title: "Scope the business and digital presence",
    body: "We review the business model, offers, website, lead paths, current content, tools, and the areas where the owner already suspects friction.",
  },
  {
    title: "Audit workflows, marketing systems, and AI fit",
    body: "Finlay maps the points where content, follow-up, reporting, handoffs, and repeated admin can be improved, then separates genuine AI use cases from distractions.",
  },
  {
    title: "Deliver the roadmap",
    body: "You receive practical quick wins, deeper improvements, implementation priorities, and a clear view of what should not be automated yet.",
  },
];

const footerLinks = [
  { href: "#audit", label: "Audit" },
  { href: "#difference", label: "Difference" },
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

function SystemVisual() {
  return (
    <aside className="hero-system-card" aria-label="Abstract system view before optimisation">
      <div className="hero-system-head">
        <span>System view — pre optimisation</span>
        <strong>Structure Map</strong>
      </div>

      <svg viewBox="0 0 640 560" className="hero-system-svg" aria-hidden="true">
        <defs>
          <linearGradient id="systemLine" x1="8%" y1="10%" x2="92%" y2="90%">
            <stop offset="0%" stopColor="rgba(244,207,130,0.18)" />
            <stop offset="52%" stopColor="rgba(255,255,255,0.48)" />
            <stop offset="100%" stopColor="rgba(244,207,130,0.2)" />
          </linearGradient>
          <radialGradient id="systemNode" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(244,207,130,0.9)" />
            <stop offset="100%" stopColor="rgba(244,207,130,0.12)" />
          </radialGradient>
        </defs>

        <path className="system-grid-line" d="M118 88v380M272 52v430M438 92v372" />
        <path className="system-grid-line" d="M70 154h492M94 286h430M122 412h398" />

        <path className="system-link system-link-muted" d="M118 154C190 122 230 206 272 286S380 372 438 286 498 170 562 154" />
        <path className="system-link" d="M78 412C170 408 190 286 272 286S354 154 438 154s76 70 102 132" />
        <path className="system-link system-link-soft" d="M118 88C142 186 212 214 272 154s122-82 166-62 72 104 102 194" />
        <path className="system-link system-link-muted" d="M122 286c74 60 114 128 202 126s130-90 216-126" />

        <g className="system-nodes">
          <circle cx="118" cy="88" r="5" />
          <circle cx="118" cy="154" r="8" />
          <circle cx="122" cy="286" r="6" />
          <circle cx="78" cy="412" r="5" />
          <circle cx="272" cy="154" r="7" />
          <circle cx="272" cy="286" r="12" className="system-node-prime" />
          <circle cx="324" cy="412" r="7" />
          <circle cx="438" cy="92" r="5" />
          <circle cx="438" cy="154" r="8" />
          <circle cx="438" cy="286" r="9" />
          <circle cx="540" cy="286" r="6" />
          <circle cx="562" cy="154" r="5" />
        </g>

        <rect x="232" y="244" width="124" height="84" rx="18" className="system-focus-ring" />
        <rect x="396" y="116" width="104" height="76" rx="16" className="system-focus-ring system-focus-ring-muted" />
      </svg>

      <div className="hero-system-foot" aria-label="System areas shown">
        <span>Workflows</span>
        <span>Marketing</span>
        <span>Lead capture</span>
        <span>AI fit</span>
      </div>
    </aside>
  );
}

export function LandingPage() {
  return (
    <>
      <header className="landing-header">
        <div className="landing-shell header-shell">
          <a href="#top" className="brand-wordmark">
            Temporary Utopia
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
              <span className="section-chip hero-micro-line">
                Most businesses don’t have an AI problem. They have a structure problem.
              </span>
              <h1 className="hero-display hero-display-wide">
                Diagnose where AI, content, and better systems should improve your business
              </h1>
              <p className="hero-lead hero-lead-wide">
                I run a founder-led audit of your workflows, marketing, and digital presence to show exactly where AI
                creates leverage, where it doesn’t, and how to modernise your business properly in 2026.
              </p>

              <div className="hero-actions">
                <a href={bookingUrl} className="primary-button" target="_blank" rel="noreferrer">
                  <span>Book Your AI Efficiency Audit</span>
                  <ArrowIcon />
                </a>
                <a href="#audit-summary" className="secondary-button">
                  See what gets audited
                </a>
              </div>

              <p className="hero-trust-line">
                No hype. No tool selling. Just clear systems, practical improvements, and honest recommendations.
              </p>
            </div>

            <div className="hero-visual-column">
              <SystemVisual />
            </div>
          </div>
        </section>

        <section id="audit-summary" className="audit-summary-band">
          <div className="landing-shell">
            <div className="audit-summary-head">
              <span className="section-chip">What this actually is</span>
              <h2 className="section-title is-medium">What this actually is</h2>
            </div>

            <div className="audit-summary-grid">
              {auditSummaryCards.map((card) => (
                <article key={card.title} className="audit-summary-card">
                  <h3>{card.title}</h3>
                  <ul>
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="problem" className="problem-band">
          <div className="landing-shell problem-shell">
            <div className="problem-copy">
              <span className="section-chip">The Problem</span>
              <h2 className="section-heading">
                Most businesses are not behind because they lack tools.
              </h2>

              <div className="problem-copy-stack">
                <p>
                  They are behind because their digital strategy, content, lead capture, reporting, follow-up, and internal
                  systems have grown in fragments.
                </p>

                <div className="truth-callout">
                  <p>
                    AI often makes messy systems messier when it is applied without diagnosis. The right question is not
                    &ldquo;what can we automate?&rdquo; It is &ldquo;where would better judgement, content, systems, or selective AI
                    create commercial leverage?&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="problem-list-card" aria-label="Common business symptoms">
              {problemPoints.map((point) => (
                <div key={point} className="problem-list-item">
                  <span aria-hidden="true" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="audit" className="offer-band">
          <div className="landing-shell">
            <div className="section-intro is-centered">
              <span className="section-chip">What The Audit Reviews</span>
              <h2 className="section-title">A productised diagnosis of your digital and operational leverage.</h2>
              <p>
                The AI Efficiency Audit reviews how the business presents itself, attracts trust, captures demand, follows
                up, reports, and decides where AI should or should not be used.
              </p>
            </div>

            <div className="audit-area-grid">
              {auditAreas.map((area) => (
                <article key={area.title} className="audit-area-card">
                  <span>{area.eyebrow}</span>
                  <h3>{area.title}</h3>
                  <p>{area.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="promise-band">
          <div className="landing-shell">
            <div className="section-intro on-dark use-case-intro">
              <span className="section-kicker on-dark">Practical Use Cases</span>
              <h2 className="section-title">Grounded AI and digital improvements, chosen for the business in front of us.</h2>
              <p>
                These are examples, not packages. The audit decides what is worth doing based on your offers, team, data,
                client expectations, and current systems.
              </p>
            </div>

            <div className="use-case-grid">
              {useCases.map((useCase) => (
                <article key={useCase.title} className="use-case-card">
                  <h3>{useCase.title}</h3>
                  <p>{useCase.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="difference" className="comparison-band">
          <div className="landing-shell">
            <div className="difference-layout">
              <div className="difference-copy">
                <span className="section-chip">Why Temporary Utopia</span>
                <h2 className="section-title is-medium">Most AI experts sell automation. Temporary Utopia sells clarity first.</h2>
                <p>
                  This is not an AI hype agency or a generic marketing agency. It is diagnostic-first advisory for businesses
                  that need to modernise their digital presence without replacing human judgement.
                </p>
                <a href={bookingUrl} className="primary-button difference-cta" target="_blank" rel="noreferrer">
                  <span>Book a Strategy Call</span>
                  <ArrowIcon />
                </a>
              </div>

              <div className="difference-grid">
                {differences.map((item) => (
                  <article key={item.title} className="difference-card">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="deliverables" className="verticals-band">
          <div className="landing-shell">
            <div className="deliverables-layout">
              <div>
                <span className="section-chip">What You Receive</span>
                <h2 className="section-heading">
                  A clear roadmap before you spend on implementation.
                </h2>
              </div>

              <div className="deliverable-card">
                <p>
                  The output is designed for decisions: what to fix first, what to leave alone, what AI can support, and how
                  your website, funnels, content, reporting, and follow-up should work together.
                </p>
                <ul>
                  {deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="offer-band process-band">
          <div className="landing-shell">
            <div className="section-intro is-centered">
              <span className="section-chip">The Process</span>
              <h2 className="section-title">Simple enough to book. Substantial enough to change the next decision.</h2>
              <p>
                The strategy call confirms fit, then the audit turns scattered context into an implementation roadmap with
                quick wins, deeper improvements, and clear no-go areas.
              </p>
            </div>

            <ol className="process-grid">
              {processSteps.map((step, index) => (
                <li key={step.title} className="process-item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="founder" className="concerns-band">
          <div className="landing-shell founder-layout">
            <div className="founder-copy">
              <span className="section-chip">Founder Perspective</span>
              <h2 className="section-title is-medium">
                Founder-led, practical, and clear about the real state of AI in 2026.
              </h2>
              <p>
                Finlay leads the audit personally. The work is built around a practical belief: content, websites, funnels,
                reporting, automation, and AI cannot be treated as separate experiments if the business owner needs better
                commercial outcomes.
              </p>
              <p>
                Temporary Utopia does not pretend AI replaces everything. It helps identify where AI can support experienced
                humans, where better digital systems matter more, and where trust, taste, compliance, and final judgement
                should stay with people.
              </p>
            </div>

            <aside className="founder-card">
              <div className="founder-card-photo">
                <Image
                  src="/finlay-portrait.png"
                  alt="Finlay Sturzaker"
                  fill
                  sizes="(max-width: 980px) 100vw, 28rem"
                />
              </div>
              <div className="founder-card-body">
                <h3>Finlay Sturzaker</h3>
                <p>Founder, Temporary Utopia</p>
                <div className="founder-links">
                  <a href="https://instagram.com/heyfinlay" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                  <a href="https://www.linkedin.com/in/finlaysturzaker/" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="final-band">
          <div className="final-glow final-glow-right" aria-hidden="true" />
          <div className="final-glow final-glow-left" aria-hidden="true" />

          <div className="landing-shell narrow-shell final-shell">
            <span className="section-kicker on-dark">Next Step</span>
            <h2 className="final-title">
              Before you automate, diagnose.
            </h2>
            <p className="final-copy">
              Book a strategy call to confirm whether the AI Efficiency Audit is the right fit. If it is, the next step is a
              founder-led review of the systems, content, funnels, and AI opportunities most likely to improve the business.
            </p>

            <div className="final-actions">
              <a href={bookingUrl} className="accent-button is-large" target="_blank" rel="noreferrer">
                Book a Strategy Call
              </a>

              <div className="availability-note">
                <div className="availability-avatar">
                  <Image src="/finlay-portrait.png" alt="" fill sizes="3rem" />
                </div>
                <div>
                  <strong>Founder-led audit</strong>
                  <p>Practical recommendations before implementation spend.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="landing-shell footer-shell">
          <a href="#top" className="brand-wordmark">
            Temporary Utopia
          </a>

          <div className="footer-links">
            {footerLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <p>© 2026 Temporary Utopia. Diagnostic-first AI advisory.</p>
        </div>
      </footer>
    </>
  );
}
