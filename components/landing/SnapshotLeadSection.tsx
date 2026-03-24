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
  enquiryChannels: string[];
  contactPreference: string;
  email: string;
  phone: string;
};

type FieldErrors = Partial<Record<keyof SnapshotForm, string>>;

type StepDefinition = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  fields: (keyof SnapshotForm)[];
};

const enquiryChannelOptions = [
  "Website form",
  "Phone calls",
  "Instagram / social",
  "Referral enquiries",
  "Email inbox",
  "Paid ads / landing pages",
];

const stepDefinitions: StepDefinition[] = [
  {
    id: 1,
    eyebrow: "Step 01",
    title: "Business context",
    description: "Start with the basics so the review is grounded in the kind of business you actually run.",
    fields: ["name", "businessName", "website", "industry", "teamSize"],
  },
  {
    id: 2,
    eyebrow: "Step 02",
    title: "Lead handling",
    description: "Show where leads come in and where response, routing, or qualification may already be getting messy.",
    fields: ["monthlyLeadVolume", "enquiryChannels", "biggestBottleneck"],
  },
  {
    id: 3,
    eyebrow: "Step 03",
    title: "Delivery preferences",
    description: "Choose the best way to send the tailored checklist and the next step if there is real upside.",
    fields: ["contactPreference", "email", "phone"],
  },
];

const initialForm: SnapshotForm = {
  name: "",
  businessName: "",
  website: "",
  industry: "",
  teamSize: "",
  biggestBottleneck: "",
  monthlyLeadVolume: "",
  enquiryChannels: [],
  contactPreference: "Email me the checklist",
  email: "",
  phone: "",
};

const snapshotBenefits = [
  "A tailored view of where admin, follow-up, or handoff drag is likely hiding",
  "The highest-probability quick wins before you spend money on more software",
  "A clear recommendation on whether a deeper audit is worth doing next",
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
    enquiryChannels: form.enquiryChannels,
    contactPreference: form.contactPreference.trim(),
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
  if (payload.enquiryChannels.length === 0) errors.enquiryChannels = "Choose at least one enquiry channel.";
  if (!payload.contactPreference) errors.contactPreference = "Select how you want the checklist delivered.";
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
  const [currentStep, setCurrentStep] = useState(0);

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

  const activeStep = stepDefinitions[currentStep];
  const progressPercentage = ((currentStep + 1) / stepDefinitions.length) * 100;

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

  function toggleEnquiryChannel(option: string) {
    setForm((current) => {
      const exists = current.enquiryChannels.includes(option);
      const next = exists
        ? current.enquiryChannels.filter((item) => item !== option)
        : [...current.enquiryChannels, option];

      return { ...current, enquiryChannels: next };
    });

    setFieldErrors((current) => {
      if (!current.enquiryChannels) {
        return current;
      }

      const next = { ...current };
      delete next.enquiryChannels;
      return next;
    });
  }

  function getStepErrors(step: StepDefinition) {
    return step.fields.filter((field) => Boolean(fieldErrors[field]));
  }

  function validateCurrentStep(): boolean {
    const { errors } = validateForm(form);
    const relevantErrors = activeStep.fields.reduce<FieldErrors>((accumulator, field) => {
      if (errors[field]) {
        accumulator[field] = errors[field];
      }
      return accumulator;
    }, {});

    setFieldErrors((current) => ({ ...current, ...relevantErrors }));
    return Object.keys(relevantErrors).length === 0;
  }

  function handleNextStep() {
    if (!validateCurrentStep()) return;
    setCurrentStep((step) => Math.min(step + 1, stepDefinitions.length - 1));
  }

  function handlePreviousStep() {
    setCurrentStep((step) => Math.max(step - 1, 0));
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
    setCurrentStep(0);
  }

  return (
    <SectionShell id="snapshot">
      <div className="snapshot-section-shell">
        <SectionHeader
          eyebrow="AI efficiency snapshot"
          title="See what inefficiency could be costing your business"
          description="Use the calculator to estimate where time and follow-up may be slipping, then move through the guided qualification flow to request a tailored AI Efficiency Snapshot."
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
              <div className="snapshot-flow-headline">
                <div>
                  <p className="calculator-kicker">Guided qualification</p>
                  <h3 id="snapshot-form-title">Request a tailored AI Efficiency Snapshot</h3>
                </div>
                <div className="snapshot-step-chip" aria-label={`Step ${activeStep.id} of ${stepDefinitions.length}`}>
                  {activeStep.eyebrow}
                </div>
              </div>

              <p>
                Move through the same qualification flow I use to frame audit opportunities so the checklist is specific to your business, not generic AI fluff.
              </p>
            </div>

            <div className="snapshot-progress-shell" aria-label="Qualification flow progress">
              <div className="snapshot-progress-track">
                <span className="snapshot-progress-fill" style={{ width: `${progressPercentage}%` }} />
              </div>

              <div className="snapshot-steps-row">
                {stepDefinitions.map((step, index) => {
                  const isActive = index === currentStep;
                  const isComplete = index < currentStep;
                  return (
                    <div
                      key={step.id}
                      className={`snapshot-step-marker${isActive ? " is-active" : ""}${isComplete ? " is-complete" : ""}`}
                    >
                      <span>{step.id}</span>
                      <p>{step.title}</p>
                    </div>
                  );
                })}
              </div>
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
                <h3>Your qualification flow is complete.</h3>
                <p>
                  The next step is a tailored review of your workflow context, lead volume, and biggest bottleneck so the snapshot points at practical opportunities rather than generic AI advice.
                </p>
                <a href="#booking" className="btn-secondary snapshot-success-action">
                  Prefer to talk now? Book a call
                </a>
              </div>
            ) : (
              <form className="snapshot-form" onSubmit={handleSubmit} noValidate>
                <div className="snapshot-step-card">
                  <div className="snapshot-step-copy">
                    <p className="snapshot-step-eyebrow">{activeStep.eyebrow}</p>
                    <h4>{activeStep.title}</h4>
                    <p>{activeStep.description}</p>
                  </div>

                  <div className="snapshot-form-grid">
                    {currentStep === 0 ? (
                      <>
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
                          <input value={form.industry} onChange={(event) => updateField("industry", event.target.value)} placeholder="Accounting, mortgage broking, electrical, agency..." />
                          {fieldErrors.industry ? <small>{fieldErrors.industry}</small> : null}
                        </label>

                        <label className="snapshot-field snapshot-field-wide">
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
                      </>
                    ) : null}

                    {currentStep === 1 ? (
                      <>
                        <label className="snapshot-field">
                          <span>Approx. monthly lead volume</span>
                          <input
                            value={form.monthlyLeadVolume}
                            onChange={(event) => updateField("monthlyLeadVolume", event.target.value)}
                            placeholder={String(enquiriesPerMonth)}
                          />
                          {fieldErrors.monthlyLeadVolume ? <small>{fieldErrors.monthlyLeadVolume}</small> : null}
                        </label>

                        <div className="snapshot-field snapshot-field-wide">
                          <span>Main enquiry channels</span>
                          <div className="snapshot-toggle-grid" role="group" aria-label="Main enquiry channels">
                            {enquiryChannelOptions.map((option) => {
                              const selected = form.enquiryChannels.includes(option);
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  className={`snapshot-toggle${selected ? " is-selected" : ""}`}
                                  onClick={() => toggleEnquiryChannel(option)}
                                  aria-pressed={selected}
                                >
                                  {option}
                                </button>
                              );
                            })}
                          </div>
                          {fieldErrors.enquiryChannels ? <small>{fieldErrors.enquiryChannels}</small> : null}
                        </div>

                        <label className="snapshot-field snapshot-field-wide">
                          <span>Biggest bottleneck right now</span>
                          <textarea
                            value={form.biggestBottleneck}
                            onChange={(event) => updateField("biggestBottleneck", event.target.value)}
                            placeholder="Slow response, quote follow-up, onboarding admin, missed calls, handoff confusion..."
                          />
                          {fieldErrors.biggestBottleneck ? <small>{fieldErrors.biggestBottleneck}</small> : null}
                        </label>
                      </>
                    ) : null}

                    {currentStep === 2 ? (
                      <>
                        <label className="snapshot-field snapshot-field-wide">
                          <span>How would you like this handled?</span>
                          <select value={form.contactPreference} onChange={(event) => updateField("contactPreference", event.target.value)}>
                            <option>Email me the checklist</option>
                            <option>Send checklist + suggest a call time</option>
                            <option>Prefer to book a call after review</option>
                          </select>
                          {fieldErrors.contactPreference ? <small>{fieldErrors.contactPreference}</small> : null}
                        </label>

                        <label className="snapshot-field">
                          <span>Email</span>
                          <input value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="you@business.com" />
                          {fieldErrors.email ? <small>{fieldErrors.email}</small> : null}
                        </label>

                        <label className="snapshot-field">
                          <span>Phone (optional)</span>
                          <input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="Best number if a quick call makes sense" />
                        </label>
                      </>
                    ) : null}
                  </div>
                </div>

                <div className="snapshot-flow-footer">
                  <p className="snapshot-form-note">
                    {currentStep < stepDefinitions.length - 1
                      ? "This is a qualification flow, not a bloated form dump. Keep it simple and practical."
                      : "You are requesting a tailored opportunity snapshot, not joining a generic newsletter."}
                  </p>

                  <div className="snapshot-flow-actions">
                    {currentStep > 0 ? (
                      <button type="button" className="btn-secondary snapshot-back" onClick={handlePreviousStep}>
                        Back
                      </button>
                    ) : null}

                    {currentStep < stepDefinitions.length - 1 ? (
                      <button type="button" className="btn-primary snapshot-submit" onClick={handleNextStep}>
                        Continue
                      </button>
                    ) : (
                      <button type="submit" className="btn-primary snapshot-submit" disabled={submitState === "loading"}>
                        {submitState === "loading" ? "Preparing request..." : "Get my tailored snapshot"}
                      </button>
                    )}
                  </div>
                </div>

                {submitState === "error" && getStepErrors(activeStep).length === 0 ? (
                  <p className="snapshot-global-error">A few fields still need attention before the snapshot can be requested.</p>
                ) : null}
              </form>
            )}
          </section>
        </div>
      </div>
    </SectionShell>
  );
}
