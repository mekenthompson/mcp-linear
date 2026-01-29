# Stale Projects Analysis

> **Definition**: A stale project has no assigned initiative AND no status updates or issue updates in the past 6 months.

**Last Updated**: 2026-01-23  
**Staleness Cutoff**: July 23, 2025 (6 months ago)

---

## Confirmed Stale Projects (No Initiative + Zero Issues)

| Project | Team | State | URL |
|---------|------|-------|-----|
| Security "Operating System" metrics | Security | backlog | [Link](https://linear.app/buildkite/project/security-operating-system-metrics-6c0bd1ebea6d) |
| Make dynamic pipelines more prominent | Technical Services Docs | backlog | [Link](https://linear.app/buildkite/project/make-dynamic-pipelines-more-prominent-15cbbd703752) |
| Buildkitify.md | Support 🔍 | backlog | [Link](https://linear.app/buildkite/project/buildkitifymd-9ad2004666cd) |
| Common Stack Components | Support 🔍 | backlog | [Link](https://linear.app/buildkite/project/common-stack-components-2e65e75b5811) |
| Plugin Standardisation | Support 🔍 | backlog | [Link](https://linear.app/buildkite/project/plugin-standardisation-85b9b03dbdb0) |
| Migration Tool - Eval CI | Support 🔍 | backlog | [Link](https://linear.app/buildkite/project/migration-tool-eval-ci-9c727eab179f) |
| Pipeline Upload Function in SDK | Support 🔍 | backlog | [Link](https://linear.app/buildkite/project/pipeline-upload-function-in-sdk-38b584dd7347) |
| Add Translate API to Product Onboarding | Support 🔍 | backlog | [Link](https://linear.app/buildkite/project/add-translate-api-to-product-onboarding-flow-27a03af2fa23) |
| Ticket Updater Plugin in Jira, Linear | Support 🔍 | backlog | [Link](https://linear.app/buildkite/project/ticket-updater-plugin-in-jira-linear-5e335c504f4a) |
| Dora metrics Plugin (Sleuth/LinearB) | Support 🔍 | backlog | [Link](https://linear.app/buildkite/project/dora-metrics-plugin-sleuthlinearb-76ded652032a) |

---

## Stale Projects (No Initiative + All Issues Stale)

*No additional stale projects found with issues that are all older than 6 months.*

---

## Not Stale (No Initiative but Recent Activity)

| Project | Team | Last Issue Update | URL |
|---------|------|-------------------|-----|
| Dogfooding Product Feedback | Sales | 2026-01-22 | [Link](https://linear.app/buildkite/project/dogfooding-product-feedback-621b19db0528) |
| Clickhouse Usage Metrics POC | Billing & Data | 2026-01-21 | [Link](https://linear.app/buildkite/project/clickhouse-usage-metrics-poc-e1f7804a700b) |
| Secrets Management and Rotation | Security | 2026-01-19 | [Link](https://linear.app/buildkite/project/secrets-management-and-rotation-8e753ac02d4e) |

---

## Key Findings

**Total Confirmed Stale Projects: 10**

All stale projects share common characteristics:
- No assigned initiative
- Zero issues (no activity to measure)
- State: "backlog" 
- Primarily belong to Support 🔍 team (7 of 10)

These projects appear to be placeholder/idea projects that were never started.

---

## Methodology

1. Fetch all projects via `linear_getProjects`
2. Fetch all initiatives and their projects via `linear_getInitiatives` + `linear_getInitiativeProjects`
3. Identify projects with no initiative (set difference)
4. For each no-initiative project:
   - If zero issues → **Stale** (no activity possible)
   - If has issues → Use `linear_searchIssues(projectId)` to get `updatedAt` timestamps
   - Check if most recent `updatedAt` < staleness cutoff → **Stale**

---

## Reusable Tool

A new MCP tool has been created: `linear_getStaleProjects`

**Usage:**
```
linear_getStaleProjects({
  stalenessMonths: 6,      // Optional, default: 6 months
  includeArchived: false   // Optional, default: false
})
```

**Returns:**
- `staleProjects` - Projects with no initiative + no recent activity
- `activeProjects` - Projects with no initiative but recent activity
- `summary` - Statistics about the analysis

See [scripts/find-stale-projects.ts](../scripts/find-stale-projects.ts) for algorithm documentation.
