# Vibe Story Cycle — Full SDC (4 Phases)

Run the complete Story Development Cycle for a feature.

## 4 Phases

### Phase 1: Create (PM)
- `vibe_persona_activate` persona="pm"
- `vibe_story_create` with user story, ACs, technical notes
- Output: story in draft status

### Phase 2: Validate (QA)
- `vibe_persona_activate` persona="qa"
- `vibe_story_validate` — 10-point checklist, need score ≥7
- Output: GO (ready) or NO-GO (fixes needed)

### Phase 3: Implement (Dev)
- `vibe_persona_activate` persona="dev"
- `vibe_task_update` status="in_progress"
- Implement all acceptance criteria
- Output: implemented code, task done

### Phase 4: QA Gate (QA)
- `vibe_qa_loop` — 7-point quality check
- verdict=approve → story Done
- verdict=reject → back to Phase 3

**Feature to build:** $ARGUMENTS
