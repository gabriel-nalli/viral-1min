# Vibe Doctor — Health Check

Run a full environment and MCP health check on this project.

## Steps
1. Use `vibe_scan_local_architecture` to detect framework, dependencies, and config files
2. Check for missing or outdated dependencies with `vibe_audit_dependencies`
3. Verify Tailwind config is correct with `vibe_sync_tailwind_content`
4. Report all findings with clear PASS / WARN / FAIL status for each check
5. For any FAIL: suggest the exact fix command

Show a final summary table with overall health score.
