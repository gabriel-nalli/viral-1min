# Vibe Release — Prepare & Ship

Prepare a production release with evidence, checklist and changelog.

## Steps
1. `vibe_task_list` status="in_progress" — confirm no open tasks
2. `vibe_qa_loop` verdict="approve" — final QA gate
3. `vibe_policy_check` action="release to production" — compliance check
4. `vibe_release_prepare` with version + release notes — generates:
   - Changelog
   - 10-point release checklist
   - Evidence record in .vibeauryon/releases/
5. Verify every checklist item manually
6. `vibe_debrief_create` — record release debrief
7. Push and publish

**Version to release:** $ARGUMENTS
