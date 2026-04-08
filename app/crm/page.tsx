import { getLeadRecords } from "./parseLeads";

const workflowLanes = [
  {
    title: "Lead Pipeline",
    body: "Structured lead snapshots, fit signals, pain angles, and contact readiness tied to the live sheet.",
  },
  {
    title: "Call Prep",
    body: "Short one-page cards with friction analysis, objection handling, and personalized openings for outreach.",
  },
  {
    title: "Proof Engine",
    body: "Case-study templates, before/after workflow proof, and audit excerpts you can use in sales and content.",
  },
  {
    title: "Finlay Queue",
    body: "Only the actions that require your human presence, approval, or closing skill should surface here.",
  },
];

const finlayQueue = [
  {
    title: "Call first 5 priority leads",
    reason: "Strongest audit-fit businesses with direct public contact paths and clear workflow pain.",
    action: "Use the prep cards and start with The Co. Accountants, Key Business Advisors, Conway Consulting Group, The Gut Guy, and TCX Consult.",
  },
  {
    title: "Approve first outbound sequence",
    reason: "Once approved, outreach drafting can be standardized across the lead set.",
    action: "Review messaging angles for accounting, advisory, and consult-heavy health businesses.",
  },
  {
    title: "Record a short Loom on the audit",
    reason: "Useful as proof, follow-up asset, and credibility layer for colder leads.",
    action: "Explain what the AI Efficiency Audit is, what it finds, and why it prevents bad AI spending.",
  },
];

const outreachWorkflow = [
  "Research and score the lead",
  "Assign pain angle and outreach priority",
  "Draft first-touch message",
  "Prepare call opener and likely objection handling",
  "Track status and next action",
];

export default function CRMPage() {
  const leads = getLeadRecords();
  const priorityLeads = leads.filter((lead) => lead.priority === "High").slice(0, 10);
  const topFive = priorityLeads.slice(0, 5);

  const pipelineStats = [
    { label: "Total leads", value: String(leads.length), detail: "Live records currently loaded from the Google Sheet" },
    { label: "Priority A", value: String(leads.filter((lead) => lead.priority === "High").length), detail: "High-priority businesses with strong audit fit" },
    { label: "Ready now", value: String(leads.filter((lead) => lead.readyToOutreach === "Yes").length), detail: "Leads with enough detail to begin outreach" },
    { label: "Top shortlist", value: String(priorityLeads.length), detail: "Highest-value targets for immediate sales attention" },
  ];

  return (
    <main className="crm-page">
      <section className="crm-hero">
        <div className="crm-shell">
          <div className="crm-hero-copy">
            <p className="crm-kicker">FinnAI Revenue OS</p>
            <h1>Lead dashboard for a lean, founder-led AI advisory pipeline.</h1>
            <p>
              This is the first internal CRM layer, designed around your actual workflow, not generic SaaS clutter. It keeps
              lead quality, call readiness, and next actions visible in one place.
            </p>
          </div>

          <div className="crm-stat-grid">
            {pipelineStats.map((stat) => (
              <article key={stat.label} className="crm-stat-card">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                <p>{stat.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="crm-board-section">
        <div className="crm-shell">
          <div className="crm-board-head">
            <div>
              <p className="crm-section-label">Priority queue</p>
              <h2>Top leads to move now</h2>
            </div>
            <p>
              A clean, operator-friendly view of who matters, why they matter, and the next move required to convert them into
              booked calls.
            </p>
          </div>

          <div className="crm-table-wrap">
            <table className="crm-table">
              <thead>
                <tr>
                  <th>Business</th>
                  <th>Contact</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Pain angle</th>
                  <th>Next action</th>
                </tr>
              </thead>
              <tbody>
                {topFive.map((lead) => (
                  <tr key={lead.id}>
                    <td>{lead.businessName}</td>
                    <td>
                      <strong>{lead.contactName || "unclear"}</strong>
                      <div className="crm-cell-subtle">{lead.role || "unclear"}</div>
                    </td>
                    <td>{lead.location}</td>
                    <td>
                      <span className="crm-badge">{lead.priority || "New"}</span>
                    </td>
                    <td>{lead.painAngle || "Needs review"}</td>
                    <td>{lead.contactStatus ? `Continue ${lead.contactStatus}` : "Prepare outreach + call opener"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="crm-detail-section">
        <div className="crm-shell crm-detail-grid">
          <article className="crm-panel">
            <div className="crm-panel-head">
              <p className="crm-section-label">Call prep</p>
              <h2>Top 10 shortlist</h2>
            </div>

            <div className="crm-list-stack">
              {priorityLeads.map((lead) => (
                <article key={lead.businessName} className="crm-mini-card">
                  <div className="crm-mini-head">
                    <h3>{lead.businessName}</h3>
                    <span className="crm-badge">{lead.priority}</span>
                  </div>
                  <p>
                    <strong>{lead.contactName || "unclear"}</strong>
                    {lead.role ? ` · ${lead.role}` : ""}
                  </p>
                  <p>{lead.offerSummary}</p>
                  <p className="crm-mini-note">Audit angle: {lead.painAngle || "Needs review"}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="crm-panel">
            <div className="crm-panel-head">
              <p className="crm-section-label">Finlay-only queue</p>
              <h2>Human actions only</h2>
            </div>

            <div className="crm-list-stack">
              {finlayQueue.map((task) => (
                <article key={task.title} className="crm-mini-card">
                  <h3>{task.title}</h3>
                  <p>{task.reason}</p>
                  <p className="crm-mini-note">Action: {task.action}</p>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="crm-workflow-section">
        <div className="crm-shell">
          <div className="crm-board-head">
            <div>
              <p className="crm-section-label">Operating lanes</p>
              <h2>What this CRM is really managing</h2>
            </div>
            <p>
              The point is not to buy a bloated CRM. The point is to make the revenue workflow visible, controllable, and easy
              to act on.
            </p>
          </div>

          <div className="crm-lane-grid">
            {workflowLanes.map((lane) => (
              <article key={lane.title} className="crm-lane-card">
                <h3>{lane.title}</h3>
                <p>{lane.body}</p>
              </article>
            ))}
          </div>

          <div className="crm-process-card">
            <div className="crm-panel-head">
              <p className="crm-section-label">Outreach workflow</p>
              <h2>How a lead moves through the system</h2>
            </div>
            <ol className="crm-process-list">
              {outreachWorkflow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
