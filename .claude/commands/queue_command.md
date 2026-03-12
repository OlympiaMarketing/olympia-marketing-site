## /queue — Review Queue Manager

Maintains `.claude/queue.md` — single source of truth for work awaiting review.

### Commands
| Command | Action |
|---------|--------|
| `add` | Add new item (called by /execute after pipeline completes) |
| `list` | Print summary table of all queue items |
| `view [ID]` | Print full details for a specific item |
| `approve [ID]` | Mark as APPROVED and ready to push |
| `reject [ID] [reason]` | Set REVISION_NEEDED, add reason |
| `block [ID] [reason]` | Set BLOCKED, print what decision is needed |
| `clear [ID]` | Remove a completed/cancelled item entirely |

### Queue Entry Format
```
## [QUEUE-XXX] [Vision Title]
Status: READY_FOR_REVIEW | BLOCKED | NEEDS_HUMAN | INTEGRATION_FAILED
Date Added: [today] · ID: QUEUE-XXX (auto-increment, never reused)

### Vision
[Original /execute prompt]

### Tasks Completed
[Numbered list with status]

### Files Changed
[List with action: CREATED/MODIFIED/DELETED]

### Quality Gates
| Gate | Status |
| Lint | Pass |
| TypeCheck | Pass |
| Tests | Pass |
| Integration | Pass |

### Review Checklist (for human)
- [ ] Read the diff and confirm logic matches intent
- [ ] Confirm new env vars are added to Vercel
- [ ] Confirm migrations are safe to run
- [ ] Run locally and smoke test
- [ ] git push when satisfied
```

Action: $ARGUMENTS
