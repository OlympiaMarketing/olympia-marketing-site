## /spec — Anti-Slop Specification Writer

### Input Priority
If a scout handoff is provided, use it as primary input. Do NOT re-scout areas already analyzed. Only do additional reads if the handoff is missing a specific detail.

### IG-3 Validation — Required Before Outputting
- Spec has explicit success criteria (not just "build X")
- Spec defines interfaces/types for any new data shapes
- Spec includes error paths, not just happy path

### Spec Format
```
SPEC ID: SPEC-[kebab-case-name]   Date: [today]
Primary Goal: One sentence describing the desired outcome.

Context for Build Agent:
  - This task is part of: [broader feature name]
  - Files already existing to be imported: [list]
  - Files being built by OTHER parallel tasks (do not touch): [list]
  - Tasks that will build on your output: [list]

Scope & Boundaries
  Target Files: | File | Action | Notes |
  Out of Scope: do not touch [list], do not fix unrelated bugs

Technical Requirements
  Type Safety:  strict TS, zero any, interfaces in types file
  Testing:      [test file path] — specific scenarios to test
  Code Style:   no console.log, no magic numbers, no TODO/FIXME

Expected Behavior (step by step):
  1. [First thing] 2. [Second] 3. [Error path] 4. [Edge case] 5. [Success]

Interfaces & Contracts: [define all new TypeScript interfaces here]

Dependency Graph Position: [Task A] --> [THIS TASK] --> [Task C]

Builder Warnings: [async issues, access control, exact env var names, quirks]

Success Criteria (all must pass):
  - [ ] Lint zero warnings · Type check zero errors · Tests all pass
  - [ ] [Specific behavior works] · git diff clean · Committed feat(SPEC-id): ...
```

Task to specify: $ARGUMENTS
