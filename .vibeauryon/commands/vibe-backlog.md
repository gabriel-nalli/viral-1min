# Vibe Backlog — Feature Backlog Manager

Manage the project feature backlog with prioritized ordering.

## Actions
- **list**: Show all open backlog items sorted by priority
- **add**: Add a new item to the backlog
- **update**: Change the priority of an existing item
- **done**: Mark an item as completed
- **clear-done**: Remove all completed items from the backlog

## Priority Levels
- 🔴 **critical** — Must be done immediately, blocking
- 🟠 **high** — Important, should be done this sprint
- 🟡 **medium** — Valuable but not urgent (default)
- 🟢 **low** — Nice-to-have, do when bandwidth allows

## Steps

### To list the backlog:
Call `vibe_backlog_manage` with action="list"

### To add an item:
Call `vibe_backlog_manage` with:
- action="add"
- item: description of the feature or task
- priority: critical|high|medium|low
- notes: (optional) additional context

### To mark done:
Call `vibe_backlog_manage` with action="done" and item="BL-XXX"

**Action and item (optional):** $ARGUMENTS
