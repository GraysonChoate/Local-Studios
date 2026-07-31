# Local Studios Website Elevation

## Project

This project is an elevated website concept for Local Studios, a community-led
Lagree fitness studio in St. Petersburg, Florida.

- Original website: https://www.localstudios.co/
- Instagram: https://www.instagram.com/local__studios/
- Local preview: http://localhost:3001/
- Project folder:
  `/Users/graysonchoate/Documents/Local Studios Website`

This is the canonical working copy. Make all future website edits in this
folder.

The current implementation is a Next.js/Vinext site configured for OpenAI
Sites. Read `.openai/hosting.json` before doing any deployment work.

## Core Brand Idea

Local Studios is not simply selling a workout. Its strongest differentiator is
community: people know one another, move together, and share the intensity of
the Lagree experience.

The central brand thought is:

> Where movement meets community.

The experience should feel coastal, social, precise, warm, modern, and premium.
It should not feel like a generic luxury wellness template or an aggressive
high-performance gym.

## User Direction

These instructions are authoritative:

- Keep the homepage simple, powerful, and easy to navigate.
- Remove every excess word.
- Do not repeat content that belongs on dedicated pages.
- Do not use decorative numbers, numbered sections, tickers, marquees, or
  scrolling text bars.
- Keep the large, full-bleed community hero treatment.
- Use real Local Studios imagery whenever possible.
- Add texture and subtle gradients without making the site busy.
- Preserve and correctly reproduce the Local Studios logo. Do not redraw,
  distort, or casually reinterpret it.
- Community must remain the emotional center of the story.
- Every supporting page should provide a clear way back to Home.
- Animations should feel candid and human, not staged or synchronized.
- Preserve all functional routes, booking flows, forms, account links, SEO
  essentials, accessibility, and conversion paths.

## Approval Rule

Before using Higgsfield, ImageGen, or any other paid generative-media tool:

1. Explain the exact creative concept in chat.
2. Describe the intended motion or visual treatment.
3. State the exact credit cost when available.
4. Wait for explicit user approval.

Do not generate speculative variants or spend credits without approval.
Ordinary local code and layout work does not require paid-generation approval,
but major creative-direction changes should still be explained before they are
implemented.

## Audio Rule

All future image-to-video and video generations must be silent by default.

- Disable generated audio in every provider request.
- Do not add music, dialogue, ambience, surf, or sound effects unless the user
  explicitly requests audio for that specific asset.
- Some providers may return an audio stream despite a disabled-audio request.
  Physically remove every audio stream from the saved deliverable.
- Verify with media inspection that the final file contains video only before
  presenting or integrating it.

## Current Homepage

The current homepage in `app/page.tsx` contains:

1. A shared header with the exact Local Studios logo.
2. A full-bleed animated community hero.
3. One concise brand statement: "The shake is shared."
4. Two visual navigation paths:
   - Your first class
   - Life at Local
5. A final schedule CTA.
6. A functional footer.

The header includes an explicit Home link. Both header and footer logos link to
the elevated homepage. Booking, purchase, account, and existing informational
links currently point to the original live site until their elevated pages are
built.

Do not turn the homepage back into a long collection of sections. Supporting
information should live on focused pages such as About, First Timers, Events,
Schedule, Buy, and FAQ.

## Current Assets

Real Local Studios assets are in `public/`:

- `local-logo-midnight.webp`
- `local-logo-sky.webp`
- `local-community-hero.webp`
- `local-community-motion.mp4`
- `local-hero-loop.mp4`
- `local-hero-loop-poster.jpg`
- `local-together.webp`
- `local-arrival.webp`
- `local-friends.webp`
- `local-coastal-pattern.webp`
- `og.png`

Inspect and reuse these before introducing new imagery.

## Approved Hero Video

The approved homepage hero loop is already in the correct production folder:

- Video: `public/local-hero-loop.mp4`
- Poster: `public/local-hero-loop-poster.jpg`
- Archive master:
  `visual-assets/generated/local-cinematic-hero-loop-v2-silent.mp4`

Do not move, rename, regenerate, or replace these files without user approval.
Do not use `local-community-motion.mp4` as the homepage hero.

The approved loop is 1920x1080, 24 fps, approximately 7.5 seconds, and physically
contains no audio stream. Its sequence is:

1. The Local group already laughing.
2. Low-angle Megaformer detail.
3. The class raising their hands.
4. An internal dissolve back into the exact group frame where playback begins.

Each of the three visible scenes runs for approximately 2.5 seconds. The sand
logo scene is intentionally excluded from the homepage hero.

Use the video as the full-bleed background media in the existing homepage hero,
behind the approved hero copy and controls. Preserve the current large
background-overlay treatment.

Implementation contract:

```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"
  poster="/local-hero-loop-poster.jpg"
  aria-hidden="true"
>
  <source src="/local-hero-loop.mp4" type="video/mp4" />
</video>
```

- Keep `loop`, `muted`, and `playsInline`; they are required for reliable
  autoplay even though the file itself has no audio.
- Do not show video controls.
- Use `object-fit: cover` and center the composition.
- Keep the hero copy and navigation above the video with sufficient contrast.
- Use the poster instead of autoplay motion when
  `prefers-reduced-motion: reduce` is active.
- Do not add playback copy, badges, captions, audio, or decorative overlays.
- Do not place the sand logo, drone, beach-friendship, community-toast, or Local
  sweatshirt footage in this hero. Those approved assets are reserved for other
  pages or later sections.

## Visual System

The current palette in `app/globals.css` is based on the existing Local Studios
identity:

- Midnight navy
- Coastal sky blue
- Soft mist blue
- Warm paper white
- Small lime accent

Use gradients as quiet atmospheric transitions. Use the coastal pattern as
subtle texture, not a loud decorative motif. Avoid excessive cards, pills,
floating panels, ornamental blobs, oversized interface elements, and generic
wellness imagery.

Typography currently combines Manrope with an editorial serif italic. Preserve
the contrast between precise utility text and warmer expressive phrases.

## Interaction Direction

Motion should support the brand:

- Slow, composed image scaling on hover.
- Restrained directional movement on arrows.
- Natural media motion rather than decorative page animation.
- Reduced-motion support must remain intact.
- No parallax or scroll effects unless they materially improve the story and
  are proposed to the user first.

## Functional Requirements

Maintain these destinations and flows:

- Home
- About
- Schedule and class booking
- Buy and new-client offer
- Events
- First Timers
- FAQ
- Contact
- Account/login
- Sign-up
- Instagram
- Location/maps
- Privacy, terms, and accessibility

The original live site is the source of truth for current business information
until the user approves rewritten content.

## Working Rules

- Inspect the existing implementation before editing.
- Keep changes scoped and avoid unrelated refactors.
- Do not overwrite user or Codex changes without understanding them.
- Use real public brand assets respectfully.
- Do not invent business claims, pricing, testimonials, or policies.
- Verify desktop and mobile layouts.
- Check keyboard navigation, contrast, semantic headings, reduced motion,
  metadata, internal links, and media performance.
- Build and test before presenting a revision.
- Show the user a browser preview before publishing.
- Do not deploy a new revision until the user has reviewed and approved it.

## Current Status

- The simplified homepage builds successfully.
- A local development preview has been run on port 3001.
- The corrected Instagram URL is in the footer.
- The new Home navigation behavior is implemented.
- The final four-scene hero loop is approved and available in `public/`.
- The current local changes have not yet been published as a new Sites revision.
