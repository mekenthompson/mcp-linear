#!/usr/bin/env npx ts-node
/**
 * Find Stale Projects in Linear
 *
 * A stale project is defined as:
 * - No assigned initiative
 * - No issue updates in the past 6 months
 *
 * Usage: npx ts-node scripts/find-stale-projects.ts
 *
 * Note: This script is designed to work with the Linear MCP tools.
 * For now, it serves as documentation of the algorithm. To run the actual
 * analysis, use the MCP tools directly via an AI assistant.
 */

interface Project {
  id: string;
  name: string;
  state: string;
  url: string;
  teamName: string;
}

interface Issue {
  id: string;
  updatedAt: string;
}

interface StaleProjectResult {
  project: Project;
  reason: "no_issues" | "all_issues_stale";
  lastIssueUpdate?: string;
}

// Configuration
const STALENESS_MONTHS = 6;

function getStaleCutoffDate(): Date {
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - STALENESS_MONTHS);
  return cutoff;
}

function isStale(updatedAt: string, cutoff: Date): boolean {
  return new Date(updatedAt) < cutoff;
}

/**
 * Algorithm to find stale projects:
 *
 * 1. FETCH ALL PROJECTS
 *    - Use linear_getProjects with pagination
 *    - Collect: id, name, state, url, team info
 *
 * 2. BUILD INITIATIVE-PROJECT MAP
 *    - Use linear_getInitiatives to get all initiatives
 *    - For each initiative, use linear_getInitiativeProjects
 *    - Build Set<projectId> of all projects with initiatives
 *
 * 3. FILTER TO NO-INITIATIVE PROJECTS
 *    - projects.filter(p => !projectsWithInitiatives.has(p.id))
 *
 * 4. CHECK EACH NO-INITIATIVE PROJECT
 *    - Use linear_getProjectIssues to check if project has issues
 *    - If zero issues: STALE (no activity)
 *    - If has issues: Use linear_searchIssues(projectId) to get updatedAt
 *      - Find most recent updatedAt
 *      - If mostRecentUpdate < cutoffDate: STALE
 *
 * 5. OUTPUT RESULTS
 *    - Group by stale reason
 *    - Include last update date for issues-based staleness
 */

// Example output structure
const exampleOutput: StaleProjectResult[] = [
  {
    project: {
      id: "abc123",
      name: "Example Stale Project",
      state: "backlog",
      url: "https://linear.app/...",
      teamName: "Engineering",
    },
    reason: "no_issues",
  },
  {
    project: {
      id: "def456",
      name: "Another Stale Project",
      state: "backlog",
      url: "https://linear.app/...",
      teamName: "Platform",
    },
    reason: "all_issues_stale",
    lastIssueUpdate: "2025-03-15T10:00:00.000Z",
  },
];

console.log(`
=== Stale Projects Finder ===

This script documents the algorithm for finding stale projects.
Run the actual analysis using the Linear MCP tools:

1. linear_getProjects - Get all projects
2. linear_getInitiatives - Get all initiatives  
3. linear_getInitiativeProjects - Map initiatives to projects
4. linear_searchIssues(projectId) - Check issue activity (returns updatedAt)

Staleness cutoff: ${getStaleCutoffDate().toISOString().split("T")[0]}
`);

export { getStaleCutoffDate, isStale, StaleProjectResult };
