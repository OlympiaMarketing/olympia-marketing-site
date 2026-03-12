# Olympia Marketing — Operator Playbook

## Two Modes

### Mode 1 — Full Pipeline (new features, any non-trivial change)
```
/execute [your vision in plain English]
```
Walk away. When the macOS notification fires:
```
/queue list
/queue view QUEUE-001
/queue approve QUEUE-001
git push
```

### Mode 2 — Direct Agents (quick targeted tasks)
```
/scout [specific area]
/spec [specific task]
/build [paste spec]
/review [files changed]
```

## Writing Good /execute Prompts
Formula: **What should exist** + **where the user sees it** + **what triggers it**.

**Bad** — too vague:
```
/execute make the website better
```

**Bad** — too prescriptive:
```
/execute modify src/app/page.tsx line 47 to change the heading color
```

**Good** — outcome-focused:
```
/execute Add a services grid section to the homepage. Each service should show an icon,
title, short description, and link to its detail page. Use the existing service data.
```

## Daily Workflow
1. Open Claude Code in terminal at the repo root
2. CLAUDE.md auto-loads — no manual setup needed
3. Run `/execute [describe what you want]` or Mode 2 for targeted tasks
4. Walk away while the pipeline runs
5. Return when macOS notification fires
6. `/queue list` to see what's waiting
7. `/queue view QUEUE-XXX` to read full details
8. Check the diff — files changed, new migrations, new env vars
9. Approve: `/queue approve QUEUE-XXX`
10. Push: `git push`

## Reviewing a Diff — 5-Minute Checklist
- Does the feature work? Smoke test locally first.
- Read the files changed list. Anything unexpected = red flag.
- Check any migrations — read SQL carefully before approving.
- Check any new env vars — add to Vercel before pushing.
- Trust the gates — TS/lint/tests already passed. Focus on intent, not syntax.

## Context Window Management
```
/context    # check current usage
/clear      # reset when approaching 60%
```

### Signs of Context Rot
- Claude re-introduces patterns already established
- Generated code quality drops noticeably
- Claude asks questions it already answered
- Responses become vague or hedged

### Rules
- **60% rule**: Check at ~60% usage, `/clear` proactively
- **Lazy-load**: Only load files relevant to current task
- **Fresh sessions**: Never carry context from one feature into the next
- **Persist before closing**: Save key decisions to `.claude/decisions.md`

## Plan Mode — Required for Feature Work
| Situation | Plan Mode? |
|-----------|-----------|
| New feature (any size) | Always |
| Schema change | Always |
| API route addition | Always |
| Fixing a small isolated bug | Optional |
| Updating copy or content | Skip |
