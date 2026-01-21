# Agent Instructions

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

## Directory Structure

```
src/
├── services/linear-service.ts  # Core Linear API wrapper
├── tools/
│   ├── definitions/            # Tool schemas (input/output)
│   ├── handlers/               # Tool implementation logic
│   └── type-guards.ts          # Runtime argument validation
└── types.ts                    # Shared TypeScript types
```
