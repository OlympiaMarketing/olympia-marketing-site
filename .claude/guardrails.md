# Guardrail System

Centralized validation rules enforced at every stage boundary.

## Input Guardrails — Check BEFORE Starting Work

| ID | Name | Checklist |
|----|------|-----------|
| IG-1 | Scope Validation | All target files exist (or marked CREATE) · Task ≤8 files · No file owned by parallel task |
| IG-2 | Dependency Readiness | Prior-wave tasks marked COMPLETE · Imports resolve to real files · Required env vars in .env |
| IG-3 | Spec Completeness | Explicit success criteria · Interfaces defined for new data shapes · Error paths included |

## Output Guardrails — Check AFTER Completing Work

| ID | Name | Checklist |
|----|------|-----------|
| OG-1 | Type Safety | `pnpm tsc --noEmit` zero errors · No `any` types · New interfaces exported correctly |
| OG-2 | Anti-Slop | `pnpm lint` zero warnings · No console.log · No magic numbers · No TODO/FIXME · No commented code · No unnecessary complexity |
| OG-3 | Scope Compliance | Only spec-listed files modified (`git diff --name-only`) · No scope creep · No unauthorized packages |
| OG-4 | Test Coverage | Tests exist for new functionality · All pass · Real implementations not mocks |

## Integration Guardrails — Check When Combining Tasks

| ID | Name | Checklist |
|----|------|-----------|
| XG-1 | Cross-Task Compat | All imports resolve · No circular deps · Interface shapes match · API response shapes match frontend |
| XG-2 | DB Consistency | Column names match migrations · Foreign keys correct · Access control consistent |
| XG-3 | Env Completeness | Every `process.env.X` documented · No var used in one file but missing where also needed |

## Tripwire Rule — No Exceptions

If any guardrail fails:
1. **STOP** — do not continue
2. **REPORT** — name the exact ID (e.g., "OG-2 failed: found console.log on line 42")
3. **FIX or ESCALATE** — build agents fix and re-check; review agents reject with the ID

## Agent-Guardrail Matrix

| Agent | Input | Output | Integration |
|-------|-------|--------|-------------|
| /scout | — | — | — |
| /spec | IG-3 (own output) | — | — |
| /build | IG-1, IG-2, IG-3 | OG-1, OG-2, OG-3, OG-4 | — |
| /review | — | OG-1–4 (verify) | — |
| /integrate | — | — | XG-1, XG-2, XG-3 |
| /execute | All (delegates) | All (delegates) | All (delegates) |
