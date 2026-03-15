import type { ReactNode } from "react";

type ProofItem = {
  label: string;
  detail: string;
};

type ComparisonColumn = {
  title: string;
  text: string;
  points: string[];
  tone: "muted" | "accent";
};

type TimelineStep = {
  title: string;
  text: string;
};

type WorkflowExample = {
  title: string;
  before: string[];
  after: string[];
  outcome: string;
};

type PreviewSection = {
  title: string;
  items: string[];
};

type FitColumn = {
  title: string;
  items: string[];
  tone: "fit" | "unfit";
};

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  id,
  className = "",
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <div className={`section-header ${className}`.trim()}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <SectionTitle id={id}>{title}</SectionTitle>
      {description ? <SectionLead>{description}</SectionLead> : null}
    </div>
  );
}

export function SectionTitle({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 id={id} className={`section-title ${className}`}>
      {children}
    </h2>
  );
}

export function SectionLead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`section-lead ${className}`}>{children}</p>;
}

export function SectionShell({
  id,
  tone = "default",
  children,
}: {
  id?: string;
  tone?: "default" | "contrast";
  children: ReactNode;
}) {
  return (
    <section id={id} className={`section-shell ${tone === "contrast" ? "section-shell-contrast" : ""}`}>
      <div className="section-container">{children}</div>
    </section>
  );
}

export function ProofStrip({ items }: { items: ProofItem[] }) {
  return (
    <div className="proof-strip" aria-label="Why the audit is credible">
      {items.map((item) => (
        <div key={item.label} className="proof-chip">
          <span>{item.label}</span>
          <strong>{item.detail}</strong>
        </div>
      ))}
    </div>
  );
}

export function AuditDiagram() {
  return (
    <aside className="audit-diagram reveal-up" aria-label="Operations audit diagram">
      <div className="audit-diagram-head">
        <p className="audit-diagram-kicker">Operations Diagnostic</p>
        <p className="audit-diagram-title">What gets mapped during the audit</p>
      </div>

      <div className="audit-grid">
        <div className="audit-stream">
          <p className="audit-stream-label">Incoming Work</p>
          <ul>
            <li>Leads and enquiries</li>
            <li>Follow-up and booking</li>
            <li>Client communication</li>
          </ul>
        </div>

        <div className="audit-core">
          <div className="audit-core-node">
            <span>01</span>
            <p>Workflow visibility</p>
          </div>
          <div className="audit-core-node">
            <span>02</span>
            <p>Repeated admin and handoffs</p>
          </div>
          <div className="audit-core-node">
            <span>03</span>
            <p>High-fit AI opportunities</p>
          </div>
        </div>

        <div className="audit-stream audit-stream-output">
          <p className="audit-stream-label">Decision Output</p>
          <ul>
            <li>Priority workflow map</li>
            <li>Readiness and risk notes</li>
            <li>Implementation sequence</li>
          </ul>
        </div>
      </div>

      <div className="audit-foot">
        <div>
          <span>Signals reviewed</span>
          <strong>Delays, duplication, missed follow-up, reporting drag</strong>
        </div>
        <div>
          <span>Output</span>
          <strong>Clear recommendations before any tool spend</strong>
        </div>
      </div>
    </aside>
  );
}

export function ProblemComparison({ columns }: { columns: ComparisonColumn[] }) {
  return (
    <div className="problem-comparison reveal-up" aria-label="Comparison between tool-first and diagnostic-first approaches">
      {columns.map((column) => (
        <article
          key={column.title}
          className={`problem-column ${column.tone === "accent" ? "problem-column-accent" : ""}`}
        >
          <p className="problem-column-label">{column.title}</p>
          <p className="problem-column-text">{column.text}</p>
          <ul className="problem-points">
            {column.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export function ProcessTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <ol className="process-timeline" aria-label="How the audit works">
      {steps.map((step, index) => (
        <li key={step.title} className="process-step reveal-up" style={{ animationDelay: `${index * 70}ms` }}>
          <div className="process-step-number" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div>
            <h3 className="process-step-title">{step.title}</h3>
            <p className="process-step-text">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function BeforeAfterWorkflow({ example, delay = 0 }: { example: WorkflowExample; delay?: number }) {
  return (
    <article className="workflow-example reveal-up" style={{ animationDelay: `${delay}ms` }}>
      <div className="workflow-example-head">
        <h3>{example.title}</h3>
        <p>Before</p>
      </div>

      <div className="workflow-example-grid">
        <div className="workflow-state">
          <span className="workflow-state-label">Before</span>
          <ul>
            {example.before.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="workflow-arrow" aria-hidden="true">
          <span />
        </div>

        <div className="workflow-state workflow-state-after">
          <span className="workflow-state-label">After</span>
          <ul>
            {example.after.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="workflow-outcome">
          <span className="workflow-state-label">Outcome</span>
          <p>{example.outcome}</p>
        </div>
      </div>
    </article>
  );
}

export function DeliverablePreview({ sections }: { sections: PreviewSection[] }) {
  return (
    <aside className="deliverable-preview reveal-up" aria-label="Preview of the audit report">
      <div className="deliverable-preview-window">
        <div className="deliverable-preview-bar">
          <span />
          <span />
          <span />
        </div>

        <div className="deliverable-preview-body">
          <div className="deliverable-preview-header">
            <p>AI Operations Audit</p>
            <span>Decision-ready report structure</span>
          </div>

          {sections.map((section) => (
            <section key={section.title} className="deliverable-preview-section">
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </aside>
  );
}

const outcomeChips = ["Faster response", "Cleaner handoffs", "Less admin drag", "Better visibility"];

export function OperationalClarityVisualization() {
  return (
    <div className="clarity-grid" aria-label="Operational clarity transformation">
      <article className="system-card system-card-messy reveal-up">
        <div className="system-visual" aria-hidden="true">
          <svg viewBox="0 0 480 340" className="system-svg">
            <defs>
              <linearGradient id="messyStroke" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(140,170,208,0.45)" />
                <stop offset="100%" stopColor="rgba(100,129,168,0.12)" />
              </linearGradient>
            </defs>

            <path d="M86 92C148 82 172 184 246 174C307 166 332 76 394 90" className="system-line system-line-muted" />
            <path d="M88 248C152 214 176 116 252 120C329 123 346 228 402 244" className="system-line system-line-muted" />
            <path d="M86 92C156 128 210 280 314 270C372 265 388 204 402 168" className="system-line system-line-soft" />
            <path d="M88 248C160 226 192 176 246 174C302 171 356 189 394 90" className="system-line system-line-noisy" />
            <path d="M150 46L150 288" className="system-guide" />
            <path d="M324 42L324 292" className="system-guide" />

            <circle cx="86" cy="92" r="20" className="system-node system-node-muted" />
            <circle cx="88" cy="248" r="20" className="system-node system-node-muted" />
            <circle cx="246" cy="174" r="26" className="system-node system-node-alert" />
            <circle cx="394" cy="90" r="20" className="system-node system-node-muted" />
            <circle cx="402" cy="244" r="20" className="system-node system-node-muted" />
            <circle cx="314" cy="270" r="16" className="system-node system-node-soft" />
            <circle cx="252" cy="120" r="16" className="system-node system-node-soft" />

            <g className="system-warning">
              <circle cx="198" cy="92" r="14" />
              <path d="M198 85v7" />
              <circle cx="198" cy="96" r="1.5" />
            </g>
            <g className="system-warning">
              <circle cx="352" cy="182" r="14" />
              <path d="M352 175v7" />
              <circle cx="352" cy="186" r="1.5" />
            </g>
          </svg>
        </div>

        <p className="system-caption">
          Most operations evolve into fragmented systems, with duplicated work, hidden delays, and manual coordination.
        </p>
      </article>

      <article className="system-card system-card-clear reveal-up" style={{ animationDelay: "90ms" }}>
        <div className="system-visual" aria-hidden="true">
          <svg viewBox="0 0 480 340" className="system-svg">
            <defs>
              <linearGradient id="clearStroke" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(123,208,255,0.3)" />
                <stop offset="55%" stopColor="rgba(140,242,225,0.85)" />
                <stop offset="100%" stopColor="rgba(123,208,255,0.28)" />
              </linearGradient>
            </defs>

            <path d="M74 106H174" className="system-line system-line-clean" />
            <path d="M174 106H300" className="system-line system-line-clean system-line-priority" />
            <path d="M300 106H400" className="system-line system-line-clean" />
            <path d="M174 106V234" className="system-line system-line-clean" />
            <path d="M300 106V234" className="system-line system-line-clean" />
            <path d="M174 234H300" className="system-line system-line-clean" />

            <circle cx="74" cy="106" r="18" className="system-node system-node-clean" />
            <circle cx="174" cy="106" r="22" className="system-node system-node-clean" />
            <circle cx="300" cy="106" r="28" className="system-node system-node-priority" />
            <circle cx="400" cy="106" r="18" className="system-node system-node-clean" />
            <circle cx="174" cy="234" r="18" className="system-node system-node-clean" />
            <circle cx="300" cy="234" r="18" className="system-node system-node-clean" />

            <g className="system-success">
              <circle cx="352" cy="206" r="16" />
              <path d="m345 206 5 5 9-10" />
            </g>
            <g className="system-success">
              <circle cx="124" cy="250" r="16" />
              <path d="m117 250 5 5 9-10" />
            </g>

            <rect x="138" y="54" width="198" height="156" rx="30" className="system-focus" />
          </svg>
        </div>

        <p className="system-caption">
          The audit restructures the operational map, showing where automation and AI create real leverage.
        </p>

        <div className="system-chip-row" aria-label="Operational outcomes">
          {outcomeChips.map((chip) => (
            <span key={chip} className="system-chip">
              {chip}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}

export function FitChecklist({ columns }: { columns: FitColumn[] }) {
  return (
    <div className="fit-grid">
      {columns.map((column) => (
        <article key={column.title} className={`fit-card ${column.tone === "unfit" ? "fit-card-muted" : ""}`}>
          <h3>{column.title}</h3>
          <ul>
            {column.items.map((item) => (
              <li key={item}>
                <span aria-hidden="true">{column.tone === "fit" ? "✓" : "×"}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
