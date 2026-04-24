# Vibe Security — Security Scan

Run a comprehensive security scan on the current codebase.

## Steps
1. Use `vibe_run_security_penetration` to scan for:
   - XSS vulnerabilities (unsanitized user input rendered as HTML)
   - SQL injection risks (string-concatenated queries)
   - Hardcoded secrets (API keys, tokens, passwords in source code)
   - Insecure dependencies (known CVEs)
   - Missing authentication on sensitive routes
   - CORS misconfiguration
   - Exposed environment variables in client-side code

2. For each finding, report:
   - **Severity**: CRITICAL / HIGH / MEDIUM / LOW
   - **Location**: file + line number
   - **Description**: what the vulnerability is
   - **Fix**: exact code change needed

3. Show a final summary with total findings by severity

$ARGUMENTS
