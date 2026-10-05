# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Personal portfolio site for Madhan Selvam, deployed at madhanselvam.me. A static Next.js App Router site whose layout is modelled on mihiryanamandra.com (dark "night" palette, IBM Plex Mono, drawer menu). No backend, database, or API — every page is rendered at build time.

## Commands

```bash
npm install
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint      # eslint (next/core-web-vitals + next/typescript configs)
```

There is no test suite configured in this repo.

## Architecture

- **Routes**: `/` (long homepage: hero, impact stats, experience, insights, skills, selected projects, certifications, education, reading, publications/blogs, connect), `/about` (intro, track record, architecture principles, AI-lab terminal, education), `/experience` (full career timeline), `/skills`, `/certifications`, `/projects`, `/contact`, plus `not-found.tsx`. Nav order is About, Experience, Skills, Certifications, Projects, Contact (`SiteNav.tsx`, mirrored in `SiteFooter.tsx`). Sections shared between the homepage and a page live in components: `CertGrid`, `EduGrid`, `Connect`, `TrackRecord`.
- **All copy lives in `src/content/`**, not in the pages: `profile.ts` (identity + contact links), `experience.ts` (`roles`, `impact`, `insights`, `education` — sourced from the Madhan_PDE resume), `credentials.ts`, `skills.ts`, `projects.ts`, `extras.ts` (books/publications/posts), `techLogos.ts`. Edit these, not the JSX.
- **Placeholders are data-driven**: an empty field (a project `description`, an empty `books`/`publications`/`posts` array, an empty education `school`) renders a visible dashed placeholder; filling it in switches the UI to the real thing. Use `components/Placeholder.tsx` for any new one. Exception: empty `profile.email` / `profile.resume` simply hide their Connect buttons.
- **Coffee chat**: `/contact#coffee-chat` hosts `CoffeeChatForm` (client component) which POSTs to FormSubmit's AJAX endpoint and emails `profile.bookingEmail`. FormSubmit requires a one-time activation (link emailed on the first submission).
- **Shared chrome** is in `layout.tsx`: `SiteNav` (client; sticky bar + slide-in navigation drawer rendered via a portal to `document.body`), `SiteFooter`, `ScrollProgress`, `ScrollReveal`. `ScrollReveal` re-runs on route change and fades in any element with `data-reveal`. `ProjectCard` and `SectionHead` are shared by pages.
- **Styling** is one hand-written stylesheet, `src/app/globals.css`, dark graphite theme with teal `--accent` and violet `--accent-2` (tokens on `:root`: `--bg`, `--card`, `--ink`, `--ink-soft`, `--muted`, `--accent-line`, `--tile`, `--shadow`; body in DM Sans `--sans`, headings/wordmark/stat numbers in Space Grotesk `--display`; IBM Plex Mono is used only inside the About-page terminal). No Tailwind/CSS modules. Fonts via `next/font/google` in `layout.tsx`: `DM_Sans` → `--font-sans` (body), `Space_Grotesk` → `--font-display` (headings), `IBM_Plex_Mono` → `--font-mono` (terminal only). Section headings (`.section-head h2`, `.page-hero h1`, `.connect h2`) use a system Verdana stack. The hero name uses a system Palatino stack (`Palatino Linotype`, `Palatino`, `Book Antiqua`, … Georgia). Logo walls reuse `LogoMarquee` (CSS-only infinite scroll; logo tiles are translucent dark — black marks (Nike, TCS, and dark Simple Icons via a `color` override in `techLogos.ts`) are recoloured light; white-background PNGs were keyed to transparent).
- **Logos**: company/cert marks are local files in `public/logos/` (`next/image` with `unoptimized`); tech icons come from `https://cdn.simpleicons.org/<slug>` (whitelisted in `next.config.ts`). Simple Icons has dropped several marks (AWS, IBM, Azure, Oracle, Power BI, dbt, OpenAI) — verify a slug with `curl -o /dev/null -w '%{http_code}' https://cdn.simpleicons.org/<slug>` before using it.
- **`typedRoutes: true`** is on; new routes need a `next dev`/`next build` run before `tsc` recognises them. `@/*` maps to `src/*`.
- **`AGENTS.md` is machine-generated** by `next dev` — don't hand-edit it.
