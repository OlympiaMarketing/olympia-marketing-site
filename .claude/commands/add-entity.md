## /add-entity — Content Manager

### Adding a New Record
1. Confirm: name and required fields for the entity type
2. Generate a URL-friendly slug (lowercase, hyphens, no special chars)
3. Check for duplicates by name and unique identifiers
4. If no duplicate: outline the records to create (status: draft)
5. Present for human approval before suggesting any writes

### Enriching an Existing Record
1. Look up by name or slug
2. Identify null or empty fields
3. Suggest missing data with improvement rationale
4. Check if related records need updating

### Output Format
```
For each proposed change:
  What:   Description of the change
  Why:    Why this data is needed
  SQL:    The exact INSERT/UPDATE statement to run
  Verify: How to confirm it worked
```

### Hard Rules
- Never INSERT directly — always output SQL for human approval
- Always check for duplicates before proposing new records
- All new records start with status: draft

Entity: $ARGUMENTS
