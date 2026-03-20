"use client";

import { useEffect, useRef, useState } from "react";

const schedulerUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL ??
  "https://calendly.com/finlay-temporaryutopia/30min";

function getEmbedUrl(url: string): string {
  if (!url.includes("calendly.com")) {
    return url;
  }

  const joiner = url.includes("?") ? "&" : "?";
  return `${url}${joiner}hide_gdpr_banner=1&hide_event_type_details=1`;
}

export function BookingFlow() {
  const [showEmbed, setShowEmbed] = useState(false);
  const embedRef = useRef<HTMLDivElement | null>(null);
  const embedUrl = getEmbedUrl(schedulerUrl);

  useEffect(() => {
    if (!embedRef.current || showEmbed) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShowEmbed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "220px" }
    );

    observer.observe(embedRef.current);

    return () => observer.disconnect();
  }, [showEmbed]);

  return (
    <div className="booking-shell">
      <section className="booking-column" aria-labelledby="scheduler-title">
        <div className="booking-card-head">
          <p className="booking-kicker">Private advisory call</p>
          <h3 id="scheduler-title" className="booking-title">
            Choose a time that suits
          </h3>
          <p className="booking-description">
            If the positioning feels right, use the scheduler to book directly. The conversation is for pressure-testing
            the real business need before software, automation scope, or implementation decisions harden.
          </p>
        </div>

        <div className="booking-trust-row" aria-label="What the call is designed to do">
          <article className="booking-trust-item">
            <span>What happens</span>
            <p>We unpack the operating issue, current stack, and where the buying decision still feels unclear.</p>
          </article>
          <article className="booking-trust-item">
            <span>What you get</span>
            <p>You leave with a sharper view of what to do now, what can wait, and how small the next move can be.</p>
          </article>
          <article className="booking-trust-item">
            <span>How it feels</span>
            <p>High-trust, direct, and commercially grounded. No hard pitch. No oversized rollout energy.</p>
          </article>
        </div>

        <div className="schedule-panel">
          <div className="schedule-panel-top" aria-hidden="true">
            <span>Live scheduler</span>
            <span>30 minute founder advisory call</span>
          </div>

          <div className="schedule-embed" ref={embedRef}>
            {showEmbed ? (
              <iframe src={embedUrl} title="Book a founder advisory call" loading="lazy" />
            ) : (
              <div className="draft-panel">
                <p>Scheduler loads when this section comes into view.</p>
              </div>
            )}
          </div>
        </div>

        <p className="booking-note">
          Prefer the direct link?
          <a href={schedulerUrl} target="_blank" rel="noreferrer">
            Open the scheduler
          </a>
        </p>
      </section>
    </div>
  );
}
