# Vibe QA Gate — Quality Review

Run a full quality gate on the current work before commit or PR.

## 7-Point Quality Checklist

1. **TypeScript** — Zero type errors (`tsc --noEmit`)
2. **Lint** — No ESLint errors or warnings
3. **Style Consistency** — Run `vibe_enforce_style` to check off-theme Tailwind classes
4. **Accessibility** — Run `vibe_audit_accessibility` for WCAG violations
5. **Security** — Run `vibe_run_security_penetration` to scan for XSS, SQLi, hardcoded secrets
6. **Performance** — Check for obvious render bottlenecks (unnecessary re-renders, missing keys, large imports)
7. **Acceptance Criteria** — Verify every AC from the story is demonstrably met

## Verdict
- **PASS** (7/7): Ready to commit
- **CONCERNS** (5–6/7): Commit with documented caveats
- **FAIL** (<5/7): Fix before committing

Run each check and report results clearly.
