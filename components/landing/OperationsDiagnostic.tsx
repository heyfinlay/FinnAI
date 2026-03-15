type Stage = {
  title: string;
  items: string[];
  tone: "default" | "featured";
  icon: (props: { className?: string }) => React.JSX.Element;
};

const diagnosticStages: Stage[] = [
  {
    title: "Incoming Work",
    items: ["Leads", "Bookings", "Client messages"],
    tone: "default",
    icon: IncomingWorkIcon,
  },
  {
    title: "Audit Analysis",
    items: ["Map workflows", "Find duplication", "Identify AI opportunities"],
    tone: "featured",
    icon: AuditAnalysisIcon,
  },
  {
    title: "Strategic Output",
    items: ["Priority map", "Risk notes", "Implementation plan"],
    tone: "default",
    icon: StrategicOutputIcon,
  },
];

export function OperationsDiagnostic() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="operations-diagnostic-title"
      className="relative overflow-hidden border-y border-white/10 bg-[linear-gradient(180deg,rgba(13,18,25,0.96),rgba(9,13,18,0.98))] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(116,180,255,0.12),transparent_34%),radial-gradient(circle_at_80%_30%,rgba(115,212,197,0.08),transparent_24%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
            Operations Diagnostic
          </p>
          <h2
            id="operations-diagnostic-title"
            className="mt-5 text-balance font-display text-3xl leading-tight text-white sm:text-4xl lg:text-[3rem]"
          >
            How the AI Audit Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            We map how work moves through the business before recommending where AI should be introduced.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_auto_1.12fr_auto_1fr] lg:items-stretch">
          {diagnosticStages.map((stage, index) => {
            const Icon = stage.icon;
            const isFeatured = stage.tone === "featured";

            return (
              <div key={stage.title} className="contents">
                <article
                  className={[
                    "group relative overflow-hidden rounded-[1.6rem] border p-6 transition duration-300 ease-out",
                    "focus-within:-translate-y-0.5 hover:-translate-y-0.5",
                    isFeatured
                      ? "border-sky-400/35 bg-[linear-gradient(180deg,rgba(18,28,40,0.98),rgba(11,18,27,0.98))] shadow-[0_24px_70px_rgba(10,18,30,0.38)]"
                      : "border-white/10 bg-white/[0.04] shadow-[0_18px_40px_rgba(0,0,0,0.22)] hover:border-white/20",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70",
                      isFeatured ? "via-sky-300/60" : "",
                    ].join(" ")}
                  />

                  <div
                    className={[
                      "inline-flex h-12 w-12 items-center justify-center rounded-2xl border",
                      isFeatured ? "border-sky-300/30 bg-sky-400/10 text-sky-200" : "border-white/10 bg-white/5 text-slate-200",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold tracking-tight text-white">{stage.title}</h3>
                      {isFeatured ? (
                        <span className="rounded-full border border-sky-300/25 bg-sky-400/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-sky-200">
                          Core step
                        </span>
                      ) : null}
                    </div>

                    <ul className="mt-5 grid gap-3" aria-label={`${stage.title} items`}>
                      {stage.items.map((item) => (
                        <li
                          key={item}
                          className={[
                            "flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium text-slate-100 sm:text-[0.95rem]",
                            isFeatured
                              ? "border-sky-300/15 bg-sky-400/[0.07]"
                              : "border-white/10 bg-black/10",
                          ].join(" ")}
                        >
                          <span
                            className={[
                              "inline-flex h-2.5 w-2.5 shrink-0 rounded-full",
                              isFeatured ? "bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,0.55)]" : "bg-slate-300",
                            ].join(" ")}
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>

                {index < diagnosticStages.length - 1 ? <ProcessConnector featured={isFeatured} /> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessConnector({ featured }: { featured: boolean }) {
  return (
    <div className="relative flex items-center justify-center px-1 py-2 lg:px-0 lg:py-0" aria-hidden="true">
      <div className="h-10 w-px bg-gradient-to-b from-white/0 via-white/25 to-white/0 lg:hidden" />
      <div className="hidden h-px w-16 bg-gradient-to-r from-white/15 via-white/35 to-white/15 lg:block" />
      <div
        className={[
          "absolute inline-flex h-9 w-9 items-center justify-center rounded-full border bg-slate-950/80 text-slate-200 backdrop-blur",
          featured ? "border-sky-300/30 shadow-[0_0_18px_rgba(56,189,248,0.22)]" : "border-white/15",
        ].join(" ")}
      >
        <ArrowIcon className="h-4 w-4 lg:h-5 lg:w-5 lg:rotate-0 rotate-90" />
      </div>
    </div>
  );
}

function IncomingWorkIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <path d="M4 7.5a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
      <path d="M5 8l6.05 4.2a1.7 1.7 0 0 0 1.9 0L19 8" />
      <path d="M7 15.5h3.5" />
    </svg>
  );
}

function AuditAnalysisIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <rect x="4" y="5" width="16" height="14" rx="3" />
      <path d="M8 9h8" />
      <path d="M8 13h4" />
      <path d="m15.5 14.5 3 3" />
      <circle cx="14" cy="13" r="2.5" />
    </svg>
  );
}

function StrategicOutputIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
      <path d="M12 4 6 7v4c0 4.1 2.4 6.9 6 9 3.6-2.1 6-4.9 6-9V7l-6-3Z" />
      <path d="m9.4 12.3 1.8 1.8 3.5-3.8" />
    </svg>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
