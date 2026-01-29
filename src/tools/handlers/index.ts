import { LinearService } from '../../services/linear-service.js';
import {
  handleGetIssues,
  handleGetIssueById,
  handleSearchIssues,
  handleCreateIssue,
  handleUpdateIssue,
  handleCreateComment,
  handleAddIssueLabel,
  handleRemoveIssueLabel,
  // New Issue Management handlers
  handleAssignIssue,
  handleSubscribeToIssue,
  handleConvertIssueToSubtask,
  handleCreateIssueRelation,
  handleArchiveIssue,
  handleSetIssuePriority,
  handleTransferIssue,
  handleDuplicateIssue,
  handleGetIssueHistory,
  // Comment Management handlers
  handleGetComments,
} from './issue-handlers.js';
import {
  handleGetProjects,
  handleGetProjectById,
  handleCreateProject,
  // Project Management handlers
  handleUpdateProject,
  handleAddIssueToProject,
  handleGetProjectIssues,
  handleSearchProjects,
  handleGetProjectByUrl,
  handleCreateProjectWithInitiative,
  handleBulkCreateProjects,
  handleGetProjectStatuses,
  handleGetStaleProjects,
} from './project-handlers.js';
import { handleGetTeams, handleGetWorkflowStates } from './team-handlers.js';
import {
  handleGetViewer,
  handleGetOrganization,
  handleGetUsers,
  handleGetLabels,
} from './user-handlers.js';
import {
  // Cycle Management handlers
  handleGetCycles,
  handleGetActiveCycle,
  handleAddIssueToCycle,
} from './cycle-handlers.js';
import {
  // Initiative Management handlers
  searchInitiativesHandler,
  getInitiativesHandler,
  getInitiativeByIdHandler,
  createInitiativeHandler,
  updateInitiativeHandler,
  archiveInitiativeHandler,
  unarchiveInitiativeHandler,
  deleteInitiativeHandler,
  getInitiativeProjectsHandler,
  addProjectToInitiativeHandler,
  removeProjectFromInitiativeHandler,
  getSubInitiativesHandler,
} from './initiative-handlers.js';
import {
  handleGetProjectLabels,
  handleCreateProjectLabel,
  handleUpdateProjectLabel,
} from './project-label-handlers.js';
import {
  handleGetProjectMilestones,
  handleCreateProjectMilestone,
  handleUpdateProjectMilestone,
} from './milestone-handlers.js';
import {
  handleAddEntityLink,
  handleGetEntityLinks,
  handleDeleteEntityLink,
} from './entity-link-handlers.js';
import {
  handleCreateCustomerNeed,
  handleGetCustomerNeeds,
} from './customer-need-handlers.js';
import {
  handleCreateProjectAttachment,
  handleGetProjectAttachments,
  handleDeleteProjectAttachment,
} from './project-attachment-handlers.js';

/**
 * Registers all tool handlers for the MCP Linear
 * @param linearService The Linear service instance
 * @returns A map of tool name to handler function
 */
export function registerToolHandlers(linearService: LinearService) {
  return {
    // User tools
    linear_getViewer: handleGetViewer(linearService),
    linear_getOrganization: handleGetOrganization(linearService),
    linear_getUsers: handleGetUsers(linearService),
    linear_getLabels: handleGetLabels(linearService),

    // Team tools
    linear_getTeams: handleGetTeams(linearService),
    linear_getWorkflowStates: handleGetWorkflowStates(linearService),

    // Project tools
    linear_getProjects: handleGetProjects(linearService),
    linear_getProjectById: handleGetProjectById(linearService),
    linear_createProject: handleCreateProject(linearService),

    // Project Management tools
    linear_updateProject: handleUpdateProject(linearService),
    linear_addIssueToProject: handleAddIssueToProject(linearService),
    linear_getProjectIssues: handleGetProjectIssues(linearService),
    linear_searchProjects: handleSearchProjects(linearService),
    linear_getProjectByUrl: handleGetProjectByUrl(linearService),
    linear_createProjectWithInitiative: handleCreateProjectWithInitiative(linearService),
    linear_bulkCreateProjects: handleBulkCreateProjects(linearService),
    linear_getProjectStatuses: handleGetProjectStatuses(linearService),
    linear_getStaleProjects: handleGetStaleProjects(linearService),

    // Cycle Management tools
    linear_getCycles: handleGetCycles(linearService),
    linear_getActiveCycle: handleGetActiveCycle(linearService),
    linear_addIssueToCycle: handleAddIssueToCycle(linearService),

    // Initiative Management tools
    linear_searchInitiatives: searchInitiativesHandler(linearService),
    linear_getInitiatives: getInitiativesHandler(linearService),
    linear_getInitiativeById: getInitiativeByIdHandler(linearService),
    linear_createInitiative: createInitiativeHandler(linearService),
    linear_updateInitiative: updateInitiativeHandler(linearService),
    linear_archiveInitiative: archiveInitiativeHandler(linearService),
    linear_unarchiveInitiative: unarchiveInitiativeHandler(linearService),
    linear_deleteInitiative: deleteInitiativeHandler(linearService),
    linear_getInitiativeProjects: getInitiativeProjectsHandler(linearService),
    linear_addProjectToInitiative: addProjectToInitiativeHandler(linearService),
    linear_removeProjectFromInitiative: removeProjectFromInitiativeHandler(linearService),
    linear_getSubInitiatives: getSubInitiativesHandler(linearService),

    // Project Label tools
    linear_getProjectLabels: handleGetProjectLabels(linearService),
    linear_createProjectLabel: handleCreateProjectLabel(linearService),
    linear_updateProjectLabel: handleUpdateProjectLabel(linearService),

    // Milestone tools
    linear_getProjectMilestones: handleGetProjectMilestones(linearService),
    linear_createProjectMilestone: handleCreateProjectMilestone(linearService),
    linear_updateProjectMilestone: handleUpdateProjectMilestone(linearService),

    // Entity Link tools
    linear_addEntityLink: handleAddEntityLink(linearService),
    linear_getEntityLinks: handleGetEntityLinks(linearService),
    linear_deleteEntityLink: handleDeleteEntityLink(linearService),

    // Customer Need tools
    linear_createCustomerNeed: handleCreateCustomerNeed(linearService),
    linear_getCustomerNeeds: handleGetCustomerNeeds(linearService),

    // Project Attachment tools
    linear_createProjectAttachment: handleCreateProjectAttachment(linearService),
    linear_getProjectAttachments: handleGetProjectAttachments(linearService),
    linear_deleteProjectAttachment: handleDeleteProjectAttachment(linearService),

    // Issue tools
    linear_getIssues: handleGetIssues(linearService),
    linear_getIssueById: handleGetIssueById(linearService),
    linear_searchIssues: handleSearchIssues(linearService),
    linear_createIssue: handleCreateIssue(linearService),
    linear_updateIssue: handleUpdateIssue(linearService),
    linear_createComment: handleCreateComment(linearService),
    linear_addIssueLabel: handleAddIssueLabel(linearService),
    linear_removeIssueLabel: handleRemoveIssueLabel(linearService),

    // New Issue Management tools
    linear_assignIssue: handleAssignIssue(linearService),
    linear_subscribeToIssue: handleSubscribeToIssue(linearService),
    linear_convertIssueToSubtask: handleConvertIssueToSubtask(linearService),
    linear_createIssueRelation: handleCreateIssueRelation(linearService),
    linear_archiveIssue: handleArchiveIssue(linearService),
    linear_setIssuePriority: handleSetIssuePriority(linearService),
    linear_transferIssue: handleTransferIssue(linearService),
    linear_duplicateIssue: handleDuplicateIssue(linearService),
    linear_getIssueHistory: handleGetIssueHistory(linearService),

    // Comment Management tools
    linear_getComments: handleGetComments(linearService),
  };
}

// Export all handlers individually
export {
  handleGetIssues,
  handleGetIssueById,
  handleSearchIssues,
  handleCreateIssue,
  handleUpdateIssue,
  handleCreateComment,
  handleAddIssueLabel,
  handleRemoveIssueLabel,
  handleGetProjects,
  handleGetProjectById,
  handleCreateProject,
  handleGetTeams,
  handleGetWorkflowStates,
  handleGetViewer,
  handleGetOrganization,
  handleGetUsers,
  handleGetLabels,

  // New Issue Management handlers
  handleAssignIssue,
  handleSubscribeToIssue,
  handleConvertIssueToSubtask,
  handleCreateIssueRelation,
  handleArchiveIssue,
  handleSetIssuePriority,
  handleTransferIssue,
  handleDuplicateIssue,
  handleGetIssueHistory,

  // Comment Management handlers
  handleGetComments,

  // Project Management handlers
  handleUpdateProject,
  handleAddIssueToProject,
  handleGetProjectIssues,
  handleSearchProjects,
  handleGetProjectByUrl,
  handleCreateProjectWithInitiative,
  handleBulkCreateProjects,
  handleGetStaleProjects,

  // Cycle Management handlers
  handleGetCycles,
  handleGetActiveCycle,
  handleAddIssueToCycle,

  // Initiative Management handlers
  searchInitiativesHandler,
  getInitiativesHandler,
  getInitiativeByIdHandler,
  createInitiativeHandler,
  updateInitiativeHandler,
  archiveInitiativeHandler,
  unarchiveInitiativeHandler,
  deleteInitiativeHandler,
  getInitiativeProjectsHandler,
  addProjectToInitiativeHandler,
  removeProjectFromInitiativeHandler,
  getSubInitiativesHandler,

  // Project Label handlers
  handleGetProjectLabels,
  handleCreateProjectLabel,
  handleUpdateProjectLabel,

  // Milestone handlers
  handleGetProjectMilestones,
  handleCreateProjectMilestone,
  handleUpdateProjectMilestone,

  // Entity Link handlers
  handleAddEntityLink,
  handleGetEntityLinks,
  handleDeleteEntityLink,

  // Customer Need handlers
  handleCreateCustomerNeed,
  handleGetCustomerNeeds,

  // Project Attachment handlers
  handleCreateProjectAttachment,
  handleGetProjectAttachments,
  handleDeleteProjectAttachment,
};
