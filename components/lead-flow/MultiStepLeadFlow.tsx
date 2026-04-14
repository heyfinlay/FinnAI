"use client";

import { FormEvent, useMemo, useState } from "react";

import {
  frictionOptions,
  getLeadFlowRecommendation,
  initialLeadFlowValues,
  intentOptions,
  isStepValid,
  leadFlowSteps,
  outcomeOptions,
  toolOptions,
  type LeadFlowValues,
  type RecommendationKey,
  type ToolOption,
} from "@/components/lead-flow/config";
import { submitLeadFlow } from "@/components/lead-flow/submitLeadFlow";

const recommendationCopy: Record<RecommendationKey, { title: string; body: string }> = {
  audit: {
    title: "Recommended next step: AI Efficiency Audit",
    body: "Based on your intent, we recommend starting with a focused AI Efficiency Audit to find high-impact workflow fixes quickly.",
  },
  learning: {
    title: "Recommended next step: Learning + systems access",
    body: "You look best suited for advanced workflow learning plus systems access so you can build practical AI capability in-house.",
  },
  advisory: {
    title: "Recommended next step: Strategic advisory",
    body: "Given your priorities, a strategic advisory session is the best start to align AI direction, governance, and execution confidence.",
  },
};

type MultiStepLeadFlowProps = {
  source?: string;
  onComplete?: () => void;
};

function OptionButton({
  selected,
  label,
  onClick,
}: {
  selected: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl border px-4 py-4 text-left text-base transition ${
        selected
          ? "border-black bg-black text-white"
          : "border-black/10 bg-white text-[var(--ink)] hover:border-black/30 hover:bg-black/[0.02]"
      }`}
    >
      {label}
    </button>
  );
}

export function MultiStepLeadFlow({ source, onComplete }: MultiStepLeadFlowProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<LeadFlowValues>(initialLeadFlowValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = leadFlowSteps.length;
  const currentStep = leadFlowSteps[stepIndex];
  const recommendation = useMemo(() => getLeadFlowRecommendation(values.intent), [values.intent]);
  const hasRecommendation = stepIndex >= totalSteps;

  const canContinue = hasRecommendation ? true : isStepValid(currentStep.id, values);

  const goNext = () => {
    if (!canContinue) {
      return;
    }

    // TODO: analytics.track("leadflow_step_next", { step: currentStep.id, source });
    setStepIndex((prev) => prev + 1);
  };

  const goBack = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const toggleTool = (tool: ToolOption) => {
    setValues((prev) => {
      const exists = prev.tools.includes(tool);
      if (exists) {
        return { ...prev, tools: prev.tools.filter((item) => item !== tool) };
      }

      const withoutNone = tool === "mostly_none" ? [] : prev.tools.filter((item) => item !== "mostly_none");
      return { ...prev, tools: [...withoutNone, tool] };
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!hasRecommendation || isSubmitting || isSubmitted) {
      return;
    }

    setIsSubmitting(true);

    await submitLeadFlow({
      values,
      recommendation,
      source,
    });

    // TODO: analytics.track("leadflow_submitted", { recommendation, source });
    setIsSubmitting(false);
    setIsSubmitted(true);
    onComplete?.();
  };

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col">
      {!hasRecommendation && (
        <>
          <div className="mb-6">
            <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[var(--ink-muted)]">
              <span>
                Step {stepIndex + 1} of {totalSteps}
              </span>
              <span>{Math.round(((stepIndex + 1) / totalSteps) * 100)}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/10">
              <div
                className="h-full rounded-full bg-black transition-all duration-300"
                style={{ width: `${((stepIndex + 1) / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-[var(--font-display)] text-3xl leading-tight text-[var(--ink)]">{currentStep.title}</h3>
            <p className="text-sm text-[var(--ink-soft)]">{currentStep.description}</p>
          </div>

          <div className="mt-7 space-y-3">
            {currentStep.id === "intent" &&
              intentOptions.map((option) => (
                <OptionButton
                  key={option.value}
                  label={option.label}
                  selected={values.intent === option.value}
                  onClick={() => setValues((prev) => ({ ...prev, intent: option.value }))}
                />
              ))}

            {currentStep.id === "context" && (
              <div className="space-y-3">
                <input
                  value={values.role}
                  onChange={(event) => setValues((prev) => ({ ...prev, role: event.target.value }))}
                  placeholder="Role"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base"
                />
                <input
                  value={values.company}
                  onChange={(event) => setValues((prev) => ({ ...prev, company: event.target.value }))}
                  placeholder="Company"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base"
                />
                <textarea
                  value={values.currentAiUsage}
                  onChange={(event) => setValues((prev) => ({ ...prev, currentAiUsage: event.target.value }))}
                  placeholder="Current AI usage"
                  rows={4}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base"
                />
              </div>
            )}

            {currentStep.id === "friction" &&
              frictionOptions.map((option) => (
                <OptionButton
                  key={option.value}
                  label={option.label}
                  selected={values.friction === option.value}
                  onClick={() => setValues((prev) => ({ ...prev, friction: option.value }))}
                />
              ))}

            {currentStep.id === "tools" &&
              toolOptions.map((option) => (
                <OptionButton
                  key={option.value}
                  label={option.label}
                  selected={values.tools.includes(option.value)}
                  onClick={() => toggleTool(option.value)}
                />
              ))}

            {currentStep.id === "outcome" &&
              outcomeOptions.map((option) => (
                <OptionButton
                  key={option.value}
                  label={option.label}
                  selected={values.desiredOutcome === option.value}
                  onClick={() => setValues((prev) => ({ ...prev, desiredOutcome: option.value }))}
                />
              ))}

            {currentStep.id === "contact" && (
              <div className="space-y-3">
                <input
                  value={values.name}
                  onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
                  placeholder="Name"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base"
                />
                <input
                  value={values.email}
                  onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                  placeholder="Email"
                  type="email"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base"
                />
                <input
                  value={values.website}
                  onChange={(event) => setValues((prev) => ({ ...prev, website: event.target.value }))}
                  placeholder="Website"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base"
                />
              </div>
            )}
          </div>
        </>
      )}

      {hasRecommendation && (
        <div className="my-auto rounded-2xl border border-black/10 bg-white p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--ink-muted)]">Your recommendation</p>
          <h3 className="mt-3 font-[var(--font-display)] text-3xl text-[var(--ink)]">{recommendationCopy[recommendation].title}</h3>
          <p className="mt-3 text-[var(--ink-soft)]">{recommendationCopy[recommendation].body}</p>
          {isSubmitted && <p className="mt-4 text-sm font-medium text-emerald-700">Thanks — your details were captured.</p>}
        </div>
      )}

      <div className="mt-8 flex items-center justify-between gap-3 border-t border-black/10 pt-5">
        <button
          type="button"
          onClick={goBack}
          disabled={stepIndex === 0}
          className="rounded-full border border-black/15 px-5 py-2.5 text-sm text-[var(--ink)] transition enabled:hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Back
        </button>

        {!hasRecommendation ? (
          <button
            type="button"
            onClick={goNext}
            disabled={!canContinue}
            className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white transition enabled:hover:bg-black/90 disabled:cursor-not-allowed disabled:bg-black/30"
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white transition enabled:hover:bg-black/90 disabled:cursor-not-allowed disabled:bg-black/30"
          >
            {isSubmitted ? "Submitted" : isSubmitting ? "Submitting..." : "Submit details"}
          </button>
        )}
      </div>
    </form>
  );
}
