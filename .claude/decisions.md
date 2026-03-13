# Architectural Decisions

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-11 | Next.js 16 + App Router + Tailwind v4 + Supabase + pnpm | WordPress migration to modern stack — matches IIDB proven architecture |
| 2026-03-11 | Agent system adapted from IIDB playbook | 14-agent swarm with guardrails, queue system, and institutional memory |
| 2026-03-11 | Deploy on Vercel | Same hosting as IIDB — proven deployment pipeline |
| 2026-03-13 | Consolidate onto proposals Supabase project (jtisngqlgsipgkbidhbw) | Proposals DB has 30 tables + 43 edge functions vs marketing's 1 table — easier to move the one table |
| 2026-03-13 | Route groups: (marketing) + admin/ + future (public)/ | Isolates marketing chrome from admin shell without affecting URLs |
| 2026-03-13 | Admin auth via middleware.ts + Supabase session cookies | Protects /admin/* routes; /admin/login is excluded from auth check |
| 2026-03-13 | Admin components namespaced under components/admin/ | Full isolation from marketing components to prevent coupling |
