import {
  isAddIssueToProjectArgs,
  isBulkCreateProjectsArgs,
  isCreateProjectArgs,
  isCreateProjectWithInitiativeArgs,
  isGetProjectByIdArgs,
  isGetProjectByUrlArgs,
  isGetProjectIssuesArgs,
  isGetProjectsArgs,
  isGetStaleProjectsArgs,
  isSearchProjectsArgs,
  isUpdateProjectArgs,
} from '../type-guards.js';
import { LinearService } from '../../services/linear-service.js';
import { logError } from '../../utils/config.js';

/**
 * Handler for getting projects
 */
export function handleGetProjects(linearService: LinearService) {
  return async (args: unknown) => {
    try {
      if (!isGetProjectsArgs(args)) {
        throw new Error('Invalid arguments for getProjects');
      }

      return await linearService.getProjects(args);
    } catch (error) {
      logError('Error getting projects', error);
      throw error;
    }
  };
}

/**
 * Handler for getting a project by ID
 */
export function handleGetProjectById(linearService: LinearService) {
  return async (args: unknown) => {
    try {
      if (!isGetProjectByIdArgs(args)) {
        throw new Error('Invalid arguments for getProjectById');
      }

      return await linearService.getProjectById(args.id);
    } catch (error) {
      logError('Error getting project by ID', error);
      throw error;
    }
  };
}

/**
 * Handler for creating a project
 */
export function handleCreateProject(linearService: LinearService) {
  return async (args: unknown) => {
    try {
      if (!isCreateProjectArgs(args)) {
        throw new Error('Invalid arguments for createProject');
      }

      return await linearService.createProject(args);
    } catch (error) {
      logError('Error creating project', error);
      throw error;
    }
  };
}

/**
 * Handler for updating a project
 */
export function handleUpdateProject(linearService: LinearService) {
  return async (args: unknown) => {
    try {
      if (!isUpdateProjectArgs(args)) {
        throw new Error('Invalid arguments for updateProject');
      }

      return await linearService.updateProject(args);
    } catch (error) {
      logError('Error updating project', error);
      throw error;
    }
  };
}

/**
 * Handler for adding an issue to a project
 */
export function handleAddIssueToProject(linearService: LinearService) {
  return async (args: unknown) => {
    try {
      if (!isAddIssueToProjectArgs(args)) {
        throw new Error('Invalid arguments for addIssueToProject');
      }

      return await linearService.addIssueToProject(args.issueId, args.projectId);
    } catch (error) {
      logError('Error adding issue to project', error);
      throw error;
    }
  };
}

/**
 * Handler for getting issues in a project
 */
export function handleGetProjectIssues(linearService: LinearService) {
  return async (args: unknown) => {
    try {
      if (!isGetProjectIssuesArgs(args)) {
        throw new Error('Invalid arguments for getProjectIssues');
      }

      return await linearService.getProjectIssues(args.projectId, args.limit);
    } catch (error) {
      logError('Error getting project issues', error);
      throw error;
    }
  };
}

/**
 * Handler for searching projects
 */
export function handleSearchProjects(linearService: LinearService) {
  return async (args: unknown) => {
    try {
      if (!isSearchProjectsArgs(args)) {
        throw new Error('Invalid arguments for searchProjects');
      }

      return await linearService.searchProjects(args);
    } catch (error) {
      logError('Error searching projects', error);
      throw error;
    }
  };
}

/**
 * Handler for getting a project by URL
 */
export function handleGetProjectByUrl(linearService: LinearService) {
  return async (args: unknown) => {
    try {
      if (!isGetProjectByUrlArgs(args)) {
        throw new Error('Invalid arguments for getProjectByUrl');
      }

      return await linearService.getProjectByUrl(args.url);
    } catch (error) {
      logError('Error getting project by URL', error);
      throw error;
    }
  };
}

/**
 * Handler for creating a project with initiative
 */
export function handleCreateProjectWithInitiative(linearService: LinearService) {
  return async (args: unknown) => {
    try {
      if (!isCreateProjectWithInitiativeArgs(args)) {
        throw new Error('Invalid arguments for createProjectWithInitiative');
      }

      return await linearService.createProjectWithInitiative(args);
    } catch (error) {
      logError('Error creating project with initiative', error);
      throw error;
    }
  };
}

/**
 * Handler for bulk creating projects
 */
export function handleBulkCreateProjects(linearService: LinearService) {
  return async (args: unknown) => {
    try {
      if (!isBulkCreateProjectsArgs(args)) {
        throw new Error('Invalid arguments for bulkCreateProjects');
      }

      return await linearService.bulkCreateProjects(args.projects);
    } catch (error) {
      logError('Error bulk creating projects', error);
      throw error;
    }
  };
}

/**
 * Handler for getting project statuses
 */
export function handleGetProjectStatuses(linearService: LinearService) {
  return async () => {
    try {
      return await linearService.getProjectStatuses();
    } catch (error) {
      logError('Error getting project statuses', error);
      throw error;
    }
  };
}

/**
 * Handler for finding stale projects
 */
export function handleGetStaleProjects(linearService: LinearService) {
  return async (args: unknown) => {
    try {
      // Coerce undefined/null to empty object for validation
      const normalizedArgs = args ?? {};
      if (!isGetStaleProjectsArgs(normalizedArgs)) {
        throw new Error('Invalid arguments for getStaleProjects');
      }

      return await linearService.getStaleProjects(normalizedArgs);
    } catch (error) {
      logError('Error getting stale projects', error);
      throw error;
    }
  };
}
