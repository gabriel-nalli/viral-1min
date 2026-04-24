# Vibe Mission Start — Begin a Tracked Goal

Start a new VibeAuryon mission with task tracking and debrief.

## Steps
1. Call `vibe_mission_start` with:
   - title: short goal name
   - goal: what success looks like
   - tasks: initial task list (can add more later)
2. Use `vibe_workflow_start` to pick the right workflow for this mission
3. Activate the right squad with `vibe_squad_activate`
4. Work through tasks, updating each with `vibe_task_update`
5. Check progress anytime with `vibe_mission_status`
6. When done: `vibe_mission_complete` auto-generates a debrief

**Mission description:** $ARGUMENTS
