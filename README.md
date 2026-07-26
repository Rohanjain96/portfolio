# Daniel Okafor — Portfolio (Next.js)

Next.js 15 App Router port of the HTML design.

## Stack
- **Next.js 15 + React 19 + TypeScript**
- **Tailwind CSS v4** — theme tokens live in `app/globals.css` under `@theme`
- **Lenis** (`lenis/react`) — smooth scroll, driven by GSAP's ticker so ScrollTrigger stays in sync
- **GSAP + @gsap/react** — hero intro/float/orbit, ScrollTrigger-driven language rings
- **Framer Motion** — scroll reveals, hover/tap micro-interactions, the mobile clip-path menu morph
- **Aceternity-style UI** — `components/ui/spotlight-card.tsx` (cursor spotlight), written from scratch so it is swappable with the Aceternity original from ui.aceternity.com
- **lucide-react** (UI glyphs) + **react-icons/fa6** (brand marks) + **devicon** SVGs for the tech marquee

## Run
```bash
npm install
npm run dev
```

## Where things are
| Area | File |
| --- | --- |
| Smooth scroll provider | `components/smooth-scroll.tsx` |
| Sticky nav + morph mobile menu | `components/navbar.tsx` |
| Hero (GSAP) | `components/hero.tsx` |
| Tech marquee | `components/tech-marquee.tsx` |
| About / Experience / Languages | `components/about.tsx`, `experience.tsx`, `languages.tsx` |
| Work (spotlight cards) | `components/work.tsx` |
| Contact form | `components/contact.tsx` |
| Copy & data | `lib/data.ts` |

## To do before shipping
1. Portraits are in `public/` (background-removed PNGs). Project cards still use `<ImageSlot />` — swap in real shots.
4. Testimonials/Languages sections were removed and replaced with `components/skills.tsx`; timeline data lives in `lib/data.ts` (`TIMELINE`).
2. Point the contact form at a real endpoint (route handler, Resend, Formspree…).
3. Drop your `resume.pdf` into `public/`.
