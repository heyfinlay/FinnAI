import { NextResponse } from "next/server";

type IntakeRequestPayload = {
  name: string;
  businessName: string;
  website: string;
  teamSize: string;
  email: string;
  phone: string;
  monthlyLeadVolume: string;
  bottleneck: string;
};

type FieldErrors = Partial<Record<keyof IntakeRequestPayload, string>>;

function normaliseWebsite(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function validatePayload(payload: Partial<IntakeRequestPayload>): { errors: FieldErrors; data: IntakeRequestPayload } {
  const data: IntakeRequestPayload = {
    name: String(payload.name ?? "").trim(),
    businessName: String(payload.businessName ?? "").trim(),
    website: normaliseWebsite(String(payload.website ?? "")),
    teamSize: String(payload.teamSize ?? "").trim(),
    email: String(payload.email ?? "").trim(),
    phone: String(payload.phone ?? "").trim(),
    monthlyLeadVolume: String(payload.monthlyLeadVolume ?? "").trim(),
    bottleneck: String(payload.bottleneck ?? "").trim(),
  };

  const errors: FieldErrors = {};

  if (!data.name) errors.name = "Enter your name.";
  if (!data.businessName) errors.businessName = "Enter your business name.";
  if (!data.teamSize) errors.teamSize = "Select your team size.";
  if (!data.email) {
    errors.email = "Enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.monthlyLeadVolume) errors.monthlyLeadVolume = "Add your approximate monthly lead volume.";
  if (!data.bottleneck) errors.bottleneck = "Describe the main bottleneck.";

  if (data.website) {
    try {
      new URL(data.website);
    } catch {
      errors.website = "Enter a valid website.";
    }
  }

  return { errors, data };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildPlainTextEmail(data: IntakeRequestPayload) {
  return [
    "New FinnAI audit request",
    "",
    `Name: ${data.name}`,
    `Business: ${data.businessName}`,
    `Website: ${data.website || "-"}`,
    `Team size: ${data.teamSize}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "-"}`,
    `Monthly lead volume: ${data.monthlyLeadVolume}`,
    `Main bottleneck: ${data.bottleneck}`,
  ].join("\n");
}

function buildHtmlEmail(data: IntakeRequestPayload) {
  const rows = [
    ["Name", data.name],
    ["Business", data.businessName],
    ["Website", data.website || "-"],
    ["Team size", data.teamSize],
    ["Email", data.email],
    ["Phone", data.phone || "-"],
    ["Monthly lead volume", data.monthlyLeadVolume],
    ["Main bottleneck", data.bottleneck],
  ];

  return `
    <div style="font-family: Inter, Arial, sans-serif; color: #111111; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New FinnAI audit request</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding: 10px 12px 10px 0; vertical-align: top; color: #6b655e; font-weight: 600;">${escapeHtml(label)}</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(17, 17, 17, 0.08);">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

async function sendViaWebhook(data: IntakeRequestPayload) {
  const webhookUrl = process.env.INTAKE_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.INTAKE_WEBHOOK_SECRET
        ? {
            Authorization: `Bearer ${process.env.INTAKE_WEBHOOK_SECRET}`,
          }
        : {}),
    },
    body: JSON.stringify({
      ...data,
      source: "website-intake",
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error(`Webhook delivery failed with status ${response.status}.`);
  }

  return true;
}

async function sendViaResend(data: IntakeRequestPayload) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationEmail =
    process.env.LEAD_NOTIFICATION_EMAIL ?? process.env.CONTACT_EMAIL ?? "finlay@temporaryutopia.com";

  if (!resendApiKey || !notificationEmail) {
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL ?? "FinnAI <onboarding@resend.dev>",
      to: [notificationEmail],
      reply_to: data.email,
      subject: `New audit request: ${data.businessName}`,
      text: buildPlainTextEmail(data),
      html: buildHtmlEmail(data),
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend delivery failed: ${errorBody}`);
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<IntakeRequestPayload>;
    const { errors, data } = validatePayload(payload);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          error: "Please complete the required fields.",
          fieldErrors: errors,
        },
        { status: 400 },
      );
    }

    const delivered =
      (await sendViaWebhook(data)) ||
      (await sendViaResend(data));

    if (!delivered) {
      return NextResponse.json(
        {
          error: "The request form is temporarily unavailable. Please email us directly for now.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to handle intake request", error);

    return NextResponse.json(
      {
        error: "Unable to send your request right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
