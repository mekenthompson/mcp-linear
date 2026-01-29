# Agent Instructions

## Quick Reference

**Repository**: mekenthompson/mcp-linear (fork of tacticlaunch/mcp-linear)
**Fork Status**: 5 commits ahead with 16 new tools
**Last Updated**: 2026-01-29

---

## Fork Enhancement Log

### Version History

| Date | Commit | Tools Added | Description |
|------|--------|-------------|-------------|
| 2026-01-21 | 369b051 | 2 tools | `getProjectStatuses`, `getStaleProjects` + AGENTS.md |
| 2026-01-20 | bfee791 | 1 enhancement | Fixed `searchInitiatives` filtering |
| 2026-01-20 | 2e08c61 | 14 tools | Labels (3), milestones (3), entity links (3), attachments (3), customer needs (2) |
| 2026-01-17 | 1b7f72a | 1 enhancement | Added `labelIds` to `createProject` |
| 2026-01-16 | 1b631a2 | 1 enhancement | Added `leadId`, `memberIds`, `labelIds` to `updateProject` |

### Enhancement Categories

1. **Project Lifecycle**: Status tracking, stale project detection
2. **Project Metadata**: Labels, milestones, team assignments
3. **External References**: Entity links, attachments
4. **Customer Feedback**: Customer needs tracking
5. **Search Improvements**: Enhanced initiative search

---

## Build & Test Commands

```bash
npm run build      # TypeScript compilation
npm run dev        # Development mode with hot reload
npm run inspect    # MCP inspector for testing
```

## Code Style

- Use TypeScript strict mode
- Follow existing patterns in `src/tools/` for new tools
- Each tool needs: definition, handler, and type guard

### Tool Implementation Checklist

When implementing new tools:

- [ ] Add tool definition in `src/tools/definitions/[category]-tools.ts`
- [ ] Implement handler in `src/tools/handlers/[category]-handlers.ts`
- [ ] Add type guard in `src/tools/type-guards.ts`
- [ ] Add service method in `src/services/linear-service.ts` if needed
- [ ] Register in `src/tools/definitions/index.ts`
- [ ] Register handler in `src/tools/handlers/index.ts`
- [ ] Update TOOLS.md with implementation status
- [ ] Add integration test in `src/tests/integration/[category].integration.test.ts`
- [ ] Update AGENTS.md enhancement log
- [ ] Update README.md if significant user-facing change

## Linear SDK Notes

### Project Status Updates

The Linear SDK uses `statusId` (not `state`) to update project status. The `state` field on projects is a **read-only computed property**.

To change a project's status:
1. Use `linear_getProjectStatuses` to get available statuses with their IDs
2. Pass the desired status ID to `linear_updateProject` via the `statusId` parameter

Example statuses returned by `getProjectStatuses`:
- `planned`, `started`, `paused`, `completed`, `canceled` (each with unique IDs)

### ProjectUpdateInput Supported Fields

From the `@linear/sdk` `ProjectUpdateInput` type:
- `name`, `description`, `content`, `icon`, `color`
- `statusId` - ID of project status (use `getProjectStatuses` to look up)
- `teamIds` - Array of team IDs to assign project to
- `memberIds`, `labelIds`, `leadId`
- `startDate`, `targetDate` (as Date objects)
- `sortOrder`, `priority`

### Initiative-Project Relationships

- Use `linear_addProjectToInitiative` / `linear_removeProjectFromInitiative` to manage project-initiative associations
- The `removeProjectFromInitiative` function handles pagination internally when searching for the relationship

### Stale Project Detection Algorithm

**Definition**: A project is "stale" if it has:
1. No assigned initiative AND
2. Either zero issues OR all issues have `updatedAt` > N months old

**Implementation** (`linear_getStaleProjects`):
1. Fetch all projects via getProjects
2. Fetch all initiatives and build initiative→project mapping
3. Filter projects without initiatives
4. For each no-initiative project:
   - If issueCount = 0 → Stale (no activity possible)
   - If issueCount > 0 → Search issues, check max(updatedAt)
   - If max(updatedAt) < (now - stalenessMonths) → Stale

**Use Cases**:
- Quarterly project cleanup
- Identifying abandoned initiatives
- Portfolio hygiene maintenance

See `scripts/find-stale-projects.ts` and `docs/stale-projects.md` for details.

### Entity Links Best Practices

**Supported Link Types**:
- GitHub: PRs, Issues, Discussions
- Figma: Design files, prototypes
- Documentation: Notion, Confluence, Google Docs
- Custom URLs

**Implementation Notes**:
- Links are stored with labels (e.g., "PR #123", "Design Mockups")
- URL validation happens client-side in Linear UI
- Links can be attached to both projects and initiatives
- Use `getEntityLinks` to audit before deleting

## Directory Structure

```
src/
├── services/linear-service.ts      # Core Linear API wrapper
├── tools/
│   ├── definitions/                # Tool schemas (input/output)
│   │   ├── customer-need-tools.ts  # Customer feedback tracking
│   │   ├── entity-link-tools.ts    # External resource links
│   │   ├── initiative-tools.ts     # Initiative management
│   │   ├── milestone-tools.ts      # Project milestones
│   │   ├── project-attachment-tools.ts
│   │   ├── project-label-tools.ts  # Project categorization
│   │   └── project-tools.ts        # Project CRUD + status
│   ├── handlers/                   # Tool implementation logic
│   └── type-guards.ts              # Runtime argument validation
├── types.ts                        # Shared TypeScript types
└── tests/
    └── integration/                # Integration tests

docs/
├── stale-projects.md               # Stale project analysis example
└── linear-app-icon.png

scripts/
└── find-stale-projects.ts          # Stale project detection script
```

## Contribution Guidelines (Fork)

### Syncing with Upstream

```bash
# Check current remotes
git remote -v

# Sync with upstream
git fetch upstream
git merge upstream/main
```

### Fork-Specific Development

For experimental or specialized features:

1. Develop on fork branches
2. Update AGENTS.md enhancement log
3. Update TOOLS.md status
4. Keep fork documentation current
