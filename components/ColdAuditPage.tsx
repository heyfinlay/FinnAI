import Image from "next/image";

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://calendly.com/finlay-temporaryutopia/30min";
const emailAddress = "finlay@temporaryutopia.com";

const auditSignals = [
  "Broken or clunky enquiry paths that make prospects hesitate",
  "Slow follow-up and missed-call leakage hiding behind a decent reputation",
  "Admin drag, duplicated work, and manual handoffs no one has properly mapped",
  "Outdated website trust signals that quietly hurt conversion on mobile",
];

const auditDeliverables = [
  "A clear diagnosis of the biggest visible and hidden leaks in your front-end workflow",
  "Specific notes on what is costing you trust, speed, and enquiry conversion",
  "A priority map of what to fix first, what to automate, and what to leave alone",
  "A practical implementation path if you want the fixes built, not just identified",
];

const objectionRows = [
  {
    title: "We already have a website person.",
    body: "That is usually fine. The issue is rarely just the website itself. It is the enquiry handling, trust leaks, follow-up consistency, and workflow behind it.",
  },
  {
    title: "We are getting leads already.",
    body: "That is exactly when leakage becomes expensive. If the business is already active, even small drop-off or admin friction costs more than it should.",
  },
  {
    title: "We do not need another software pitch.",
    body: "Good. This is not a software pitch. The audit is designed to show where the current system is leaking before anything new gets added.",
  },
];

const proofPoints = [
  "Founder-led diagnostic work, not outsourced sales theatre",
  "Focused on service businesses where missed enquiries and workflow drag are expensive",
  "Built to turn visible friction into a concrete business case, not abstract AI hype",
];

export function ColdAuditPage() {
  return (
    <>
      <header className="landing-header cold-audit-header">
        <div className="landing-shell header-shell cold-audit-header-shell">
          <a href="#top" className="brand-wordmark">
            FinnAI
          </a>
          <div className="cold-audit-topline">Private briefing for business owners reviewing an AI efficiency audit</div>
          <a href={bookingUrl} className="header-cta" target="_blank" rel="noreferrer">
            Book a short call
          </a>
        </div>
      </header>

      <main id="main-content" className="cold-audit-page">
        <section id="top" className="cold-hero-band">
          <div className="landing-shell cold-hero-shell">
            <div className="cold-hero-copy">
              <span className="cold-kicker">You do not need more software, you need clarity.</span>
              <h1>
                The <em>AI Efficiency Audit</em> for businesses that suspect leads, bookings, and admin are leaking through the cracks.
              </h1>
              <p className="cold-hero-lead">
                If we spoke recently, this page is the short version of what I actually do. I look for the visible friction and hidden workflow leaks that quietly cost trust, speed, and revenue, then show you what is worth fixing first.
              </p>

              <div className="cold-hero-actions">
                <a href={bookingUrl} className="accent-button is-large" target="_blank" rel="noreferrer">
                  Book the audit call
                </a>
                <a href={`mailto:${emailAddress}?subject=AI%20Audit%20Follow%20Up`} className="secondary-button">
                  Ask a question first
                </a>
              </div>

              <div className="cold-proof-strip">
                {proofPoints.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            </div>

            <aside className="cold-hero-card">
              <div className="cold-hero-card-head">
                <p className="cold-card-label">What this is really for</p>
                <h2>Find one expensive leak before it keeps costing you.</h2>
              </div>
              <p>
                Most owners do not need a giant transformation pitch. They need someone to show them where enquiries, response time, trust, or admin are underperforming and what to do next.
              </p>
              <ul>
                <li>Lead response friction</li>
                <li>Booking/contact drop-off</li>
                <li>Trust leaks on mobile/site UX</li>
                <li>Manual admin and follow-up drag</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="cold-section cold-problem-band">
          <div className="landing-shell cold-two-column">
            <div>
              <span className="section-chip">What I look for</span>
              <h2 className="cold-section-title">The outside symptoms usually point to a deeper operating problem.</h2>
              <p className="cold-copy">
                A broken page, old booking flow, weak contact path, or trust leak is rarely just a cosmetic problem. It usually means the business has never properly mapped how leads, follow-up, admin, and internal handoffs are actually working.
              </p>
            </div>

            <div className="cold-signal-grid">
              {auditSignals.map((signal) => (
                <article key={signal} className="cold-signal-card">
                  <p>{signal}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cold-section cold-process-band">
          <div className="landing-shell">
            <div className="cold-process-head">
              <span className="section-chip">What you get</span>
              <h2 className="cold-section-title">A commercial diagnostic, not another vague AI brainstorm.</h2>
            </div>

            <div className="cold-deliverables-grid">
              {auditDeliverables.map((item, index) => (
                <article key={item} className="cold-deliverable-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cold-section cold-founder-band">
          <div className="landing-shell cold-founder-shell">
            <div className="cold-founder-image-wrap">
              <div className="cold-founder-image-frame">
                <Image src="/finlay-portrait.png" alt="Finlay Sturzaker" fill sizes="(max-width: 980px) 100vw, 24rem" />
              </div>
            </div>
            <div className="cold-founder-copy">
              <span className="section-chip">Who this is from</span>
              <h2 className="cold-section-title">Founder-led, operator-minded, and designed to be practical.</h2>
              <p className="cold-copy">
                I am not trying to sell you AI for the sake of it. The point of the audit is to show where your business is leaking time, trust, lead conversion, or staff energy, then recommend the clearest next move. If there is a real implementation opportunity after that, I can help build it too.
              </p>
            </div>
          </div>
        </section>

        <section className="cold-section cold-objection-band">
          <div className="landing-shell">
            <div className="cold-process-head">
              <span className="section-chip">Common concerns</span>
              <h2 className="cold-section-title">The most common reactions I hear, answered plainly.</h2>
            </div>

            <div className="cold-objection-grid">
              {objectionRows.map((item) => (
                <article key={item.title} className="cold-objection-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cold-section cold-cta-band">
          <div className="landing-shell cold-cta-shell">
            <div>
              <span className="section-chip">Next step</span>
              <h2 className="cold-section-title">If you want, I can walk you through the friction points I would audit first.</h2>
              <p className="cold-copy">
                This is not a hard sell page. It is here so you can quickly understand whether the audit is worth a conversation.
              </p>
            </div>

            <div className="cold-cta-actions">
              <a href={bookingUrl} className="accent-button is-large" target="_blank" rel="noreferrer">
                Book a short audit call
              </a>
              <a href={`mailto:${emailAddress}?subject=Audit%20Question`} className="secondary-button">
                Email Finlay directly
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
