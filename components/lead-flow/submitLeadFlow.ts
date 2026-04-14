import type { LeadFlowValues, RecommendationKey } from "@/components/lead-flow/config";

export type LeadFlowSubmission = {
  values: LeadFlowValues;
  recommendation: RecommendationKey;
  source?: string;
};

export async function submitLeadFlow(payload: LeadFlowSubmission): Promise<{ ok: true }> {
  // TODO: Send payload to CRM endpoint / API route.
  // TODO: Emit analytics event for successful lead submission.
  console.info("submitLeadFlow placeholder", payload);
  await new Promise((resolve) => setTimeout(resolve, 400));
  return { ok: true };
}
