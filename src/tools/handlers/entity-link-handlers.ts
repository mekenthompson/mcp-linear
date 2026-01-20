import { LinearService } from '../../services/linear-service.js';
import {
  isAddEntityLinkArgs,
  isGetEntityLinksArgs,
  isDeleteEntityLinkArgs,
} from '../type-guards.js';

/**
 * Handler for linear_addEntityLink tool
 */
export function handleAddEntityLink(linearService: LinearService) {
  return async (args: unknown) => {
    if (!isAddEntityLinkArgs(args)) {
      throw new Error('Invalid arguments for addEntityLink');
    }

    return await linearService.createEntityLink(args);
  };
}

/**
 * Handler for linear_getEntityLinks tool
 */
export function handleGetEntityLinks(linearService: LinearService) {
  return async (args: unknown) => {
    if (!isGetEntityLinksArgs(args)) {
      throw new Error('Invalid arguments for getEntityLinks');
    }

    return await linearService.getEntityLinks(args.projectId, args.initiativeId);
  };
}

/**
 * Handler for linear_deleteEntityLink tool
 */
export function handleDeleteEntityLink(linearService: LinearService) {
  return async (args: unknown) => {
    if (!isDeleteEntityLinkArgs(args)) {
      throw new Error('Invalid arguments for deleteEntityLink');
    }

    return await linearService.deleteEntityLink(args.id);
  };
}
