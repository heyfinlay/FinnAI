export type IntentOption = "business_intent" | "advanced_workflows" | "strategy_risk";
export type FrictionOption =
  | "admin_checking"
  | "emails_followups"
  | "no_clear_workflow"
  | "strategic_guidance"
  | "safety_risk";
export type ToolOption = "chatgpt" | "claude" | "zapier_make" | "crm" | "project_tools" | "mostly_none";
export type OutcomeOption = "save_time" | "make_money" | "better_system" | "clear_roadmap" | "safe_implementation";

export type LeadFlowValues = {
  intent: IntentOption | "";
  role: string;
  company: string;
  currentAiUsage: string;
  friction: FrictionOption | "";
  tools: ToolOption[];
  desiredOutcome: OutcomeOption | "";
  name: string;
  email: string;
  website: string;
};

export type RecommendationKey = "audit" | "learning" | "advisory";

export type LeadFlowStep = {
  id: "intent" | "context" | "friction" | "tools" | "outcome" | "contact";
  title: string;
  description: string;
};

export const initialLeadFlowValues: LeadFlowValues = {
  intent: "",
  role: "",
  company: "",
  currentAiUsage: "",
  friction: "",
  tools: [],
  desiredOutcome: "",
  name: "",
  email: "",
  website: "",
};

export const leadFlowSteps: LeadFlowStep[] = [
  {
    id: "intent",
    title: "What do you want from AI right now?",
    description: "Pick the closest match so we can tailor your recommendation.",
  },
  {
    id: "context",
    title: "What context should we know?",
    description: "Share your role, company, and current AI usage.",
  },
  {
    id: "friction",
    title: "What is your biggest friction point?",
    description: "Choose the one slowing momentum the most.",
  },
  {
    id: "tools",
    title: "Which tools are in your stack?",
    description: "Select all that apply.",
  },
  {
    id: "outcome",
    title: "What outcome matters most next?",
    description: "Choose your primary goal.",
  },
  {
    id: "contact",
    title: "Where should we send your recommendation?",
    description: "We will send a concise next-step suggestion.",
  },
];

export const intentOptions: Array<{ value: IntentOption; label: string }> = [
  { value: "business_intent", label: "Implementing AI into my business" },
  { value: "advanced_workflows", label: "Learning more advanced AI workflows" },
  { value: "strategy_risk", label: "Getting expert advice on AI strategy and risk" },
];

export const frictionOptions: Array<{ value: FrictionOption; label: string }> = [
  { value: "admin_checking", label: "Too much admin and checking" },
  { value: "emails_followups", label: "Too many emails and follow-ups" },
  { value: "no_clear_workflow", label: "No clear AI workflow" },
  { value: "strategic_guidance", label: "Need higher-level strategic guidance" },
  { value: "safety_risk", label: "Concerned about safety and risk" },
];

export const toolOptions: Array<{ value: ToolOption; label: string }> = [
  { value: "chatgpt", label: "ChatGPT" },
  { value: "claude", label: "Claude" },
  { value: "zapier_make", label: "Zapier / Make" },
  { value: "crm", label: "CRM" },
  { value: "project_tools", label: "Project management tools" },
  { value: "mostly_none", label: "Mostly none" },
];

export const outcomeOptions: Array<{ value: OutcomeOption; label: string }> = [
  { value: "save_time", label: "Save time" },
  { value: "make_money", label: "Make more money" },
  { value: "better_system", label: "Build a better system" },
  { value: "clear_roadmap", label: "Get a clear roadmap" },
  { value: "safe_implementation", label: "Understand safe implementation" },
];

export function getLeadFlowRecommendation(intent: IntentOption | ""): RecommendationKey {
  if (intent === "business_intent") {
    return "audit";
  }

  if (intent === "advanced_workflows") {
    return "learning";
  }

  return "advisory";
}

export function isStepValid(stepId: LeadFlowStep["id"], values: LeadFlowValues): boolean {
  switch (stepId) {
    case "intent":
      return Boolean(values.intent);
    case "context":
      return Boolean(values.role.trim() && values.company.trim() && values.currentAiUsage.trim());
    case "friction":
      return Boolean(values.friction);
    case "tools":
      return values.tools.length > 0;
    case "outcome":
      return Boolean(values.desiredOutcome);
    case "contact":
      return Boolean(values.name.trim() && values.email.trim() && values.website.trim());
    default:
      return false;
  }
}
