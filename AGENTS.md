# Olympia Marketing — Agent System Overview

## The System in One Sentence
A 14-agent swarm orchestrated through Claude Code slash commands: describe what you want in plain English, agents build/review/queue it, you review the diff and push.

## Two Human Touchpoints
1. Queue review (`/queue list` → `/queue view` → `/queue approve`)
2. Git push (`git push`)

Everything else is autonomous.

## The 7-Stage Pipeline
```
Vision (plain English input)
  → [1] /plan         Tasks + dependency waves
  → [2] /scout ×N     Parallel per wave — read-only analysis
  → [3] /spec ×N      Parallel — exhaustive spec per task
  → [4] /build ×N     Parallel per wave — isolated code writes
  → [5] /review       Per task after build — APPROVED / REJECTED
  → [6] /integrate    Cross-task compatibility — PASS / FAIL
  → [7] /queue add    Full summary in human review queue
```

## The 14 Agents

### Orchestration Layer
| Agent | File | Purpose |
|-------|------|---------|
| /execute | execute.md | Master orchestrator — runs full 7-stage pipeline |
| /plan | plan.md | Decomposes vision into tasks with wave-based dependency graph |
| /integrate | integrate.md | Verifies independently-built tasks work together |
| /queue | queue_command.md | CRUD for the human review queue |

### Engineering Layer
| Agent | File | Purpose |
|-------|------|---------|
| /scout | scout.md | Read-only analysis — maps deps, side effects, quality score |
| /spec | spec.md | Writes exhaustive specs — interfaces, error paths, success criteria |
| /build | build.md | Executes specs — strict TS, zero debt, guardrail verification |
| /review | review.md | Pessimistic QA — APPROVED or REJECTED with action items |

### Data & Content Layer
| Agent | File | Purpose |
|-------|------|---------|
| /add-entity | add-entity.md | Add/enrich records — outputs SQL for human approval |
| /audit-data | audit-data.md | Full data quality audit |
| /report | report.md | Database health dashboards |
| /learn | learn.md | Appends discoveries to learnings.md |
| /agents | agents.md | In-session reference — lists all commands |

## Queue Status Reference
| Status | Meaning | Action |
|--------|---------|--------|
| READY_FOR_REVIEW | All gates passed | Read diff, approve, git push |
| NEEDS_HUMAN | Rejected twice or ambiguous | Read notes, decide, re-run |
| BLOCKED | Missing env var/table/dep | Resolve blocker, re-run |
| INTEGRATION_FAILED | Tasks don't fit together | Check seam report, re-run |
| REVISION_NEEDED | You rejected it | Re-run with feedback |
| APPROVED | You approved it | Ready to push |

## Escalation Policy
| Situation | Action |
|-----------|--------|
| Scout Quality Score < 5 on central area | Flag — ask human |
| Build rejected twice | NEEDS_HUMAN — no retry |
| Integration fails twice | INTEGRATION_FAILED |
| 3+ tasks blocked simultaneously | Stop pipeline |
| Plan has fewer than 2 tasks | Ask for clarification |
| Ambiguous spec / missing env var | Stop build — ask human |
