# Vibe Commit — Smart Commit Message Generator

Generate a structured conventional commit message from your staged git changes.

## Conventional Commits Format
```
<type>(<scope>): <description>
```

Types: feat | fix | chore | docs | style | refactor | test | perf | ci

## Steps
1. Ensure changes are staged (`git add <files>`)
2. Get project root path
3. Call `vibe_git_smart_commit` with:
   - projectDir: absolute path to the repo root
   - scope: (optional) affected area, e.g. "auth", "ui", "api"
   - extra: (optional) the reason/context for the change
4. Review the suggested commit messages
5. Pick the best one and run: `git commit -m "chosen message"`

## Tips
- Always provide `extra` with the WHY — it produces much better commit messages
- The tool auto-detects commit type from the diff (fix/feat/refactor/test/docs)
- For multi-area changes, use a broader scope or omit it

**Extra context (optional):** $ARGUMENTS
