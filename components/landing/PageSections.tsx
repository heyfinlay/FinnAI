import Image from "next/image";

import {
  DeliverablePreview,
  FitChecklist,
  SectionHeader,
  SectionLead,
  SectionShell,
  SectionTitle,
} from "@/components/landing/AdvisoryBlocks";

const reportPanels = [
  {
    label: "Workflow bottleneck map",
    title: "Where work slows down between enquiry, quote, delivery, and reporting.",
    detail:
      "See exactly where handoffs, approvals, and follow-up lag start compounding into slower sales and busier weeks.",
    metrics: ["Lead reply lag: 18h", "Quote prep rebuilt 4x", "Handoff visibility: low"],
  },
  {
    label: "AI opportunity breakdown",
    title: "The shortlist of automation ideas worth acting on now.",
    detail:
      "The report separates high-fit wins from low-value AI experiments, so you know what is practical inside your current business.",
    metrics: ["3 high-fit moves", "2 ideas parked", "1 dependency flagged"],
  },
  {
    label: "Priority actions",
    title: "A ranked view of what to fix first based on impact and ease.",
    detail:
      "Instead of a generic wish list, you get a sequence that shows the moves most likely to recover time and protect revenue fastest.",
    metrics: ["Quick win: enquiry routing", "Next: quote drafting", "Later: delivery summaries"],
  },
  {
    label: "Revenue and time leakage",
    title: "A practical summary of where admin drag and missed follow-up are costing you.",
    detail:
      "This gives owners a clearer sense of what inefficiency is doing to margin before they spend on more tools or implementation.",
    metrics: ["9-14 admin hours weekly", "6 cooling leads monthly", "Reporting rebuilt manually"],
  },
];

const reportSections = [
  {
    title: "Business context",
    items: ["Core workflows reviewed", "Primary bottlenecks and pressure points", "Existing tools and constraints"],
  },
  {
    title: "Opportunity map",
    items: ["High-fit AI interventions", "Impact versus complexity notes", "What should wait"],
  },
  {
    title: "Priority roadmap",
    items: ["What to fix first", "Where time and revenue are leaking", "Recommended next-step sequence"],
  },
];

const fitColumns = [
  {
    title: "Great fit for",
    tone: "fit" as const,
    items: [
      "Service businesses with recurring admin, follow-up, quoting, or reporting drag",
      "Owners who know time is being lost but want clarity before changing tools",
      "Teams with enough workflow complexity for better systems to create real leverage",
    ],
  },
  {
    title: "Not ideal for",
    tone: "unfit" as const,
    items: [
      "Businesses looking for a generic AI training session or trend presentation",
      "Teams that want a full implementation partner before diagnosing the bottleneck",
      "Operators with almost no lead flow, admin load, or workflow repetition to improve",
    ],
  },
];

const faqs = [
  {
    question: "What do we actually receive?",
    answer:
      "You receive an AI Efficiency Report with workflow bottlenecks, time and revenue leakage observations, practical AI opportunities, and a prioritised roadmap for what to change first.",
  },
  {
    question: "Do we need to change our current tools?",
    answer:
      "Not necessarily. The audit starts with how work moves through the business today. Often the highest-value improvement comes from using the current stack more intelligently before adding anything new.",
  },
  {
    question: "Is this just advice or can you help implement?",
    answer:
      "The report is diagnostic first. If the recommendations make sense and you want support, implementation help can be scoped separately around the highest-priority opportunities.",
  },
  {
    question: "How long does the audit take?",
    answer:
      "Most audits move from intake to report within a short working window once the right information is available. The exact pace depends on workflow complexity and how much needs to be reviewed.",
  },
  {
    question: "Is this suitable for smaller businesses?",
    answer:
      "Yes, if there is enough lead flow, admin repetition, or delivery coordination for better systems to matter. Smaller teams often benefit most when the owner is carrying too much operational context.",
  },
  {
    question: "What happens after the audit?",
    answer:
      "You can use the roadmap internally, bring it to your existing operators, or continue with scoped implementation support if you want help turning the recommendations into working systems.",
  },
];

export function ReportPreviewSection() {
  return (
    <SectionShell id="report-preview" tone="contrast">
      <div className="report-preview-layout">
        <div className="report-preview-copy reveal-up">
          <SectionHeader
            eyebrow="What the report shows"
            title="What your AI Efficiency Report actually shows"
            description="This is not a vague AI audit. It is a decision-ready report that shows where time is leaking, where follow-up is getting missed, and which workflow changes are worth actioning first."
            className="section-header-left"
          />

          <div className="report-card-grid">
            {reportPanels.map((panel, index) => (
              <article key={panel.label} className="report-card reveal-up" style={{ animationDelay: `${index * 70}ms` }}>
                <p className="report-card-label">{panel.label}</p>
                <h3>{panel.title}</h3>
                <p>{panel.detail}</p>
                <div className="report-card-metrics" aria-label={`${panel.label} highlights`}>
                  {panel.metrics.map((metric) => (
                    <span key={metric}>{metric}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="report-preview-rail reveal-up" style={{ animationDelay: "120ms" }}>
          <DeliverablePreview sections={reportSections} />

          <aside className="report-proof-card" aria-label="Why the report is useful">
            <p className="report-proof-kicker">Why owners keep this</p>
            <h3>It turns a messy operating picture into a shortlist of commercial decisions.</h3>
            <ul>
              <li>Clarifies where revenue is cooling off before anyone follows up</li>
              <li>Shows where admin and handoffs are quietly eroding margin</li>
              <li>Gives a practical sequence instead of another software recommendation</li>
            </ul>
          </aside>
        </div>
      </div>
    </SectionShell>
  );
}

export function FounderNoteSection() {
  return (
    <SectionShell id="founder-note">
      <div className="founder-note-layout">
        <div className="founder-note-copy reveal-up">
          <p className="eyebrow">Why this exists</p>
          <SectionTitle>Most businesses do not need more software. They need clarity on where time is actually being lost.</SectionTitle>
          <SectionLead>
            I kept seeing owners jump into AI tools before anyone had mapped the real workflow problem. Usually the issue is more basic and more expensive: slow follow-up, duplicated admin, invisible handoffs, and reporting that keeps getting rebuilt.
          </SectionLead>
          <p className="body-copy">
            This audit exists to diagnose that properly. It is designed to help a business owner understand what is worth fixing, what can stay as-is, and where AI can create leverage without adding more operational noise.
          </p>
        </div>

        <aside className="founder-note-card reveal-up" style={{ animationDelay: "90ms" }}>
          <div className="founder-note-top">
            <span className="founder-note-avatar" aria-hidden="true">
              FT
            </span>
            <div>
              <p className="founder-note-name">Finlay Sturzaker</p>
              <p className="founder-note-role">Founder, Temporary Utopia</p>
            </div>
          </div>

          <p className="founder-note-quote">
            &ldquo;The fastest way to waste money on AI is to automate the wrong part of the business. The right
            starting point is understanding where work is already dragging.&rdquo;
          </p>

          <div className="founder-note-photo-frame">
            <Image
              src="/finlay-portrait.png"
              alt="Finlay Sturzaker"
              width={840}
              height={1260}
              className="founder-note-photo"
              sizes="(max-width: 1023px) 100vw, 420px"
            />
          </div>

          <div className="founder-note-signals" aria-label="Founder note signals">
            <span>Practical diagnosis first</span>
            <span>No generic tool pushing</span>
            <span>Designed for owner-operators</span>
          </div>

          <p className="founder-note-signature">Finlay</p>

          <div className="founder-note-links" aria-label="Founder social links">
            <a href="https://instagram.com/heyfinlay" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/finlaysturzaker/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}

export function FitSection() {
  return (
    <SectionShell id="fit" tone="contrast">
      <SectionHeader
        eyebrow="Who it is for"
        title="A strong fit when inefficiency is already affecting speed, visibility, or margin."
        description="This works best for businesses where operational friction is already real enough to diagnose and improve."
      />

      <FitChecklist columns={fitColumns} />
    </SectionShell>
  );
}

export function FAQSection() {
  return (
    <SectionShell id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="The questions business owners usually ask before booking."
        description="Short answers so you can decide quickly whether the audit is the right next step."
      />

      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <article key={faq.question} className="faq-card reveal-up" style={{ animationDelay: `${index * 50}ms` }}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export function FinalCtaSection() {
  return (
    <SectionShell id="final-cta" tone="contrast">
      <div className="final-cta-shell reveal-up">
        <div className="final-cta-copy">
          <p className="eyebrow">Next step</p>
          <SectionTitle>Choose the path that fits how ready you are.</SectionTitle>
          <SectionLead>
            If you already want to talk through the audit, book a call. If you want a lower-friction first step, request a tailored AI Efficiency Snapshot and start there.
          </SectionLead>
        </div>

        <div className="final-cta-actions">
          <a href="#booking" className="btn-primary">
            Book a strategy call
          </a>
          <a href="#snapshot" className="btn-secondary">
            Get a tailored snapshot
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
