import { LinearService } from '../../services/linear-service.js';
import {
  isGetProjectLabelsArgs,
  isCreateProjectLabelArgs,
  isUpdateProjectLabelArgs,
} from '../type-guards.js';

/**
 * Handler for linear_getProjectLabels tool
 */
export function handleGetProjectLabels(linearService: LinearService) {
  return async (args: unknown) => {
    if (!isGetProjectLabelsArgs(args)) {
      throw new Error('Invalid arguments for getProjectLabels');
    }

    return await linearService.getProjectLabels(args.includeArchived);
  };
}

/**
 * Handler for linear_createProjectLabel tool
 */
export function handleCreateProjectLabel(linearService: LinearService) {
  return async (args: unknown) => {
    if (!isCreateProjectLabelArgs(args)) {
      throw new Error('Invalid arguments for createProjectLabel');
    }

    return await linearService.createProjectLabel(args);
  };
}

/**
 * Handler for linear_updateProjectLabel tool
 */
export function handleUpdateProjectLabel(linearService: LinearService) {
  return async (args: unknown) => {
    if (!isUpdateProjectLabelArgs(args)) {
      throw new Error('Invalid arguments for updateProjectLabel');
    }

    const { id, ...updateData } = args;
    return await linearService.updateProjectLabel(id, updateData);
  };
}
