import { MCPToolDefinition } from '../../types.js';

/**
 * Tool definition for getting project milestones
 */
export const getProjectMilestonesToolDefinition: MCPToolDefinition = {
  name: 'linear_getProjectMilestones',
  description: 'Get all milestones for a project',
  input_schema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
        description: 'ID of the project to get milestones for',
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
        name: { type: 'string' },
        description: { type: 'string' },
        targetDate: { type: 'string' },
        status: { type: 'string' },
        sortOrder: { type: 'number' },
      },
    },
  },
};

/**
 * Tool definition for creating a project milestone
 */
export const createProjectMilestoneToolDefinition: MCPToolDefinition = {
  name: 'linear_createProjectMilestone',
  description: 'Create a new milestone on a project',
  input_schema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
        description: 'ID of the project to add milestone to',
      },
      name: {
        type: 'string',
        description: 'Name of the milestone',
      },
      description: {
        type: 'string',
        description: 'Description of the milestone',
      },
      targetDate: {
        type: 'string',
        description: 'Target date for the milestone (ISO date format)',
      },
      sortOrder: {
        type: 'number',
        description: 'Sort order for the milestone',
      },
    },
    required: ['projectId', 'name'],
  },
  output_schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      description: { type: 'string' },
      targetDate: { type: 'string' },
      sortOrder: { type: 'number' },
    },
  },
};

/**
 * Tool definition for updating a project milestone
 */
export const updateProjectMilestoneToolDefinition: MCPToolDefinition = {
  name: 'linear_updateProjectMilestone',
  description: 'Update an existing project milestone',
  input_schema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the milestone to update',
      },
      name: {
        type: 'string',
        description: 'New name of the milestone',
      },
      description: {
        type: 'string',
        description: 'New description of the milestone',
      },
      targetDate: {
        type: 'string',
        description: 'New target date for the milestone (ISO date format)',
      },
      sortOrder: {
        type: 'number',
        description: 'New sort order for the milestone',
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
      targetDate: { type: 'string' },
      sortOrder: { type: 'number' },
    },
  },
};
