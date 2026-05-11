"use client";

import { useMemo, useState } from "react";

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://calendly.com/finlay-temporaryutopia/30min";

const navItems = [
  { href: "#pain", label: "Pain Signals" },
  { href: "#selector", label: "By Business Type" },
  { href: "#leakage-map", label: "Leakage Map" },
  { href: "#audit-finds", label: "What We Find" },
  { href: "#faq", label: "FAQ" },
];

const businessProfiles = {
  "Professional services": {
    pain: "Leads cool off while proposals, approvals, and follow-up sit across inboxes and individual memory.",
    outcomes: ["faster quote handoffs", "cleaner ownership", "consistent follow-up"],
  },
  Trades: {
    pain: "Calls, site visits, and admin updates compete for attention, so jobs and paperwork drift out of sync.",
    outcomes: ["fewer missed enquiries", "less repeat admin", "clearer scheduling flow"],
  },
  Agencies: {
    pain: "Delivery moves quickly, but updates, scope changes, and reporting create hidden coordination drag.",
    outcomes: ["smoother client comms", "faster internal handover", "better margin visibility"],
  },
  "Health & allied": {
    pain: "Bookings, follow-up, and patient/admin coordination often rely on manual processes that break under load.",
    outcomes: ["less follow-up leakage", "more reliable reminders", "cleaner front/back office workflow"],
  },
};

type BusinessType = keyof typeof businessProfiles;

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
  "Leakage diagnosis by workflow stage",
  "Decision matrix: automate, simplify, remove, delegate, or keep human",
  "Commercial impact estimate by priority area",
  "What to fix first/next/later with ownership notes",
  "Practical implementation path matched to your current stack",
  "Debrief session and recommendations",
];

const whyNow = [
  "Labour costs and delivery pressure are rising while admin load stays manual.",
  "Slow follow-up now means losing qualified demand to faster competitors.",
  "Tool sprawl increases noise unless workflow ownership is clarified first.",
];

const faqs = [
  { q: "Do I need to understand AI before this?", a: "No. The audit is business-first. We translate technical options into operational decisions and practical next steps." },
  { q: "Is this about replacing staff?", a: "No. The goal is to remove avoidable friction and repeated admin, so your team can focus on higher-value work." },
  { q: "What if automation is not the right answer?", a: "That is a valid outcome. Some issues are solved with better process design before introducing any automation." },
  { q: "What happens after the audit?", a: "You receive a prioritised roadmap. Then you can implement internally, with your existing partners, or with Temporary Utopia." },
];

function ArrowIcon() { return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4.5 10h10" /><path d="m10.5 4.5 5 5-5 5" /></svg>; }

function WorkflowDiagram() { return <div className="workflow-diagram" role="img" aria-label="Operational leakage workflow before and after"><div className="workflow-column"><h3>Where value leaks</h3><ol><li>Enquiry comes in</li><li>Delayed response</li><li>Weak follow-up</li><li>Quote not sent</li><li>Opportunity lost</li></ol></div><div className="workflow-divider" aria-hidden="true">→</div><div className="workflow-column is-improved"><h3>Improved system</h3><ol><li>Capture</li><li>Fast response</li><li>Structured follow-up</li><li>Quote tracking</li><li>Reporting visibility</li></ol></div></div>; }

export function LandingPage() {
  const [businessType, setBusinessType] = useState<BusinessType>("Professional services");
  const [monthlyLeads, setMonthlyLeads] = useState(30);
  const [leadValue, setLeadValue] = useState(2500);
  const [hoursLost, setHoursLost] = useState(8);

  const roi = useMemo(() => {
    const cooledLeads = Math.round(monthlyLeads * 0.12);
    const revenueLeak = cooledLeads * leadValue;
    const adminLeakAnnual = Math.round(hoursLost * 52 * 85);
    return { cooledLeads, revenueLeak, adminLeakAnnual, annualTotal: revenueLeak * 12 + adminLeakAnnual };
  }, [hoursLost, leadValue, monthlyLeads]);

  const selectedProfile = businessProfiles[businessType];

  return (<><header className="landing-header"><div className="landing-shell header-shell"><a href="#top" className="brand-wordmark">Temporary Utopia</a><nav className="header-nav" aria-label="Primary">{navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav><a href={bookingUrl} className="header-cta" target="_blank" rel="noreferrer">Book Audit</a></div></header><main className="editorial-page" id="top">
<section className="hero-band premium-hero"><div className="landing-shell premium-grid"><div><p className="section-chip">AI Efficiency Audit</p><h1 className="hero-display hero-display-wide">Find where your business is leaking time, leads, and money.</h1><p className="hero-lead hero-lead-wide">Diagnose where follow-up slows down, admin repeats, leads get missed, and handovers break — before spending more on tools or headcount.</p><div className="hero-actions"><a href={bookingUrl} className="primary-button" target="_blank" rel="noreferrer"><span>Book an AI Efficiency Audit</span><ArrowIcon /></a><a href="#audit-finds" className="secondary-button">See what the audit finds</a></div></div><WorkflowDiagram /></div></section>
<section id="pain" className="section-block muted"><div className="landing-shell narrow-shell"><h2 className="section-title">This is an operational diagnosis, not a generic AI pitch.</h2><p className="section-intro">Most leakage is structural: slow follow-up, repeated admin, messy handovers, and unclear ownership.</p><ul className="simple-list">{painPoints.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
<section id="selector" className="section-block"><div className="landing-shell narrow-shell"><h2 className="section-title">See likely leakage patterns by business type</h2><div className="business-selector">{(Object.keys(businessProfiles) as BusinessType[]).map((type) => <button key={type} className={`business-selector-btn${type === businessType ? " is-active" : ""}`} onClick={() => setBusinessType(type)}>{type}</button>)}</div><div className="selector-panel"><p>{selectedProfile.pain}</p><ul className="simple-list">{selectedProfile.outcomes.map((item) => <li key={item}>Audit focus: {item}</li>)}</ul></div></div></section>
<section id="leakage-map" className="section-block muted"><div className="landing-shell"><h2 className="section-title">Operational leakage map</h2><p className="section-intro">We map where opportunities drop, then design the minimum practical fixes worth implementing first.</p><WorkflowDiagram /></div></section>
<section className="section-block"><div className="landing-shell narrow-shell roi-panel"><h2 className="section-title">ROI drag calculator</h2><p className="section-intro">Directional numbers to help you recognise whether the leakage is worth diagnosing now.</p><div className="roi-range-grid"><label>Monthly enquiries: {monthlyLeads}<input type="range" min="5" max="150" value={monthlyLeads} onChange={(e) => setMonthlyLeads(Number(e.target.value))} /></label><label>Average job value: ${leadValue.toLocaleString()}<input type="range" min="500" max="10000" step="100" value={leadValue} onChange={(e) => setLeadValue(Number(e.target.value))} /></label><label>Hours lost weekly: {hoursLost}<input type="range" min="1" max="30" value={hoursLost} onChange={(e) => setHoursLost(Number(e.target.value))} /></label></div><p className="equation">Estimated cooled leads: {roi.cooledLeads}/month · Revenue leakage: ${roi.revenueLeak.toLocaleString()}/month · Annual drag: ${roi.annualTotal.toLocaleString()}</p></div></section>
<section id="audit-finds" className="section-block muted"><div className="landing-shell premium-two-col"><div><h2 className="section-title">What the audit finds</h2><ul className="simple-list">{auditFinds.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h2 className="section-title">What you receive</h2><ul className="simple-list">{deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
<section className="section-block"><div className="landing-shell narrow-shell"><h2 className="section-title">Why now</h2><ul className="simple-list">{whyNow.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
<section className="section-block muted"><div className="landing-shell narrow-shell"><h2 className="section-title">Request audit details</h2><p className="section-intro">If you want the audit scope in writing first, send your details below. Prefer immediate action? Book via Calendly.</p><form className="embedded-form" onSubmit={(e) => e.preventDefault()}><input placeholder="Name" /><input placeholder="Business" /><input placeholder="Work email" type="email" /><textarea placeholder="Where does your workflow feel slow, repeated, or unclear?" /><button type="submit" className="secondary-button">Request audit details</button></form></div></section>
<section id="faq" className="section-block"><div className="landing-shell narrow-shell"><h2 className="section-title">FAQ</h2><div className="faq-list">{faqs.map((item) => <article key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>)}</div></div></section>
<section className="section-block final-cta"><div className="landing-shell narrow-shell"><h2 className="section-title">Before you buy another tool, find out where your business is actually leaking value.</h2><a href={bookingUrl} className="primary-button" target="_blank" rel="noreferrer"><span>Book an AI Efficiency Audit</span><ArrowIcon /></a></div></section>
</main></>);
}
