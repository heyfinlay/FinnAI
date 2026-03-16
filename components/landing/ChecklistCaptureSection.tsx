"use client";

import { FormEvent, useId, useState } from "react";

import { Eyebrow, SectionLead, SectionTitle } from "@/components/landing/AdvisoryBlocks";

export type ChecklistLead = {
  fullName: string;
  emailAddress: string;
  businessName: string;
  websiteUrl: string;
  contactNumber: string;
};

type ChecklistCaptureSectionProps = {
  onSubmit?: (payload: ChecklistLead) => Promise<void>;
  variant?: "inline";
};

type FieldErrors = Partial<Record<keyof ChecklistLead, string>>;

const checklistPoints = [
  "Where manual admin is slowing the business down",
  "Where lead handling or client communication can be improved",
  "Where AI may reduce repetitive operational work",
];

function delay(ms: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function defaultSubmitChecklistLead(_: ChecklistLead) {
  await delay(900);
}

function normaliseWebsiteUrl(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function validateChecklistLead(form: ChecklistLead): { errors: FieldErrors; payload: ChecklistLead } {
  const errors: FieldErrors = {};
  const fullName = form.fullName.trim();
  const emailAddress = form.emailAddress.trim();
  const businessName = form.businessName.trim();
  const contactNumber = form.contactNumber.trim();
  const websiteUrl = normaliseWebsiteUrl(form.websiteUrl);

  if (!fullName) {
    errors.fullName = "Enter your full name.";
  }

  if (!emailAddress) {
    errors.emailAddress = "Enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
    errors.emailAddress = "Enter a valid email address.";
  }

  if (websiteUrl) {
    try {
      new URL(websiteUrl);
    } catch {
      errors.websiteUrl = "Enter a valid website URL.";
    }
  }

  return {
    errors,
    payload: {
      fullName,
      emailAddress,
      businessName,
      websiteUrl,
      contactNumber,
    },
  };
}

export function ChecklistCaptureSection({
  onSubmit = defaultSubmitChecklistLead,
  variant = "inline",
}: ChecklistCaptureSectionProps) {
  const [form, setForm] = useState<ChecklistLead>({
    fullName: "",
    emailAddress: "",
    businessName: "",
    websiteUrl: "",
    contactNumber: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  const fullNameId = useId();
  const emailAddressId = useId();
  const businessNameId = useId();
  const websiteUrlId = useId();
  const contactNumberId = useId();
  const fullNameErrorId = useId();
  const emailErrorId = useId();
  const websiteErrorId = useId();
  const submitErrorId = useId();

  function updateField<Key extends keyof ChecklistLead>(key: Key, value: ChecklistLead[Key]) {
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

    const { errors, payload } = validateChecklistLead(form);
    setFieldErrors(errors);
    setSubmitError("");

    if (Object.keys(errors).length > 0) {
      setSubmitState("error");
      return;
    }

    setSubmitState("loading");

    try {
      await onSubmit(payload);
      setSubmitState("success");
      setForm({
        fullName: "",
        emailAddress: "",
        businessName: "",
        websiteUrl: "",
        contactNumber: "",
      });
    } catch {
      setSubmitState("error");
      setSubmitError("Something went wrong while sending the checklist. Please try again.");
    }
  }

  return (
    <section id="checklist" aria-labelledby="checklist-capture-title" className="section-shell" data-variant={variant}>
      <div className="section-container">
        <div className="checklist-capture-shell reveal-up">
          <div className="checklist-capture-copy">
            <Eyebrow>Free Resource</Eyebrow>
            <SectionTitle id="checklist-capture-title" className="section-title-compact">
              AI Efficiency Checklist for Business Owners
            </SectionTitle>
            <SectionLead>
              A short, practical checklist used during our AI audits to identify where businesses are losing time to manual
              work, slow communication, and inefficient processes.
            </SectionLead>
            <p className="checklist-capture-subcopy">Review your operations before investing in more tools.</p>

            <div className="checklist-inside-card" aria-label="What&apos;s inside the checklist">
              <p className="checklist-inside-title">What&apos;s inside</p>
              <ul className="checklist-points">
                {checklistPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="checklist-form-panel">
            {submitState === "success" ? (
              <div className="checklist-success-panel" aria-live="polite">
                <p className="checklist-success-kicker">Checklist requested</p>
                <h3>Thanks — your checklist is on its way.</h3>
                <p>
                  We&apos;ll also send a short follow-up with a few practical AI efficiency ideas you can apply to your
                  business.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="checklist-form">
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor={fullNameId}>Full Name</label>
                    <input
                      id={fullNameId}
                      name="fullName"
                      autoComplete="name"
                      required
                      value={form.fullName}
                      onChange={(event) => updateField("fullName", event.target.value)}
                      placeholder="Alex Carter"
                      aria-invalid={Boolean(fieldErrors.fullName)}
                      aria-describedby={fieldErrors.fullName ? fullNameErrorId : undefined}
                    />
                    {fieldErrors.fullName ? (
                      <p id={fullNameErrorId} className="form-error form-field-error">
                        {fieldErrors.fullName}
                      </p>
                    ) : null}
                  </div>

                  <div className="form-field">
                    <label htmlFor={emailAddressId}>Email Address</label>
                    <input
                      id={emailAddressId}
                      name="emailAddress"
                      autoComplete="email"
                      type="email"
                      required
                      value={form.emailAddress}
                      onChange={(event) => updateField("emailAddress", event.target.value)}
                      placeholder="alex@business.com"
                      aria-invalid={Boolean(fieldErrors.emailAddress)}
                      aria-describedby={fieldErrors.emailAddress ? emailErrorId : undefined}
                    />
                    {fieldErrors.emailAddress ? (
                      <p id={emailErrorId} className="form-error form-field-error">
                        {fieldErrors.emailAddress}
                      </p>
                    ) : null}
                  </div>

                  <div className="form-field">
                    <label htmlFor={businessNameId}>Business Name</label>
                    <input
                      id={businessNameId}
                      name="businessName"
                      autoComplete="organization"
                      value={form.businessName}
                      onChange={(event) => updateField("businessName", event.target.value)}
                      placeholder="Northside Legal"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor={websiteUrlId}>Website URL</label>
                    <input
                      id={websiteUrlId}
                      name="websiteUrl"
                      autoComplete="url"
                      inputMode="url"
                      value={form.websiteUrl}
                      onChange={(event) => updateField("websiteUrl", event.target.value)}
                      placeholder="northsidelegal.com.au"
                      aria-invalid={Boolean(fieldErrors.websiteUrl)}
                      aria-describedby={fieldErrors.websiteUrl ? websiteErrorId : undefined}
                    />
                    {fieldErrors.websiteUrl ? (
                      <p id={websiteErrorId} className="form-error form-field-error">
                        {fieldErrors.websiteUrl}
                      </p>
                    ) : null}
                  </div>

                  <div className="form-field form-field-wide">
                    <label htmlFor={contactNumberId}>Contact Number</label>
                    <input
                      id={contactNumberId}
                      name="contactNumber"
                      autoComplete="tel"
                      inputMode="tel"
                      value={form.contactNumber}
                      onChange={(event) => updateField("contactNumber", event.target.value)}
                      placeholder="+61 400 000 000"
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary checklist-submit" disabled={submitState === "loading"}>
                  {submitState === "loading" ? "Sending..." : "Send Me The Checklist"}
                </button>

                <div className="form-status checklist-form-status" aria-live="polite">
                  {submitError ? (
                    <p id={submitErrorId} className="form-error" role="alert">
                      {submitError}
                    </p>
                  ) : null}
                </div>

                <p className="checklist-trust-note">
                  No spam. Just the checklist and a few practical follow-up ideas.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
