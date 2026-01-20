import { LinearService } from '../../services/linear-service.js';
import {
  isCreateProjectAttachmentArgs,
  isGetProjectAttachmentsArgs,
  isDeleteProjectAttachmentArgs,
} from '../type-guards.js';

/**
 * Handler for linear_createProjectAttachment tool
 */
export function handleCreateProjectAttachment(linearService: LinearService) {
  return async (args: unknown) => {
    if (!isCreateProjectAttachmentArgs(args)) {
      throw new Error('Invalid arguments for createProjectAttachment');
    }

    return await linearService.createProjectAttachment(args);
  };
}

/**
 * Handler for linear_getProjectAttachments tool
 */
export function handleGetProjectAttachments(linearService: LinearService) {
  return async (args: unknown) => {
    if (!isGetProjectAttachmentsArgs(args)) {
      throw new Error('Invalid arguments for getProjectAttachments');
    }

    return await linearService.getProjectAttachments(args.projectId);
  };
}

/**
 * Handler for linear_deleteProjectAttachment tool
 */
export function handleDeleteProjectAttachment(linearService: LinearService) {
  return async (args: unknown) => {
    if (!isDeleteProjectAttachmentArgs(args)) {
      throw new Error('Invalid arguments for deleteProjectAttachment');
    }

    return await linearService.deleteProjectAttachment(args.id);
  };
}
