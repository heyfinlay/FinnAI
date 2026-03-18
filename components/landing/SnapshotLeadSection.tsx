"use client";

import { FormEvent, useMemo, useState } from "react";

import { SectionHeader, SectionShell } from "@/components/landing/AdvisoryBlocks";

type SnapshotForm = {
  name: string;
  businessName: string;
  website: string;
  industry: string;
  teamSize: string;
  biggestBottleneck: string;
  monthlyLeadVolume: string;
  email: string;
  phone: string;
};

type FieldErrors = Partial<Record<keyof SnapshotForm, string>>;

const initialForm: SnapshotForm = {
  name: "",
  businessName: "",
  website: "",
  industry: "",
  teamSize: "",
  biggestBottleneck: "",
  monthlyLeadVolume: "",
  email: "",
  phone: "",
};

const snapshotBenefits = [
  "A tailored view of likely time and revenue leakage",
  "The first AI opportunities worth investigating in your workflow",
  "A practical recommendation on whether a full audit is worth doing next",
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function delay(ms: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function normaliseWebsite(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function validateForm(form: SnapshotForm): { errors: FieldErrors; payload: SnapshotForm } {
  const payload = {
    ...form,
    name: form.name.trim(),
    businessName: form.businessName.trim(),
    website: normaliseWebsite(form.website),
    industry: form.industry.trim(),
    teamSize: form.teamSize.trim(),
    biggestBottleneck: form.biggestBottleneck.trim(),
    monthlyLeadVolume: form.monthlyLeadVolume.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
  };

  const errors: FieldErrors = {};

  if (!payload.name) errors.name = "Enter your name.";
  if (!payload.businessName) errors.businessName = "Enter your business name.";
  if (!payload.industry) errors.industry = "Enter your industry.";
  if (!payload.teamSize) errors.teamSize = "Select your team size.";
  if (!payload.biggestBottleneck) errors.biggestBottleneck = "Describe the main bottleneck.";
  if (!payload.monthlyLeadVolume) errors.monthlyLeadVolume = "Add your approximate monthly lead volume.";
  if (!payload.email) {
    errors.email = "Enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (payload.website) {
    try {
      new URL(payload.website);
    } catch {
      errors.website = "Enter a valid website.";
    }
  }

  return { errors, payload };
}

export function SnapshotLeadSection() {
  const [enquiriesPerMonth, setEnquiriesPerMonth] = useState(80);
  const [adminHoursPerWeek, setAdminHoursPerWeek] = useState(11);
  const [averageCustomerValue, setAverageCustomerValue] = useState(2400);
  const [form, setForm] = useState<SnapshotForm>(initialForm);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const calculator = useMemo(() => {
    const monthlyAdminHours = Math.round(adminHoursPerWeek * 4.3);
    const recoverableHours = Math.round(monthlyAdminHours * 0.58);
    const leakageRate = clamp(0.04 + adminHoursPerWeek * 0.0045, 0.05, 0.18);
    const coolingLeads = Math.max(1, Math.round(enquiriesPerMonth * leakageRate));
    const monthlyOpportunity = Math.round(coolingLeads * averageCustomerValue * 0.34 + recoverableHours * 85);

    return {
      monthlyAdminHours,
      recoverableHours,
      coolingLeads,
      monthlyOpportunity,
    };
  }, [adminHoursPerWeek, averageCustomerValue, enquiriesPerMonth]);

  function updateNumber(setter: (value: number) => void, value: string, fallback: number) {
    const parsed = Number(value);
    setter(Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback);
  }

  function updateField<Key extends keyof SnapshotForm>(key: Key, value: SnapshotForm[Key]) {
    setForm((current) => ({ ...current, [key]: value }));
    setFieldErrors((current) => {
      if (!current[key]) {
        return current;
      }

      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { errors } = validateForm(form);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      setSubmitState("error");
      return;
    }

    setSubmitState("loading");
    await delay(900);
    setSubmitState("success");
    setForm((current) => ({
      ...initialForm,
      monthlyLeadVolume: current.monthlyLeadVolume,
    }));
  }

  return (
    <SectionShell id="snapshot">
      <div className="snapshot-section-shell">
        <SectionHeader
          eyebrow="AI efficiency snapshot"
          title="See what inefficiency could be costing your business"
          description="Use the calculator to estimate where time and follow-up may be slipping, then request a tailored AI Efficiency Snapshot built around your business context."
        />

        <div className="snapshot-grid">
          <section className="calculator-card reveal-up" aria-labelledby="calculator-title">
            <div className="calculator-head">
              <p className="calculator-kicker">ROI estimator</p>
              <h3 id="calculator-title">A quick planning view of what friction may already be costing.</h3>
              <p>
                These numbers are directional, not a guarantee. They are designed to help you see whether the size of the problem is worth diagnosing properly.
              </p>
            </div>

            <div className="calculator-input-grid">
              <label className="calculator-field">
                <span>Enquiries per month</span>
                <input
                  type="number"
                  min="0"
                  inputMode="numeric"
                  value={enquiriesPerMonth}
                  onChange={(event) => updateNumber(setEnquiriesPerMonth, event.target.value, 80)}
                />
              </label>

              <label className="calculator-field">
                <span>Hours lost to admin or follow-up each week</span>
                <input
                  type="number"
                  min="0"
                  inputMode="numeric"
                  value={adminHoursPerWeek}
                  onChange={(event) => updateNumber(setAdminHoursPerWeek, event.target.value, 11)}
                />
              </label>

              <label className="calculator-field">
                <span>Average customer value</span>
                <input
                  type="number"
                  min="0"
                  inputMode="numeric"
                  value={averageCustomerValue}
                  onChange={(event) => updateNumber(setAverageCustomerValue, event.target.value, 2400)}
                />
              </label>
            </div>

            <div className="calculator-results" aria-label="Estimated efficiency impact">
              <article className="calculator-result-card">
                <span>Time leakage</span>
                <strong>{calculator.monthlyAdminHours} hrs / month</strong>
                <p>Current admin and coordination load being carried manually.</p>
              </article>

              <article className="calculator-result-card calculator-result-card-sage">
                <span>Leads cooling off</span>
                <strong>{calculator.coolingLeads} leads / month</strong>
                <p>Indicative follow-up leakage when response and routing stay manual.</p>
              </article>

              <article className="calculator-result-card calculator-result-card-highlight">
                <span>Potential upside</span>
                <strong>${calculator.monthlyOpportunity.toLocaleString()} / month</strong>
                <p>Indicative value from recovered time, cleaner follow-up, and better prioritisation.</p>
              </article>
            </div>
          </section>

          <section className="snapshot-form-card reveal-up" style={{ animationDelay: "90ms" }} aria-labelledby="snapshot-form-title">
            <div className="snapshot-form-head">
              <p className="calculator-kicker">Tailored lead magnet</p>
              <h3 id="snapshot-form-title">Request a tailored AI Efficiency Snapshot</h3>
              <p>
                Share a few operational details and you will receive a sharper opportunity view than a generic checklist can give you.
              </p>
            </div>

            <div className="snapshot-benefit-list" aria-label="What the snapshot includes">
              {snapshotBenefits.map((benefit) => (
                <div key={benefit} className="snapshot-benefit-item">
                  <span aria-hidden="true">+</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>

            {submitState === "success" ? (
              <div className="snapshot-success-panel">
                <p className="calculator-kicker">Request received</p>
                <h3>Your details are in.</h3>
                <p>
                  The next step is a tailored review of your workflow context, lead volume, and biggest bottleneck so the snapshot can point at practical opportunities rather than generic AI advice.
                </p>
                <a href="#booking" className="btn-secondary snapshot-success-action">
                  Prefer to talk now? Book a call
                </a>
              </div>
            ) : (
              <form className="snapshot-form" onSubmit={handleSubmit} noValidate>
                <div className="snapshot-form-grid">
                  <label className="snapshot-field">
                    <span>Name</span>
                    <input value={form.name} onChange={(event) => updateField("name", event.target.value)} />
                    {fieldErrors.name ? <small>{fieldErrors.name}</small> : null}
                  </label>

                  <label className="snapshot-field">
                    <span>Business name</span>
                    <input value={form.businessName} onChange={(event) => updateField("businessName", event.target.value)} />
                    {fieldErrors.businessName ? <small>{fieldErrors.businessName}</small> : null}
                  </label>

                  <label className="snapshot-field">
                    <span>Website</span>
                    <input value={form.website} onChange={(event) => updateField("website", event.target.value)} placeholder="example.com" />
                    {fieldErrors.website ? <small>{fieldErrors.website}</small> : null}
                  </label>

                  <label className="snapshot-field">
                    <span>Industry</span>
                    <input value={form.industry} onChange={(event) => updateField("industry", event.target.value)} placeholder="Accounting, agency, legal, etc." />
                    {fieldErrors.industry ? <small>{fieldErrors.industry}</small> : null}
                  </label>

                  <label className="snapshot-field">
                    <span>Team size</span>
                    <select value={form.teamSize} onChange={(event) => updateField("teamSize", event.target.value)}>
                      <option value="">Select</option>
                      <option value="Solo">Solo</option>
                      <option value="2-5">2-5 people</option>
                      <option value="6-15">6-15 people</option>
                      <option value="16-30">16-30 people</option>
                      <option value="30+">30+ people</option>
                    </select>
                    {fieldErrors.teamSize ? <small>{fieldErrors.teamSize}</small> : null}
                  </label>

                  <label className="snapshot-field">
                    <span>Approx. monthly lead volume</span>
                    <input
                      value={form.monthlyLeadVolume}
                      onChange={(event) => updateField("monthlyLeadVolume", event.target.value)}
                      placeholder={String(enquiriesPerMonth)}
                    />
                    {fieldErrors.monthlyLeadVolume ? <small>{fieldErrors.monthlyLeadVolume}</small> : null}
                  </label>

                  <label className="snapshot-field snapshot-field-wide">
                    <span>Biggest bottleneck</span>
                    <textarea
                      value={form.biggestBottleneck}
                      onChange={(event) => updateField("biggestBottleneck", event.target.value)}
                      placeholder="Slow response, quoting drag, handoff confusion, reporting admin, etc."
                    />
                    {fieldErrors.biggestBottleneck ? <small>{fieldErrors.biggestBottleneck}</small> : null}
                  </label>

                  <label className="snapshot-field">
                    <span>Email</span>
                    <input value={form.email} onChange={(event) => updateField("email", event.target.value)} />
                    {fieldErrors.email ? <small>{fieldErrors.email}</small> : null}
                  </label>

                  <label className="snapshot-field">
                    <span>Phone</span>
                    <input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} />
                  </label>
                </div>

                <p className="snapshot-form-note">
                  You are requesting a tailored opportunity snapshot, not joining a generic newsletter.
                </p>

                <button type="submit" className="btn-primary snapshot-submit" disabled={submitState === "loading"}>
                  {submitState === "loading" ? "Preparing request..." : "Get my tailored snapshot"}
                </button>
              </form>
            )}
          </section>
        </div>
      </div>
    </SectionShell>
  );
}
