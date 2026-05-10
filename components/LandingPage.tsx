const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://calendly.com/finlay-temporaryutopia/30min";

const navItems = [
  { href: "#pain", label: "Pain Signals" },
  { href: "#leakage-map", label: "Leakage Map" },
  { href: "#audit-finds", label: "What We Find" },
  { href: "#field-notes", label: "Field Notes" },
  { href: "#faq", label: "FAQ" },
];

const painPoints = [
  "Enquiries sit too long before a meaningful first response.",
  "Follow-up depends on memory, not a reliable system.",
  "Admin is repeated across tools and people.",
  "Client updates are inconsistent or reactive.",
  "Handover between sales and delivery is patchy.",
  "Reporting is slow, manual, and unclear.",
];

const auditFinds = [
  "Lead response speed and consistency",
  "Sales workflow gaps from enquiry to quote",
  "Repeated admin and avoidable internal drag",
  "Client communication rhythm and quality",
  "Handover reliability between team members",
  "Reporting clarity and decision visibility",
];

const deliverables = [
  "Discovery call to define goals and constraints",
  "Workflow review across lead, sales, admin, and delivery",
  "Leakage opportunity map with high-friction bottlenecks",
  "Commercial impact estimate by priority area",
  "Prioritised action plan: what to fix first, next, later",
  "Debrief call with practical recommendations",
];

const faqs = [
  {
    q: "Do I need to understand AI before this?",
    a: "No. The audit is business-first. We translate technical options into operational decisions and practical next steps.",
  },
  {
    q: "Is this about replacing staff?",
    a: "No. The goal is to remove avoidable friction and repeated admin, so your team can focus on higher-value work.",
  },
  {
    q: "What if automation is not the right answer?",
    a: "That is a valid outcome. Some issues are solved with better process design before introducing any automation.",
  },
  {
    q: "Could I just ask ChatGPT to suggest automations?",
    a: "You can get ideas, but not a grounded diagnosis of your real workflows, constraints, and commercial priorities.",
  },
  {
    q: "What happens after the audit?",
    a: "You receive a prioritised roadmap. Then you can implement internally, with your existing partners, or with Temporary Utopia.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4.5 10h10" />
      <path d="m10.5 4.5 5 5-5 5" />
    </svg>
  );
}

function WorkflowDiagram() {
  return (
    <div className="workflow-diagram" role="img" aria-label="Operational leakage workflow before and after">
      <div className="workflow-column">
        <h3>Where value leaks</h3>
        <ol>
          <li>Enquiry comes in</li>
          <li>Delayed response</li>
          <li>Weak follow-up</li>
          <li>Quote not sent</li>
          <li>Opportunity lost</li>
        </ol>
      </div>
      <div className="workflow-divider" aria-hidden="true">→</div>
      <div className="workflow-column is-improved">
        <h3>Improved system</h3>
        <ol>
          <li>Capture</li>
          <li>Fast response</li>
          <li>Structured follow-up</li>
          <li>Quote tracking</li>
          <li>Reporting visibility</li>
        </ol>
      </div>
    </div>
  );
}

export function LandingPage() {
  return (
    <>
      <header className="landing-header">
        <div className="landing-shell header-shell">
          <a href="#top" className="brand-wordmark">Temporary Utopia</a>
          <nav className="header-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <a href={bookingUrl} className="header-cta" target="_blank" rel="noreferrer">Book Audit</a>
        </div>
      </header>

      <main className="editorial-page" id="top">
        <section className="hero-band premium-hero">
          <div className="landing-shell premium-grid">
            <div>
              <p className="section-chip">AI Efficiency Audit</p>
              <h1 className="hero-display hero-display-wide">Find where your business is leaking time, leads, and money.</h1>
              <p className="hero-lead hero-lead-wide">Before you buy another AI tool, hire more staff, or start a vague automation project, diagnose where work is delayed, repeated, missed, or invisible — and what that is costing you.</p>
              <div className="hero-actions">
                <a href={bookingUrl} className="primary-button" target="_blank" rel="noreferrer"><span>Book an AI Efficiency Audit</span><ArrowIcon /></a>
                <a href="#audit-finds" className="secondary-button">See what the audit finds</a>
              </div>
            </div>
            <WorkflowDiagram />
          </div>
        </section>

        <section id="pain" className="section-block muted">
          <div className="landing-shell narrow-shell">
            <h2 className="section-title">You are probably not losing money because your team is lazy.</h2>
            <p className="section-intro">You are losing money because your systems are not keeping up. Small operational gaps compound into missed revenue, wasted labour, and slower delivery.</p>
            <ul className="simple-list">
              {painPoints.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section id="leakage-map" className="section-block">
          <div className="landing-shell">
            <h2 className="section-title">Operational leakage map</h2>
            <p className="section-intro">This is the core pattern we diagnose in service businesses. We map where opportunities drop, then design the minimum practical fixes worth implementing first.</p>
            <WorkflowDiagram />
          </div>
        </section>

        <section id="audit-finds" className="section-block muted">
          <div className="landing-shell premium-two-col">
            <div>
              <h2 className="section-title">What the audit finds</h2>
              <p className="section-intro">We review the workflows where most service businesses leak value before they ever notice it.</p>
              <ul className="simple-list">{auditFinds.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <h2 className="section-title">What you get</h2>
              <ul className="simple-list">{deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="landing-shell roi-panel">
            <h2 className="section-title">The commercial value is usually hiding in plain sight.</h2>
            <p className="section-intro">Example: 4 missed opportunities/month × $2,500 average job value = $120,000/year in preventable leakage — before accounting for admin time and delivery inefficiency.</p>
            <p className="equation">Small leaks × every week × every team member = serious annual drag.</p>
          </div>
        </section>

        <section id="field-notes" className="section-block muted">
          <div className="landing-shell">
            <h2 className="section-title">Field Notes</h2>
            <p className="section-intro">Practical observations on AI, automation, workflow design, and operational leverage.</p>
            <div className="notes-grid">
              <article><h3>Why most businesses should not start with an AI chatbot</h3><p>Start with bottlenecks, not interfaces. Diagnose where time and follow-up break first.</p></article>
              <article><h3>The hidden cost of slow lead follow-up</h3><p>Lost opportunities are usually process failures, not demand problems.</p></article>
              <article><h3>What to automate before hiring another admin person</h3><p>Remove repeated updates, chasing, and handover friction before increasing headcount.</p></article>
            </div>
          </div>
        </section>

        <section id="faq" className="section-block">
          <div className="landing-shell narrow-shell">
            <h2 className="section-title">FAQ</h2>
            <div className="faq-list">
              {faqs.map((item) => (
                <article key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block final-cta">
          <div className="landing-shell narrow-shell">
            <h2 className="section-title">Before you buy another tool, hire another person, or start another AI project — find out where your business is actually leaking value.</h2>
            <a href={bookingUrl} className="primary-button" target="_blank" rel="noreferrer"><span>Book an AI Efficiency Audit</span><ArrowIcon /></a>
          </div>
        </section>
      </main>
    </>
  );
}
