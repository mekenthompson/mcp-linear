import { MCPToolDefinition } from '../../types.js';

/**
 * Tool definition for getting project labels
 */
export const getProjectLabelsToolDefinition: MCPToolDefinition = {
  name: 'linear_getProjectLabels',
  description: 'Get all project labels available in the workspace',
  input_schema: {
    type: 'object',
    properties: {
      includeArchived: {
        type: 'boolean',
        description: 'Include archived labels (default: false)',
      },
    },
  },
  output_schema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        color: { type: 'string' },
        description: { type: 'string' },
        isGroup: { type: 'boolean' },
        parentId: { type: 'string' },
      },
    },
  },
};

/**
 * Tool definition for creating a project label
 */
export const createProjectLabelToolDefinition: MCPToolDefinition = {
  name: 'linear_createProjectLabel',
  description: 'Create a new project label, optionally as part of a label group',
  input_schema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Name of the label',
      },
      color: {
        type: 'string',
        description: 'Color of the label (hex code)',
      },
      description: {
        type: 'string',
        description: 'Description of the label',
      },
      isGroup: {
        type: 'boolean',
        description: 'Whether this is a label group (container for other labels)',
      },
      parentId: {
        type: 'string',
        description: 'ID of the parent label group (if this is a child label)',
      },
    },
    required: ['name'],
  },
  output_schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      color: { type: 'string' },
      description: { type: 'string' },
      isGroup: { type: 'boolean' },
    },
  },
};

/**
 * Tool definition for updating a project label
 */
export const updateProjectLabelToolDefinition: MCPToolDefinition = {
  name: 'linear_updateProjectLabel',
  description: 'Update an existing project label',
  input_schema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the label to update',
      },
      name: {
        type: 'string',
        description: 'New name of the label',
      },
      color: {
        type: 'string',
        description: 'New color of the label (hex code)',
      },
      description: {
        type: 'string',
        description: 'New description of the label',
      },
    },
    required: ['id'],
  },
  output_schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      color: { type: 'string' },
      description: { type: 'string' },
    },
  },
};
