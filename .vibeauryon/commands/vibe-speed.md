# Vibe Speed — Performance Audit

Run a full performance audit using Lighthouse and code analysis.

## Steps
1. Use `vibe_initiate_speed_audit` to run Lighthouse against the local dev server
2. Analyze results focusing on:
   - **LCP** (Largest Contentful Paint) — target < 2.5s
   - **FID/INP** (Interaction to Next Paint) — target < 200ms
   - **CLS** (Cumulative Layout Shift) — target < 0.1
   - **TTI** (Time to Interactive)
3. Identify top 3 improvements with highest impact:
   - Image optimization (missing next/image, no lazy loading)
   - Bundle size (large dependencies, no code splitting)
   - Render blocking resources (fonts, scripts)
   - Missing caching headers
4. For each issue: show the exact fix

**Target URL (optional):** $ARGUMENTS
