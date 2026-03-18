import { SectionHeader } from "@/components/landing/AdvisoryBlocks";

type Stage = {
  step: string;
  title: string;
  description: string;
  icon: (props: { className?: string }) => React.JSX.Element;
};

const diagnosticStages: Stage[] = [
  {
    step: "Step 01",
    title: "Audit and diagnosis",
    description: "We review the workflows, repeated admin load, and follow-up gaps most likely to be slowing response, visibility, or profit.",
    icon: ScopeIcon,
  },
  {
    step: "Step 02",
    title: "Opportunity mapping",
    description: "We separate the practical AI and systems opportunities from the ideas that look interesting but will not move the business.",
    icon: MappingIcon,
  },
  {
    step: "Step 03",
    title: "Recommendations and roadmap",
    description: "You get a clear report showing what to fix first, what can wait, and where the fastest operational upside sits.",
    icon: PriorityIcon,
  },
  {
    step: "Step 04",
    title: "Optional implementation support",
    description: "If you want help turning the roadmap into working systems, the highest-priority pieces can be scoped and implemented next.",
    icon: SupportIcon,
  },
];

export function OperationsDiagnostic() {
  return (
    <section id="how-it-works" aria-labelledby="operations-diagnostic-title" className="section-shell section-shell-contrast">
      <div className="section-container">
        <SectionHeader
          eyebrow="How the audit works"
          id="operations-diagnostic-title"
          title="What happens after you book a call or request a snapshot."
          description="The process is designed to feel practical and low-friction: diagnose the bottleneck, map the upside, then decide whether implementation is worth doing."
        />

        <div className="process-card-grid">
          {diagnosticStages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <article key={stage.title} className="process-card reveal-up" style={{ animationDelay: `${index * 70}ms` }}>
                <div className="process-card-icon" aria-hidden="true">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="process-card-step">{stage.step}</p>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ScopeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4.75 7.75a3 3 0 0 1 3-3h8.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3h-8.5a3 3 0 0 1-3-3v-8.5Z" />
      <path d="M8 9.5h8" />
      <path d="M8 13h5" />
      <path d="M15.5 16.5h.01" />
    </svg>
  );
}

function MappingIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="6.5" cy="8" r="2.25" />
      <circle cx="17.5" cy="7" r="2.25" />
      <circle cx="12" cy="17" r="2.5" />
      <path d="M8.4 9.2 10.5 14" />
      <path d="m15.4 8.7-2.2 5.2" />
      <path d="M8.75 8h6.5" />
    </svg>
  );
}

function PriorityIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M5 17.5 9.5 13l3 3L19 9.5" />
      <path d="M14 9.5H19v5" />
      <path d="M5 20h14" />
    </svg>
  );
}

function SupportIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M7 9.75a5 5 0 1 1 10 0c0 4.25-5 8.25-5 8.25S7 14 7 9.75Z" />
      <circle cx="12" cy="9.75" r="1.75" />
      <path d="M5 20h14" />
    </svg>
  );
}
