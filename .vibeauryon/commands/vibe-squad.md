# Vibe Squad — Activate Team Configuration

Activate a specialized squad configuration for complex tasks.

## Available Squads

| Squad | Personas | Best For |
|-------|----------|----------|
| fullstack | architect + dev + qa + devops | End-to-end feature delivery |
| qa-focused | qa + dev | Quality gate and issue resolution |
| minimal | dev only | Simple tasks, fast execution |
| design | ux + dev + qa | UI/UX-heavy component work |
| release | qa + devops + analyst | Release preparation and shipping |

## Steps
1. Choose the right squad for your task
2. Call `vibe_squad_activate` with the squad name and task description
3. Follow the squad's workflow, switching personas with `vibe_persona_activate` as needed
4. Each persona has exclusive authority in their domain — respect boundaries

**Task for squad:** $ARGUMENTS
