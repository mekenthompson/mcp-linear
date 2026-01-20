# MCP Linear Improvement Plan

Based on real-world usage creating 47 projects and 5 initiatives, this document outlines improvements needed to make the MCP more efficient.

## Issues Encountered

### 1. Missing Project Icon Support
**Problem:** `updateProject` doesn't expose `icon` parameter, preventing programmatic icon updates.
**Impact:** Had to manually update 47 project icons in Linear UI.
**Evidence:** The service already handles `icon` for initiatives (line 1744) but `updateProjectToolDefinition` doesn't expose it.

### 2. Missing Project Search/Lookup
**Problem:** No way to search projects by name or find a project by URL/partial ID.
**Impact:** When user provided project URLs, I couldn't resolve them to UUIDs. Required 3 failed search attempts before giving up.
**Tokens wasted:** ~2,000 tokens on failed lookups.

### 3. No Bulk Operations
**Problem:** Each project creation requires 2 tool calls (create + add to initiative).
**Impact:** Creating 47 projects required 94 tool calls instead of ~10.
**Tokens wasted:** ~15,000 tokens on repetitive tool call overhead.

### 4. getProjects Returns Incomplete List
**Problem:** `getProjects` returns only first page (~50), with no pagination.
**Impact:** Couldn't find existing projects like "Agent Push" or "Concurrency Now".

---

## Proposed Improvements

### Priority 1: High Impact, Low Effort

#### 1.1 Add `icon` to `updateProject`
**Files to modify:**
- `src/tools/definitions/project-tools.ts` - Add icon property to updateProjectToolDefinition
- `src/services/linear-service.ts` - Already supports icon in updateProject method (verify)
- `src/tools/type-guards.ts` - Add icon to UpdateProjectArgs

**Implementation:**
```typescript
// In project-tools.ts, add to updateProjectToolDefinition.input_schema.properties:
icon: {
  type: 'string',
  description: 'Icon emoji for the project (e.g., "🚀")',
},
```

#### 1.2 Add `icon` to `createProject`
**Files to modify:**
- `src/tools/definitions/project-tools.ts`
- `src/tools/type-guards.ts`

**Implementation:**
```typescript
// In project-tools.ts, add to createProjectToolDefinition.input_schema.properties:
icon: {
  type: 'string',
  description: 'Icon emoji for the project (e.g., "🚀")',
},
```

#### 1.3 Add `linear_searchProjects` Tool
**Description:** Search projects by name, team, or state.
**Files to create/modify:**
- `src/tools/definitions/project-tools.ts` - Add searchProjectsToolDefinition
- `src/tools/handlers/project-handlers.ts` - Add handler
- `src/services/linear-service.ts` - Add searchProjects method

**Input schema:**
```typescript
{
  query: string,        // Search term for name
  teamId?: string,      // Filter by team
  state?: string,       // Filter by state (backlog, started, etc.)
  limit?: number,       // Max results (default 25)
}
```

#### 1.4 Add `linear_getProjectByUrl` Tool
**Description:** Resolve a Linear project URL to its full details.
**Rationale:** Users often paste URLs like `https://linear.app/buildkite/project/agent-push-fa4d74809666`

**Implementation:**
```typescript
// Parse the URL to extract project slug, then use searchProjects
async getProjectByUrl(url: string) {
  const match = url.match(/project\/([^\/]+)/);
  if (!match) throw new Error('Invalid project URL');
  const slug = match[1];
  // Search by slug or use client.project() if UUID extractable
}
```

### Priority 2: High Impact, Medium Effort

#### 2.1 Add `linear_bulkCreateProjects` Tool
**Description:** Create multiple projects in a single call.
**Impact:** Would reduce 94 tool calls to ~5.

**Input schema:**
```typescript
{
  projects: Array<{
    name: string,
    description?: string,
    teamIds: string[],
    icon?: string,
    initiativeId?: string,  // Auto-add to initiative
  }>,
}
```

**Output:** Array of created project IDs and URLs.

#### 2.2 Add pagination to `getProjects`
**Files to modify:**
- `src/tools/definitions/project-tools.ts` - Add limit, offset, cursor params
- `src/services/linear-service.ts` - Update getProjects to support pagination

**Input schema:**
```typescript
{
  limit?: number,       // Default 50
  cursor?: string,      // For pagination
  teamId?: string,      // Filter by team
  includeArchived?: boolean,
}
```

#### 2.3 Add `linear_createProjectWithInitiative` Tool
**Description:** Create a project and immediately link it to an initiative.
**Impact:** Reduces 2 calls to 1 per project.

**Input schema:**
```typescript
{
  name: string,
  description?: string,
  teamIds: string[],
  initiativeId: string,  // Required
  icon?: string,
}
```

### Priority 3: Medium Impact

#### 3.1 Add `linear_bulkAddProjectsToInitiative`
**Description:** Add multiple projects to an initiative in one call.

#### 3.2 Add `linear_getProjectById`
**Description:** Get project by ID (currently only getProjects exists).
**Files to modify:**
- `src/tools/definitions/project-tools.ts`
- `src/services/linear-service.ts`

---

## Implementation Order

1. **Quick wins (1-2 hours):**
   - Add `icon` to createProject and updateProject
   
2. **Day 1:**
   - Add `linear_searchProjects`
   - Add `linear_getProjectById`
   - Add pagination to `getProjects`

3. **Day 2:**
   - Add `linear_getProjectByUrl`
   - Add `linear_createProjectWithInitiative`

4. **Day 3:**
   - Add `linear_bulkCreateProjects`
   - Add `linear_bulkAddProjectsToInitiative`

---

## Token/Call Savings Estimate

| Scenario | Before | After | Savings |
|----------|--------|-------|---------|
| Create 47 projects | 94 calls | 5 calls (bulk) | 89 calls |
| Find 3 projects by URL | 6 failed calls | 3 calls | 3 calls |
| Set 47 icons | Manual (∞) | 47 calls | Automatable |
| Lookup project by name | 3+ search calls | 1 call | 2+ calls |

**Estimated token savings per session like today's:** ~20,000 tokens (20% reduction)

---

## TOOLS.md Updates Required

After implementation, update TOOLS.md with:

```markdown
### Project Tools

| Tool Name | Description | Status |
|-----------|-------------|--------|
| `linear_getProjects` | Get a list of projects from Linear (with pagination) | ✅ Implemented |
| `linear_getProjectById` | Get a project by ID | ✅ Implemented |
| `linear_searchProjects` | Search projects by name, team, or state | ✅ Implemented |
| `linear_getProjectByUrl` | Get a project from its Linear URL | ✅ Implemented |
| `linear_createProject` | Create a new project (with icon support) | ✅ Implemented |
| `linear_updateProject` | Update a project (with icon support) | ✅ Implemented |
| `linear_bulkCreateProjects` | Create multiple projects at once | ✅ Implemented |
| `linear_createProjectWithInitiative` | Create a project and add to initiative | ✅ Implemented |
| `linear_bulkAddProjectsToInitiative` | Add multiple projects to an initiative | ✅ Implemented |
```
