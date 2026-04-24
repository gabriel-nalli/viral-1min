# Vibe Spec — Requirements to Executable Spec

Transform an informal requirement or idea into a structured, executable specification.

## Steps

### Phase 1: Gather Requirements
- Ask the user clarifying questions about the feature: Who uses it? What problem does it solve? What are the success criteria?
- Document as structured requirements: FR-001 (functional), NFR-001 (non-functional), CON-001 (constraints)

### Phase 2: Assess Complexity
Score on 5 dimensions (1–5 each):
- **Scope**: How many files/components are affected?
- **Integration**: Does it require external APIs or services?
- **Infrastructure**: Are DB schema changes or new env vars needed?
- **Knowledge**: How familiar is the team with this area?
- **Risk**: How critical is this to the product?

Total score:
- ≤ 8 → SIMPLE (go straight to spec)
- 9–15 → STANDARD (research first)
- ≥ 16 → COMPLEX (full research + revision cycle)

### Phase 3: Write Spec
Every statement MUST trace back to a requirement (FR-*, NFR-*, CON-*). No invented features.

Output a structured `spec.md` with:
- Summary
- Requirements list
- Acceptance criteria
- Implementation steps
- Open questions

**Requirement:** $ARGUMENTS
