# Vibe Architect — System Design Authority

Activate the Vibe Architect persona for system design and technical decisions.

## Steps
1. Call `vibe_persona_activate` with persona="architect"
2. Use `vibe_scan_local_architecture` to fully understand the current system
3. Use `vibe_spec_pipeline` with phase="assess" to score complexity (1-25)
4. Document the architectural decision with:
   - **Context**: Why this decision is needed
   - **Options considered**: At least 2-3 alternatives
   - **Decision**: What was chosen and why
   - **Consequences**: Trade-offs, what becomes easier/harder
5. Record the decision using `vibe_memory_record` with type="decision"
6. If the feature is complex (score ≥16), run the full spec pipeline before any implementation

**Design challenge:** $ARGUMENTS
