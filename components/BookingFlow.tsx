"use client";

import { FormEvent, useId, useMemo, useState } from "react";

type BookingFormState = {
  name: string;
  email: string;
  business: string;
  notes: string;
};

const schedulerUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL ??
  "https://calendly.com/finlay-temporaryutopia/30min";

function getEmbedUrl(url: string): string {
  if (url.includes("calendly.com")) {
    const joiner = url.includes("?") ? "&" : "?";
    return `${url}${joiner}hide_gdpr_banner=1&hide_event_type_details=1`;
  }

  return url;
}

export function BookingFlow() {
  const [form, setForm] = useState<BookingFormState>({
    name: "",
    email: "",
    business: "",
    notes: "",
  });
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);

  const nameId = useId();
  const emailId = useId();
  const businessId = useId();
  const notesId = useId();
  const errorId = useId();

  const embedUrl = useMemo(() => getEmbedUrl(schedulerUrl), []);

  const draftLink = useMemo(() => {
    const subject = `Strategy Call Request - ${form.business || "Temporary Utopia"}`;
    const body = [
      "Hi Finlay,",
      "",
      "I would like to request a strategy call for the AI Operations Audit.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Business: ${form.business}`,
      `Focus area: ${form.notes || "N/A"}`,
      "",
      "Thanks,",
      form.name,
    ].join("\n");

    return `mailto:hello@temporaryutopia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form.business, form.email, form.name, form.notes]);

  function handleGenerateDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.business.trim()) {
      setReady(false);
      setError("Complete name, email, and business before generating the request.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setReady(false);
      setError("Enter a valid email address.");
      return;
    }

    setReady(true);
  }

  const describedBy = error ? errorId : undefined;

  return (
    <div className="booking-shell">
      <section className="booking-column" aria-labelledby="scheduler-title">
        <div className="booking-card-head">
          <p className="booking-kicker">Instant booking</p>
          <h3 id="scheduler-title" className="booking-title">
            Choose a time directly
          </h3>
          <p className="booking-description">
            Use the live scheduler if you already know you want to review your workflows and next-step priorities.
          </p>
        </div>

        <div className="schedule-panel">
          <div className="schedule-panel-top" aria-hidden="true">
            <span>Live scheduler</span>
            <span>30 minute strategy call</span>
          </div>

          <div className="schedule-embed">
            <iframe src={embedUrl} title="Book a strategy call" loading="lazy" />
          </div>
        </div>

        <p className="booking-note">
          If the embed does not load, use the direct link:
          <a href={schedulerUrl} target="_blank" rel="noreferrer">
            Open scheduler
          </a>
        </p>
      </section>

      <section className="booking-column" aria-labelledby="request-title">
        <div className="booking-card-head">
          <p className="booking-kicker">Request by email</p>
          <h3 id="request-title" className="booking-title">
            Send a short booking request
          </h3>
          <p className="booking-description">
            Share your business name and the workflow area you want help diagnosing. A draft email is generated for you.
          </p>
        </div>

        <form onSubmit={handleGenerateDraft} noValidate>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor={nameId}>Name</label>
              <input
                id={nameId}
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                placeholder="Alex Carter"
                aria-invalid={Boolean(error && !form.name.trim())}
                aria-describedby={describedBy}
              />
            </div>

            <div className="form-field">
              <label htmlFor={emailId}>Email</label>
              <input
                id={emailId}
                name="email"
                autoComplete="email"
                type="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                placeholder="alex@business.com"
                aria-invalid={Boolean(error && !form.email.trim())}
                aria-describedby={describedBy}
              />
            </div>

            <div className="form-field form-field-wide">
              <label htmlFor={businessId}>Business</label>
              <input
                id={businessId}
                name="business"
                autoComplete="organization"
                value={form.business}
                onChange={(event) => setForm((prev) => ({ ...prev, business: event.target.value }))}
                placeholder="Northside Legal"
                aria-invalid={Boolean(error && !form.business.trim())}
                aria-describedby={describedBy}
              />
            </div>

            <div className="form-field form-field-wide">
              <label htmlFor={notesId}>Workflow focus</label>
              <textarea
                id={notesId}
                name="notes"
                value={form.notes}
                onChange={(event) => setForm((prev) => ({ ...prev, notes: event.target.value }))}
                placeholder="Example: inbound enquiries, follow-up consistency, reporting, internal routing"
                rows={5}
              />
            </div>
          </div>

          <p className="form-helper">Required fields: name, email, and business.</p>
          <button type="submit" className="btn-primary booking-submit">
            Generate request email
          </button>

          <div className="form-status" aria-live="polite">
            {error ? (
              <p id={errorId} className="form-error">
                {error}
              </p>
            ) : null}

            {ready ? (
              <div className="draft-panel">
                <p>Your booking request is ready. Send the draft email and Finlay will reply with the next available times.</p>
                <div className="section-actions">
                  <a href={draftLink} className="btn-primary">
                    Send booking request
                  </a>
                  <a href={schedulerUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                    Use live scheduler
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </form>
      </section>
    </div>
  );
}
