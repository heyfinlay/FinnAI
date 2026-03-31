"use client";

import { FormEvent, useMemo, useState } from "react";

type IntakeForm = {
  name: string;
  businessName: string;
  website: string;
  teamSize: string;
  email: string;
  phone: string;
  monthlyLeadVolume: string;
  bottleneck: string;
};

type FieldErrors = Partial<Record<keyof IntakeForm, string>>;

type IntakeFormSectionProps = {
  bookingUrl: string;
  emailAddress: string;
};

const initialForm: IntakeForm = {
  name: "",
  businessName: "",
  website: "",
  teamSize: "",
  email: "",
  phone: "",
  monthlyLeadVolume: "",
  bottleneck: "",
};

const teamSizeOptions = ["Solo", "2-5 people", "6-15 people", "16-30 people", "30+ people"];

const intakePoints = [
  "A sharper view of where time, lead response, and handoffs are leaking value",
  "A recommendation on whether the audit is the right next move for your business",
  "Direct follow-up with a practical next-step plan instead of a generic sales sequence",
];

function normaliseWebsite(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function validateForm(form: IntakeForm): { errors: FieldErrors; payload: IntakeForm } {
  const payload = {
    ...form,
    name: form.name.trim(),
    businessName: form.businessName.trim(),
    website: normaliseWebsite(form.website),
    teamSize: form.teamSize.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    monthlyLeadVolume: form.monthlyLeadVolume.trim(),
    bottleneck: form.bottleneck.trim(),
  };

  const errors: FieldErrors = {};

  if (!payload.name) errors.name = "Enter your name.";
  if (!payload.businessName) errors.businessName = "Enter your business name.";
  if (!payload.teamSize) errors.teamSize = "Select your team size.";
  if (!payload.email) {
    errors.email = "Enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!payload.monthlyLeadVolume) errors.monthlyLeadVolume = "Add your approximate monthly lead volume.";
  if (!payload.bottleneck) errors.bottleneck = "Describe the main bottleneck.";

  if (payload.website) {
    try {
      new URL(payload.website);
    } catch {
      errors.website = "Enter a valid website.";
    }
  }

  return { errors, payload };
}

function buildMailtoLink(form: IntakeForm, emailAddress: string) {
  const { payload } = validateForm(form);
  const subject = payload.businessName
    ? `Audit request from ${payload.businessName}`
    : `Audit request from ${payload.name || "website lead"}`;
  const body = [
    `Name: ${payload.name || "-"}`,
    `Business: ${payload.businessName || "-"}`,
    `Website: ${payload.website || "-"}`,
    `Team size: ${payload.teamSize || "-"}`,
    `Email: ${payload.email || "-"}`,
    `Phone: ${payload.phone || "-"}`,
    `Monthly lead volume: ${payload.monthlyLeadVolume || "-"}`,
    `Main bottleneck: ${payload.bottleneck || "-"}`,
  ].join("\n");

  return `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function IntakeFormSection({ bookingUrl, emailAddress }: IntakeFormSectionProps) {
  const [form, setForm] = useState<IntakeForm>(initialForm);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  const manualFallbackLink = useMemo(() => buildMailtoLink(form, emailAddress), [emailAddress, form]);

  function updateField<Key extends keyof IntakeForm>(key: Key, value: IntakeForm[Key]) {
    setForm((current) => ({ ...current, [key]: value }));
    setFieldErrors((current) => {
      if (!current[key]) {
        return current;
      }

      const next = { ...current };
      delete next[key];
      return next;
    });
    setSubmitError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { errors, payload } = validateForm(form);
    setFieldErrors(errors);
    setSubmitError("");

    if (Object.keys(errors).length > 0) {
      setSubmitState("error");
      return;
    }

    setSubmitState("loading");

    try {
      const response = await fetch("/api/intake-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error ?? "Something went wrong while sending your request.");
      }

      setSubmitState("success");
      setForm(initialForm);
    } catch (error) {
      setSubmitState("error");
      setSubmitError(error instanceof Error ? error.message : "Something went wrong while sending your request.");
    }
  }

  return (
    <section className="final-band intake-band" id="intake">
      <div className="final-glow final-glow-right" aria-hidden="true" />
      <div className="final-glow final-glow-left" aria-hidden="true" />

      <div className="landing-shell intake-layout">
        <div className="intake-copy">
          <span className="section-kicker on-dark">Request an audit plan</span>
          <h2 className="intake-title">Tell us where the operational drag is before you book anything.</h2>
          <p className="intake-lead">
            The form is the main call to action now. It gives enough business context to assess whether the audit is worth
            doing, what the first diagnostic angle should be, and whether a direct conversation makes sense next.
          </p>

          <ul className="intake-points" aria-label="What happens after you submit">
            {intakePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <p className="intake-note">
            Audit capacity stays limited so the work remains founder-led and commercially useful. If you would rather talk
            first, there is still an optional call link inside the form card.
          </p>
        </div>

        <div className="intake-form-card">
          <div className="intake-form-head">
            <p className="intake-form-kicker">Selective intake</p>
            <h3 className="intake-form-title">Request your tailored audit plan</h3>
            <p className="intake-form-description">
              Share the business details, contact information, and the main workflow issue. We will review the fit and come
              back with a recommended next step.
            </p>
          </div>

          {submitState === "success" ? (
            <div className="intake-success">
              <p className="intake-form-kicker">Request received</p>
              <h3>Your details are in.</h3>
              <p>
                We will review the workflow context and follow up directly with either a recommended next step, a short set
                of follow-up questions, or an invitation to speak if a live conversation makes sense.
              </p>
              <div className="intake-secondary-actions">
                <a href={`mailto:${emailAddress}`}>Email directly instead</a>
                <a href={bookingUrl} target="_blank" rel="noreferrer">
                  Optional advisory call
                </a>
              </div>
            </div>
          ) : (
            <form className="intake-form" onSubmit={handleSubmit} noValidate>
              <div className="intake-form-grid">
                <label className="intake-field">
                  <span>Name</span>
                  <input value={form.name} onChange={(event) => updateField("name", event.target.value)} />
                  {fieldErrors.name ? <small>{fieldErrors.name}</small> : null}
                </label>

                <label className="intake-field">
                  <span>Business name</span>
                  <input value={form.businessName} onChange={(event) => updateField("businessName", event.target.value)} />
                  {fieldErrors.businessName ? <small>{fieldErrors.businessName}</small> : null}
                </label>

                <label className="intake-field">
                  <span>Website</span>
                  <input value={form.website} onChange={(event) => updateField("website", event.target.value)} placeholder="example.com" />
                  {fieldErrors.website ? <small>{fieldErrors.website}</small> : null}
                </label>

                <label className="intake-field">
                  <span>Team size</span>
                  <select value={form.teamSize} onChange={(event) => updateField("teamSize", event.target.value)}>
                    <option value="">Select</option>
                    {teamSizeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {fieldErrors.teamSize ? <small>{fieldErrors.teamSize}</small> : null}
                </label>

                <label className="intake-field">
                  <span>Email</span>
                  <input value={form.email} onChange={(event) => updateField("email", event.target.value)} />
                  {fieldErrors.email ? <small>{fieldErrors.email}</small> : null}
                </label>

                <label className="intake-field">
                  <span>Phone</span>
                  <input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} />
                </label>

                <label className="intake-field">
                  <span>Monthly lead volume</span>
                  <input
                    value={form.monthlyLeadVolume}
                    onChange={(event) => updateField("monthlyLeadVolume", event.target.value)}
                    placeholder="Approx. number of enquiries"
                  />
                  {fieldErrors.monthlyLeadVolume ? <small>{fieldErrors.monthlyLeadVolume}</small> : null}
                </label>

                <div className="intake-field intake-field-ghost" aria-hidden="true" />

                <label className="intake-field intake-field-wide">
                  <span>Main workflow bottleneck</span>
                  <textarea
                    value={form.bottleneck}
                    onChange={(event) => updateField("bottleneck", event.target.value)}
                    placeholder="Slow follow-up, quoting drag, admin rebuild, messy handoffs, reporting friction, tool overlap, etc."
                  />
                  {fieldErrors.bottleneck ? <small>{fieldErrors.bottleneck}</small> : null}
                </label>
              </div>

              <div className="intake-form-footer">
                <p className="intake-form-note">
                  This is for tailored follow-up, not a generic newsletter list.
                </p>

                <button type="submit" className="primary-button intake-submit" disabled={submitState === "loading"}>
                  {submitState === "loading" ? "Sending request..." : "Request my audit plan"}
                </button>
              </div>

              <div className="intake-secondary-actions">
                <a href={bookingUrl} target="_blank" rel="noreferrer">
                  Prefer a live conversation first?
                </a>
                <a href={`mailto:${emailAddress}`}>Email directly</a>
              </div>

              {submitState === "error" && submitError ? (
                <p className="intake-error">
                  {submitError} If you need to send the request manually, <a href={manualFallbackLink}>email the details instead</a>.
                </p>
              ) : null}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
