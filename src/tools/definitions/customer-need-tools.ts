import { MCPToolDefinition } from '../../types.js';

/**
 * Tool definition for creating a customer need
 */
export const createCustomerNeedToolDefinition: MCPToolDefinition = {
  name: 'linear_createCustomerNeed',
  description: 'Link a customer request/need to an issue or project',
  input_schema: {
    type: 'object',
    properties: {
      body: {
        type: 'string',
        description: 'Description of the customer need',
      },
      customerId: {
        type: 'string',
        description: 'ID of the customer (mutually exclusive with customerExternalId)',
      },
      customerExternalId: {
        type: 'string',
        description: 'External ID of the customer (mutually exclusive with customerId)',
      },
      issueId: {
        type: 'string',
        description: 'ID of the issue to link the need to',
      },
      projectId: {
        type: 'string',
        description: 'ID of the project to link the need to',
      },
      priority: {
        type: 'number',
        description: 'Priority of the need (0 or 1)',
        enum: [0, 1],
      },
      attachmentUrl: {
        type: 'string',
        description: 'URL of an attachment for this need',
      },
    },
  },
  output_schema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      body: { type: 'string' },
      priority: { type: 'number' },
      customer: {
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
 * Tool definition for getting customer needs
 */
export const getCustomerNeedsToolDefinition: MCPToolDefinition = {
  name: 'linear_getCustomerNeeds',
  description: 'Query customer needs for issues or projects',
  input_schema: {
    type: 'object',
    properties: {
      issueId: {
        type: 'string',
        description: 'Filter by issue ID',
      },
      projectId: {
        type: 'string',
        description: 'Filter by project ID',
      },
      limit: {
        type: 'number',
        description: 'Maximum number of results to return (default: 50)',
      },
    },
  },
  output_schema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        body: { type: 'string' },
        priority: { type: 'number' },
        customer: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
          },
        },
        issue: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            title: { type: 'string' },
          },
        },
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
};
