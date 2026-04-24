# Vibe Design — Copy & Implement a Design

Analyze a design reference (URL, screenshot description, or component name) and implement it following the project's design system.

## Steps
1. Use `vibe_get_architecture` to load the project's design system rules (colors, typography, spacing)
2. Use `vibe_get_colors` to extract current CSS variables
3. Use `vibe_search_snippets` to find the closest existing component in the VibeCodes library
4. If a Figma URL is provided, use `vibe_fetch_figma_design` to extract the design tokens
5. Implement the component ensuring:
   - Uses only design system tokens (no hardcoded colors/sizes)
   - Follows atomic design principles via `vibe_enforce_atomic_design`
   - Is fully responsive (mobile-first)
   - Has dark mode support
6. Run `vibe_perform_visual_qa_audit` for visual QA

**Design reference:** $ARGUMENTS
