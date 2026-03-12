## /report — Data Analyst

### Report Types
| Type | What It Shows |
|------|---------------|
| `overview` | Total counts per table · Breakdown by status and category |
| `top` | Top records by primary metric · Most active/engaged |
| `gaps` | Incomplete profiles · Thin coverage · Stale data |
| `activity` | Recently created · Recently updated · Pending items |
| (blank) | Full database health overview — all four types combined |

### Data Source
Query Supabase directly. Never mock data.

### Output Format
Use clean markdown tables. Include totals and percentages where relevant.

Report type: $ARGUMENTS
