# FinnAI Experiment Log

[EXPERIMENT 1]
Goal: Inspect the current FinnAI landing page and identify the highest-leverage directions to prototype.
Attempt: Reviewed the live app structure, landing components, styles, existing rebuild plan, and recent memory/context notes around the one-day audit and Melbourne-first niche focus.
Result: Confirmed the current page is strongest as a workflow-first audit offer, but it still needs sharper market framing, clearer segment targeting, and a broader asset portfolio around positioning, outreach, and qualification.
Verdict: keep
Reason: The current direction is viable, but it needs concrete go-to-market packaging rather than only page polish.
Next move: Produce multiple landing page concepts, pick the strongest angle, and build supporting conversion assets around it.
Artifact path: docs/experiment-log.md

[EXPERIMENT 2]
Goal: Create a breadth-first portfolio of commercially usable landing and offer directions.
Attempt: Wrote a landing direction portfolio covering four distinct angles: efficiency audit, missed-revenue/ROI, founder advisory, and Melbourne niche variant.
Result: Produced a decision-ready concept set with scoring and a recommended direction stack.
Verdict: keep
Reason: This creates immediate strategic optionality without overbuilding a single page variant too early.
Next move: Turn the strongest positioning into concrete offer, outreach, and qualification assets.
Artifact path: docs/landing-directions.md

[EXPERIMENT 3]
Goal: Build supporting assets aligned to the strongest audit offer.
Attempt: Created offer positioning, outreach sequence, lead qualification rubric, and a Melbourne campaign variant doc.
Result: The repo now contains usable sales collateral that can feed outbound, niche LPs, and qualification.
Verdict: keep
Reason: These are directly deployable and sharpen the sales motion around the existing page.
Next move: Update the live landing page to add sharper commercial/niche framing, then validate with lint/build.
Artifact path: docs/offer-positioning.md; docs/outreach-system.md; docs/lead-qualification-rubric.md; docs/campaign-variant-melbourne-service-firms.md

[EXPERIMENT 4]
Goal: Refine the strongest landing direction into a sharper live version with better commercial targeting.
Attempt: Updated the live hero copy and added best-fit audience framing plus a dedicated segments section focused on mortgage brokers, accounting/bookkeeping firms, and admin-heavy service teams.
Result: The live page now combines the current advisory feel with a stronger revenue/admin-drag angle and clearer niche relevance.
Verdict: iterate
Reason: Stronger than before, but still needs proof/case-study style artifacts to increase trust and specificity.
Next move: Add proof-driven examples or mini case studies next.
Artifact path: components/landing/HeroSection.tsx; components/LandingPage.tsx; app/globals.css

[EXPERIMENT 5]
Goal: Validate the updated landing page and asset pack.
Attempt: Ran `npm run lint && npm run build` in the FinnAI app. The first lint run failed due to a corrupted HeroSection edit; fixed the file and reran successfully.
Result: Lint and production build both passed.
Verdict: keep
Reason: The repo now has validated copy changes plus a documented growth asset pack.
Next move: Create proof/case-study content and possibly a dedicated niche LP variant component.
Artifact path: validated in-app; supporting artifacts in docs/

[EXPERIMENT 6]
Goal: Create proof-heavy collateral that makes the audit feel concrete before a call.
Attempt: Wrote a buyer-facing sample audit preview, reusable proof blocks, and practical before/after workflow examples covering mortgage brokers and accounting firms.
Result: The repo now has commercially usable proof assets for pages, proposals, outreach, and sales conversations.
Verdict: keep
Reason: This closes the biggest trust gap in the offer by replacing abstract positioning with believable deliverable and workflow examples.
Next move: Wire the strongest proof concepts into the live landing page and sharpen niche relevance.
Artifact path: docs/sample-audit-preview.md; docs/proof-blocks.md; docs/workflow-before-after-examples.md

[EXPERIMENT 7]
Goal: Build a stronger niche-specific direction around the highest-signal audience.
Attempt: Created a mortgage broker landing variant and extracted niche-specific proof signals tied to enquiry response, document chasing, and application updates.
Result: Mortgage broking now has a clearer sub-angle with obvious revenue linkage and proof language that can support outbound or a dedicated LP.
Verdict: keep
Reason: This is currently the clearest niche to make the offer feel specific rather than generic.
Next move: Bring the best mortgage-broker proof cues into the main page while keeping the core page broad enough for adjacent service firms.
Artifact path: docs/mortgage-broker-landing-variant.md

[EXPERIMENT 8]
Goal: Align outreach with the new proof-heavy angle.
Attempt: Reworked the outbound sequence so the CTA offers a sample audit preview / proof asset instead of only a generic audit explanation.
Result: Outreach now has a more tangible hook and a softer, more credible ask.
Verdict: keep
Reason: Offering a sample preview is easier to believe and easier to reply to than selling advisory in the abstract.
Next move: Validate whether the same proof framing should be visible on the live landing page above the fold.
Artifact path: docs/outreach-proof-refinement.md

[EXPERIMENT 9]
Goal: Add the strongest proof layer directly into the live landing page.
Attempt: Updated the main landing page to include a proof strip, proof cards, mortgage-broker niche block, and before/after workflow examples; expanded styles to support the new sections.
Result: The live page now feels more tangible, commercially specific, and easier to trust before booking.
Verdict: keep
Reason: This is the most important conversion improvement from this run — the page now demonstrates the offer instead of only describing it.
Next move: Validate with lint/build, then consider a dedicated broker LP or downloadable proof asset next.
Artifact path: components/LandingPage.tsx; app/globals.css
