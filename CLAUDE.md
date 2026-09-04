# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Personal portfolio site for Madhan Selvam, deployed at madhanselvam.tech. A small Next.js App Router site: a single long-form homepage (`/`) plus one detail route (`/experience`). There is no backend, database, or API — every page is static content rendered at build time.

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

- **Two routes total**: `src/app/page.tsx` (homepage) and `src/app/experience/page.tsx` (detailed career history). Both inline their own copy as literal JS arrays at the top of the file (`impact`, `skills`, `techLogos`, `associations`, `certifications` in `page.tsx`; `roles` in `experience/page.tsx`). `src/content/profile.ts` holds the one piece of shared identity data (name/github/linkedin) and **is** imported by both pages and the nav/footer — update it, not a hardcoded URL, when a contact link changes. `src/content/projects.ts` is still unused (no repository-showcase section by design — GitHub is a profile link only, never repo cards).
- **`src/blog/`, `src/ai/`** are empty placeholder directories (`.gitkeep` only) for a future writing route and AI/embedding routes. `src/components/` now holds two real client components: `ScrollProgress.tsx` (fixed top progress bar tied to scroll position) and `ScrollReveal.tsx` (a single global `IntersectionObserver` that fades in any element carrying a `data-reveal` attribute — add that attribute to reveal something on scroll rather than writing a new observer).
- **Styling is one hand-written global stylesheet**: `src/app/globals.css`. Neutral light palette by default (`--bg`, `--surface`, `--ink`, `--muted`, `--line`, one `--accent` indigo) with a `prefers-color-scheme: dark` override block redefining the same custom properties — there is no light/dark toggle, it follows the OS setting. No CSS modules, no Tailwind, no CSS-in-JS. Fonts come from `next/font/google` (`Inter` for `--font-sans`, `JetBrains_Mono` for `--font-mono`), wired up in `layout.tsx` and consumed as `var(--sans)`/`var(--mono)` in CSS — don't add a manual `@import` for fonts. Class names are tightly coupled 1:1 to the JSX in `page.tsx`/`experience/page.tsx`. Logo walls use `.marquee`/`.marquee-track` (a CSS-only infinite scroll built by duplicating the items array and animating `translateX`; pauses on hover, disabled to a wrapped static row under `prefers-reduced-motion`) — reuse `LogoMarquee` in `page.tsx` for any new logo row rather than hand-rolling another one.
- **Logos**: two sources. Company/employer/client/certification-provider marks are local files under `public/logos/`, rendered via `next/image` with `unoptimized`. Generic technology/tool icons (Python, Spark, Databricks, Terraform, etc.) are pulled live from `https://cdn.simpleicons.org/<slug>` — already whitelisted in `next.config.ts`'s `remotePatterns`. Not every brand has a slug there: Simple Icons has dropped several trademarked marks (AWS, IBM, Azure, Oracle, Power BI, dbt, OpenAI all 404 on that CDN as of this writing) — verify a slug with `curl -o /dev/null -w '%{http_code}' https://cdn.simpleicons.org/<slug>` before wiring it in, and fall back to a local asset (or omit the logo, as done for the IBM certification row) rather than guessing at alternate slugs.
- **`typedRoutes: true`** is enabled in `next.config.ts`, and the `@/*` path alias maps to `src/*` (see `tsconfig.json`).
- **`AGENTS.md` is machine-generated** by `next dev` (see the file's own header comment) — don't hand-edit it; let it regenerate, and commit the regenerated version if it changes. `CLAUDE.md` pulls it in via the `@AGENTS.md` import above, which currently only carries generic Next.js-version-specific agent guidance, not project-specific instructions.
