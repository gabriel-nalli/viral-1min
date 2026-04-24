# Vibe Search — Component Library

Search the VibeCodes component library for UI components, effects, and snippets.

## Usage
Describe what component or effect you're looking for and VibeAuryon will search the library and insert the best match into your project.

## Steps
1. Call the `vibe_search_snippets` MCP tool with a query describing the component
2. Evaluate the top results against the current project context
3. Pick the best match and scaffold it into the project using `vibe_scan_local_architecture` to detect the correct import paths
4. Run `vibe_enforce_style` to ensure it matches the project's design system

**Query:** $ARGUMENTS
