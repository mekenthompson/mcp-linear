import { LinearService } from '../../services/linear-service.js';
import {
  isGetProjectMilestonesArgs,
  isCreateProjectMilestoneArgs,
  isUpdateProjectMilestoneArgs,
} from '../type-guards.js';

/**
 * Handler for linear_getProjectMilestones tool
 */
export function handleGetProjectMilestones(linearService: LinearService) {
  return async (args: unknown) => {
    if (!isGetProjectMilestonesArgs(args)) {
      throw new Error('Invalid arguments for getProjectMilestones');
    }

    return await linearService.getProjectMilestones(args.projectId);
  };
}

/**
 * Handler for linear_createProjectMilestone tool
 */
export function handleCreateProjectMilestone(linearService: LinearService) {
  return async (args: unknown) => {
    if (!isCreateProjectMilestoneArgs(args)) {
      throw new Error('Invalid arguments for createProjectMilestone');
    }

    return await linearService.createProjectMilestone(args);
  };
}

/**
 * Handler for linear_updateProjectMilestone tool
 */
export function handleUpdateProjectMilestone(linearService: LinearService) {
  return async (args: unknown) => {
    if (!isUpdateProjectMilestoneArgs(args)) {
      throw new Error('Invalid arguments for updateProjectMilestone');
    }

    const { id, ...updateData } = args;
    return await linearService.updateProjectMilestone(id, updateData);
  };
}
