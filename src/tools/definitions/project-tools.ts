import { MCPToolDefinition } from '../../types.js';

/**
 * Tool definition for getting projects
 */
export const getProjectsToolDefinition: MCPToolDefinition = {
  name: 'linear_getProjects',
  description: 'Get a list of projects from Linear',
  input_schema: {
    type: 'object',
    properties: {
      limit: {
        type: 'number',
        description: 'Maximum number of projects to return (default: 50)',
      },
      cursor: {
        type: 'string',
        description: 'Cursor for pagination (use endCursor from previous response)',
      },
      teamId: {
        type: 'string',
        description: 'Filter projects by team ID',
      },
      includeArchived: {
        type: 'boolean',
        description: 'Include archived projects (default: false)',
      },
    },
  },
  output_schema: {
    type: 'object',
    properties: {
      projects: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            description: { type: 'string' },
            content: { type: 'string' },
            state: { type: 'string' },
            icon: { type: 'string' },
            teams: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  name: { type: 'string' },
                },
              },
            },
            url: { type: 'string' },
          },
        },
      },
      pageInfo: {
        type: 'object',
        properties: {
          hasNextPage: { type: 'boolean' },
          endCursor: { type: 'string' },
        },
      },
    },
  },
};

/**
 * Tool definition for creating a project
 */
export const createProjectToolDefinition: MCPToolDefinition = {
  name: 'linear_createProject',
  description: 'Create a new project in Linear',
  input_schema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Name of the project',
      },
      description: {
        type: 'string',
        description: 'Short summary of the project',
      },
      content: {
        type: 'string',
        description: 'Content of the project (Markdown supported)',
      },
      teamIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'IDs of the teams this project belongs to',
      },
      state: {
        type: 'string',
        description:
          "Initial state of the project (e.g., 'planned', 'started', 'paused', 'completed', 'canceled')",
      },
      icon: {
        type: 'string',
        description: 'Icon emoji for the project (e.g., "🚀")',
      },
      leadId: {
        type: 'string',
        description: 'The identifier of the project lead (user ID)',
      },
      memberIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'The identifiers of the members of this project',
      },
      labelIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'The identifiers of the project labels to attach',
      },
    },
    required: ['name', 'teamIds'],
  },
  output_schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      url: { type: 'string' },
      lead: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
        },
      },
    },
  },
};

/**
 * Tool definition for updating a project
 */
export const updateProjectToolDefinition: MCPToolDefinition = {
  name: 'linear_updateProject',
  description: 'Update an existing project in Linear',
  input_schema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the project to update',
      },
      name: {
        type: 'string',
        description: 'New name of the project',
      },
      description: {
        type: 'string',
        description: 'New short summary of the project',
      },
      content: {
        type: 'string',
        description: 'New content of the project (Markdown supported)',
      },
      statusId: {
        type: 'string',
        description:
          'ID of the project status to set. Use linear_getProjectStatuses to get available status IDs.',
      },
      icon: {
        type: 'string',
        description: 'Icon emoji for the project (e.g., "🚀")',
      },
      leadId: {
        type: 'string',
        description: 'The identifier of the project lead (user ID)',
      },
      memberIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'The identifiers of the members of this project',
      },
      labelIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'The identifiers of the project labels to attach',
      },
      teamIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'The identifiers of the teams this project belongs to (replaces existing teams)',
      },
    },
    required: ['id'],
  },
  output_schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      description: { type: 'string' },
      state: { type: 'string' },
      icon: { type: 'string' },
      url: { type: 'string' },
    },
  },
};

/**
 * Tool definition for adding an issue to a project
 */
export const addIssueToProjectToolDefinition: MCPToolDefinition = {
  name: 'linear_addIssueToProject',
  description: 'Add an existing issue to a project',
  input_schema: {
    type: 'object',
    properties: {
      issueId: {
        type: 'string',
        description: 'ID or identifier of the issue to add to the project',
      },
      projectId: {
        type: 'string',
        description: 'ID of the project to add the issue to',
      },
    },
    required: ['issueId', 'projectId'],
  },
  output_schema: {
    type: 'object',
    properties: {
      success: { type: 'boolean' },
      issue: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          identifier: { type: 'string' },
          title: { type: 'string' },
          project: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
            },
          },
        },
      },
    },
  },
};

/**
 * Tool definition for getting issues in a project
 */
export const getProjectIssuesToolDefinition: MCPToolDefinition = {
  name: 'linear_getProjectIssues',
  description: 'Get all issues associated with a project',
  input_schema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
        description: 'ID of the project to get issues for',
      },
      limit: {
        type: 'number',
        description: 'Maximum number of issues to return (default: 25)',
      },
    },
    required: ['projectId'],
  },
  output_schema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        identifier: { type: 'string' },
        title: { type: 'string' },
        description: { type: 'string' },
        state: { type: 'string' },
        priority: { type: 'number' },
        team: { type: 'object' },
        assignee: { type: 'object' },
        url: { type: 'string' },
      },
    },
  },
};

/**
 * Tool definition for getting a project by ID
 */
export const getProjectByIdToolDefinition: MCPToolDefinition = {
  name: 'linear_getProjectById',
  description: 'Get a specific project by ID',
  input_schema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The ID of the project to retrieve',
      },
    },
    required: ['id'],
  },
  output_schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      description: { type: 'string' },
      content: { type: 'string' },
      state: { type: 'string' },
      icon: { type: 'string' },
      teams: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
          },
        },
      },
      url: { type: 'string' },
    },
  },
};

/**
 * Tool definition for searching projects by name
 */
export const searchProjectsToolDefinition: MCPToolDefinition = {
  name: 'linear_searchProjects',
  description: 'Search for projects by name',
  input_schema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'Search query to match against project names',
      },
      teamId: {
        type: 'string',
        description: 'Filter by team ID',
      },
      state: {
        type: 'string',
        description: 'Filter by project state (e.g., planned, started, paused, completed, canceled)',
      },
      limit: {
        type: 'number',
        description: 'Maximum number of results to return (default: 25)',
      },
    },
    required: ['query'],
  },
  output_schema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string' },
        state: { type: 'string' },
        icon: { type: 'string' },
        url: { type: 'string' },
      },
    },
  },
};

/**
 * Tool definition for getting a project by URL
 */
export const getProjectByUrlToolDefinition: MCPToolDefinition = {
  name: 'linear_getProjectByUrl',
  description: 'Get a project by its Linear URL',
  input_schema: {
    type: 'object',
    properties: {
      url: {
        type: 'string',
        description: 'The Linear project URL',
      },
    },
    required: ['url'],
  },
  output_schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      description: { type: 'string' },
      content: { type: 'string' },
      state: { type: 'string' },
      icon: { type: 'string' },
      teams: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
          },
        },
      },
      url: { type: 'string' },
    },
  },
};

/**
 * Tool definition for creating a project with initiative
 */
export const createProjectWithInitiativeToolDefinition: MCPToolDefinition = {
  name: 'linear_createProjectWithInitiative',
  description: 'Create a new project and add it to an initiative in one call',
  input_schema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Name of the project',
      },
      description: {
        type: 'string',
        description: 'Short summary of the project',
      },
      teamIds: {
        type: 'array',
        items: { type: 'string' },
        description: 'IDs of the teams this project belongs to',
      },
      initiativeId: {
        type: 'string',
        description: 'ID of the initiative to add the project to',
      },
      icon: {
        type: 'string',
        description: 'Icon emoji for the project (e.g., "🚀")',
      },
    },
    required: ['name', 'teamIds', 'initiativeId'],
  },
  output_schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      url: { type: 'string' },
      initiative: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
        },
      },
    },
  },
};

/**
 * Tool definition for bulk creating projects
 */
export const bulkCreateProjectsToolDefinition: MCPToolDefinition = {
  name: 'linear_bulkCreateProjects',
  description: 'Create multiple projects in one call',
  input_schema: {
    type: 'object',
    properties: {
      projects: {
        type: 'array',
        description: 'Array of project definitions to create',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Name of the project',
            },
            description: {
              type: 'string',
              description: 'Short summary of the project',
            },
            teamIds: {
              type: 'array',
              items: { type: 'string' },
              description: 'IDs of the teams this project belongs to',
            },
            icon: {
              type: 'string',
              description: 'Icon emoji for the project',
            },
            initiativeId: {
              type: 'string',
              description: 'ID of the initiative to add the project to',
            },
          },
          required: ['name', 'teamIds'],
        },
      },
    },
    required: ['projects'],
  },
  output_schema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        success: { type: 'boolean' },
        project: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            url: { type: 'string' },
          },
        },
        error: { type: 'string' },
      },
    },
  },
};

/**
 * Tool definition for getting project statuses
 */
export const getProjectStatusesToolDefinition: MCPToolDefinition = {
  name: 'linear_getProjectStatuses',
  description:
    'Get all available project statuses in the workspace. Returns status IDs that can be used with linear_updateProject to change a project status.',
  input_schema: {
    type: 'object',
    properties: {},
    required: [],
  },
  output_schema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string' },
        color: { type: 'string' },
        type: { type: 'string' },
        position: { type: 'number' },
      },
    },
  },
};

/**
 * Tool definition for finding stale projects
 */
export const getStaleProjectsToolDefinition: MCPToolDefinition = {
  name: 'linear_getStaleProjects',
  description:
    'Find stale projects in Linear. A stale project is defined as having no assigned initiative AND no issue updates within the specified number of months. Returns projects grouped by staleness reason.',
  input_schema: {
    type: 'object',
    properties: {
      stalenessMonths: {
        type: 'number',
        description: 'Number of months without activity to consider a project stale (default: 6)',
      },
      includeArchived: {
        type: 'boolean',
        description: 'Include archived projects in the analysis (default: false)',
      },
      noInitiativeOnly: {
        type: 'boolean',
        description:
          'If true, only return projects without an initiative (skip expensive issue activity checks). Much faster than full staleness analysis. (default: false)',
      },
      limit: {
        type: 'number',
        description:
          'Maximum number of projects to analyze. Use to prevent timeouts on large workspaces. (default: no limit)',
      },
    },
    required: [],
  },
  output_schema: {
    type: 'object',
    properties: {
      staleProjects: {
        type: 'array',
        description: 'Projects that are stale',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            state: { type: 'string' },
            teamName: { type: 'string' },
            url: { type: 'string' },
            reason: {
              type: 'string',
              description: 'Reason for staleness: "no_issues" or "all_issues_stale"',
            },
            lastActivity: {
              type: 'string',
              description: 'ISO date of last activity (project update or issue update)',
            },
          },
        },
      },
      activeProjects: {
        type: 'array',
        description: 'Projects without initiative but with recent activity',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            state: { type: 'string' },
            teamName: { type: 'string' },
            url: { type: 'string' },
            lastActivity: { type: 'string' },
          },
        },
      },
      skippedProjects: {
        type: 'array',
        description: 'Projects that could not be analyzed due to errors',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            error: { type: 'string' },
          },
        },
      },
      summary: {
        type: 'object',
        properties: {
          totalProjectsAnalyzed: { type: 'number' },
          recentlyUpdatedCount: {
            type: 'number',
            description: 'Projects skipped because they were recently updated (not stale candidates)',
          },
          projectsWithInitiative: { type: 'number' },
          projectsWithoutInitiative: { type: 'number' },
          staleCount: { type: 'number' },
          activeCount: { type: 'number' },
          skippedCount: { type: 'number' },
          stalenessCutoffDate: { type: 'string' },
        },
      },
    },
  },
};
