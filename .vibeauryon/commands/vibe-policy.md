# Vibe Policy — Constitutional Rules

Check compliance or view the project's policy rules.

## Built-in Constitutional Rules (always active)
- Never commit with TypeScript errors
- Never hardcode API keys, tokens or passwords
- Never push directly to main — always use a PR
- Never skip git hooks (--no-verify)
- Never use dangerouslySetInnerHTML without sanitization
- Always run QA gate before marking a story done
- Always confirm before destructive operations

## Custom Rules
Add custom rules to `.vibeauryon/policy.json`:
```json
{
  "rules": [
    "Never use any as a TypeScript type",
    "All database queries must use the ORM — no raw SQL",
    "Every new page must have SEO metadata"
  ]
}
```

## To Check an Action
Call `vibe_policy_check` with the action you're about to take.

**Action to check:** $ARGUMENTS
