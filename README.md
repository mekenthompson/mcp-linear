<p align="center">
  <img src="https://github.com/tacticlaunch/mcp-linear/blob/main/docs/linear-app-icon.png?raw=true" alt="Linear App Icon" width="250" height="250">
</p>

# MCP Linear

A Model Context Protocol (MCP) server implementation for the Linear GraphQL API that enables AI assistants to interact with Linear project management systems.

![MCP Linear](https://img.shields.io/badge/MCP-Linear-blue)
[![npm version](https://img.shields.io/npm/v/@tacticlaunch/mcp-linear.svg)](https://www.npmjs.com/package/@tacticlaunch/mcp-linear)
[![smithery badge](https://smithery.ai/badge/@tacticlaunch/mcp-linear)](https://smithery.ai/server/@tacticlaunch/mcp-linear)

<a href="https://glama.ai/mcp/servers/@tacticlaunch/mcp-linear">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@tacticlaunch/mcp-linear/badge" />
</a>

> **🔱 Fork Notice**: This is an enhanced fork of [tacticlaunch/mcp-linear](https://github.com/tacticlaunch/mcp-linear) with **16 additional tools** for advanced project management. Original project by [Alexey Elizarov](https://github.com/tacticlaunch). See [Fork Enhancements](#fork-enhancements) below for details.

## Features

MCP Linear bridges the gap between AI assistant and Linear (project management tool) by implementing the MCP protocol. This allows to:

- Retrieve issues, projects, teams, and other data from Linear
- Create and update issues
- Change issue status
- Assign issues to team members
- Add comments
- Create projects and teams

## Example prompts

Once connected, you can use prompts like:

- "Show me all my Linear issues"
- "Create a new issue titled 'Fix login bug' in the Frontend team"
- "Change the status of issue FE-123 to 'In Progress'"
- "Assign issue BE-456 to John Smith"
- "Add a comment to issue UI-789: 'This needs to be fixed by Friday'"

## Fork Enhancements

This fork adds **16 new tools** across 5 categories, significantly expanding project management capabilities:

### 1. Project Lifecycle Management (4 enhancements)

- **`linear_getProjectStatuses`** - Retrieve available project statuses (planned, started, paused, completed, canceled) with their IDs for status updates
- **`linear_getStaleProjects`** - Identify stale projects with no initiative assignment and no recent activity (configurable staleness period)
- **Enhanced `linear_createProject`** - Now supports `labelIds` for applying labels during project creation
- **Enhanced `linear_updateProject`** - Now supports `leadId`, `memberIds`, and `labelIds` for comprehensive project management

**Benefits**: Enables AI agents to identify neglected projects, properly transition project states, and manage project metadata comprehensively.

### 2. Project Labels (3 tools)

- **`linear_getProjectLabels`** - Retrieve all project labels and label groups in the workspace
- **`linear_createProjectLabel`** - Create new project labels with customizable names, descriptions, and parent groups
- **`linear_updateProjectLabel`** - Modify existing project labels including archiving

**Benefits**: Full programmatic control over project categorization and organization taxonomy.

### 3. Project Milestones (3 tools)

- **`linear_getProjectMilestones`** - List all milestones for a specific project
- **`linear_createProjectMilestone`** - Create milestones with target dates, names, and descriptions
- **`linear_updateProjectMilestone`** - Update milestone details, target dates, and sort order

**Benefits**: Enables milestone-driven project tracking and deadline management through AI assistants.

### 4. Entity Links & Attachments (6 tools)

**Entity Links:**
- **`linear_addEntityLink`** - Link external resources (GitHub PRs, Figma files, docs) to projects or initiatives
- **`linear_getEntityLinks`** - Retrieve all resource links for a project or initiative
- **`linear_deleteEntityLink`** - Remove resource links

**Attachments:**
- **`linear_createProjectAttachment`** - Attach documents/files to projects with titles and subtitles
- **`linear_getProjectAttachments`** - List all attachments on a project
- **`linear_deleteProjectAttachment`** - Remove project attachments

**Benefits**: Creates a comprehensive knowledge graph connecting Linear projects to external documentation, design files, and code repositories.

### 5. Customer Needs Tracking (2 tools)

- **`linear_createCustomerNeed`** - Link customer needs/feedback to issues or projects with priority ratings
- **`linear_getCustomerNeeds`** - Query customer needs filtered by entity (issue/project)

**Benefits**: Connects customer feedback directly to development work, enabling product-driven prioritization.

### 6. Initiative Search Enhancement

- **Enhanced `linear_searchInitiatives`** - Fixed and improved initiative search with better filtering and pagination

**Benefits**: Reliable discovery of initiatives across large organizations.

### Enhanced Example Prompts

With these enhancements, you can now use prompts like:

- "Show me all stale projects from the last 6 months that need attention"
- "Create a new project with labels 'Q1-2026' and 'High-Priority'"
- "Add a milestone 'Beta Release' to the Mobile App project with a target date of March 1st"
- "Link the GitHub PR #456 and Figma design to the Authentication project"
- "Create a customer need for 'SSO Authentication' on the Enterprise project with high priority"
- "Get all project statuses so I can transition the Migration project to 'started'"

## Installation

### Getting Your Linear API Token

To use MCP Linear, you'll need a Linear API token. Here's how to get one:

1. Log in to your Linear account at [linear.app](https://linear.app)
2. Click on organization avatar (in the top-left corner)
3. Select **Settings**
4. Navigate to **Security & access** in the left sidebar
5. Under **Personal API Keys** click **New API Key**
6. Give your key a name (e.g., `MCP Linear Integration`)
7. Copy the generated API token and store it securely - you won't be able to see it again!

### Installing via [Smithery](https://smithery.ai/server/@tacticlaunch/mcp-linear) (Recommended)

- To install MCP Linear for Cursor:

```bash
npx -y @smithery/cli install @tacticlaunch/mcp-linear --client cursor
```

- To install MCP Linear for Claude Desktop:

```bash
npx -y @smithery/cli install @tacticlaunch/mcp-linear --client claude
```

### Manual Configuration

Add the following to your MCP settings file:

```json
{
  "mcpServers": {
    "linear": {
      "command": "npx",
      "args": ["-y", "@tacticlaunch/mcp-linear"],
      "env": {
        "LINEAR_API_TOKEN": "<YOUR_TOKEN>"
      }
    }
  }
}
```

#### Client-Specific Configuration Locations

- Cursor: `~/.cursor/mcp.json`
- Claude Desktop: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Claude VSCode Extension: `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`
- GoMCP: `~/.config/gomcp/config.yaml`

### Manual run

Prerequisites

- Node.js (v18+)
- NPM or Yarn
- Linear API token

```bash
# Install globally
npm install -g @tacticlaunch/mcp-linear

# Clone this enhanced fork
git clone https://github.com/mekenthompson/mcp-linear.git
cd mcp-linear
npm install
npm link  # Makes the package available globally

# Or use the original
# git clone https://github.com/tacticlaunch/mcp-linear.git
```

#### Running the Server

Run the server with your Linear API token:

```bash
mcp-linear --token YOUR_LINEAR_API_TOKEN
```

Or set the token in your environment and run without arguments:

```bash
export LINEAR_API_TOKEN=YOUR_LINEAR_API_TOKEN
mcp-linear
```

## Available Tools

See [TOOLS.md](https://github.com/tacticlaunch/mcp-linear/blob/main/TOOLS.md) for a complete list of available tools and planned features.

## Development

See [DEVELOPMENT.md](https://github.com/tacticlaunch/mcp-linear/blob/main/DEVELOPMENT.md) for more information on how to develop locally.

## Links

- [Original Repository](https://github.com/tacticlaunch/mcp-linear) - The upstream tacticlaunch/mcp-linear project
- [This Fork](https://github.com/mekenthompson/mcp-linear) - Enhanced version with 16 additional tools
- [tacticlaunch/cursor-memory-bank](https://github.com/tacticlaunch/cursor-memory-bank) - If you are a developer seeking to enhance your workflow with Cursor, consider giving it a try.


## License

This project is licensed under the MIT License - see the LICENSE file for details.
