# Landing Page Rebuild Plan

## 1. Current page problems

- The page repeats the same core message across too many sections, which weakens hierarchy and makes the scroll feel longer than the content warrants.
- Most sections rely on the same dark bordered box pattern, so important content does not stand out and the page feels visually heavy.
- The current layout explains ideas mostly with short keyword lists instead of clearer diagrams, timelines, or process views.
- Readability is weak in several areas because muted text is too dim, supporting copy is too small, and line lengths are inconsistent.
- Conversion flow is diluted by placing core trust, deliverable, process, and pricing information across too many separate blocks.
- Mobile structure is functional but not purposeful; dense card stacks and low-emphasis labels reduce scan speed.

## 2. New information architecture

1. Hero with headline, advisory framing, CTA group, proof row, and operations audit diagram
2. Problem framing with editorial copy and a tool-first vs diagnostic-first comparison
3. How the audit works as a numbered process timeline
4. Example improvements as visual before/after workflow transformations
5. What you receive with deliverables list and report preview
6. Why this is valuable as a merged outcomes/value section
7. Founder advisory positioning with concise credibility block
8. Engagement process after booking
9. Who this is for with good-fit / not-ideal split
10. Pricing and CTA
11. Booking with improved scheduler + request form layout
12. Final CTA

## 3. Sections to remove

- Remove the standalone `Service Overview` section because the hero and deliverables sections can carry that job more clearly.
- Remove the standalone `Trust And Process` section because its content belongs inside founder positioning and the engagement/process sections.

## 4. Sections to merge

- Merge `Approach` into `The Problem` so the contrast between tool-first and diagnostic-first lives in one stronger section.
- Merge `Report Quality`, `Where Value Is Usually Found`, and `Outcomes` into one clearer practical-value section.
- Merge duplicate conversion prompts so mid-page CTA density is reduced and stronger CTAs remain near hero, pricing, booking, and final close.

## 5. New sections/components to introduce

- `AuditDiagram` to visualize the operational diagnostic in the hero
- `ProblemComparison` to show tool-first friction vs advisory diagnosis
- `ProcessTimeline` to present the audit method clearly
- `BeforeAfterWorkflow` to show practical transformations with before, after, and outcome states
- `DeliverablePreview` to make the audit report feel concrete
- `FitChecklist` to qualify leads quickly
- `ProofStrip` for compact trust/value cues below the hero CTAs

## 6. Accessibility fixes to implement

- Add a skip link and reinforce semantic landmarks with `header`, `main`, `nav`, `section`, and `footer`
- Keep a single clear `h1` and maintain a logical `h2`/`h3` structure
- Raise body, muted text, border, and control contrast to more comfortable dark-theme levels
- Strengthen focus-visible treatment for links, buttons, inputs, and textareas
- Increase base type size, line height, touch target size, and section spacing
- Ensure form fields use explicit visible labels instead of placeholders alone
- Improve CTA clarity with more specific button text and better grouping

## 7. Visual design system changes

- Shift from repeated filled cards to a mix of open layouts, framed diagrams, timelines, and selective panels
- Introduce a tighter type scale with larger body copy, more restrained small text, and shorter readable line lengths
- Use brighter neutral text, clearer borders, and restrained blue/green accents without excessive glow
- Create more visual rhythm through alternating section densities, asymmetric layouts, and lighter panel usage
- Make report previews and workflows feel operational and document-driven rather than SaaS-feature driven

## 8. Execution order

1. Replace the landing page structure and section sequence
2. Add reusable visual explainer components for diagrams, workflows, timelines, and fit lists
3. Improve the booking form labels, helper text, spacing, and CTA clarity
4. Rewrite global styles for contrast, spacing, focus states, and responsive rhythm
5. Run lint/build verification and review the page in-browser at desktop and mobile widths
