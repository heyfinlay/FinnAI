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
