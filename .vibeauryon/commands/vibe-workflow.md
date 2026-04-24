# Vibe Workflow — Intelligent Workflow Selection

Let VibeAuryon pick the right workflow for your situation.

## Situations & Workflows

| Situation | Workflow |
|-----------|----------|
| new-feature | Story Development Cycle |
| bug-fix | Rapid Fix Cycle |
| qa-issues | QA Loop |
| new-project | Project Bootstrap |
| legacy-codebase | Brownfield Discovery |
| release | Release Workflow |
| research | Spec Pipeline |

## Steps
1. Call `vibe_workflow_start` with your situation and context
2. VibeAuryon returns the recommended workflow with phases and tools
3. Follow the phases in order
4. Each phase tells you exactly which tool to call next

**Your situation and context:** $ARGUMENTS
