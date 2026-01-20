import { MCPToolDefinition } from '../../types.js';

/**
 * Tool definition for creating a project attachment
 */
export const createProjectAttachmentToolDefinition: MCPToolDefinition = {
  name: 'linear_createProjectAttachment',
  description: 'Attach a document/file to a project',
  input_schema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
        description: 'ID of the project to attach to',
      },
      title: {
        type: 'string',
        description: 'Title of the attachment',
      },
      url: {
        type: 'string',
        description: 'URL of the attachment',
      },
      subtitle: {
        type: 'string',
        description: 'Subtitle/description of the attachment',
      },
      metadata: {
        type: 'object',
        description: 'Additional metadata for the attachment',
      },
    },
    required: ['projectId', 'title', 'url'],
  },
  output_schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      title: { type: 'string' },
      subtitle: { type: 'string' },
      url: { type: 'string' },
      createdAt: { type: 'string' },
    },
  },
};

/**
 * Tool definition for getting project attachments
 */
export const getProjectAttachmentsToolDefinition: MCPToolDefinition = {
  name: 'linear_getProjectAttachments',
  description: 'List attachments on a project',
  input_schema: {
    type: 'object',
    properties: {
      projectId: {
        type: 'string',
        description: 'ID of the project to get attachments for',
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
        title: { type: 'string' },
        subtitle: { type: 'string' },
        url: { type: 'string' },
        createdAt: { type: 'string' },
      },
    },
  },
};

/**
 * Tool definition for deleting a project attachment
 */
export const deleteProjectAttachmentToolDefinition: MCPToolDefinition = {
  name: 'linear_deleteProjectAttachment',
  description: 'Remove an attachment from a project',
  input_schema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the attachment to delete',
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
