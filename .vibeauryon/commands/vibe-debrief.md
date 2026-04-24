# Vibe Debrief — Record & Learn

Create a structured debrief after completing a work session.

## What to Record
- **Summary**: What was accomplished
- **Decisions**: Key choices made and why (these become searchable memory)
- **Lessons**: What worked, what didn't, what to do differently
- **Next Steps**: What to tackle in the next session

## Steps
1. Call `vibe_debrief_create` with the above information
2. For each decision recorded: also call `vibe_memory_record` type="decision" for searchability
3. For each lesson that's a warning: also call `vibe_memory_record` type="gotcha"
4. Debrief is saved to .vibeauryon/debriefs/ as both .md and .json

**Session to debrief:** $ARGUMENTS
