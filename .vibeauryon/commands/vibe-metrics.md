# Vibe Metrics — Development Metrics Dashboard

Track and visualize development performance metrics over time.

## Common Metrics to Track
- **story-cycle-time**: Minutes from story start to Done
- **build-duration**: Build time in seconds
- **test-coverage**: Test coverage percentage
- **bug-density**: Bugs found per story/feature
- **qa-iterations**: Number of QA loop iterations before approval
- **deploy-time**: Time from commit to production in minutes

## Commands

### View Dashboard
Call `vibe_metrics_show` to see the last 7 days of all metrics.
- Use `metric="story-cycle-time"` to filter to one metric
- Use `days=30` to look back further

### Record a Metric
Call `vibe_metrics_track` with:
- metric: name of the metric
- value: numeric value
- unit: "minutes", "seconds", "percent", "count"
- context: what this relates to (story ID, sprint, etc.)

Metrics are saved to .vibeauryon/metrics/{date}.jsonl

**Metric to track (format: "name value unit"):** $ARGUMENTS
