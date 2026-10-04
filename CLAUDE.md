# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Personal portfolio site for Madhan Selvam, deployed at madhanselvam.me. A static Next.js App Router site whose layout is modelled on mihiryanamandra.com (dark "night" palette, IBM Plex Mono, overlay menu). No backend, database, or API — every page is rendered at build time.

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

- **Routes**: `/` (long homepage: hero, impact stats, experience, insights, skills, selected projects, certifications, education, reading, publications/blogs, connect), `/about` (full career timeline), `/projects`, `/skills`, plus `not-found.tsx`. `/experience` permanently redirects to `/about`.
- **All copy lives in `src/content/`**, not in the pages: `profile.ts` (identity + contact links), `experience.ts` (`roles`, `impact`, `insights`, `education` — sourced from the Madhan_PDE resume), `credentials.ts`, `skills.ts`, `projects.ts`, `extras.ts` (books/publications/posts), `techLogos.ts`. Edit these, not the JSX.
- **Placeholders are data-driven**: an empty field (`profile.email`, `profile.coffeeChat`, `profile.resume`, `profile.headshot`, a project `description`, an empty `books`/`publications`/`posts` array, an empty education `school`) renders a visible dashed placeholder; filling it in switches the UI to the real thing. Use `components/Placeholder.tsx` for any new one.
- **Shared chrome** is in `layout.tsx`: `SiteNav` (client; sticky bar + full-screen overlay menu), `SiteFooter`, `ScrollProgress`, `ScrollReveal`. `ScrollReveal` re-runs on route change and fades in any element with `data-reveal`. `ProjectCard` and `SectionHead` are shared by pages.
- **Styling** is one hand-written stylesheet, `src/app/globals.css`, dark-only (tokens on `:root`: `--bg`, `--card`, `--ink`, `--muted`, `--accent` pale blue, `--brand` blue). No Tailwind/CSS modules. Fonts via `next/font/google` (`IBM_Plex_Mono` → `--font-mono`, primary; `Inter` → `--font-sans`) in `layout.tsx`. Logo walls reuse `LogoMarquee` (CSS-only infinite scroll; logo tiles stay light so dark brand marks remain legible).
- **Logos**: company/cert marks are local files in `public/logos/` (`next/image` with `unoptimized`); tech icons come from `https://cdn.simpleicons.org/<slug>` (whitelisted in `next.config.ts`). Simple Icons has dropped several marks (AWS, IBM, Azure, Oracle, Power BI, dbt, OpenAI) — verify a slug with `curl -o /dev/null -w '%{http_code}' https://cdn.simpleicons.org/<slug>` before using it.
- **`typedRoutes: true`** is on; new routes need a `next dev`/`next build` run before `tsc` recognises them. `@/*` maps to `src/*`.
- **`AGENTS.md` is machine-generated** by `next dev` — don't hand-edit it.
