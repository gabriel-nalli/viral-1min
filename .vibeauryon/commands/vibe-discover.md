# Vibe Discover — Brownfield Assessment

Run a structured technical assessment of an existing codebase.

## 10-Phase Process

| Phase | Persona | Output |
|-------|---------|--------|
| 1. Architecture | architect | system-architecture.md |
| 2. Schema | data | SCHEMA.md + DB-AUDIT.md |
| 3. Frontend | ux | frontend-spec.md |
| 4. Debt Draft | architect | technical-debt-DRAFT.md |
| 5. DB Review | data | db-specialist-review.md |
| 6. UX Review | ux | ux-specialist-review.md |
| 7. QA Gate | qa | qa-review.md |
| 8. Final Assessment | architect | technical-debt-assessment.md |
| 9. Executive Report | analyst | TECHNICAL-DEBT-REPORT.md |
| 10. Epic Planning | pm | Stories for top debt items |

## Steps
1. `vibe_brownfield_discover` with phase="architecture"
2. Switch persona for each phase
3. QA gate at phase 7 — APPROVED or NEEDS WORK
4. Create epics/stories for top debt items

**Start discovery for:** $ARGUMENTS
