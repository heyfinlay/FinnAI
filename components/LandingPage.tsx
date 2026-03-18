import { BookingFlow } from "@/components/BookingFlow";
import {
  FAQSection,
  FinalCtaSection,
  FitSection,
  FounderNoteSection,
  ReportPreviewSection,
} from "@/components/landing/PageSections";
import { HeroSection } from "@/components/landing/HeroSection";
import { OperationsDiagnostic } from "@/components/landing/OperationsDiagnostic";
import { SnapshotLeadSection } from "@/components/landing/SnapshotLeadSection";
import { SectionHeader, SectionShell } from "@/components/landing/AdvisoryBlocks";

const CALENDLY_URL = "https://calendly.com/finlay-temporaryutopia/30min";

export function LandingPage() {
  return (
    <>
      <header className="site-header">
        <div className="section-container">
          <div className="site-header-panel">
            <a href="#top" className="site-brand">
              <span className="site-brand-mark" aria-hidden="true">
                TU
              </span>
              <span className="site-brand-copy">
                <span className="site-brand-name">Temporary Utopia</span>
                <span className="site-brand-tagline">AI operations audits for service businesses</span>
              </span>
            </a>

            <nav className="site-nav" aria-label="Primary">
              <a href="#report-preview">Report</a>
              <a href="#snapshot">Snapshot</a>
              <a href="#how-it-works">Process</a>
              <a href="#booking">Book</a>
            </nav>

            <a href="#booking" className="btn-primary site-header-cta">
              Book a call
            </a>
          </div>
        </div>
      </header>

      <main id="main-content" className="site-main">
        <HeroSection primaryHref={CALENDLY_URL} secondaryHref="#report-preview" />
        <ReportPreviewSection />
        <FounderNoteSection />
        <SnapshotLeadSection />
        <OperationsDiagnostic />
        <FitSection />
        <FAQSection />

        <SectionShell id="booking" tone="contrast">
          <SectionHeader
            eyebrow="Book the call"
            title="If you want to see whether an audit is worth doing, start here."
            description="This call is the fastest way to pressure-test the bottleneck, understand what the report would focus on, and decide whether there is enough upside to move forward."
          />

          <div className="booking-wrap reveal-up">
            <BookingFlow />
          </div>
        </SectionShell>

        <FinalCtaSection />
      </main>

      <footer className="site-footer">
        <div className="section-container site-footer-inner">
          <p>Temporary Utopia</p>
          <a href="mailto:finlay@temporaryutopia.com">finlay@temporaryutopia.com</a>
        </div>
      </footer>
    </>
  );
}
