"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

import { LeadFlowPanel } from "@/components/lead-flow/LeadFlowPanel";
import { MultiStepLeadFlow } from "@/components/lead-flow/MultiStepLeadFlow";

type LeadFlowContextValue = {
  isOpen: boolean;
  openLeadFlow: (source?: string) => void;
  closeLeadFlow: () => void;
};

const LeadFlowContext = createContext<LeadFlowContextValue | null>(null);

export function LeadFlowProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<string | undefined>(undefined);
  const [flowInstanceKey, setFlowInstanceKey] = useState(0);

  const openLeadFlow = useCallback((nextSource?: string) => {
    setSource(nextSource);
    setFlowInstanceKey((currentKey) => currentKey + 1);
    setIsOpen(true);
    // TODO: analytics.track("leadflow_opened", { source: nextSource });
  }, []);

  const closeLeadFlow = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      openLeadFlow,
      closeLeadFlow,
    }),
    [closeLeadFlow, isOpen, openLeadFlow],
  );

  return (
    <LeadFlowContext.Provider value={value}>
      {children}
      <LeadFlowPanel
        isOpen={isOpen}
        onClose={closeLeadFlow}
        title="Get your next best AI move"
        description="Answer six quick questions and get a recommendation tailored to your current operating context."
      >
        <MultiStepLeadFlow key={flowInstanceKey} source={source} onComplete={closeLeadFlow} />
      </LeadFlowPanel>
    </LeadFlowContext.Provider>
  );
}

export function useLeadFlow() {
  const context = useContext(LeadFlowContext);

  if (!context) {
    throw new Error("useLeadFlow must be used inside LeadFlowProvider");
  }

  return context;
}
