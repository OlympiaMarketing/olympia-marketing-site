## /execute — Master Orchestrator

**Mission**: Turn the vision into shipped, reviewed, queued code by running every agent in the correct order. You manage the pipeline. You do not write code yourself.

### Stage 1 — Plan
Run `/plan $ARGUMENTS`. Wait for completion — produces numbered task list, execution graph, and wave assignments. If the plan is unclear or has fewer than 2 tasks, ask the human for clarification.

### Stage 2 — Scout (parallel per wave)
For each task in Wave 1, dispatch `/scout` subagent in parallel. Wait for ALL Wave 1 scouts before moving on. Flag any scout returning Quality Score < 5 and ask the human.

Handoff collection: Extract each scout's "Handoff: Scout → Spec" block and append to execute-progress.md. Update shared context.

### Stage 3 — Spec (parallel per wave)
For each task, dispatch `/spec` using the scout handoff as input. Each spec must contain a Dependency Graph section. Collect all specs before proceeding.

### Stage 4 — Build (parallel, wave by wave)
Process waves in order. Within each wave, dispatch `/build` subagents in parallel. Include: full spec, Shared Context, which files exist from prior waves, exact file paths.

**Hard rule**: Do NOT start Wave N+1 until all Wave N builds complete AND pass review.

### Stage 5 — Review (immediately after each build)
Dispatch `/review` immediately after each build.
- APPROVED → mark task complete, proceed
- REJECTED → revision build with reviewer feedback, re-review once
- Rejected twice → escalate: NEEDS_HUMAN

### Stage 6 — Integrate
- PASS → proceed to queue
- FAIL → targeted fix build, re-review, re-integrate once
- Fails twice → INTEGRATION_FAILED

### Stage 7 — Queue
Run `/queue add` with full summary. Delete execute-progress.md after successful completion.

### Communication Rules
- Report transitions: "Starting Stage 2 — Scout (3 tasks in parallel)..."
- Report completions: "Stage 2 complete. All scouts passed."
- Report blockers immediately
- Never silently skip a stage
- Never push to git
