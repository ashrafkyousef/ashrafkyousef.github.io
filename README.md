# Ashraf K Yousef — Portfolio

Single-page portfolio for Ashraf K Yousef, Assistant Bar Manager / Beverage
Operations Specialist (Dubai, UAE). Rebuilt from the previous static site at
`ashrafkyousef.netlify.app` — all copy, imagery and the CV were carried across.

## Stack

- **Next.js 16** (App Router, Turbopack) — the page is fully static (`○ /`)
- **Tailwind CSS v4** — CSS-first theme, no `tailwind.config.js`
- **lucide-react** for icons
- **next/font** for Fraunces (display) + Inter (body), self-hosted at build time

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static production build
npm start
```

## Structure

```
app/
  layout.tsx     Fonts, metadata, JSON-LD Person schema, favicon
  page.tsx       Section assembly + skip link
  globals.css    Theme tokens, base type, reveal + marquee keyframes
components/
  Nav.tsx        Sticky header, scroll-spy, mobile sheet   (client)
  Hero.tsx       Name, hook, stats, venue marquee
  About.tsx      Bio, philosophy, roles open to
  Experience.tsx Timeline, turnaround case study, pre-opening, competitions
  Skills.tsx     6-pillar system, competencies, digital tools, applied AI
  Contact.tsx    Contact links, CTA, footer
  Reveal.tsx     IntersectionObserver fade-in          (client)
  icons.tsx      LinkedIn glyph (lucide v1 dropped brand marks)
lib/content.ts   All copy and data — edit here, not in components
public/assets/   Portrait, venue logos, tool screenshots, CV PDF
```

## Editing content

Everything the page renders comes from [`lib/content.ts`](lib/content.ts):
bio, timeline, stats, pillars, tools, contact details. Components only handle
layout, so copy changes never require touching JSX.

## Theming

Colour, font and spacing tokens live in the `@theme` block at the top of
[`app/globals.css`](app/globals.css) — a warm near-black base (`--color-ink`)
with an amber accent (`--color-amber`). Change a token there and it propagates
to every `bg-ink`, `text-amber`, `border-line` utility across the site.

## Deploying (Netlify)

`netlify.toml` is configured for the **Netlify Next.js Runtime v5**, which turns
the Next build into static assets plus one server function, and routes
`next/image` requests to the Netlify Image CDN. Node is pinned to 22 via
`NODE_VERSION` and `.nvmrc`.

Verified locally with `netlify build --offline`: the runtime accepts Next 16,
the page and all assets serve, and the server handler bundles. The
`/_next/image` path can only be exercised on a real deploy — the local emulator
does not implement `/.netlify/images`.

**The live site at `ashrafkyousef.netlify.app` is still served from
`../portfolio-clean` and is untouched by any of this.** To preview this build
without affecting it, deploy it as a *separate* Netlify site first:

```bash
netlify init          # create a NEW site — do not link to the existing one
netlify deploy --build   # draft URL, production untouched
netlify deploy --build --prod   # only once the draft looks right
```

Point the `ashrafkyousef.netlify.app` name at the new site only after the draft
checks out.

## Notes

- Scroll-reveal is progressive: content renders visible, and is only hidden for
  animation once the inline `js` class lands on `<html>`. No JS, no blank page.
- `prefers-reduced-motion` disables reveals, the logo marquee and smooth scroll.
- `next.config.ts` pins `turbopack.root` because the project sits below an
  unrelated parent lockfile.
