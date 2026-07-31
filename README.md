# Local Studios — Website

An elevated website for **Local Studios**, a Lagree fitness studio in downtown
St. Petersburg, Florida.

- Live studio site: https://www.localstudios.co
- Instagram: https://www.instagram.com/local__studios

## Stack

Next.js (App Router) + React. No database, no CMS — content is co-located with
each page.

## Local development

```bash
npm install
npm run dev
```

Runs at http://localhost:3000

## Deploying to Vercel

Import this repository at [vercel.com/new](https://vercel.com/new). Vercel
auto-detects Next.js; `vercel.json` pins the framework, build command, and
long-lived cache headers for media.

No environment variables are required.

## Booking

`/schedule` and `/buy` embed the studio's live **Mariana Tek** booking widget
via `app/mariana-embed.tsx`, so class times and pricing are always current.
Never hardcode prices or schedules.

## Notes

- Large source masters live in `visual-assets/` and `references/`, which are
  gitignored. Only the optimized web assets in `public/` are committed.
- The approved homepage hero loop is `public/local-hero-loop.mp4`. Do not
  replace it without approval — see `CLAUDE.md`.
- Every background video has a poster image and a `prefers-reduced-motion`
  fallback.
