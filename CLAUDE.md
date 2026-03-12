# Olympia Marketing — Website Rebuild

## Project Identity
- **Project**: Olympia Marketing agency website
- **Repo**: https://github.com/OlympiaMarketing/NewOlympiaMarketing
- **Stack**: Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Supabase · pnpm · Vercel
- **Business**: Full-service marketing agency in Estero, FL — "Godlike Marketing for Small Business"

## Tech Stack Notes
- **Next.js 16**: App Router, Server Components by default, `use client` only when needed
- **Tailwind v4**: Uses `@import "tailwindcss"` in CSS (NOT `@tailwind` directives). Config via CSS variables, not tailwind.config.js
- **Supabase**: PostgreSQL backend — direct queries, no mocking
- **pnpm**: Package manager — never use npm or yarn
- **Vercel**: Hosting — entire project compiles on deploy, type errors anywhere = failed deploy

## Quality Gates
```
pnpm lint              # zero warnings
pnpm tsc --noEmit      # zero errors
git diff --name-only   # confirm only scoped files modified
```

## Never Do
- `any` types — define proper interfaces in `src/types/`
- `console.log` in production code paths
- Magic numbers or hardcoded strings — use constants or env vars
- `// TODO` or `// FIXME` — fix it now or create an issue
- Commented-out code — git has history
- New packages without explicit human approval
- `git push` — agents commit locally only, humans push
- Touch files outside current task scope
- Scope creep — solve exactly what was asked, nothing more

## Always Do
- Stop and ask if a requirement is ambiguous — do not guess
- Run `pnpm lint` + `pnpm tsc --noEmit` after EVERY build phase
- Commit locally with message referencing the spec/task ID
- Log discoveries to `.claude/learnings.md` via /learn
- Update `.claude/decisions.md` when an architectural decision is made

## Agent Operating Principles
- Precision over speed. Unclear requirement = stop and ask.
- Isolated execution. Only touch files relevant to the current task.
- Pit of Success. Match the highest quality patterns already in the repo.
- No scope creep. Solve exactly what was asked, nothing more.
- Self-validate. Never report complete without passing all quality gates.
- Fresh context beats bloated context. Start new sessions for new features.
- Never accept first output. Build → Review is always two steps.

## Session Start Protocol — Mandatory for Every Agent
1. Read CLAUDE.md top to bottom
2. Read `.claude/learnings.md`
3. Read `.claude/decisions.md`
4. If `execute-progress.md` exists, read it and announce: "Resuming from [stage]."
5. State: "I understand the task is [X]. I will touch [files]. I will NOT touch [files]."
Do not write a single line of code before completing step 5.

## Known Pitfalls
- **Vercel build scope**: Vercel compiles the entire project. Type errors in ANY directory fail production deploys. Fix: add non-app dirs to `exclude` in tsconfig.json.
- **Tailwind v4 migration**: No more `tailwind.config.js` by default. Theme values defined via `@theme` in CSS. Use `@import "tailwindcss"` not `@tailwind base/components/utilities`.
- **Next.js 16 App Router**: All components are Server Components by default. Add `"use client"` only for interactivity (useState, useEffect, onClick, etc.).
- **Supabase SQL Editor**: Rejects markdown code fences. SQL must be pasted without ```sql delimiters.
- **Image optimization**: Use `next/image` for all images. Configure `remotePatterns` in `next.config.ts` for external image domains.

## Commit Format
```
feat(scope): short description
fix(scope): short description
```

## File Organization
```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Homepage
│   └── [slug]/       # Dynamic routes
├── components/       # Reusable React components
│   ├── ui/           # Primitive UI components
│   └── sections/     # Page sections (hero, features, etc.)
├── lib/              # Utilities, Supabase client, helpers
├── types/            # TypeScript interfaces and types
└── styles/           # Global CSS
```
