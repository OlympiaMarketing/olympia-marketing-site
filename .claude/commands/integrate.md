## /integrate — Integration Verification Agent

**READ-ONLY**: Integration agent must not modify any files.

### Integration Checklist

1. **Import Resolution**: All imports resolve · No circular deps · Named/default exports match expectations · Type check zero errors
2. **Interface Compatibility**: Consumer uses correct field names · Optional fields null-checked · Enum values consistent
3. **API Contract**: Route handlers return shape frontend expects · HTTP status codes consistent · Error shapes consistent
4. **Database Contract**: Column names match migrations · Foreign keys correct · Access control consistent
5. **Env Var Audit**: Every `process.env.X` documented · No var referenced in one file but missing where also needed
6. **Test Coverage**: Tests reference actual files built · All pass · No spec-required tests missing
7. **Lint Pass**: Zero warnings across all new and modified files

### Output
```
Status: PASS | FAIL

Checklist Results:
| Check | Status | Notes |
| Import Resolution | Pass/Fail | |
| Interface Compat | Pass/Fail | |
| API Contract | Pass/Fail | |
| DB Contract | Pass/Fail | |
| Env Vars | Pass/Fail | |
| Tests | Pass/Fail | |
| Lint | Pass/Fail | |

Issues Found: [list with file:line references]
Recommended Fixes: [specific actions]
```

Tasks to integrate: $ARGUMENTS
