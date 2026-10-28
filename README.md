# mattbeechey.com

Personal site for Dr Matthew Beechey — machine learning engineer, researcher and
product manager. Next.js App Router, statically prerendered, deployed on Vercel.

## Run

```bash
npm install
npm run dev
```

```bash
npm run build
```

The contact form is a server action using [Resend](https://resend.com) and needs
`RESEND_API_KEY` in the environment. Everything else is static.

## Editing content

**All copy lives in [`lib/content.ts`](lib/content.ts)** — bio, the Aptiq case
study, projects, publications, career history, education and toolkit are data,
not markup. The components only decide how that content is set. Dates and titles
there are taken from the CV in `public/`, so update both together.

## Design

Editorial/academic press: warm paper, high-contrast serif, numbered sections, a
single vermilion accent used only for emphasis and figure marks.

- **Type** — Fraunces for display (its `SOFT` and `WONK` axes are what give the
  headings their warmth), Newsreader for body, JetBrains Mono for labels.
- **Palette** — paper `#F7F4ED`, ink `#191713`, vermilion `#BF3B21`. Plate blue
  `#2B4C7E` appears only inside figures.
- **Tokens** are defined once in [`app/globals.css`](app/globals.css) under
  `@theme` (Tailwind v4 — there is no `tailwind.config.ts`).

Every animation is gated behind `prefers-reduced-motion`.

## Figure 1

[`components/FigureOne.tsx`](components/FigureOne.tsx) draws a two-class sample
with a decision boundary and a hatched band either side of it. Points inside the
band are ones an evidential classifier declines rather than guesses — the
mechanism behind both published papers. The layout uses a seeded PRNG so the
sample never reshuffles between renders.

## Case sensitivity

macOS is case-insensitive; Vercel builds on Linux. If you rename a component's
casing, use `git mv --force` so the change actually lands in the index — an
import of `@/components/Contact` against a tracked `contact.tsx` builds locally
and fails in CI.
