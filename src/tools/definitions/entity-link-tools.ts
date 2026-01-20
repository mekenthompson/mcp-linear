import { MCPToolDefinition } from '../../types.js';

/**
 * Tool definition for adding an entity link to a project or initiative
 */
export const addEntityLinkToolDefinition: MCPToolDefinition = {
  name: 'linear_addEntityLink',
  description: 'Add a resource link to a project or initiative',
  input_schema: {
    type: 'object',
    properties: {
      label: {
        type: 'string',
        description: 'Label/title for the link',
      },
      url: {
        type: 'string',
        description: 'URL of the resource',
      },
      projectId: {
        type: 'string',
        description: 'ID of the project to add link to (mutually exclusive with initiativeId)',
      },
      initiativeId: {
        type: 'string',
        description: 'ID of the initiative to add link to (mutually exclusive with projectId)',
      },
      sortOrder: {
        type: 'number',
        description: 'Sort order for the link',
      },
    },
    required: ['label', 'url'],
  },
  output_schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      label: { type: 'string' },
      url: { type: 'string' },
      sortOrder: { type: 'number' },
    },
  },
};

/**
 * Tool definition for getting entity links
 */
export const getEntityLinksToolDefinition: MCPToolDefinition = {
  name: 'linear_getEntityLinks',
  description: 'Get resource links for a project or initiative',
  input_schema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
        description: 'ID of the project to get links for (mutually exclusive with initiativeId)',
      },
      initiativeId: {
        type: 'string',
        description: 'ID of the initiative to get links for (mutually exclusive with projectId)',
      },
    },
  },
  output_schema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        label: { type: 'string' },
        url: { type: 'string' },
        sortOrder: { type: 'number' },
      },
    },
  },
};

/**
 * Tool definition for deleting an entity link
 */
export const deleteEntityLinkToolDefinition: MCPToolDefinition = {
  name: 'linear_deleteEntityLink',
  description: 'Delete a resource link from a project or initiative',
  input_schema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the link to delete',
      },
    },
    required: ['id'],
  },
  output_schema: {
    type: 'object',
    properties: {
      success: { type: 'boolean' },
    },
  },
};
