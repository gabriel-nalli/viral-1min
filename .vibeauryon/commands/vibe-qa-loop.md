# Vibe QA Loop — Iterative Review Cycle

Run an automated QA review-fix cycle. Max 5 iterations.

## Flow
```
QA Review → verdict → Dev Fixes → Re-review (repeat max 5×)
```

## Steps
1. Activate QA persona: `vibe_persona_activate` with persona="qa"
2. Run the 7-point quality gate:
   - TypeScript: zero errors
   - Lint: zero warnings
   - Style: `vibe_enforce_style`
   - Accessibility: `vibe_audit_accessibility`
   - Security: `vibe_run_security_penetration`
   - Performance: obvious bottlenecks
   - Acceptance Criteria: every AC met
3. Submit verdict with `vibe_qa_loop`:
   - If all pass → verdict="approve"
   - If fixable issues → verdict="reject" + list issues
   - If architectural problem → verdict="block"
4. If rejected: activate dev persona, fix issues, increment iteration
5. Re-review until approved or max 5 iterations
6. On approval: `vibe_debrief_create` to record what was found

**Story/feature to review:** $ARGUMENTS
