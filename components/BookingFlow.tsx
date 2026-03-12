"use client";

import { FormEvent, useMemo, useState } from "react";

type BookingFormState = {
  name: string;
  email: string;
  business: string;
  notes: string;
};

const slots = [
  "Tue 10:00 AM",
  "Tue 2:00 PM",
  "Wed 9:30 AM",
  "Wed 4:00 PM",
  "Thu 11:00 AM",
  "Thu 3:30 PM",
];

const schedulerUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL ??
  "https://calendly.com/temporaryutopia/strategy-call";

export function BookingFlow() {
  const [selectedSlot, setSelectedSlot] = useState<string>(slots[0]);
  const [form, setForm] = useState<BookingFormState>({
    name: "",
    email: "",
    business: "",
    notes: "",
  });
  const [error, setError] = useState<string>("");
  const [ready, setReady] = useState<boolean>(false);

  const draftLink = useMemo(() => {
    const subject = `Strategy Call Request - ${form.business || "Temporary Utopia"}`;
    const body = [
      "Hi Finlay,",
      "",
      "I would like to book a strategy call for the AI Efficiency Audit.",
      "",
      `Preferred slot: ${selectedSlot}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Business: ${form.business}`,
      `Notes: ${form.notes || "N/A"}`,
      "",
      "Thanks,",
      form.name,
    ].join("\n");

    return `mailto:hello@temporaryutopia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form.business, form.email, form.name, form.notes, selectedSlot]);

  function handleGenerateDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.business.trim()) {
      setReady(false);
      setError("Please complete name, email, and business to generate your booking draft.");
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
        <p className="booking-kicker">Step 1 · Choose A Preferred Slot</p>
        <div className="slot-grid">
          {slots.map((slot) => (
            <button
              key={slot}
              type="button"
              className={`slot-btn ${selectedSlot === slot ? "slot-btn-active" : ""}`}
              onClick={() => setSelectedSlot(slot)}
            >
              {slot}
            </button>
          ))}
        </div>

        <a href={schedulerUrl} target="_blank" rel="noreferrer" className="btn-secondary mt-5 w-full sm:w-auto">
          Open Live Scheduler
        </a>
      </div>

      <form className="booking-column" onSubmit={handleGenerateDraft}>
        <p className="booking-kicker">Step 2 · Add Your Details</p>
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
          <label className="form-field">
            <span>Business</span>
            <input
              value={form.business}
              onChange={(event) => setForm((prev) => ({ ...prev, business: event.target.value }))}
              placeholder="Northside Legal"
            />
          </label>
          <label className="form-field sm:col-span-2">
            <span>What do you want to improve first?</span>
            <textarea
              value={form.notes}
              onChange={(event) => setForm((prev) => ({ ...prev, notes: event.target.value }))}
              placeholder="Admin load, lead follow-up speed, reporting, internal handoffs..."
              rows={3}
            />
          </label>
        </div>

        {error ? <p className="mt-3 text-sm text-[#ff8fd3]">{error}</p> : null}

        <button type="submit" className="btn-primary mt-5 w-full sm:w-auto">
          Generate Booking Draft
        </button>

        {ready ? (
          <div className="draft-panel mt-5">
            <p className="text-sm text-[#e7ddff]">
              Draft ready for <strong>{selectedSlot}</strong>. Send the booking request and I will confirm the final time.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={draftLink} className="btn-primary">
                Send Booking Request
              </a>
              <a href={schedulerUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                Book Instantly Instead
              </a>
            </div>
          </div>
        ) : null}
      </form>
    </div>
  );
}
