# Ashraf K Yousef — Portfolio

Single-page portfolio for Ashraf K Yousef, Assistant Bar Manager,
with Assistant Bar Manager / Head Bartender / Bar Supervisor positioning (Dubai, UAE).

Website: https://ashrafkyousef.github.io/

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
  Hero.tsx       Introduction, CV link, stats, venue logos
  About.tsx      Short bio and working philosophy
  Experience.tsx Latest role first, career progression and career break
  Tools.tsx      Compact hospitality systems and digital operations
  Skills.tsx     Systems, education, certifications and languages
  WorkSample.tsx Interactive stock reconciliation demonstration
  Contact.tsx    Contact links, CTA, footer
  Reveal.tsx     Server-rendered content wrapper
  icons.tsx      LinkedIn glyph (lucide v1 dropped brand marks)
lib/content.ts   All copy and data — edit here, not in components
public/assets/   Portrait, venue logos, tool screenshots, CV PDF
```

## Editing content

Everything the page renders comes from [`lib/content.ts`](lib/content.ts):
bio, timeline, stats, operating responsibilities, systems, qualifications and
contact details. Section headings and presentation copy also live in components.

## Theming

Colour, font and spacing tokens live in the `@theme` block at the top of
[`app/globals.css`](app/globals.css) — a warm near-black base (`--color-ink`)
with an amber accent (`--color-amber`). Change a token there and it propagates
to every `bg-ink`, `text-amber`, `border-line` utility across the site.

## Deploying (GitHub Pages)

The website is hosted at https://ashrafkyousef.github.io/.
The `.github/workflows/deploy.yml` workflow builds and deploys the static
export to GitHub Pages when changes are pushed to `main`, or when manually
triggered in GitHub Actions.

`next.config.ts` enables static export and disables server image optimisation.
The user site is served from the root, so no base path is needed. The default
site URL in `app/layout.tsx` is `https://ashrafkyousef.github.io`.
If the repository defines `NEXT_PUBLIC_SITE_URL`, keep it set to this address.

## Notes

- Content is visible immediately without JavaScript or scroll animations.
- `prefers-reduced-motion` disables smooth scrolling and decorative transitions.
- `next.config.ts` pins `turbopack.root` because the project sits below an
  unrelated parent lockfile.

## CV source and content scope

The downloadable PDF is the final uploaded `Ashraf Yousef_Asst Manager_CV .pdf`,
reviewed on 1 October 2026, preserved without rewriting the document.

Use 11 years UAE hospitality experience, beverage cost around 21%, and
approximately 20–25 bar team members coordinated during peak shifts.
Bla Bla dates: Bartender Jan–Oct 2021; Floor Supervisor Oct 2021–Nov 2022;
Assistant Bar Manager Nov 2022–Dec 2025. Nara ends in March 2020.

Do not reintroduce unsupported commercial ownership, staff totals, turnaround
metrics, supplier negotiation, budget ownership, competition claims or project
outcomes. Education, systems and responsibilities must remain grounded in the CV.
The social preview uses `public/assets/cv-aligned-social.png`.

## Illustrative work sample

The stock-reconciliation example uses fictional figures and is explicitly labelled
as a demonstration. It is not an employer result or an additional career claim.
All figures refer to one product and period in bottle equivalents; sales and
recorded waste are a combined depletion input. Values are nonnegative and accept
up to two decimal places. Integer hundredths avoid floating-point variance.
The calculator has no backend, storage, or transmission of entered figures.
