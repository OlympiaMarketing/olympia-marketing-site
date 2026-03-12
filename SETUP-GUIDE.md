# Master Project Setup Guide

**Author:** Zach Katkin (zach@olympiamarketing.com)
**System:** Claude Code with 14-agent swarm
**Stack:** Next.js (App Router) / TypeScript / Tailwind CSS v4 / Supabase / pnpm / Vercel / shadcn/ui
**GitHub Org:** OlympiaMarketing

This guide is a step-by-step playbook for spinning up any new project from scratch using the Claude Code agent system. Follow it exactly, in order.

---

## Table of Contents

1. [Pre-Flight Checklist](#1-pre-flight-checklist)
2. [Local Project Setup](#2-local-project-setup)
3. [Supabase Connection](#3-supabase-connection)
4. [Agent System Setup](#4-agent-system-setup)
5. [Git Ignore Configuration](#5-git-ignore-configuration)
6. [First Deploy](#6-first-deploy)
7. [Vercel Environment Variables](#7-vercel-environment-variables)
8. [Post-Deploy Verification](#8-post-deploy-verification)
9. [Common Pitfalls & Solutions](#9-common-pitfalls--solutions)
10. [Template File Contents](#10-template-file-contents)

---

## 1. Pre-Flight Checklist

Before touching any code, set up the three external services.

### GitHub Repository

1. Go to https://github.com/organizations/OlympiaMarketing/repositories/new
2. Create a new repository (public or private)
3. Do NOT initialize with README, .gitignore, or license (you will push from local)
4. Note the repo URL: `https://github.com/OlympiaMarketing/[repo-name]`

### Supabase Project

1. Go to https://supabase.com/dashboard and create a new project
2. Choose a region close to your users
3. Set a strong database password and save it
4. After creation, go to Settings > API and copy:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

### Vercel Project

1. Go to https://vercel.com/olympiamarketing
2. Click "Add New Project"
3. Import the GitHub repository you just created
4. Select "Next.js" as the framework
5. Do NOT deploy yet (it will fail without env vars) -- just link the repo

### Have Ready

Before proceeding, confirm you have:

- [ ] GitHub repo URL
- [ ] Supabase Project URL
- [ ] Supabase anon key
- [ ] Vercel project linked to the repo

---

## 2. Local Project Setup

### Clone the repo

```bash
cd /Users/zach/Documents/Cursor
git clone https://github.com/OlympiaMarketing/[repo-name].git
cd [repo-name]
```

### Set git config IMMEDIATELY (before any commits)

```bash
git config user.email "zach@olympiamarketing.com"
git config user.name "Zach Katkin"
```

This MUST happen before your first commit. Vercel will block deploys if the git user is not set, and rewriting history later is painful.

### Scaffold Next.js

npm has a restriction: project directory names cannot contain capital letters. Use a temporary lowercase directory, then copy files.

```bash
# Create in a temp directory (must be lowercase)
pnpm create next-app@latest /tmp/nextjs-temp \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --import-alias "@/*" \
  --turbopack

# Copy all files to your project directory
cp -a /tmp/nextjs-temp/. /Users/zach/Documents/Cursor/[repo-name]/

# Clean up temp directory
rm -rf /tmp/nextjs-temp
```

### Clean install

After copying files from the temp directory, node_modules will be corrupted (symlinks break). Always do a clean reinstall:

```bash
rm -rf node_modules .next
pnpm install
```

### Fix tsconfig.json paths (if not using src/ directory)

If you chose NOT to use the `src/` directory during scaffolding, update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

Change `"./src/*"` to `"./*"` if needed.

### Install common dependencies

```bash
# shadcn/ui init
pnpm dlx shadcn@latest init

# Common shadcn components
pnpm dlx shadcn@latest add button card badge separator tabs \
  dialog dropdown-menu tooltip scroll-area avatar accordion \
  alert-dialog checkbox label select switch textarea toast

# Animation and icons
pnpm add framer-motion lucide-react

# Supabase (see Section 3)
pnpm add @supabase/supabase-js @supabase/ssr
```

### Verify the build

```bash
pnpm build
```

If the build fails, see Section 9 (Common Pitfalls) before proceeding.

---

## 3. Supabase Connection

### Install Supabase packages

```bash
pnpm add @supabase/supabase-js @supabase/ssr
```

### Create .env.local

```bash
cat > .env.local << 'EOF'
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
EOF
```

Replace with your actual values.

### Create lib/supabase.ts (browser client)

```typescript
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### Create lib/supabase-server.ts (server client)

```typescript
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Called from Server Component -- ignore
          }
        },
      },
    }
  );
}
```

### Create lib/utils.ts (if shadcn didn't already)

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 4. Agent System Setup

This is the core of the development system. You will create the following files:

```
CLAUDE.md                    <- Project root, auto-loads every session
AGENTS.md                    <- Agent system overview
PLAYBOOK.md                  <- How to use the system
.claude/
  commands/
    execute.md               <- Master orchestrator (7-stage pipeline)
    plan.md                  <- Task decomposition + dependency graphing
    scout.md                 <- Read-only codebase analysis
    spec.md                  <- Exhaustive task specification writer
    build.md                 <- Senior engineer
    review.md                <- Pessimistic QA reviewer
    integrate.md             <- Cross-task compatibility checker
    queue_command.md         <- Review queue CRUD
    learn.md                 <- Append-only learnings logger
    audit-data.md            <- Data quality auditor
    report.md                <- Database health reporter
    add-entity.md            <- Content manager
    agents.md                <- In-session reference
  guardrails.md              <- Input/output/integration guardrails
  queue.md                   <- Empty template
  learnings.md               <- Empty template with table header
  decisions.md               <- Empty template with initial decisions
  settings.json              <- Hooks configuration
  settings.local.json        <- Permissions allowlist
```

### 4.1 CLAUDE.md (project root, keep under 300 lines)

Every token in CLAUDE.md is consumed on every session start. Keep it tight.

```markdown
# [PROJECT_NAME] -- CLAUDE.md

## Session Start Protocol

Before touching ANY file, every agent must complete this sequence:

1. Read this entire file top to bottom
2. Read `.claude/learnings.md` -- recent discoveries that override assumptions
3. Read `.claude/decisions.md` -- architectural decisions already made (don't re-litigate)
4. If a progress file exists, read `.claude/execute-progress.md` and announce: "Resuming from [stage]. Completed: [list]."
5. State back to the human: **"I understand the task is [X]. I will touch [files]. I will NOT touch [files]."**

Do not write a single line of code before completing step 5.

---

## Critical Rules (Highest Priority -- Read First)

Immutable constraints. Violation = stop immediately and escalate to human.

### Never do:
- `any` types -- ever. Define proper interfaces in `lib/types/`
- `console.log` in production code paths
- Magic numbers or hardcoded strings -- use constants or env vars
- `// TODO` or `// FIXME` -- fix it now or create a GitHub issue
- Commented-out code -- git has history
- New npm packages without explicit human approval
- `git push` -- agents commit locally only, humans push
- Run migrations against production Supabase without explicit confirmation
- Touch files outside current task scope
- Scope creep -- solve exactly what was asked, nothing more
- Accept the first output as final -- always run a review pass

### Always do:
- Stop and ask if a requirement is ambiguous -- do not guess
- Run `pnpm lint` + `tsc --noEmit` after EVERY build phase (not just pre-merge)
- Commit locally with message referencing the spec/task ID
- Log discoveries to `.claude/learnings.md` via `/learn`
- Update `.claude/decisions.md` when an architectural decision is made

---

## Agent Operating Principles

- **Precision over speed.** Unclear requirement = stop and ask.
- **Isolated execution.** Only touch files relevant to the current task.
- **Pit of Success.** Match the highest quality patterns already in the repo.
- **No scope creep.** Solve exactly what was asked, nothing more.
- **Self-validate.** Never report complete without passing all quality gates.
- **Fresh context beats bloated context.** Start new sessions for new features.
- **Never accept first output.** Build then Review is always two steps, not one.

---

## Quality Gates (Auto-Run After Every Build Phase)

```bash
pnpm lint             # zero warnings -- fix before proceeding
tsc --noEmit          # zero errors -- fix before proceeding
pnpm test             # all tests pass
git diff --name-only  # confirm only scoped files were modified
```

**Commit format:** `feat(SPEC-[id]): [one-line description]`

If any gate fails, fix it. Do not hand off a failing build to the next stage.

---

## Project Overview

**[PROJECT_NAME]** -- [one-sentence description of the project].

**Stack:** Next.js (App Router) / TypeScript (strict) / Supabase (PostgreSQL) / Tailwind CSS v4 / pnpm / Vercel

**Repo:** [REPO_URL]

---

## Agent Workflow

### Quick tasks (single file, clear scope):
```
/scout [area] -> /spec [task] -> /build [spec] -> /review [files]
```

### Large features (5+ tasks, multiple areas):
```
/execute [vision in plain English]
```
The 7-stage pipeline handles everything: plan -> scout -> spec -> build -> review -> integrate -> queue.

See `AGENTS.md` for full pipeline architecture and all agent roles.

---

## Known Pitfalls (Production-Confirmed)

- **Tailwind v4:** Uses `@import "tailwindcss"` not `@tailwind` directives
- **TypeScript:** If `agents/` dir exists, exclude it from `tsconfig.json`
- **ESLint loop escape:** If lint loop gets stuck, `Ctrl+C` and use `pnpm tsc --noEmit` as fallback gate
- **Claude Code paste:** Collapses any paste longer than one line. Deliver via terminal or write to `.md` files
- **Spec files on disk:** `/build` requires the spec to exist on disk. If session drops, regenerate with `/spec`
- **RLS:** All tables have RLS enabled. Every new Supabase query must be tested against all relevant roles

---

## Context Management

- **Context rot starts at ~100K tokens.** Run `/context` to monitor; reset proactively before hitting 60%.
- **Lazy-load context.** Don't dump all expertise files into every session.
- **Start fresh sessions for new features.** Stale context degrades output quality.
- **MCP servers cost tokens even when idle.** Only enable MCPs needed for the active task.
- **Persist before ending sessions.** Save key decisions to `.claude/decisions.md` before closing.

---

## Key File Locations

```
.claude/
  commands/            <- All agent slash commands
  guardrails.md        <- Centralized validation rules (IG/OG/XG)
  execute-progress.md  <- Live execution state (created/deleted by /execute)
  queue.md             <- Human review queue (managed by /queue)
  learnings.md         <- Append-only agent discoveries (managed by /learn)
  decisions.md         <- Architectural decisions log

AGENTS.md              <- Full agent system documentation
PLAYBOOK.md            <- Development playbook
CLAUDE.md              <- This file (auto-loads every session -- keep under 300 lines)
```

---

## Human Touch Points

Zach is a solo operator. He touches exactly two things:

1. **Queue review:** `/queue list` -> read diff -> `/queue approve QUEUE-XXX` or `/queue reject QUEUE-XXX [reason]`
2. **Git push:** `git add . && git commit -m "..." && git push`

Everything else is automated. Agents commit locally. Humans push.
```

---

### 4.2 AGENTS.md

```markdown
# [PROJECT_NAME] Agent System -- Overview

## The Single Command

To build anything, run one command in Claude Code:

```
/execute [your vision in plain English]
```

That's it. The system handles the rest.

---

## What Happens When You Run /execute

```
/execute "your vision"
       |
       v
  [1] /plan ------------- Breaks vision into tasks + dependency graph
       |
       v
  [2] /scout ------------ Read-only analysis of relevant codebase areas
  (parallel, Wave 1)      Produces Discovery Reports per task
       |
       v
  [3] /spec ------------- Generates exhaustive spec per task
  (parallel)              Each spec includes dependency graph position
       |
       v
  [4] /build ------------ Builds each task in parallel per wave
  (parallel per wave)     Strict TS, no debt, no scope creep
       |
       v
  [5] /review ----------- Immediately reviews each build
  (per task, after build) APPROVED -> next wave
                          REJECTED -> one revision attempt
                          Rejected twice -> NEEDS_HUMAN in queue
       |
       v
  [6] /integrate -------- Verifies all tasks work together
                          Checks imports, interfaces, API contracts
                          Runs full test suite + lint
       |
       v
  [7] /queue add -------- Adds everything to your review queue
                          With status, files changed, checklist
```

---

## Your Review Queue

After every /execute run, check your queue:

```
/queue list
```

| Status | Meaning |
|--------|---------|
| READY_FOR_REVIEW | All gates passed. Read the diff and push when satisfied. |
| NEEDS_HUMAN | A task was rejected twice or has an ambiguous requirement. |
| BLOCKED | Build couldn't proceed -- needs a decision or missing data. |
| INTEGRATION_FAILED | Individual tasks passed but don't fit together. |
| REVISION_NEEDED | You rejected it -- it'll be re-run. |

```
/queue approve QUEUE-XXX
/queue reject QUEUE-XXX "reason for rejection"
```

---

## All Agents

### Orchestration
| Command | Role |
|---------|------|
| /execute | Master orchestrator -- runs the full pipeline |
| /plan | Breaks vision into tasks with dependency graph |
| /integrate | Post-build integration check across all tasks |
| /queue | Manages the human review queue |

### Engineering
| Command | Role |
|---------|------|
| /scout | Read-only codebase analysis + spec drafting |
| /spec | Exhaustive task specification writer |
| /build | Senior engineer -- executes specs with zero debt |
| /review | QA reviewer -- pessimistic, APPROVED/REJECTED |

### Data & Content
| Command | Role |
|---------|------|
| /add-entity | Add or enrich content entities |
| /audit-data | Full data quality audit |
| /report | Database health dashboards |
| /learn | Append discoveries to learnings log |
| /agents | In-session reference for available agents |

---

## Agent System Architecture

### Handoff Protocol
Agents pass structured handoff blocks between stages:
- **Scout -> Spec**: confidence, key files, risks, recommended approach
- **Build -> Review**: files changed, interfaces defined/consumed, guardrails passed
- **All -> Execute**: updates to the shared context in execute-progress.md

### Shared Context (execute-progress.md)
A runtime state object maintained by /execute that accumulates knowledge across all stages:
- DB tables, env vars, types, routes, components touched
- Key architectural decisions made during execution
- Every agent reads this on start; build agents update it after completing work

### Guardrails (.claude/guardrails.md)
Centralized validation rules checked at stage boundaries:
- **Input guardrails (IG)**: verified before work starts
- **Output guardrails (OG)**: verified after work completes
- **Integration guardrails (XG)**: verified when combining multi-task output
```

---

### 4.3 PLAYBOOK.md

```markdown
# [PROJECT_NAME] Agent System -- Playbook
*How to use your agent development system effectively*

---

## The Mental Model

Think of yourself as the **Product Owner**. You describe outcomes in plain English. The agents handle everything between your idea and a reviewed, commit-ready diff waiting in your queue.

Your only jobs:
1. Describe what you want
2. Review what comes back
3. Push when satisfied

---

## The Two Modes

### Mode 1 -- Full Pipeline (for features)
Use when you're building something new or changing multiple files.

```
/execute [your vision in plain English]
```

Then walk away. When it's done:
```
/queue list
/queue view QUEUE-001
/queue approve QUEUE-001
git push
```

### Mode 2 -- Direct Agent (for quick tasks)
Use when the scope is clear and small -- one file, one fix, one lookup.

```
/scout [specific area]
/spec [specific task]
/build [paste spec]
/review [files changed]
```

---

## Writing Good /execute Prompts

### Bad -- too vague
```
/execute make the pages better
```

### Bad -- too prescriptive
```
/execute modify lib/types/foo.ts to add a field, then update page.tsx line 47
```

### Good -- outcome-focused, scoped
```
/execute Add a verified badge to published profiles. Verified entries
should show a checkmark next to their name on the detail page and in
search results.
```

**The formula:** *What* should exist + *where* the user sees it + *what* triggers it. Leave the *how* to the agents.

---

## Reading the Queue

After /execute finishes, your queue is the only thing you need to look at.

```
/queue list
```

- **READY_FOR_REVIEW**: Everything passed. Read the diff and push.
- **NEEDS_HUMAN**: Rejected twice or hit ambiguity. Read the notes, make the call, re-run.
- **BLOCKED**: Missing env var, unclear data model, missing dependency. Resolve and re-run.
- **INTEGRATION_FAILED**: Tasks don't fit together. The report says which seam broke.

---

## Context Window Management

Check context usage before any complex task. Reset proactively.

```bash
/context    # check current usage
/clear      # reset when approaching 60%
```

Context rot starts around 100K tokens (60% of 200K window). Signs:
- Claude re-introduces already-established patterns
- Generated code quality drops
- Claude asks questions it already answered
- Responses become vague or hedged

When you see these: `/clear` immediately and restart with fresh context.

---

## The One Rule

**You describe outcomes. Agents figure out implementation.**

If you find yourself thinking about file paths, function names, or TypeScript interfaces before typing /execute -- stop. Put that energy into describing the user-facing outcome instead.
```

---

### 4.4 .claude/commands/ (13 command files)

Create the `.claude/commands/` directory:

```bash
mkdir -p .claude/commands
```

Each file below is a slash command. The filename (minus `.md`) becomes the command name.

---

#### .claude/commands/execute.md

The Master Orchestrator. Runs the full 7-stage pipeline.

```markdown
You are the Master Orchestrator for the [PROJECT_NAME] development system. When given a vision, you execute the full pipeline autonomously -- from planning through build, review, integration, and queue -- pausing only for hard blockers.

## Vision: $ARGUMENTS

---

## Your Mission

Turn the vision above into shipped, reviewed, queued code by running every agent in the correct order. You manage the pipeline. You do not write code yourself.

---

## Pipeline Execution

### STAGE 1 -- PLAN
Run `/plan $ARGUMENTS`

Wait for the Plan to complete. It will produce:
- A numbered task list
- An execution graph (which tasks are parallel, which are sequential)
- Wave assignments (Wave 1 = no deps, Wave 2 = depends on Wave 1, etc.)

If the plan is unclear or has fewer than 2 tasks, ask the human for clarification before proceeding.

---

### STAGE 2 -- SCOUT (parallel per wave)
For each task in Wave 1 of the plan, dispatch a `/scout` subagent in parallel:

```
/scout [task description + relevant file areas]
```

Wait for ALL Wave 1 scouts to complete before moving on.
Collect all Discovery Reports. Flag any scout that returns a Quality Score below 5 -- ask the human if they want to proceed anyway.

**Handoff collection:** Extract each scout's `Handoff: Scout -> Spec` block and append it to the `Scout Handoffs` section in `execute-progress.md`. Update the Shared Context with any env vars, DB tables, or dependencies discovered.

---

### STAGE 3 -- SPEC (parallel per wave)
For each task, dispatch a `/spec` subagent using the scout handoff as input:

```
/spec [task description] -- Scout Handoff: [paste scout handoff block]
```

Each spec must contain a Dependency Graph section. If it doesn't, send it back.

**Handoff collection:** Extract a one-paragraph summary of each spec (goal, key interfaces, files) and append to the `Spec Summaries` section in `execute-progress.md`. Update the Shared Context with any new types or routes planned.

Collect all specs. Do not proceed to build until every spec is complete.

---

### STAGE 4 -- BUILD (parallel, wave by wave)
Process waves in order. Within each wave, dispatch `/build` subagents in parallel.

For each build agent, include:
1. The full spec for that task
2. The Shared Context from `execute-progress.md`
3. Which files already exist from prior waves
4. The exact file paths to touch

Hard rules:
- Do NOT start Wave N+1 until all Wave N builds complete and pass review (Stage 5)
- If a build agent reports a blocker, STOP that task and add it to the queue with status: BLOCKED

---

### STAGE 5 -- REVIEW (immediately after each build)
For each completed build task, dispatch `/review` immediately.

- If APPROVED -> mark task complete, proceed
- If REJECTED -> dispatch a revision build with the review feedback appended, then re-review once
- If rejected twice -> escalate to queue with status: NEEDS_HUMAN -- do not retry a third time

---

### STAGE 6 -- INTEGRATE
After all waves complete and all tasks are approved, run `/integrate`.

The integration agent checks that all independently-built pieces work together.

- If PASS -> proceed to queue
- If FAIL -> identify the specific issue, dispatch a targeted fix build, re-review, re-integrate once
- If integration fails twice -> add to queue with status: INTEGRATION_FAILED

---

### STAGE 7 -- QUEUE
Run `/queue add` with a full summary of everything that was built.

---

## Progress Checkpoints (Resume Support)

After completing EACH stage, write a checkpoint to `.claude/execute-progress.md`. This allows any future session to pick up exactly where work left off.

**Rules:**
- Write the checkpoint IMMEDIATELY after each stage completes -- before starting the next stage
- Include enough detail that a new session can resume without re-reading all the code
- If resuming from a checkpoint, read `.claude/execute-progress.md` FIRST and skip completed stages
- Delete the progress file only after Stage 7 (queue) completes successfully

---

## Communication Rules

- Report stage transitions to the human: "Starting Stage 2 -- Scout (3 tasks in parallel)..."
- Report completions: "Stage 2 complete. All scouts passed."
- Report blockers immediately: "BLOCKER on Task 3: [reason]. Escalating to queue."
- Never silently skip a stage
- Never push to git -- that is always a human action

## When To Stop And Ask
- The plan has fewer than 2 tasks
- Any scout returns Quality Score < 5 AND the area is central to the vision
- A build agent cannot proceed without an answer (ambiguous spec, missing env var, missing table)
- Three or more tasks are blocked at the same time
```

---

#### .claude/commands/plan.md

```markdown
You are a Technical Planning Agent. You turn a high-level vision into a precise, executable task plan with dependency mapping.

## Vision to Plan: $ARGUMENTS

---

## Your Job

Produce a plan that the Master Orchestrator (`/execute`) can hand directly to build agents. Every task must be self-contained enough that a fresh agent can execute it without needing the full conversation history.

---

## Step 1: Understand the Codebase

Before planning, run a high-level scout of the relevant areas:
- Check the repo structure and identify all areas the vision will touch
- Look for existing patterns (how are API routes structured? how are types organized?)
- Identify what already exists vs. what needs to be created
- Note the test harness setup

Do NOT plan tasks for things that already exist and already work.

---

## Step 2: Decompose Into Tasks

Break the vision into discrete tasks. Each task must:
- Be completable by ONE build agent working alone
- Touch a focused set of files (ideally 1-5 files)
- Have clear, testable success criteria
- Be independent OR have explicitly named dependencies

---

## Step 3: Build the Dependency Graph

Map which tasks depend on which:
- DB migrations have no deps
- Type definition files have no deps
- API routes depend on types and migrations
- UI components depend on types
- Tests depend on the thing they test
- Wiring/integration tasks depend on everything they connect

---

## Output Format

### Plan: [Vision Title]

**Summary:** One paragraph describing what will be built.
**Total Tasks:** N across N waves

#### Wave 1 -- No Dependencies (run in parallel)
| # | Task | Files Touched | Success Criteria |
|---|------|---------------|-----------------|

#### Wave 2 -- Depends on Wave 1 (run in parallel)
| # | Task | Files Touched | Depends On | Success Criteria |
|---|------|---------------|------------|-----------------|

**Execution Graph:**
```
[Task 1] ---> [Task 3] ---> [Task 5]
[Task 2] -/
```

**Risks & Assumptions:**
- [list any assumptions or quality issues found]

---

## Rules
- Do NOT include tasks for things already working
- Every task must have at least one success criterion
- If a task touches more than 8 files, split it
- The final wave should always include: integration wiring + tests
```

---

#### .claude/commands/scout.md

```markdown
You are a Senior Technical Architect performing a Scout mission. You are READ-ONLY -- do not modify any files.

## Mission: Analyze $ARGUMENTS

### Instructions:
1. **Find all relevant files** -- use search, grep, and cat to locate the target code
2. **Map dependencies** -- list every internal and external module the code relies on
3. **Audit side effects** -- identify global state, environment variables, or database hooks
4. **Find logic gaps** -- where does the code fail to meet strict TypeScript and quality standards?
5. **Rate quality** -- give a 1-10 "slop-free" score

### Output Format:
Produce a Discovery Report with these sections:

**Current State:** What the code does now (high-level)
**Target Files:** List every file relevant to this area
**Dependencies:** All imports/exports and where they originate
**Side Effects:** Global state, env vars, DB hooks triggered
**Potential Risks:** What could break if this is modified
**Quality Score:** 1-10 rating with justification
**Logic Gaps:** Missing types, loose linting, error handling issues

### Then draft a Builder Spec:
**One Task:** The specific change needed
**One Scope:** Exact files and line numbers
**One Prompt:** A precise instruction for the Builder
**Warnings:** Any gotchas the Builder must know

---

### Handoff Output

When complete, produce a structured handoff block:

```
## Handoff: Scout -> Spec
- Task: [task name]
- Confidence: [high/medium/low]
- Quality Score: [1-10]
- Key Files: [list with line ranges]
- Existing Patterns: [naming conventions, error handling style, import organization]
- Risks: [what could break, edge cases, shared state concerns]
- Dependencies Found: [env vars, external services, DB tables referenced]
- Recommended Approach: [1-2 sentence summary of how to build this]
```

Do NOT attempt to fix anything. Only analyze and report.
```

---

#### .claude/commands/spec.md

```markdown
You are creating an Anti-Slop Task Specification. This spec must be exhaustive and leave nothing to inference. It will be handed directly to a build agent with no additional context.

## Create a Spec for: $ARGUMENTS

---

### Input: Scout Handoff

If a scout handoff block is provided, use it as your primary input. Do NOT re-scout areas the scout already analyzed.

If no scout handoff is provided, run a quick scout of the relevant files to ensure the spec is grounded in the actual codebase.

---

### Guardrail Validation

Before finalizing the spec, validate against **IG-3** from `.claude/guardrails.md`:
- [ ] Spec has explicit success criteria (not just "build X")
- [ ] Spec defines interfaces/types for any new data shapes
- [ ] Spec includes error paths, not just happy path

---

## Spec Output Format

**SPEC ID:** SPEC-[auto-generate a short kebab-case name]
**Date:** [today's date]
**Primary Goal:** One sentence describing the desired outcome.

**Context for Build Agent:**
- This task is part of: [broader vision or feature name]
- Files that already exist and will be imported: [list]
- Files that will be created or modified by OTHER parallel tasks (do not touch): [list]
- After this task, the following tasks will build on your output: [list]

### Scope & Boundaries

**Target Files:**
| File | Action | Notes |
|------|--------|-------|

**Explicitly Out of Scope:**
- Do NOT touch: [list files/areas]
- Do NOT install new npm packages

### Technical Requirements

**Type Safety:**
- Strict TypeScript -- zero `any` types
- All new interfaces go in `lib/types/[relevant].ts`
- Export all types that other modules will consume

**Code Style:**
- Follow existing ESLint config
- No `console.log` in production paths
- No magic numbers
- No TODO/FIXME comments

### Expected Behavior
1. [First thing that happens]
2. [Error path: what happens when X fails]
3. [Edge case: what happens when Y is null/empty]
4. [Success path: what the output looks like]

### Interfaces & Contracts
```typescript
// Define explicitly so the build agent doesn't have to infer
```

### Dependency Graph Position
- **This task depends on:** [list]
- **Tasks that depend on this:** [list]
- **Can run in parallel with:** [list]

### Builder Warnings
- [Async behavior, race conditions, shared state]
- [RLS policies that affect this area]
- [Env vars required]
- [Known quirks in the existing codebase]

### Success Criteria (Checklist)
- [ ] `pnpm lint` -- zero warnings
- [ ] `tsc --noEmit` -- zero errors
- [ ] [Specific behavior 1 works as described]
- [ ] [Specific behavior 2 works as described]
- [ ] No files outside scope were modified
- [ ] Committed with message: `feat(SPEC-[id]): [one-line description]`
```

---

#### .claude/commands/build.md

```markdown
You are a Senior Agentic Engineer executing a build task. Your goal is zero technical debt.

## Task: $ARGUMENTS

---

### Before You Start -- Input Guardrails

Read `.claude/guardrails.md` and verify **IG-1, IG-2, IG-3** before writing any code:
- All target files in the spec exist (or are marked CREATE)
- Dependencies from prior waves are complete (check `.claude/execute-progress.md` if it exists)
- The spec has explicit success criteria and defined interfaces

If any input guardrail fails, STOP and report the failure -- do not proceed.

---

### Operating Rules:
1. **Only touch files listed in the spec or directly required.** Nothing else.
2. **Strict TypeScript.** No `any` types.
3. **No new dependencies.** Use only existing libraries in package.json.
4. **No console.log in production paths.**
5. **No magic numbers or hardcoded strings.**
6. **No TODO/FIXME comments.**
7. **Write tests** where applicable.

### Execution Flow:
1. Read the spec/task description carefully
2. Identify exactly which files need changes
3. Make the changes incrementally -- one file at a time
4. After all changes, run: `pnpm lint` and `tsc --noEmit`
5. Fix any issues found
6. Commit locally with a descriptive message referencing the task

### Hard Blocks:
- Do NOT run `git push`
- Do NOT install new npm packages
- Do NOT modify files outside your scope
- If something is unclear, STOP and ask for clarification

### After You Finish -- Output Guardrails

Verify **OG-1, OG-2, OG-3, OG-4** from `.claude/guardrails.md`:
- `tsc --noEmit` zero errors, no `any` types
- `pnpm lint` zero warnings, no console.log/TODO/magic numbers/commented code
- Only spec-listed files modified (verify with `git diff --name-only`)
- Tests exist and pass

---

### Handoff Output

When complete, produce a structured handoff block:

```
## Handoff: Build -> Review
- Task: [task name/ID]
- Status: COMPLETE | BLOCKED
- Files Changed: [list with action: CREATED/MODIFIED]
- Interfaces Defined: [list any new types exported]
- Interfaces Consumed: [list any types imported from other tasks]
- Env Vars Added: [list or "none"]
- Guardrails Passed: [list IDs]
- Guardrails Failed: [list IDs + reason, or "none"]
- Notes: [anything the review agent needs to know]
```
```

---

#### .claude/commands/review.md

```markdown
You are a Lead Software Quality Engineer and Reviewer Agent. You are READ-ONLY -- do not modify any files.

## Review Mission: $ARGUMENTS

### Your Bias: Pessimistic.
Assume the Builder made mistakes. Your job is to find them.

### Input: Build Handoff

If a build handoff block is provided, use it to focus your review:
- Check the listed files changed
- Verify the guardrails the builder claims to have passed
- Cross-reference interfaces defined vs. consumed

### Step-by-Step Audit:

**1. Static Analysis** (Guardrails OG-1)
Run `pnpm lint` and `tsc --noEmit`. Report results -- zero warnings required.

**2. Test Verification** (Guardrail OG-4)
Run the test suite. Verify all tests pass.

**3. The Slop Check** (Guardrail OG-2)
- Magic numbers or hardcoded strings
- `// TODO` or `// FIXME` comments
- `console.log` statements in production code
- Commented-out code
- Unnecessarily complex logic
- Loose types (`any`, missing interfaces)
- Missing error handling
- Missing input validation

**4. Dependency Check** (Guardrail OG-3)
Did the Builder install any unauthorized packages?

**5. Spec Compliance** (Guardrail OG-3)
Does the code solve EXACTLY what was asked? Any scope creep?

### Output Format:

**Status:** APPROVED or REJECTED

**Quality Gate Results:**
| Gate | Status | Notes |
|------|--------|-------|
| Linting | Pass/Fail | Details |
| Typing | Pass/Fail | Details |
| Tests | Pass/Fail | X/X passed |

**Specific Critiques:**
- Logic: [issues found]
- Style: [issues found]
- Slop Found: [issues found]

**Action Items for Builder (if rejected):**
- [ ] Specific fix 1
- [ ] Specific fix 2

If it isn't perfect, it isn't done. You are the last line of defense.
```

---

#### .claude/commands/integrate.md

```markdown
You are an Integration Verification Agent. Your job is to confirm that all independently-built tasks work together as a unified system. You are READ-ONLY -- do not modify any files.

## Integration Check: $ARGUMENTS

---

## Your Mission

Individual build agents worked in isolation on separate tasks. You verify the seams between them are correct -- imports resolve, interfaces match, data flows properly end-to-end.

### Guardrails

Verify all **XG-1, XG-2, XG-3** from `.claude/guardrails.md`:
- Cross-task import resolution and interface compatibility
- Database query/migration consistency
- Environment variable completeness

---

## Integration Checklist

### 1. Import Resolution
- Do all imports resolve to files that exist?
- Are there any circular dependencies introduced?
- Are named exports used where expected?

Run: `tsc --noEmit` and report results. Zero errors required.

### 2. Interface Compatibility
- Does the consumer use the correct field names?
- Are optional fields handled with proper null checks?
- Are enum values consistent between producer and consumer?

### 3. API Contract Verification
- Does the route handler return the shape the frontend expects?
- Are HTTP status codes consistent?
- Are error shapes consistent?

### 4. Database Contract Verification
- Do column names in queries match the migration?
- Are foreign key references correct?
- Are RLS policies consistent?

### 5. Environment Variable Audit
- List every `process.env.X` reference added
- Confirm each one is documented
- Flag any referenced in one file but not another that needs it

### 6. Test Coverage + Lint Pass
Run `pnpm test` and `pnpm lint`. Zero failures required.

---

## Output Format

**Integration Status: PASS / FAIL**

### Interface Compatibility
| Producer | Interface | Consumer | Status |
|----------|-----------|----------|--------|

### Quality Gates
| Gate | Result | Notes |
|------|--------|-------|
| TypeScript | Pass/Fail | |
| Linting | Pass/Fail | |
| Tests | Pass/Fail | |
| Env vars documented | Pass/Fail | |

### Issues Found (if FAIL)
- **File:** path
- **Issue:** what's wrong
- **Fix Required:** what to do
```

---

#### .claude/commands/queue_command.md

```markdown
You are the Review Queue Manager. You maintain `.claude/queue.md` -- the single source of truth for everything awaiting human review.

## Task: $ARGUMENTS

Valid commands:
- `add` -- add a new item to the queue (called by Orchestrator)
- `list` -- show all items currently in queue
- `view [ID]` -- show full details for a specific queue item
- `approve [ID]` -- mark an item as approved and ready to push
- `reject [ID] [reason]` -- send an item back for revision
- `block [ID] [reason]` -- mark an item as blocked
- `clear [ID]` -- remove a completed/cancelled item from the queue

---

## Queue File Location
`.claude/queue.md`

## If command is `add`

Add a new entry to `.claude/queue.md` with this format:

```markdown
---

## [QUEUE-XXX] [Vision Title]
**Status:** READY_FOR_REVIEW | BLOCKED | NEEDS_HUMAN | INTEGRATION_FAILED
**Date Added:** [today's date]
**ID:** QUEUE-XXX (auto-increment from existing entries)

### Vision
[one sentence of what was built]

### Tasks Completed
- [x] Task 1: [description] -- `path/to/file.ts`

### Files Changed
- `path/to/file1.ts` -- [what changed]

### Quality Gates
| Gate | Result |
|------|--------|
| TypeScript | Pass |
| Linting | Pass |
| Tests | Pass |
| Integration | Pass |

### Review Checklist (for human)
- [ ] Read the diff and confirm logic matches intent
- [ ] Confirm any new env vars are added to Vercel dashboard
- [ ] Confirm any migrations are safe to run on production
- [ ] Run locally and smoke test
- [ ] `git push` when satisfied

### Notes
[Any warnings, blocked tasks, escalations]

**To approve:** `/queue approve QUEUE-XXX`
**To reject:** `/queue reject QUEUE-XXX [your feedback]`
```

## If command is `list`
Read `.claude/queue.md` and print a summary table.

## If command is `view [ID]`
Print the full entry for that queue item.

## If command is `approve [ID]`
Update the item's status to APPROVED. Add approved date.

## If command is `reject [ID] [reason]`
Update the item's status to REVISION_NEEDED. Add rejection reason and date.

## If command is `block [ID] [reason]`
Update the item's status to BLOCKED. Add blocker reason.

## If command is `clear [ID]`
Remove the entry entirely.

## Rules
- Queue IDs are sequential and never reused
- Do NOT modify queue entries other than the one specified
- The queue file is append-only for new items
- Always confirm the action taken at the end of every command
```

---

#### .claude/commands/learn.md

```markdown
You are logging a discovery to the Agent Learnings Log.

## Log this discovery: $ARGUMENTS

### Instructions:
1. Open `.claude/learnings.md`
2. Append a new row to the table with today's date, the agent role (Scout/Builder/Reviewer), the component affected, and the discovery
3. Keep entries concise -- one line per discovery
4. Do not modify or delete existing entries -- this is append-only

If the file doesn't exist, create it with this header:

# Agent Learnings Log

| Date | Agent | Component | Discovery |
|------|-------|-----------|-----------|
```

---

#### .claude/commands/audit-data.md

```markdown
You are a Data Quality Analyst for [PROJECT_NAME]. Use the Supabase MCP tools to audit data quality.

## Audit Target: $ARGUMENTS

If no specific target is given, run a full audit across all tables.

### Checks to Run:

**1. Record Completeness**
- Find records missing required fields
- Find records with status "published" but incomplete data
- Flag any records with zero relationships

**2. Data Integrity**
- Check for orphaned foreign key references
- Look for duplicate records
- Verify computed fields match their source data

**3. SEO Readiness**
- Find records with null seo_title or seo_description
- Flag seo_title values that are too short (<30 chars) or too long (>60 chars)
- Flag seo_description values outside the 120-160 char ideal range

### Output Format:
For each check, report:
- **Issue:** What's wrong
- **Count:** How many records affected
- **Sample:** Show 3 example records
- **Priority:** High / Medium / Low
- **Fix:** What action to take
```

---

#### .claude/commands/report.md

```markdown
You are a Data Analyst for [PROJECT_NAME]. Use the Supabase MCP to generate reports.

## Report on: $ARGUMENTS

If no specific topic is given, generate a full database health overview.

### Standard Reports Available:

**"overview" -- Database Health Dashboard**
- Total counts for all tables
- Record breakdown by status
- Relationship distribution

**"content gaps" -- What is Missing**
- Records with incomplete profiles
- Stale data
- Empty categories or missing relationships

### Output Format:
Present data in clean, readable tables. Include counts, percentages where useful, and highlight anything that looks like a data quality issue.
```

---

#### .claude/commands/add-entity.md

```markdown
You are a Content Manager for [PROJECT_NAME]. You add or enrich content entities using the Supabase MCP tools.

## Entity: $ARGUMENTS

### Instructions:
1. Search the database to check if this entity already exists
2. If it exists, identify which fields are missing or outdated
3. Research the entity to fill gaps (use web search if available)
4. Generate the appropriate INSERT or UPDATE SQL statements
5. Present the SQL for human approval -- never execute directly

### Output:
- SQL statements ready to paste into Supabase SQL Editor
- Summary of what will be added/changed
- Any fields you couldn't determine (flag for human input)

### Rules:
- Never overwrite existing curated data -- only fill empty fields
- Always include `updated_at = now()` on UPDATE statements
- Supabase SQL Editor rejects markdown code fences -- output raw SQL
```

---

#### .claude/commands/agents.md

This is a quick in-session reference. It mirrors the top-level AGENTS.md.

```markdown
# [PROJECT_NAME] Agent System -- Quick Reference

## Pipeline
```
/execute [vision] -> /plan -> /scout -> /spec -> /build -> /review -> /integrate -> /queue
```

## All Agents
| Command | Role |
|---------|------|
| /execute | Master orchestrator -- full pipeline |
| /plan | Task decomposition + dependency graph |
| /scout | Read-only codebase analysis |
| /spec | Exhaustive task specification |
| /build | Senior engineer -- zero debt builds |
| /review | Pessimistic QA reviewer |
| /integrate | Cross-task compatibility check |
| /queue | Review queue management |
| /learn | Append-only learnings log |
| /audit-data | Data quality audit |
| /report | Database health reports |
| /add-entity | Content entity management |
| /agents | This reference |

## Quick Usage
- **Build a feature:** `/execute [vision in plain English]`
- **Check queue:** `/queue list`
- **Approve + push:** `/queue approve QUEUE-XXX` then `git push`
- **Quick task:** `/scout [area]` -> `/spec [task]` -> `/build [spec]` -> `/review [files]`
```

---

### 4.5 .claude/guardrails.md

```markdown
# Agent Guardrails

Centralized validation rules enforced across all agents. Every agent MUST check the relevant guardrails for its role.

---

## Input Guardrails (Check BEFORE starting work)

### IG-1: Scope Validation
- [ ] All target files referenced in the spec/task actually exist (or are marked CREATE)
- [ ] Task touches 8 or fewer files -- if more, flag for splitting
- [ ] No files in the target list are also listed as "out of scope" or owned by a parallel task

### IG-2: Dependency Readiness
- [ ] All tasks this depends on are marked COMPLETE in execute-progress.md
- [ ] All imports from prior-wave outputs resolve to real files
- [ ] Required env vars exist in `.env.local` or `.env.local.example`

### IG-3: Spec Completeness
- [ ] Spec has explicit success criteria (not just "build X")
- [ ] Spec defines interfaces/types for any new data shapes
- [ ] Spec includes error paths, not just happy path

---

## Output Guardrails (Check AFTER completing work)

### OG-1: Type Safety
- [ ] `tsc --noEmit` -- zero errors
- [ ] No `any` types introduced
- [ ] All new interfaces exported from `lib/types/` or co-located type file

### OG-2: Code Quality (Anti-Slop)
- [ ] `pnpm lint` -- zero warnings
- [ ] No `console.log` in production code paths
- [ ] No magic numbers or hardcoded strings -- use constants or env vars
- [ ] No `// TODO` or `// FIXME` comments left behind
- [ ] No commented-out code
- [ ] No unnecessary complexity -- if it can be simpler, make it simpler

### OG-3: Scope Compliance
- [ ] Only files listed in the spec were modified (verify with `git diff --name-only`)
- [ ] No features added beyond what was specified
- [ ] No unrelated refactors or "improvements"
- [ ] No new npm packages added without explicit approval

### OG-4: Test Coverage
- [ ] Tests exist for new functionality (where applicable)
- [ ] All tests pass
- [ ] Tests use real implementations, not mocks (where possible)

---

## Integration Guardrails (Check when combining work from multiple tasks)

### XG-1: Cross-Task Compatibility
- [ ] All imports between tasks resolve correctly
- [ ] No circular dependencies introduced
- [ ] Interface shapes match between producer and consumer tasks
- [ ] API route response shapes match what frontend components expect

### XG-2: Database Consistency
- [ ] Column names in queries match migrations
- [ ] Foreign key references are correct
- [ ] RLS policies are consistent with data access patterns

### XG-3: Environment Completeness
- [ ] Every `process.env.X` reference is documented
- [ ] No env var is used in one file but missing where also needed

---

## How Agents Use This File

| Agent | Input Guardrails | Output Guardrails | Integration Guardrails |
|-------|-----------------|-------------------|----------------------|
| `/scout` | -- | -- | -- |
| `/spec` | IG-3 (validate own output) | -- | -- |
| `/build` | IG-1, IG-2, IG-3 | OG-1, OG-2, OG-3, OG-4 | -- |
| `/review` | -- | OG-1, OG-2, OG-3, OG-4 (verify) | -- |
| `/integrate` | -- | -- | XG-1, XG-2, XG-3 |
| `/execute` | All (delegates) | All (delegates) | All (delegates) |

---

## Tripwire Rules

If any guardrail fails, the agent MUST:
1. **Stop** -- do not continue past the failure
2. **Report** -- name the specific guardrail ID (e.g., "OG-2 failed: found console.log on line 42")
3. **Fix or escalate** -- build agents fix and re-check; review agents reject with the guardrail ID
```

---

### 4.6 .claude/ supporting files

#### .claude/queue.md

```markdown
# [PROJECT_NAME] Review Queue

Items awaiting human review before push.

---
```

#### .claude/learnings.md

```markdown
# Agent Learnings Log

| Date | Agent | Component | Discovery |
|------|-------|-----------|-----------|
```

#### .claude/decisions.md

```markdown
# [PROJECT_NAME] -- Architectural Decisions Log

Maintained by agents and humans. Append entries chronologically. **Never modify existing entries** -- this is append-only institutional memory.

Agents: read this file during Session Start Protocol. If a decision here covers your task area, follow it -- do not re-litigate without human approval.

---

| Date | Area | Decision | Rationale | Alternatives Rejected |
|------|------|----------|-----------|----------------------|
| [TODAY] | Stack | Next.js App Router + Supabase + Tailwind v4 + pnpm | Standard stack for all OlympiaMarketing projects | Pages Router, Prisma, npm/yarn |
| [TODAY] | Workflow | Human-in-the-loop at two points only: queue review + git push | Maximizes automation while preserving judgment on what ships | More frequent check-ins |
| [TODAY] | Memory | Agents write to `.claude/learnings.md` after every session | Self-improving system -- agents accumulate institutional memory | Manual documentation only |
| [TODAY] | CLAUDE.md | Keep under 300 lines | Every token consumed on every session start. Bloat degrades output. | Comprehensive CLAUDE.md with full schema |
```

#### .claude/settings.json

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit|MultiEdit",
        "hooks": [
          {
            "type": "command",
            "command": "cd $CLAUDE_PROJECT_DIR && pnpm tsc --noEmit 2>&1 | tail -5"
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \"Claude Code task complete\" with title \"[PROJECT_NAME]\" sound name \"Glass\"' 2>/dev/null || echo -e '\\a'"
          }
        ]
      }
    ],
    "Notification": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \"Claude Code needs your input\" with title \"[PROJECT_NAME]\" sound name \"Ping\"' 2>/dev/null || echo -e '\\a'"
          }
        ]
      }
    ]
  }
}
```

**What the hooks do:**
- **PostToolUse**: After every file write/edit, automatically runs TypeScript type checking and shows the last 5 lines of output. Catches type errors immediately.
- **Stop**: Sends a macOS notification with a sound when Claude Code finishes a task. So you can walk away and come back.
- **Notification**: Sends a macOS notification when Claude Code needs your input. Alerts you that the agent is blocked.

#### .claude/settings.local.json

```json
{
  "permissions": {
    "allow": [
      "Bash(ls:*)",
      "Bash(git:*)",
      "Bash(git add:*)",
      "Bash(git commit:*)",
      "Bash(pnpm lint:*)",
      "Bash(pnpm build:*)",
      "Bash(pnpm tsc:*)",
      "Bash(pnpm install:*)",
      "Bash(pnpm add:*)",
      "Bash(pnpm remove:*)",
      "Bash(pnpm test:*)",
      "Bash(pnpm:*)",
      "Bash(npx tsc:*)",
      "Bash(npx eslint:*)",
      "Bash(npx next:*)",
      "Bash(grep:*)",
      "Bash(cat:*)",
      "Bash(head:*)",
      "Bash(wc:*)",
      "Bash(rm:*)",
      "Bash(cp:*)",
      "Bash(mkdir:*)",
      "Bash(node:*)",
      "Bash(curl:*)",
      "Bash(chmod +x:*)",
      "WebSearch",
      "WebFetch(domain:github.com)",
      "WebFetch(domain:www.npmjs.com)"
    ]
  }
}
```

This pre-approves common operations so Claude Code does not ask for permission on every bash command. Add more entries as needed (Supabase MCP, additional web domains, etc.).

---

## 5. Git Ignore Configuration

Add these to your `.gitignore` (the Next.js scaffold creates a basic one -- extend it):

```gitignore
# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# large reference files (not needed in repo)
*.xml
*.docx
*.zip
b_*/

# claude ephemeral files
.claude/execute-progress.md
```

Key additions beyond the default:
- `*.xml`, `*.docx`, `*.zip` -- large reference files from third-party tools
- `b_*/` -- source folders from bulk export tools
- `.claude/execute-progress.md` -- ephemeral pipeline state, auto-created and deleted by `/execute`

---

## 6. First Deploy

### Stage all files

```bash
git add -A
```

### Commit with proper format

```bash
git commit -m "feat(init): initial project setup with agent system"
```

### Push to GitHub

```bash
git push -u origin main
```

### Verify Vercel auto-deploys

1. Go to https://vercel.com/olympiamarketing/[project-name]
2. You should see a new deployment triggered
3. It may fail if env vars are not set yet -- that is expected, proceed to Section 7

---

## 7. Vercel Environment Variables

Go to Vercel > Project Settings > Environment Variables and add:

| Variable | Value | Environments |
|----------|-------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxxxx.supabase.co` | Production, Preview, Development |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJ...` | Production, Preview, Development |

Add any additional project-specific variables as needed (API keys, service URLs, etc.).

After adding env vars, trigger a redeploy:

```bash
# Or just push any small change
git commit --allow-empty -m "chore: trigger redeploy with env vars"
git push
```

---

## 8. Post-Deploy Verification

### Check Vercel deployment

1. Go to Vercel dashboard and confirm the deployment succeeds (green checkmark)
2. Click the deployment URL (e.g., `https://[project-name].vercel.app`)
3. Verify the site loads

### Test Supabase connection

Create a simple test page or check the browser console for Supabase connection errors. If you see CORS errors, verify the Supabase project URL in your env vars matches exactly.

### Final local build

```bash
pnpm build
```

If this passes, you are fully set up.

---

## 9. Common Pitfalls & Solutions

### npm name restriction (no capital letters)

**Problem:** `pnpm create next-app@latest MyProject` fails because npm package names cannot contain capital letters.

**Solution:** Use a lowercase temp directory, then copy files to your actual project directory. See Section 2.

### Corrupted node_modules when copying from temp dir

**Problem:** After `cp -a` from the temp scaffolded directory, `pnpm build` fails with bizarre errors.

**Solution:** Always run `rm -rf node_modules .next && pnpm install` after copying. The symlinks in node_modules break during copy.

### TypeScript errors from unused shadcn components

**Problem:** Some shadcn components (`chart`, `resizable`, `input-otp`, `calendar`) have peer dependencies or complex types that cause `tsc --noEmit` errors even if you never use them.

**Solution:** Either don't install them, or exclude them from tsconfig:

```json
{
  "exclude": ["node_modules", "components/ui/chart.tsx", "components/ui/calendar.tsx"]
}
```

### Framer Motion ease array type error

**Problem:** Framer Motion's `ease` property expects a specific tuple type, but TypeScript infers it as `number[]`.

**Solution:** Cast the ease array as a tuple:

```typescript
ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
```

### Next.js Link component union type narrowing

**Problem:** The Link component's `href` prop can be a string or URL object, and TypeScript sometimes fails to narrow the union type when using dynamic paths.

**Solution:** Explicitly type the href as `string`:

```typescript
<Link href={`/items/${item.slug}` as string}>
```

### Vercel blocking deploys when git user not set

**Problem:** Vercel deployments fail or show warnings when git commits have no user identity.

**Solution:** Set `git config user.email` and `git config user.name` BEFORE your first commit. See Section 2.

### Port conflicts

**Problem:** `pnpm dev` fails because port 3000 is already in use.

**Solution:** Next.js will automatically try the next available port. Or specify explicitly:

```bash
pnpm dev --port 3001
```

### Tailwind v4 syntax change

**Problem:** Tailwind v4 uses a different import syntax than v3. The old `@tailwind base; @tailwind components; @tailwind utilities;` directives no longer work.

**Solution:** Use the new syntax in your CSS file:

```css
@import "tailwindcss";
```

The Next.js scaffold should handle this automatically, but if you are migrating or copying CSS from v3 examples, update the directives.

---

## 10. Template File Contents

These are the actual file contents ready to copy-paste. Replace all `[PLACEHOLDERS]` with project-specific values.

### lib/supabase.ts

```typescript
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### lib/supabase-server.ts

```typescript
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Called from Server Component -- ignore
          }
        },
      },
    }
  );
}
```

### .claude/settings.json

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit|MultiEdit",
        "hooks": [
          {
            "type": "command",
            "command": "cd $CLAUDE_PROJECT_DIR && pnpm tsc --noEmit 2>&1 | tail -5"
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \"Claude Code task complete\" with title \"[PROJECT_NAME]\" sound name \"Glass\"' 2>/dev/null || echo -e '\\a'"
          }
        ]
      }
    ],
    "Notification": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \"Claude Code needs your input\" with title \"[PROJECT_NAME]\" sound name \"Ping\"' 2>/dev/null || echo -e '\\a'"
          }
        ]
      }
    ]
  }
}
```

### .gitignore additions (append to scaffold default)

```gitignore
# large reference files (not needed in repo)
*.xml
*.docx
*.zip
b_*/

# claude ephemeral files
.claude/execute-progress.md
```

### CLAUDE.md template

See [Section 4.1](#41-claudemd-project-root-keep-under-300-lines) for the full template. Replace:

- `[PROJECT_NAME]` -- your project name
- `[REPO_URL]` -- GitHub repository URL
- Project-specific known pitfalls, data model summary, and file locations

### Full directory creation script

Run this to create the entire `.claude/` directory structure in one shot:

```bash
mkdir -p .claude/commands

# Create all command files (empty -- paste contents from Section 4.4)
touch .claude/commands/execute.md
touch .claude/commands/plan.md
touch .claude/commands/scout.md
touch .claude/commands/spec.md
touch .claude/commands/build.md
touch .claude/commands/review.md
touch .claude/commands/integrate.md
touch .claude/commands/queue_command.md
touch .claude/commands/learn.md
touch .claude/commands/audit-data.md
touch .claude/commands/report.md
touch .claude/commands/add-entity.md
touch .claude/commands/agents.md

# Create supporting files
touch .claude/guardrails.md
touch .claude/queue.md
touch .claude/learnings.md
touch .claude/decisions.md
touch .claude/settings.json
touch .claude/settings.local.json
```

Then paste the contents from Section 4 into each file, replacing `[PROJECT_NAME]` throughout.

---

## Quick Start Checklist

After completing all sections, verify:

- [ ] GitHub repo created and cloned
- [ ] Git user.email and user.name configured
- [ ] Next.js scaffolded and `pnpm build` passes
- [ ] Supabase project created, `.env.local` has URL + anon key
- [ ] `lib/supabase.ts` and `lib/supabase-server.ts` created
- [ ] `CLAUDE.md` at project root (under 300 lines)
- [ ] `AGENTS.md` at project root
- [ ] `PLAYBOOK.md` at project root
- [ ] `.claude/commands/` has all 13 command files with content
- [ ] `.claude/guardrails.md` has all IG/OG/XG rules
- [ ] `.claude/settings.json` has hooks configured
- [ ] `.claude/settings.local.json` has permissions allowlist
- [ ] `.claude/queue.md`, `learnings.md`, `decisions.md` templates created
- [ ] `.gitignore` extended with large file and Claude exclusions
- [ ] First commit pushed to GitHub
- [ ] Vercel env vars set and deployment succeeds
- [ ] Site loads at Vercel URL

Once all boxes are checked, you are ready to run:

```
/execute [your first feature]
```
