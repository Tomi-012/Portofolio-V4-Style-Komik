---
name: The Dev Saga
description: Black-and-white comic-ink portfolio system — dense ink on aged paper, framed panels, halftone screentone, and hard offset shadows.
colors:
  ink: "#161616"
  smudge: "#55524a"
  paper: "#f4f2eb"
  panel: "#fdfcf8"
typography:
  display:
    fontFamily: "Bangers, Arial Narrow, sans-serif"
    fontSize: "clamp(4.5rem, 11vw, 8.5rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "0.025em"
  headline:
    fontFamily: "Bangers, Arial Narrow, sans-serif"
    fontSize: "clamp(3.2rem, 8vw, 6.5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.025em"
  title:
    fontFamily: "Bangers, Arial Narrow, sans-serif"
    fontSize: "1.5rem-3rem"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.025em"
  body:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "1rem-1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Oswald, Arial Narrow, sans-serif"
    fontSize: "0.625rem-0.875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.08em"
rounded:
  square: "0px"
  full: "9999px"
spacing:
  gutter: "1rem"
  gutter-wide: "1.5rem"
  panel: "1.5rem"
  panel-roomy: "2rem"
  grid-gap: "1.25rem"
  section-top: "4rem"
  section-top-wide: "6rem"
components:
  button-ink:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    padding: "0.75rem 1.5rem"
  button-ink-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.panel}"
    padding: "0.75rem 1.5rem"
  caption-chip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "0.25rem 0.625rem"
  panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    padding: "1.5rem"
  panel-inverted:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "1.5rem"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "0.625rem 0.75rem"
---

# Design System: The Dev Saga

## Overview

**Creative North Star: "The Living Issue"** — the site is a continuously-deploying black-and-white comic book; every screen is a panel of Issue #01, and the mechanism itself is the portfolio proof.

The material is dense india ink on warm newsprint. Nothing chromatic exists in this world: color decisions collapse into four paper-tones, and everything else — hierarchy, state, energy — is drawn with line weight, screentone texture, inversion, and micro-tilt. Illustration is hand-inked inline SVG (avatar, six cover-art variants, SFX star bursts) with halftone pattern fills, never photography. The personality is bold and assured — comic craft, not kiddy cartoon — per the pinned brand commitment to a "cool black-and-white comic art style."

Compositionally, the page is a comic page: content lives inside ink-framed panels arranged as chapter strips (splash hero, origin spread, saga grid, power meters, story-arc strip, letters page, signal slab), separated by paper gutters. The direction contract sketched a literal nine-panel grid and a hero crying "KA-BOOM!"; the shipped build instead organizes chapters as panel strips with a 2×2 splash panel in the saga grid, and the hero bursts "KA-POW!" (KA-BOOM! lives on the Inkpress cover). The build is the system of record.

**Key Characteristics:**
- Ink-on-paper mono: four paper-tones, zero hue; state rides texture and inversion
- Everything is a panel: 3px ink frames, hard offset shadows, square corners
- Comic lettering: Bangers display, Oswald tracked caps, Archivo body
- Screentone kit: halftone / halftone-fine / burst / speedlines / paper-grain, all in `currentColor`
- One motion clock: a single IntersectionObserver with `--reveal-delay` stagger, gated by reduced-motion
- Diagonal energy: panels tilt ±0.45–1.5°, SFX bursts 8–12°

## Colors

A mono ink-on-paper palette: one dense neutral ink against three warm paper tones — the entire inkwell.

### Primary
- **Dense India Ink** (#161616): every drawn line in the world — all text, all 2–4px borders, solid fills, hard offset shadows, halftone dots (via `currentColor`), selection background, scrollbar thumb. It is both foreground and the only "accent": inverted panels and solid buttons are ink floods.

### Secondary
- **Warm Smudge** (#55524a): a single reserved duty — the offset shadow cast by solid ink buttons (4px hard offset). Never used as text, border, or fill.

### Neutral
- **Aged Newsprint** (#f4f2eb): the page background, text color on ink-flooded surfaces, and the ground inside cover-art strips.
- **Bleed White** (#fdfcf8): panel and button faces — a step brighter than the page so framed panels read as pasted-down art.

The opacity ladder does the work a color ramp would: body text sits at 85–90% ink, metadata labels at 60%, placeholders at 40%; on ink slabs paper text runs 55–85%. Texture washes run 6–15% (ambient corner masses) up to 25% (SFX backdrops).

### Named Rules
**The Two-Tone Rule.** The palette is four paper-tones — that is the whole inkwell. No hue anywhere, ever. Interactive state is expressed by inversion, opacity, and screentone density, never by color.

**The Smudge Rule.** Warm Smudge has exactly one job: the shadow under solid ink buttons. If it appears anywhere else, delete it.

## Typography

**Display Font:** Bangers (fallback: Arial Narrow, sans-serif) — native all-caps comic lettering, weight 400 only.
**Body Font:** Archivo (fallback: Helvetica, Arial, sans-serif) — weights 400–700 plus italic.
**Label Font:** Oswald (fallback: Arial Narrow, sans-serif) — weights 500–700.

**Character:** Shout, track, speak. Bangers supplies the hand-lettered cover energy, Oswald is the newsprint caption strip, and Archivo is the even-tempered narrator underneath. Case is structural, not stylistic.

### Hierarchy
- **Display** (400, clamp(4.5rem, 11vw, 8.5rem), line-height 0.86, tracking 0.025em): hero name lines only, each line individually tilted (-2° / +1.2° / -1°); the nickname line is outline-only (3px ink text-stroke, transparent fill) with an sr-only twin for screen readers.
- **Headline** (400, 3–4.5rem stepped for section heads (text-5xl→7xl) and clamp(3.2rem, 8vw, 6.5rem) for issue titles, line-height 0.88–0.95): chapter/section titles, issue splash titles (tilted -1.5°), the footer "THE END?".
- **Title** (400, 1.5–3rem, line-height 0.95): panel and card titles, contact-slab headline, SFX wording inside bursts (15–28px scaled by word length), display accents like issue numbers.
- **Body** (400–700, 1rem–1.125rem, line-height 1.625): all running text in sentence case, at 85–90% ink; measures are constrained to max-w-md–xl (≈55–70ch) where prose leads.
- **Label** (Oswald 500–700, 0.625–0.875rem, letter-spacing 0.08–0.2em, uppercase): caption chips, form labels, meta rows, footer colophon; metadata labels at 60% ink.

One sanctioned exception: the hero's terminal mini-panel speaks monospace (13–14px, paper on ink) — terminal/CLI content only.

### Named Rules
**The Three Voices Rule.** Exactly three voices: Bangers shouts (display, caps), Oswald tracks (labels, uppercase + tracked), Archivo speaks (body, sentence case). Nothing else gets a microphone.

**The Caps Contract.** All display and caption text is uppercase with explicit tracking (0.025em display, 0.08em+ captions). Body copy is never uppercase and never set in a display or label face.

## Layout

One container rules the page: max-w-7xl (80rem) centered, with page gutters of 1rem narrowing out to 1.5rem (px-4 → sm:px-6). Vertical rhythm is a two-step drumbeat: every section enters at 4rem top padding, widening to 6rem at sm (pt-16 / sm:pt-24).

The sticky masthead is a 3px-ruled ink bar; anchored sections reserve `scroll-margin-top: 5.5rem` so chapter heads clear it, and a halftone reading-progress meter runs along its bottom edge.

Composition is panel strips, not a uniform grid:
- **Hero**: one full splash panel (internal padding 1.5rem → 3.5rem, lg split 7fr/5fr) with a tilted headline stack, three caption chips, an SFX burst, and three mini panels (terminal, news flash, base-of-operations); a marquee ticker strip runs beneath.
- **Origin & Signal**: two-panel spreads split 5fr/7fr on lg.
- **The Saga**: 1 → 2 (sm) → 3 (lg) column grid, gap 1.25rem; the splash issue spans 2×2.
- **Powers**: lg two-column split — power-meter panel and a stacked (belt + moves) column.
- **Story Arc**: a horizontal snap-scroll strip of 240px panels on small screens, becoming a 5-track lg grid with ink arrow connectors and alternating vertical offsets.
- **Letters & issue detail**: 3-column rows with staggered top offsets (0 / 1.75rem / 0.75rem) and stepped story panels (0 / 1.5rem / 3rem) so rows read as comic tiers, not a grid of equals.

Density: panel padding 1.25–2rem, grid gaps 1.25–2rem. Paper is the gutter; panels are the content.

### Named Rules
**The Panel Frame Rule.** Content never floats naked on the page. Every content mass sits inside an ink-framed panel on paper (or is itself an ink slab); the paper between panels is gutter, exactly like a printed comic page.

## Elevation & Depth

This system uses no soft shadows — not one blurred pixel. Depth is drawn the way a printer misregisters a second ink pass: every shadow is a hard-edged, blur-free, fully-opaque offset cast straight down-right, in solid ink. Lifting an element means a longer offset and a counter-translate of the content inside the frame.

### Shadow Vocabulary
- **Ink pass, small** (`4px 4px 0 0 var(--color-ink)`): chips, the terminal mini-panel, chapter tags, small framed accents.
- **Ink pass, standard** (`6px 6px 0 0 var(--color-ink)`): every panel and card at rest (`panel-ink` grammar).
- **Ink pass, heavy** (`10px 10px 0 0 var(--color-ink)`): hover state only — work panels lifting off the page.
- **Smudge pass** (`4px 4px 0 0 var(--color-smudge)`): solid ink buttons; softens the heaviest control by a half-tone.
- **Paper pass** (`4px 4px 0 0 var(--color-paper)`): buttons sitting on ink slabs (the footer's return control).

### Named Rules
**The Second Ink Pass Rule.** Depth is drawn, not diffused. Every shadow is a hard offset in a single solid color — no blur, no alpha — always cast down-right. To elevate: lengthen the pass and translate the panel against it.

## Shapes

UI chrome is entirely square: 0 radius on panels, buttons, inputs, and chips. Circles appear only as drawn geometry (the avatar's circular seal badge and its ink pupil-dot), never as corner treatment; SVG illustrations may round their own internals (the robot head's rx 10) — illustration interior, not chrome.

The border-weight hierarchy is the system's pen nibs: **4px** (footer top rule) → **3px** (panels, buttons, inputs, nav bottom rule, ink dividers) → **2.5px** (caption boxes, balloons, utility-belt chips) → **2px** (stack tags, power-meter cells). Nothing thinner than 2px exists; dividers are drawn as solid ink bars, and hairlines (1px) are banned.

Diagonal energy comes from a micro-tilt grammar: content panels rock ±0.45–1.5°, display moments ±1–2°, SFX bursts 8–12°, all carried through motion via the `--tilt` custom property. Focus is a pencil-sketch ring: 3px dashed ink, offset 3px. Selection inverts (ink background, paper text), and the scrollbar is thin ink-on-paper.

### Named Rules
**The No-Hairline Rule.** The world is drawn with a pen, not a laser: nothing thinner than 2px, and every line is one of the four declared weights (2 / 2.5 / 3 / 4px).

## Components

Motion doctrine for every component below — **The One Clock Rule.** All scroll reveals run through one IntersectionObserver (threshold 0.15, rootMargin "0px 0px -40px 0px") that adds `.inked` once and unobserves. Entrance choreography is a `--reveal-delay` stagger (observed steps of 70–150ms within groups, up to 480ms across a strip). Reveals are double-gated: a `.js` class (no JS = fully visible) and `prefers-reduced-motion: no-preference`. Ambient loops (burst spin, 90s; ticker marquee, 26s) and the hero speedlines' scroll-parallax (-0.22px per scrolled px) are motion-safe only. Never add a second scroll listener or observer.

**The Screentone State Rule.** Interactive state is texture and inversion: hover/focus raises a halftone wash to 0.09 opacity, the saga grid dims sibling panels to 0.38 (`:has()` isolate-the-track, motion-safe), and pressed/focused buttons flood to solid ink. Never a hue change.

### Buttons
- **Shape:** square (0 radius), 3px ink border, Bangers at 1.25rem uppercase with 0.06em tracking, padding 0.75rem × 1.5rem.
- **Primary — solid ink:** ink fill, paper text, 4px smudge pass ("READ THE SAGA", "Transmit!").
- **Secondary — outline ink:** panel fill, ink text, 4px ink pass ("Hire me!").
- **Hover / Active / Focus:** hover lifts 2px and upgrades the cast to the 6px ink pass; active presses in — both variants flood to ink fill / paper text; focus takes the global 3px dashed ink ring. Transitions: 0.18s `--ease-snap`.

### Chips
- **Style:** the caption-box family — Oswald 600, uppercase, 0.08em+ tracking, 2.5px ink border. Inverted variant (ink fill / paper text) for chapter, issue, and status tags; panel variant for notes and asides.
- **State & variants:** stack tags drop to 2px borders at 10px; utility-belt chips on ink slabs use 2.5px paper borders and invert on hover; status textures are semantic — "IN THE LAB" carries a halftone-fine wash.

### Cards / Containers
- **Corner Style:** square, 3px ink frame.
- **Background:** Bleed White panels on Newsprint; ink slabs as inverted counterparts (paper text, paper-toned halftone corner washes at 10–15%).
- **Shadow Strategy:** the standard 6px ink pass; hover grows it to 10px (see Elevation & Depth).
- **Border:** 3px ink, always.
- **Internal Padding:** 1.25–2rem.
- **Work panels** add a cover strip (Newsprint ground, 6% halftone wash, hand-inked CoverArt SVG over a 3px rule) and a body: issue number, status chip, Bangers title, tagline, 2px stack tags, and a "Read issue" link with a 3px underline. On hover the panel lifts (10px pass, inner content counter-translates -3px, -3px), the halftone wash fades in at 0.09, and siblings dim to 0.38.

### Inputs / Fields
- **Style:** 3px ink border, Newsprint fill, square corners, 0.625rem × 0.75rem padding, 1rem Archivo; placeholders at 40% ink.
- **Labels:** Oswald 12px, 600, 0.18em tracking, uppercase.
- **Focus:** the global 3px dashed ink ring.
- **Error:** speech-balloon annotations — 2.5px ink border, panel fill, balloon tail, Oswald 12px, wired through `aria-live` and `aria-invalid`.

### Navigation
- **Style:** sticky ink masthead (3px bottom rule, z-40) with a Bangers wordmark ("The Dev Saga*") and a paper logo tile (bolt glyph) that rotates -6° on hover. Section links are paper caption chips (10–12px Oswald 600) that invert to ink on hover. A halftone progress meter fills along the masthead's bottom edge as the reader scrolls. On small screens the link strip scrolls horizontally.

### Signature Components
- **SFX Star Burst:** a 14-spike jittered star polygon (SVG, generated at build) carrying a Bangers exclamation ("KA-POW!", "WHAM!", "BOO!"), in solid (ink star / paper text) or outline (panel star / ink text) variants, 2.5px stroke, tilted 8–12°, with an optional spinning ray backdrop (conic burst, radial-masked, 90s rotation). Always `aria-hidden` and `pointer-events-none` — environmental mass, never content. Entrance is the sfx-pop: scale 0.4 with a -10° overshoot settling into its tilt.
- **Section Head:** chapter tag (ink block, Bangers, 4px-sm pass) beside a 3–4.5rem Bangers title, with an optional caption-box note, e.g. "CHAPTER 02 — The Saga".
- **Balloon:** the world's native annotation device — a rotated-square tail (10px, 2.5px ink borders on two sides, 45°) on a 2.5px-bordered panel chip. Carries speech ("EVERY HERO HAS AN ORIGIN STORY!") and form-validation errors alike.

## Do's and Don'ts

### Do:
- **Do** build every container on the panel-ink grammar: 3px ink frame + Bleed White fill + 6px hard ink pass, square corners.
- **Do** express state with texture and inversion — halftone wash to 0.09 on hover, flood to ink on press — and gate every animation behind `prefers-reduced-motion`.
- **Do** route all scroll reveals through the one IntersectionObserver with `--reveal-delay` stagger (70–150ms steps); tilt panels ±0.45–1.5° for diagonal energy.
- **Do** set display in Bangers caps (0.025em) and captions in Oswald uppercase (0.08em+ tracking); keep body in Archivo sentence case at 85–90% ink.
- **Do** draw illustration as inline SVG in ink with halftone pattern fills, and keep SFX bursts `aria-hidden` and `pointer-events-none`.

### Don't:
- **Don't** introduce hue — the inkwell is four paper-tones, and state never uses color (The Two-Tone Rule).
- **Don't** use soft, blurred, or translucent shadows; depth is only hard down-right offsets in solid ink (The Second Ink Pass Rule).
- **Don't** draw hairlines — nothing thinner than 2px; dividers are 3px ink bars (The No-Hairline Rule).
- **Don't** round corners on UI chrome or set body copy in caps or in display/label faces.
- **Don't** add a second scroll listener, animation clock, or reveal system — one clock or none.
