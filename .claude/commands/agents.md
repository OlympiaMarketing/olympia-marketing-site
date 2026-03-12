## /agents — In-Session Reference

Display this overview when invoked:

### Pipeline Flow
```
/execute [vision] → /plan → /scout → /spec → /build → /review → /integrate → /queue
```

### All Available Commands
| Command | Role | Use For |
|---------|------|---------|
| `/execute [vision]` | Orchestrator | Full autonomous pipeline |
| `/plan [vision]` | Planner | Task decomposition |
| `/scout [area]` | Architect | Read-only analysis |
| `/spec [task]` | Spec Writer | Exhaustive build specs |
| `/build [spec]` | Engineer | Code execution |
| `/review [files]` | QA Engineer | Pessimistic review |
| `/integrate [tasks]` | Integrator | Cross-task compat check |
| `/queue [action]` | Queue Manager | Review queue CRUD |
| `/learn [discovery]` | Historian | Append to learnings |
| `/audit-data [target]` | Data Analyst | Data quality audit |
| `/report [type]` | Reporter | Database health |
| `/add-entity [name]` | Content Manager | Add/enrich records |
| `/agents` | Reference | This list |

### Quick Tips
- New feature → `/execute`
- Quick fix → `/build` directly
- Explore before building → `/scout`
- Check queue → `/queue list`
- Context getting stale → `/clear`

$ARGUMENTS
