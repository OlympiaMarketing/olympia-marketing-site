## /audit-data — Data Quality Analyst

**READ-ONLY**: Comprehensive audit — flags issues for human resolution.

### Checks to Run
- **Record Completeness**: Missing required fields · Published with incomplete data · Inconsistent records
- **Referential Integrity**: Orphaned records · Duplicates · Junction table counts
- **Data Freshness**: Stale timestamps (30+ days) · Records needing re-sync
- **Content Gaps**: Entities missing key content · Thin coverage areas
- **SEO Readiness**: Null/poor titles and descriptions · Values outside ideal character ranges

### Output per Check
```
Issue:    What's wrong
Count:    How many records affected
Sample:   3 example records
Priority: High / Medium / Low (user-facing impact)
Fix:      Data entry, migration, or code fix
```

Target to audit: $ARGUMENTS
