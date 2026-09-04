# THE DEV SAGA — Comic-Book Developer Portfolio

A personal portfolio website for **Ilham Bustomi**, a web developer — designed as a
black-and-white comic book. The whole site is one "issue": a splash-page hero, an
origin story, a saga of projects, a power grid, a story arc, a letters page, and a
signal room — all drawn with one consistent ink-on-paper system.

Built with **Astro 7 + Tailwind CSS 4**, shipped with **zero client frameworks**.

## ✨ Features

| Section | What it does |
| :-- | :-- |
| **Splash hero** | Giant comic-lettering title, SFX starburst, issue stamps, marquee ticker |
| **Interactive terminal** | Self-typing command demo — visitors can type their own command; the demo resumes when they go idle (or press Enter) |
| **Origin story** | Hand-inked SVG self-portrait + character sheet |
| **The Saga** | Six project panels in a comic grid; hovering spotlights a panel and dims its siblings, each issue links to a detail page |
| **Project detail pages** | `/works/<slug>` — problem / move / outcome story panels, cover art, prev/next issue navigation |
| **Powers** | Segmented power meters, utility belt, special moves |
| **Story arc** | Chapter-strip timeline with arrows |
| **Letters page** | Reader-mail style testimonials |
| **Send a signal** | Validated contact form (opens the visitor's mail app — no backend, nothing stored) |
| **Donate** | Navbar button opening a modal with a QRIS Dana QR code (support the author) |
| **404** | Custom "lost in the multiverse rift" page |

**Languages:** the site ships fully bilingual — English at `/` and Indonesian at
`/id/` (both statically built). The navbar globe toggle switches language while
staying on the equivalent page (e.g. `/works/x/` ↔ `/id/works/x/`). UI strings
live in `src/i18n/ui.ts`; project content is bilingual in `src/data/projects.ts`.

**Craft details:** halftone screentone, burst rays and speed-lines drawn in pure CSS ·
one orchestrated motion clock (single IntersectionObserver, staggered ink-in reveals) ·
`prefers-reduced-motion` respected everywhere · keyboard-accessible with visible focus ·
self-hosted fonts via Fontsource · no cookies, no tracking, no server.

## 🧞 Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` / `npx astro dev` | Start local dev server at `localhost:4321` |
| `npm run build` / `npx astro build` | Build the production site to `./dist/` |
| `npm run preview` / `npx astro preview` | Preview the production build locally |
| `npx astro check` | Type-check `.astro` files |

## 🗂 Project structure

```text
/
├── public/
│   ├── favicon.svg
│   └── qris-dana.png          # donation QR code (shown in the donate modal)
├── src/
│   ├── i18n/
│   │   └── ui.ts              # EN/ID dictionary (all UI strings)
│   ├── components/
│   │   ├── pages/             # shared page bodies (used by both locales)
│   │   │   ├── Home.astro
│   │   │   └── WorkDetail.astro
│   │   ├── Nav.astro          # masthead, section links, language toggle, donate modal
│   │   ├── Hero.astro         # splash page + interactive terminal
│   │   ├── About.astro        # origin story + character sheet
│   │   ├── Works.astro        # project grid ("The Saga")
│   │   ├── Skills.astro       # power grid + utility belt
│   │   ├── Timeline.astro     # story arc strip
│   │   ├── Letters.astro      # testimonials
│   │   ├── Contact.astro      # contact form + social links
│   │   ├── Footer.astro       # back cover
│   │   ├── Sfx.astro          # comic SFX starbursts
│   │   ├── CoverArt.astro     # hand-drawn SVG project covers
│   │   ├── Avatar.astro       # ink illustration of the author
│   │   └── SectionHead.astro  # chapter headers with giant outlined numerals
│   ├── data/
│   │   └── projects.ts        # ALL project content, bilingual (edit me!)
│   ├── layouts/
│   │   └── Base.astro         # <head>, nav, footer, reveal scripts
│   ├── pages/
│   │   ├── index.astro        # home (EN)
│   │   ├── id/                # Indonesian versions (/id/…)
│   │   ├── 404.astro
│   │   └── works/[slug].astro
│   └── styles/global.css      # design tokens + comic utilities (halftone, burst, …)
└── astro.config.mjs
```

## ✏️ Make it yours

Everything highlighted as *demo* on the site is placeholder content, clearly
labeled. Replace it before going live:

1. **Projects** — edit `src/data/projects.ts` (titles, taglines, stack, story
   text, links). Cover art variants live in `src/components/CoverArt.astro`.
2. **Email** — change the `email` constant in `src/components/Contact.astro`.
3. **Social links** — same file, the `socials` array.
4. **Donation QR** — replace `public/qris-dana.png` with your own QRIS code.
5. **Terminal commands** — edit the `commands` array in `src/components/Hero.astro`.
6. **About / skills / timeline / letters** — edit the arrays and copy inside
   `src/components/About.astro`, `Skills.astro`, `Timeline.astro`, `Letters.astro`.

## 🚀 Deploy

The site is fully static — any host works. For Vercel:

1. Push this repository to GitHub.
2. Import the repo on [vercel.com](https://vercel.com).
3. Vercel detects Astro automatically. Deploy. Done.

## 🧰 Tech stack

- [Astro 7](https://astro.build) — static output, zero-JS by default
- [Tailwind CSS 4](https://tailwindcss.com) — tokens & utilities via `@theme` / `@utility`
- [@fontsource](https://fontsource.org) — self-hosted Bangers, Oswald, Archivo
- No client frameworks, no tracking, no backend

## 📄 License

Released under the [MIT License](LICENSE).

<!-- Universe note: the site is designed, written and maintained by Ilham Bustomi (Tomi-012). -->
