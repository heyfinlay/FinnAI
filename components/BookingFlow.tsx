"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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
  const [showEmbed, setShowEmbed] = useState(false);
  const embedRef = useRef<HTMLDivElement | null>(null);
  const embedUrl = useMemo(() => getEmbedUrl(schedulerUrl), []);

  useEffect(() => {
    if (!embedRef.current || showEmbed) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShowEmbed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(embedRef.current);

    return () => observer.disconnect();
  }, [showEmbed]);

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

          <div className="schedule-embed" ref={embedRef}>
            {showEmbed ? (
              <iframe src={embedUrl} title="Book a strategy call" loading="lazy" />
            ) : (
              <div className="draft-panel">
                <p>Scheduler loads when you reach this section.</p>
              </div>
            )}
          </div>
        </div>

        <p className="booking-note">
          If the embed does not load, use the direct link:
          <a href={schedulerUrl} target="_blank" rel="noreferrer">
            Open scheduler
          </a>
        </p>
      </section>
    </div>
  );
}
