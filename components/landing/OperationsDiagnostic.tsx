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
    title: "Find where money leaks",
    description: "We map where enquiries stall, handoffs slow down, and admin quietly eats margin.",
    icon: ScopeIcon,
  },
  {
    step: "Step 02",
    title: "Spot the AI wins",
    description: "We separate the tasks worth automating from the ones that only look exciting on paper.",
    icon: MappingIcon,
  },
  {
    step: "Step 03",
    title: "See the next moves",
    description: "You leave knowing which changes create the fastest upside and which ones will cost you if you wait.",
    icon: PriorityIcon,
  },
];

export function OperationsDiagnostic() {
  return (
    <section id="how-it-works" aria-labelledby="operations-diagnostic-title" className="section-shell section-shell-contrast">
      <div className="section-container">
        <SectionHeader
          eyebrow="How the audit works"
          id="operations-diagnostic-title"
          title="In one audit, you see what’s slowing growth and what to fix first."
          description="Most teams already have enough tools. The opportunity is finding the few workflow changes that unlock time and profit fastest."
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
