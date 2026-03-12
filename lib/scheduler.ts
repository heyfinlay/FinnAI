const DEFAULT_SCHEDULER_URL = "https://calendly.com/finlay-temporaryutopia/30min";

const CALENDLY_HOST_FIXUPS: Record<string, string> = {
  "calendarly.com": "calendly.com",
  "www.calendarly.com": "calendly.com",
};

export function resolveSchedulerUrl(rawUrl?: string): string {
  const candidate = rawUrl?.trim();
  if (!candidate) {
    return DEFAULT_SCHEDULER_URL;
  }

  try {
    const parsed = new URL(candidate);
    const fixedHost = CALENDLY_HOST_FIXUPS[parsed.hostname.toLowerCase()];

    if (fixedHost) {
      parsed.hostname = fixedHost;
    }

    return parsed.toString();
  } catch {
    return DEFAULT_SCHEDULER_URL;
  }
}

export const schedulerUrl = resolveSchedulerUrl(process.env.NEXT_PUBLIC_BOOKING_URL);
