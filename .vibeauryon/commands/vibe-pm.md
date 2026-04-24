# Vibe PM — Product & Requirements

Activate the Vibe PM persona for requirements gathering and epic planning.

## Steps
1. Call `vibe_persona_activate` with persona="pm"
2. Use `vibe_spec_pipeline` with phase="gather" to extract structured requirements:
   - FR-001... (functional requirements)
   - NFR-001... (non-functional requirements)
   - CON-001... (constraints)
3. Assess complexity with phase="assess"
4. Write the spec with phase="write"
5. For each feature in the spec, create a story with `vibe_story_create`
6. Start a mission with `vibe_mission_start` to track progress

**Product goal:** $ARGUMENTS
