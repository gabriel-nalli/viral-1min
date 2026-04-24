# Vibe Audit — Codebase Health Check

Run a structured audit of the codebase to detect technical debt, security risks, and quality gaps.

## What Gets Checked
- **Tech Debt**: TODO/FIXME/HACK comments that accumulated over time
- **Console Leaks**: console.log/debug/warn in production (non-test) files
- **Secret Patterns**: potential hardcoded API keys or credentials
- **Large Files**: files over 300 lines that are refactor candidates
- **TypeScript any**: usage of the `any` type that weakens type safety

## Steps
1. Get the absolute project root path (ask user or use context)
2. Call `vibe_codebase_audit` with the project root
   - Use `focus="security"` to prioritize secret/console checks
   - Use `focus="debt"` to focus on TODO/FIXME
   - Use `focus="size"` for refactoring candidates
   - Use `focus="all"` (default) for complete audit
3. Present findings categorized by severity (🔴 CRITICAL, 🟡 MEDIUM, 🟢 CLEAN)
4. For any critical findings: propose specific fix steps
5. For high-priority items: create backlog entries with `vibe_backlog_manage` action="add"

**Project path (optional):** $ARGUMENTS
