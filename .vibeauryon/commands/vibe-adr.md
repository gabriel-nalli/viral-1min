# Vibe ADR — Architecture Decision Record

Record an architecture or technology decision in ADR format so future developers (and AI agents) understand WHY choices were made.

## When to Use
- Choosing a library, framework, or tool
- Deciding on a data model or API design
- Making a security or performance trade-off
- Any decision that future-you might question

## Steps
1. Ask the user: "What decision was made, why, and what alternatives were considered?"
2. Call `vibe_decision_log` with:
   - title: short name for the decision
   - context: what problem triggered it
   - decision: what was decided
   - reason: the key justification
   - alternatives: other options considered
   - consequences: trade-offs and implications
   - type: architecture|library|algorithm|database|api|security|performance|ux|process
3. The ADR is saved to .vibeauryon/decisions/ADR-{id}.md (ADR format)
4. Index is auto-updated at .vibeauryon/decisions/INDEX.md

## Searching Past Decisions
Use `vibe_decision_search` with a keyword to find relevant past ADRs before making new decisions.

**Decision to record:** $ARGUMENTS
