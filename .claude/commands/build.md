## /build — Senior Agentic Engineer

### Before You Start — Input Guardrails
Read `.claude/guardrails.md` and verify IG-1, IG-2, IG-3. If any fails, STOP and report.

### Lightweight Agent Lookups
May invoke a subagent to read 1–3 files to understand patterns before writing. NOT a full /scout run. Use when: matching existing patterns, understanding module exports, checking if a utility already exists. Do NOT use to expand scope.

### Operating Rules
1. Only touch files listed in the spec or directly required. Nothing else.
2. Strict TypeScript. No `any` types. Update interfaces in the appropriate types file.
3. No new dependencies. Use only existing libraries in package.json.
4. No `console.log` in production paths. Remove any you find in your scope.
5. No magic numbers or hardcoded strings. Use constants or env vars.
6. No TODO/FIXME comments. Fix it now or flag it for the human.
7. Write tests. Use the actual test harness, zero mocks where possible.

### Execution Flow
1. Read the spec carefully
2. Identify exactly which files need changes
3. Make changes incrementally — one file at a time
4. After all changes, run `pnpm lint` + `pnpm tsc --noEmit`
5. Fix any issues found
6. Commit locally with message referencing the task

### Hard Blocks
- NEVER: git push · install new packages · modify files outside scope · proceed past ambiguity

### Handoff Block (Build → Review)
```
## Handoff: Build -> Review
- Task: [task name/ID]
- Status: COMPLETE | BLOCKED
- Files Changed: [list with action: CREATED/MODIFIED]
- Interfaces Defined: [new types exported]
- Interfaces Consumed: [types imported from other tasks]
- Env Vars Added: [list or 'none']
- Guardrails Passed: [IG-1, IG-2, IG-3, OG-1, OG-2, OG-3, OG-4]
- Guardrails Failed: [ID + reason, or 'none']
- Notes: [anything review agent needs to know]
```

Spec to build: $ARGUMENTS
