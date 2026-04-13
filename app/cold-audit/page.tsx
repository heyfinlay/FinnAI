import type { Metadata } from "next";
import { ColdAuditPage } from "@/components/ColdAuditPage";

export const metadata: Metadata = {
  title: "FinnAI | AI Audit Briefing",
  description:
    "A private audit briefing page for cold leads who want to understand how FinnAI finds workflow leaks, follow-up failures, and conversion friction.",
};

export default function ColdAuditRoute() {
  return <ColdAuditPage />;
}
