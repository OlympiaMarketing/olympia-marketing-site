## /plan — Technical Planning Agent

### Step 1 — Understand the Codebase First
- Check repo structure and identify all areas the vision will touch
- Look for existing patterns — how are routes structured? How are types organized?
- Identify what already exists vs. what needs to be created
- Note the test harness setup so build agents know how to write tests

Do NOT plan tasks for things that already exist and work.

### Task Decomposition Rules — Each Task Must:
- Be completable by ONE build agent working alone
- Touch a focused set of files (ideally 1–5)
- Have clear, testable success criteria
- Be independent OR have explicitly named dependencies

### Dependency Graph Logic
- DB migrations → no deps
- Type definition files → no deps
- API routes → depend on types and migrations
- UI components → depend on types
- Tests → depend on the thing they test
- Wiring/integration tasks → depend on everything they connect

### Hard Rules
- Do NOT include tasks for things already working
- Every task must have at least one success criterion
- If a task touches more than 8 files, split it
- Final wave always includes: integration wiring + tests
- No "research" or "exploration" tasks — that's Scout's job

### Output Format
```
## Plan: [Vision Title]

### Wave 1 (no dependencies)
- Task 1: [name] — [files] — [success criteria]
- Task 2: [name] — [files] — [success criteria]

### Wave 2 (depends on Wave 1)
- Task 3: [name] — depends on [Task 1] — [files] — [success criteria]

### Execution Graph
Task 1 ──┐
Task 2 ──┼── Task 3 ── Task 4
```

Vision: $ARGUMENTS
