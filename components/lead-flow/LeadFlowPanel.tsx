"use client";

import { useEffect, useId, useRef } from "react";

type LeadFlowPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function LeadFlowPanel({ isOpen, onClose, title, description, children }: LeadFlowPanelProps) {
  const panelId = useId();
  const descriptionId = useId();
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`fixed inset-0 z-[120] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!isOpen}>
      <button
        type="button"
        aria-label="Close lead flow"
        onClick={onClose}
        className={`absolute inset-0 bg-black/35 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />

      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={panelId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        className={`absolute right-0 top-0 flex h-full w-full max-w-2xl flex-col border-l border-black/10 bg-[#faf8f3] shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="border-b border-black/10 px-6 py-5 md:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p id={panelId} className="font-[var(--font-display)] text-2xl text-[var(--ink)]">
                {title}
              </p>
              <p id={descriptionId} className="mt-2 text-sm text-[var(--ink-soft)]">
                {description}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-black/15 bg-white px-3 py-1 text-sm text-[var(--ink)] transition hover:bg-black hover:text-white"
            >
              Close
            </button>
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 md:px-8">{children}</div>
      </aside>
    </div>
  );
}
