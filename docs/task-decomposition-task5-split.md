# Task 5 Decomposition — Home Page Sections

This document replaces the original **TASK 5 (OSC-005)** from the approved task decomposition for the Ordnance Survey Cloud redesign project.

**Original problem:** Task 5 was classified as `complexity=high` and contained 7 distinct page sections (Hero, Data Strip, Feature 01, Feature 02, Feature 03, Customer Quote, Final CTA) in a single assignment. A worker-coder cannot implement all 7 sections within the 240-second agent timeout.

**Resolution:** Split into 4 sequential sub-tasks (`task-5a` → `task-5b` → `task-5c` → `task-5d`), each scoped to 1–2 sections and bounded to the same target file (`app/page.tsx`). Merge order is bottom-up to avoid conflicts.

---

## Merge Order

1. **task-5a** (no prior task-5 dependencies)
2. **task-5b** (depends on task-5a)
3. **task-5c** (depends on task-5b)
4. **task-5d** (depends on task-5c)

---

## TASK 5a — Hero Section

**TASK ID:** OSC-005a

**ASSIGNED TO:** worker-coder

**TIER:** Coder

**TITLE:** Home page — Hero section

**DESCRIPTION:**
Create the Hero section of the Ordnance Survey Cloud home page. This is the first sub-task of the decomposed task-5. The Hero must include the headline “The Maps Engine behind the UK”, the sub-copy starting “From real-time delivery routing...”, and two CTAs (primary “Start Mapping Now”, secondary “Read Case Study”). It must also include an API code snippet panel showing `api.os.uk/maps` usage with inline comments, plus a circular SVG map graphic replacing the default Next.js graphic.

The file MUST start with `"use client";` and include all necessary imports (`motion` from `framer-motion`, `Link` from `next/link`, `ProjectImage`). Set up the full page structure, metadata export, and render only the Hero section inside a `<main>` element. Add placeholder comments for remaining sections so later sub-tasks know where to insert.

This is the heaviest individual section because of the staggered entrance animations on header, body text, CTAs, API panel, and SVG (h1, p, buttons, code block, img — 5 animated elements).

**FILES TO CREATE:**
- (none)

**FILES TO MODIFY:**
- app/page.tsx

**DO NOT TOUCH:**
- next.config.js
- app/layout.tsx
- app/globals.css
- app/components/Navigation.tsx
- app/components/Footer.tsx

**DEPENDENCIES:**
- Task 1 — Global Design Tokens (globals.css)
- Task 2 — Navigation component (Navigation.tsx)
- Task 3 — Footer component (Footer.tsx)
- Task 4 — Root layout (layout.tsx)

**INTERFACE CONTRACT:**
- The exported default component from app/page.tsx returns a `<main>` containing a single `<section id="hero">`.
- All animated elements must use `motion` components with `initial={{ opacity: 0, y: 24 }}` and `animate={{ opacity: 1, y: 0 }}`.
- The API code snippet must be rendered as a `<pre>` block with a `<code>` child and inline comment styling using muted text colour (`text-gray-500` or `text-osMuted`).
- CTAs use the existing button style class from globals.css (e.g., `btn-primary`, `btn-outline`).
- The circular SVG map graphic must use a `<ProjectImage>` with `priority`.

**ACCEPTANCE CRITERIA:**
1. app/page.tsx exists and starts with `"use client";`.
2. The file imports `motion`, `Link`, and `ProjectImage`.
3. The rendered output contains exactly one `<section id="hero">`.
4. The section contains an `<h1>` with text matching “The Maps Engine behind the UK”.
5. The section contains a `<p>` element with text starting “From real-time delivery routing”.
6. Two CTA links are present: one with text “Start Mapping Now” and one with “Read Case Study”.
7. A `<pre>` block containing `<code>` with inline comment styling (`text-gray-500` or `text-osMuted`) is present.
8. A `<ProjectImage>` with `priority` is present and renders the circular map graphic.
9. At least 5 distinct `motion` elements have entrance animations (`opacity` and `y` transforms).
10. Placeholder comments for remaining sections (Data Strip, Feature 01–03, Customer Quote, Final CTA) are present below the Hero section.

**BRANCH NAME:** task-5a

**ESTIMATED COMPLEXITY:** medium

---

## TASK 5b — Data Strip and Feature 01

**TASK ID:** OSC-005b

**ASSIGNED TO:** worker-coder

**TIER:** Coder

**TITLE:** Home page — Data Strip and Feature 01

**DESCRIPTION:**
In app/page.tsx, add the Data Strip section and Feature 01 section immediately after the Hero section. Do not modify the Hero section. The Data Strip is a horizontal band displaying usage metrics (e.g., “10M+ API calls / day”, “99.99% uptime”, “2ms response time”) rendered as flex items with animated counters or static figures. Feature 01 is titled “Infrastructure Reliability” with left-aligned text and a right-aligned device mockup image.

Each section must be wrapped in its own `<section>` with a stable `id` (`data-strip`, `feature-01`). Follow the exact copy, structure, and animation specifications from the original task-5. Feature 01 must reuse the same staggered entrance pattern as the Hero (5 animated elements: h2, p, button, two mockup images).

**FILES TO CREATE:**
- (none)

**FILES TO MODIFY:**
- app/page.tsx

**DO NOT TOUCH:**
- next.config.js
- app/layout.tsx
- app/globals.css
- app/components/Navigation.tsx
- app/components/Footer.tsx
- Hero section (code added by task-5a)

**DEPENDENCIES:**
- OSC-005a (Hero section must be present in app/page.tsx)

**INTERFACE CONTRACT:**
- app/page.tsx must already contain the Hero section from task-5a.
- Insert `<section id="data-strip">` and `<section id="feature-01">` after the Hero closing tag and before the next placeholder comment.
- Data Strip metrics use the same staggered animation pattern as the Hero (5 animated elements).
- Feature 01 uses the same staggered animation pattern (5 animated elements: h2, p, button, two mockup images).
- All `motion` elements use `initial={{ opacity: 0, y: 24 }}` and `animate={{ opacity: 1, y: 0 }}`.
- Feature 01 CTA uses `Link` with `href="#"` and the existing button class.

**ACCEPTANCE CRITERIA:**
1. app/page.tsx contains `<section id="data-strip">` after the Hero section.
2. app/page.tsx contains `<section id="feature-01">` after the Data Strip section.
3. The Data Strip section contains exactly 3 metric items, each with a figure and a label.
4. The Data Strip section has 5 animated `motion` elements.
5. Feature 01 section contains an `<h2>` with text matching “Infrastructure Reliability”.
6. Feature 01 section contains a `<p>` with text starting “Ordnance Survey Cloud is built on...”.
7. Feature 01 section contains a CTA link with text matching “Explore Reliability”.
8. Feature 01 section contains two `<ProjectImage>` elements (device mockups).
9. Feature 01 section has 5 animated `motion` elements.
10. No Hero section code is altered (check by diff or line count stability).

**BRANCH NAME:** task-5b

**ESTIMATED COMPLEXITY:** medium

---

## TASK 5c — Feature 02 and Feature 03

**TASK ID:** OSC-005c

**ASSIGNED TO:** worker-coder

**TIER:** Coder

**TITLE:** Home page — Feature 02 and Feature 03

**DESCRIPTION:**
In app/page.tsx, add Feature 02 (“Cartographic Precision”) and Feature 03 (“Integration Readiness”) after Feature 01. Do not modify sections added by prior sub-tasks. Feature 02 uses a flipped layout (text on the right, images on the left) and a `Grid` background SVG rendered with `ProjectImage`. Feature 03 is similar to Feature 01 but with a 3-column layout for its diagram and distinct copy.

Each section must be wrapped in its own `<section>` with a stable `id` (`feature-02`, `feature-03`). Follow the exact copy, structure, and animation specifications from the original task-5. Both sections use the same staggered entrance pattern (5 animated elements each).

**FILES TO CREATE:**
- (none)

**FILES TO MODIFY:**
- app/page.tsx

**DO NOT TOUCH:**
- next.config.js
- app/layout.tsx
- app/globals.css
- app/components/Navigation.tsx
- app/components/Footer.tsx
- Hero section (task-5a)
- Data Strip and Feature 01 sections (task-5b)

**DEPENDENCIES:**
- OSC-005b (Data Strip and Feature 01 must be present in app/page.tsx)

**INTERFACE CONTRACT:**
- app/page.tsx must already contain Hero, Data Strip, and Feature 01 sections.
- Insert `<section id="feature-02">` and `<section id="feature-03">` after Feature 01 and before the next placeholder comment.
- Feature 02 layout is flipped: images on the left, text on the right.
- Feature 02 includes a `Grid` background SVG rendered via `<ProjectImage>`.
- Feature 03 uses a 3-column diagram layout.
- All `motion` elements use `initial={{ opacity: 0, y: 24 }}` and `animate={{ opacity: 1, y: 0 }}`.
- Feature 03 CTA uses `Link` with `href="#"` and the existing button class.

**ACCEPTANCE CRITERIA:**
1. app/page.tsx contains `<section id="feature-02">` after Feature 01.
2. app/page.tsx contains `<section id="feature-03">` after Feature 02.
3. Feature 02 section contains an `<h2>` with text matching “Cartographic Precision”.
4. Feature 02 section contains a `<ProjectImage>` for the `Grid` background SVG.
5. Feature 02 section has 5 animated `motion` elements.
6. Feature 03 section contains an `<h2>` with text matching “Integration Readiness”.
7. Feature 03 section contains a 3-column diagram layout (3 distinct child elements in a row).
8. Feature 03 section has 5 animated `motion` elements.
9. No prior sections (Hero, Data Strip, Feature 01) are altered.

**BRANCH NAME:** task-5c

**ESTIMATED COMPLEXITY:** medium

---

## TASK 5d — Customer Quote and Final CTA

**TASK ID:** OSC-005d

**ASSIGNED TO:** worker-coder

**TIER:** Coder

**TITLE:** Home page — Customer Quote and Final CTA

**DESCRIPTION:**
In app/page.tsx, add the Customer Quote section and Final CTA section after Feature 03. These are the last two sections of the home page. Do not modify any prior sections. The Customer Quote section must display a quote from a named customer, their job title, company, and a square logo. The Final CTA section is a full-width banner with large headline copy, body text, and a single primary CTA button.

Each section must be wrapped in its own `<section>` with a stable `id` (`customer-quote`, `final-cta`). Follow the exact copy, structure, and animation specifications from the original task-5. Remove the placeholder comments for these sections once they are implemented. The Customer Quote uses a staggered entrance (5 animated elements). The Final CTA uses a staggered entrance (3 animated elements: h2, p, button).

**FILES TO CREATE:**
- (none)

**FILES TO MODIFY:**
- app/page.tsx

**DO NOT TOUCH:**
- next.config.js
- app/layout.tsx
- app/globals.css
- app/components/Navigation.tsx
- app/components/Footer.tsx
- Hero section (task-5a)
- Data Strip and Feature 01 sections (task-5b)
- Feature 02 and Feature 03 sections (task-5c)

**DEPENDENCIES:**
- OSC-005c (Feature 02 and Feature 03 must be present in app/page.tsx)

**INTERFACE CONTRACT:**
- app/page.tsx must already contain all prior sections.
- Insert `<section id="customer-quote">` and `<section id="final-cta">` after Feature 03.
- Remove placeholder comments for Customer Quote and Final CTA once implemented.
- Customer Quote contains: quote text, customer name, job title, company, and a square logo (`<ProjectImage>`).
- Final CTA contains: large headline, body text, and one primary CTA button (`Link` with `href="#"`).
- All `motion` elements use `initial={{ opacity: 0, y: 24 }}` and `animate={{ opacity: 1, y: 0 }}`.

**ACCEPTANCE CRITERIA:**
1. app/page.tsx contains `<section id="customer-quote">` after Feature 03.
2. app/page.tsx contains `<section id="final-cta">` after the Customer Quote section.
3. The Customer Quote section contains a blockquote or paragraph with the full quote text starting “Ordnance Survey Cloud reduced...”.
4. The Customer Quote section contains the customer name “Sarah Jenkins” and job title “Head of Logistics”.
5. The Customer Quote section contains a square logo rendered via `<ProjectImage>`.
6. The Customer Quote section has 5 animated `motion` elements.
7. The Final CTA section contains an `<h2>` with text matching “Ready to Build the Future?”.
8. The Final CTA section contains a CTA link with text matching “Get Started Now”.
9. The Final CTA section has 3 animated `motion` elements.
10. No placeholder comments remain for sections that have been implemented.

**BRANCH NAME:** task-5d

**ESTIMATED COMPLEXITY:** medium

---

*End of decomposition.*
