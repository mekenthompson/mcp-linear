import { MCPToolDefinition } from '../../types.js';
import {
  getIssuesToolDefinition,
  getIssueByIdToolDefinition,
  searchIssuesToolDefinition,
  createIssueToolDefinition,
  updateIssueToolDefinition,
  createCommentToolDefinition,
  addIssueLabelToolDefinition,
  removeIssueLabelToolDefinition,
  // New Issue Management tools
  assignIssueToolDefinition,
  subscribeToIssueToolDefinition,
  convertIssueToSubtaskToolDefinition,
  createIssueRelationToolDefinition,
  archiveIssueToolDefinition,
  setIssuePriorityToolDefinition,
  transferIssueToolDefinition,
  duplicateIssueToolDefinition,
  getIssueHistoryToolDefinition,
  // Comment Management tools
  getCommentsToolDefinition,
} from './issue-tools.js';
import {
  getProjectsToolDefinition,
  getProjectByIdToolDefinition,
  createProjectToolDefinition,
  // Project Management tools
  updateProjectToolDefinition,
  addIssueToProjectToolDefinition,
  getProjectIssuesToolDefinition,
  searchProjectsToolDefinition,
  getProjectByUrlToolDefinition,
  createProjectWithInitiativeToolDefinition,
  bulkCreateProjectsToolDefinition,
  getProjectStatusesToolDefinition,
} from './project-tools.js';
import { getTeamsToolDefinition, getWorkflowStatesToolDefinition } from './team-tools.js';
import {
  getViewerToolDefinition,
  getOrganizationToolDefinition,
  getUsersToolDefinition,
  getLabelsToolDefinition,
} from './user-tools.js';
import {
  // Cycle Management tools
  getCyclesToolDefinition,
  getActiveCycleToolDefinition,
  addIssueToCycleToolDefinition,
} from './cycle-tools.js';
import { initiativeToolDefinitions } from './initiative-tools.js';
import {
  getProjectLabelsToolDefinition,
  createProjectLabelToolDefinition,
  updateProjectLabelToolDefinition,
} from './project-label-tools.js';
import {
  getProjectMilestonesToolDefinition,
  createProjectMilestoneToolDefinition,
  updateProjectMilestoneToolDefinition,
} from './milestone-tools.js';
import {
  addEntityLinkToolDefinition,
  getEntityLinksToolDefinition,
  deleteEntityLinkToolDefinition,
} from './entity-link-tools.js';
import {
  createCustomerNeedToolDefinition,
  getCustomerNeedsToolDefinition,
} from './customer-need-tools.js';
import {
  createProjectAttachmentToolDefinition,
  getProjectAttachmentsToolDefinition,
  deleteProjectAttachmentToolDefinition,
} from './project-attachment-tools.js';

// All tool definitions
export const allToolDefinitions: MCPToolDefinition[] = [
  // User tools
  getViewerToolDefinition,
  getOrganizationToolDefinition,
  getUsersToolDefinition,
  getLabelsToolDefinition,

  // Team tools
  getTeamsToolDefinition,
  getWorkflowStatesToolDefinition,

  // Project tools
  getProjectsToolDefinition,
  getProjectByIdToolDefinition,
  createProjectToolDefinition,

  // Project Management tools
  updateProjectToolDefinition,
  addIssueToProjectToolDefinition,
  getProjectIssuesToolDefinition,
  searchProjectsToolDefinition,
  getProjectByUrlToolDefinition,
  createProjectWithInitiativeToolDefinition,
  bulkCreateProjectsToolDefinition,
  getProjectStatusesToolDefinition,

  // Cycle Management tools
  getCyclesToolDefinition,
  getActiveCycleToolDefinition,
  addIssueToCycleToolDefinition,

  // Initiative Management tools
  ...initiativeToolDefinitions,

  // Project Label tools
  getProjectLabelsToolDefinition,
  createProjectLabelToolDefinition,
  updateProjectLabelToolDefinition,

  // Milestone tools
  getProjectMilestonesToolDefinition,
  createProjectMilestoneToolDefinition,
  updateProjectMilestoneToolDefinition,

  // Entity Link tools
  addEntityLinkToolDefinition,
  getEntityLinksToolDefinition,
  deleteEntityLinkToolDefinition,

  // Customer Need tools
  createCustomerNeedToolDefinition,
  getCustomerNeedsToolDefinition,

  // Project Attachment tools
  createProjectAttachmentToolDefinition,
  getProjectAttachmentsToolDefinition,
  deleteProjectAttachmentToolDefinition,

  // Issue tools
  getIssuesToolDefinition,
  getIssueByIdToolDefinition,
  searchIssuesToolDefinition,
  createIssueToolDefinition,
  updateIssueToolDefinition,
  createCommentToolDefinition,
  addIssueLabelToolDefinition,
  removeIssueLabelToolDefinition,

  // New Issue Management tools
  assignIssueToolDefinition,
  subscribeToIssueToolDefinition,
  convertIssueToSubtaskToolDefinition,
  createIssueRelationToolDefinition,
  archiveIssueToolDefinition,
  setIssuePriorityToolDefinition,
  transferIssueToolDefinition,
  duplicateIssueToolDefinition,
  getIssueHistoryToolDefinition,

  // Comment Management tools
  getCommentsToolDefinition,
];

// Export all tool definitions individually
export {
  getIssuesToolDefinition,
  getIssueByIdToolDefinition,
  searchIssuesToolDefinition,
  createIssueToolDefinition,
  updateIssueToolDefinition,
  createCommentToolDefinition,
  addIssueLabelToolDefinition,
  removeIssueLabelToolDefinition,
  getProjectsToolDefinition,
  getProjectByIdToolDefinition,
  createProjectToolDefinition,
  getTeamsToolDefinition,
  getWorkflowStatesToolDefinition,
  getViewerToolDefinition,
  getOrganizationToolDefinition,
  getUsersToolDefinition,
  getLabelsToolDefinition,

  // New Issue Management tools
  assignIssueToolDefinition,
  subscribeToIssueToolDefinition,
  convertIssueToSubtaskToolDefinition,
  createIssueRelationToolDefinition,
  archiveIssueToolDefinition,
  setIssuePriorityToolDefinition,
  transferIssueToolDefinition,
  duplicateIssueToolDefinition,
  getIssueHistoryToolDefinition,

  // Comment Management tools
  getCommentsToolDefinition,

  // Project Management tools
  updateProjectToolDefinition,
  addIssueToProjectToolDefinition,
  getProjectIssuesToolDefinition,
  searchProjectsToolDefinition,
  getProjectByUrlToolDefinition,
  createProjectWithInitiativeToolDefinition,
  bulkCreateProjectsToolDefinition,
  getProjectStatusesToolDefinition,

  // Cycle Management tools
  getCyclesToolDefinition,
  getActiveCycleToolDefinition,
  addIssueToCycleToolDefinition,

  // Project Label tools
  getProjectLabelsToolDefinition,
  createProjectLabelToolDefinition,
  updateProjectLabelToolDefinition,

  // Milestone tools
  getProjectMilestonesToolDefinition,
  createProjectMilestoneToolDefinition,
  updateProjectMilestoneToolDefinition,

  // Entity Link tools
  addEntityLinkToolDefinition,
  getEntityLinksToolDefinition,
  deleteEntityLinkToolDefinition,

  // Customer Need tools
  createCustomerNeedToolDefinition,
  getCustomerNeedsToolDefinition,

  // Project Attachment tools
  createProjectAttachmentToolDefinition,
  getProjectAttachmentsToolDefinition,
  deleteProjectAttachmentToolDefinition,
};
