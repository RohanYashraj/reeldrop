# Examples: Planning with Files (Reeldrop Context)

## Example 1: Feature Research

**User Request:** "Research how to integrate the Runway Gen-2 API for video generation in Reeldrop"

### Loop 1: Create Plan
```bash
Write task_plan.md
```

```markdown
# Task Plan: Runway API Integration Research

## Goal
Determine the feasibility and implementation steps for using Runway Gen-2 for AI video generation.

## Phases
- [ ] Phase 1: Create this plan ✓
- [ ] Phase 2: Research Runway API documentation
- [ ] Phase 3: Evaluate cost and latency for SAAS tier
- [ ] Phase 4: Document integration strategy in findings.md

## Key Questions
1. Does Runway support programmatic video generation via REST?
2. What is the average generation time for a 15s reel?
3. What are the webhook requirements for completion notifications?

## Status
**Currently in Phase 1** - Creating plan
```

### Loop 2: Research
```bash
Read task_plan.md           # Refresh goals
WebSearch "Runway Gen-2 API documentation"
Write findings.md           # Store findings (Webhooks, Auth, Rate Limits)
Edit task_plan.md           # Mark Phase 2 complete
```

---

## Example 2: Bug Fix Task

**User Request:** "Fix the YouTube upload failure for 'Cinematic' genre reels"

### task_plan.md
```markdown
# Task Plan: Fix YouTube Upload Failure

## Goal
Identify and fix why 'Cinematic' genre reels fail during the YouTube Shorts upload step.

## Phases
- [x] Phase 1: Analyze error logs from Vercel ✓
- [x] Phase 2: Reproduce the failure locally ✓
- [ ] Phase 3: Identify root cause (CURRENT)
- [ ] Phase 4: Implement fix in `lib/youtube/uploader.ts`
- [ ] Phase 5: Test with 'Cinematic' and other genres

## Key Questions
1. Is the file format unique for the 'Cinematic' genre?
2. Does the YouTube API return a specific error code?
3. Is it a timeout or a file size issue?

## Decisions Made
- Error is related to file headers produced by FFmpeg for high-res Cinematic output.

## Errors Encountered
- [Initial] YouTube API: "Invalid movie file"
  → Root cause: MOOV atom not at the start of the file.

## Status
**Currently in Phase 3** - Root cause identified, preparing FFmpeg fix
```

---

## Example 3: Core Implementation

**User Request:** "Implement the credit-based billing system for Reeldrop"

### The 3-File Pattern in Action

**task_plan.md:**
```markdown
# Task Plan: Credit-Based Billing System

## Goal
Implement a system where users consume credits for each reel generated.

## Phases
- [x] Phase 1: Research Stripe usage-based billing vs pre-paid credits ✓
- [x] Phase 2: Design database schema changes for `User.credits` ✓
- [ ] Phase 3: Implement credit deduction logic (CURRENT)
- [ ] Phase 4: Add credit check middleware to generation API
- [ ] Phase 5: Verification with Stripe webhooks

## Decisions Made
- Using pre-paid credits for simplicity and predictable revenue.
- Adding `credits` count to User model in Prisma.

## Status
**Currently in Phase 3** - Implementing atomic credit updates
```

**findings.md:**
```markdown
# Findings: Credit System Implementation

## Research Findings
- Stripe Checkout can be used to purchase "Credit Packs".
- Webhooks must handle `checkout.session.completed` to add credits.

## Files to Modify
1. `prisma/schema.prisma` - Add `credits` field to User
2. `lib/billing/credits.ts` - Atomic deduction helper
3. `app/api/generate/route.ts` - Check and deduct logic
4. `app/dashboard/page.tsx` - Show credit balance

## Database Rationale
- Use `prisma.$executeRaw` for atomic credit deduction to prevent race conditions.
```

---

## The Read-Before-Decide Pattern

**Always read your plan before major decisions:**

```
[Implementing complex FFmpeg filters...]
[Getting lost in SVG layer coordinates...]

→ Read task_plan.md          # Remind myself I only need to support 'Shorts' format (9:16)
→ Now make the decision       # Avoid over-engineering for 'Landscape' format
```

This ensures that every technical decision aligns with the Reeldrop product philosophy: fast, automated, and platform-optimized.

