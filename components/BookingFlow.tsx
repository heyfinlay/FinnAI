"use client";

import { FormEvent, useMemo, useState } from "react";

type BookingFormState = {
  name: string;
  email: string;
  business: string;
  notes: string;
};

const schedulerUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL ??
  "https://calendly.com/calendly/30min";

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
  const [error, setError] = useState<string>("");
  const [ready, setReady] = useState<boolean>(false);

  const embedUrl = useMemo(() => getEmbedUrl(schedulerUrl), []);

  const draftLink = useMemo(() => {
    const subject = `Strategy Call Request - ${form.business || "Temporary Utopia"}`;
    const body = [
      "Hi Finlay,",
      "",
      "I would like to request a strategy call for the AI Efficiency Audit.",
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
      setError("Please complete name, email, and business before generating your request.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setReady(false);
      setError("Please enter a valid email address.");
      return;
    }

    setReady(true);
  }

  return (
    <div className="booking-shell">
      <div className="booking-column">
        <p className="booking-kicker">Instant Booking</p>
        <div className="schedule-embed">
          <iframe src={embedUrl} title="Book a strategy call" loading="lazy" />
        </div>
        <p className="booking-note">
          If the embed does not load, use the direct link:
          <a href={schedulerUrl} target="_blank" rel="noreferrer">
            Open Scheduler
          </a>
        </p>
      </div>

      <form className="booking-column" onSubmit={handleGenerateDraft}>
        <p className="booking-kicker">Request By Email</p>
        <div className="form-grid">
          <label className="form-field">
            <span>Name</span>
            <input
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              placeholder="Alex Carter"
            />
          </label>
          <label className="form-field">
            <span>Email</span>
            <input
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              type="email"
              placeholder="alex@business.com"
            />
          </label>
          <label className="form-field sm:col-span-2">
            <span>Business</span>
            <input
              value={form.business}
              onChange={(event) => setForm((prev) => ({ ...prev, business: event.target.value }))}
              placeholder="Northside Legal"
            />
          </label>
          <label className="form-field sm:col-span-2">
            <span>Main Focus</span>
            <textarea
              value={form.notes}
              onChange={(event) => setForm((prev) => ({ ...prev, notes: event.target.value }))}
              placeholder="Where do you want more clarity or efficiency?"
              rows={4}
            />
          </label>
        </div>

        {error ? <p className="mt-3 text-sm text-[#9fc8ff]">{error}</p> : null}

        <button type="submit" className="btn-primary mt-5 w-full sm:w-auto">
          Generate Request
        </button>

        {ready ? (
          <div className="draft-panel mt-5">
            <p className="text-sm text-[#d4dbe7]">
              Your booking request is ready. Send the email and I will reply with next available times.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={draftLink} className="btn-primary">
                Send Booking Request
              </a>
              <a href={schedulerUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                Use Live Scheduler
              </a>
            </div>
          </div>
        ) : null}
      </form>
    </div>
  );
}
