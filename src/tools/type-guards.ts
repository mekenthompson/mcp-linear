/**
 * Type guard for linear_getIssues tool arguments
 */
export function isGetIssuesArgs(args: unknown): args is { limit?: number } {
  return (
    typeof args === 'object' &&
    args !== null &&
    (!('limit' in args) || typeof (args as { limit: number }).limit === 'number')
  );
}

/**
 * Type guard for linear_getIssueById tool arguments
 */
export function isGetIssueByIdArgs(args: unknown): args is { id: string } {
  return (
    typeof args === 'object' &&
    args !== null &&
    'id' in args &&
    typeof (args as { id: string }).id === 'string'
  );
}

/**
 * Type guard for linear_searchIssues tool arguments
 */
export function isSearchIssuesArgs(args: unknown): args is {
  query?: string;
  teamId?: string;
  assigneeId?: string;
  projectId?: string;
  states?: string[];
  limit?: number;
} {
  // Check if args is an object
  if (typeof args !== 'object' || args === null) {
    console.error('searchIssues args is not an object or is null');
    return false;
  }

  // Check query
  if ('query' in args && typeof (args as { query: unknown }).query !== 'string') {
    console.error('searchIssues query is not a string');
    return false;
  }

  // Check teamId
  if ('teamId' in args && typeof (args as { teamId: unknown }).teamId !== 'string') {
    console.error('searchIssues teamId is not a string');
    return false;
  }

  // Check assigneeId
  if ('assigneeId' in args && typeof (args as { assigneeId: unknown }).assigneeId !== 'string') {
    console.error('searchIssues assigneeId is not a string');
    return false;
  }

  // Check projectId
  if ('projectId' in args && typeof (args as { projectId: unknown }).projectId !== 'string') {
    console.error('searchIssues projectId is not a string');
    return false;
  }

  // Check states
  if ('states' in args) {
    const states = (args as { states: unknown }).states;
    if (!Array.isArray(states)) {
      console.error('searchIssues states is not an array');
      return false;
    }

    // Check that all elements in the array are strings
    for (let i = 0; i < states.length; i++) {
      if (typeof states[i] !== 'string') {
        console.error(`searchIssues states[${i}] is not a string`);
        return false;
      }
    }
  }

  // Check limit
  if ('limit' in args && typeof (args as { limit: unknown }).limit !== 'number') {
    console.error('searchIssues limit is not a number');
    return false;
  }

  return true;
}

/**
 * Type guard for linear_createIssue tool arguments
 */
export function isCreateIssueArgs(args: unknown): args is {
  title: string;
  description?: string;
  teamId: string;
  assigneeId?: string;
  priority?: number;
  projectId?: string;
  cycleId?: string;
  estimate?: number;
  dueDate?: string;
  labelIds?: string[];
  parentId?: string;
  subscriberIds?: string[];
  stateId?: string;
  templateId?: string;
  sortOrder?: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'title' in args &&
    typeof (args as { title: string }).title === 'string' &&
    'teamId' in args &&
    typeof (args as { teamId: string }).teamId === 'string' &&
    (!('assigneeId' in args) || typeof (args as { assigneeId: string }).assigneeId === 'string') &&
    (!('priority' in args) || typeof (args as { priority: number }).priority === 'number') &&
    (!('projectId' in args) || typeof (args as { projectId: string }).projectId === 'string') &&
    (!('cycleId' in args) || typeof (args as { cycleId: string }).cycleId === 'string') &&
    (!('estimate' in args) || typeof (args as { estimate: number }).estimate === 'number') &&
    (!('dueDate' in args) || typeof (args as { dueDate: string }).dueDate === 'string') &&
    (!('labelIds' in args) || Array.isArray((args as { labelIds: string[] }).labelIds)) &&
    (!('parentId' in args) || typeof (args as { parentId: string }).parentId === 'string') &&
    (!('subscriberIds' in args) ||
      Array.isArray((args as { subscriberIds: string[] }).subscriberIds)) &&
    (!('stateId' in args) || typeof (args as { stateId: string }).stateId === 'string') &&
    (!('templateId' in args) || typeof (args as { templateId: string }).templateId === 'string') &&
    (!('sortOrder' in args) || typeof (args as { sortOrder: number }).sortOrder === 'number')
  );
}

/**
 * Type guard for linear_updateIssue tool arguments
 */
export function isUpdateIssueArgs(args: unknown): args is {
  id: string;
  title?: string;
  description?: string;
  stateId?: string;
  priority?: number;
  projectId?: string;
  assigneeId?: string;
  cycleId?: string;
  estimate?: number;
  dueDate?: string;
  labelIds?: string[];
  addedLabelIds?: string[];
  removedLabelIds?: string[];
  parentId?: string;
  subscriberIds?: string[];
  teamId?: string;
  sortOrder?: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'id' in args &&
    typeof (args as { id: string }).id === 'string' &&
    (!('title' in args) || typeof (args as { title: string }).title === 'string') &&
    (!('description' in args) ||
      typeof (args as { description: string }).description === 'string') &&
    (!('stateId' in args) || typeof (args as { stateId: string }).stateId === 'string') &&
    (!('priority' in args) || typeof (args as { priority: number }).priority === 'number') &&
    (!('projectId' in args) || typeof (args as { projectId: string }).projectId === 'string') &&
    (!('assigneeId' in args) || typeof (args as { assigneeId: string }).assigneeId === 'string') &&
    (!('cycleId' in args) || typeof (args as { cycleId: string }).cycleId === 'string') &&
    (!('estimate' in args) || typeof (args as { estimate: number }).estimate === 'number') &&
    (!('dueDate' in args) || typeof (args as { dueDate: string }).dueDate === 'string') &&
    (!('labelIds' in args) || Array.isArray((args as { labelIds: string[] }).labelIds)) &&
    (!('addedLabelIds' in args) ||
      Array.isArray((args as { addedLabelIds: string[] }).addedLabelIds)) &&
    (!('removedLabelIds' in args) ||
      Array.isArray((args as { removedLabelIds: string[] }).removedLabelIds)) &&
    (!('parentId' in args) || typeof (args as { parentId: string }).parentId === 'string') &&
    (!('subscriberIds' in args) ||
      Array.isArray((args as { subscriberIds: string[] }).subscriberIds)) &&
    (!('teamId' in args) || typeof (args as { teamId: string }).teamId === 'string') &&
    (!('sortOrder' in args) || typeof (args as { sortOrder: number }).sortOrder === 'number')
  );
}

/**
 * Type guard for linear_createComment tool arguments
 */
export function isCreateCommentArgs(args: unknown): args is {
  issueId: string;
  body: string;
  parentId?: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'issueId' in args &&
    typeof (args as { issueId: string }).issueId === 'string' &&
    'body' in args &&
    typeof (args as { body: string }).body === 'string' &&
    (!('parentId' in args) || typeof (args as { parentId: string }).parentId === 'string')
  );
}

/**
 * Type guard for linear_getProjects tool arguments
 */
export function isGetProjectsArgs(args: unknown): args is {
  limit?: number;
  cursor?: string;
  teamId?: string;
  includeArchived?: boolean;
} {
  return typeof args === 'object' && args !== null;
}

/**
 * Type guard for linear_getProjectById tool arguments
 */
export function isGetProjectByIdArgs(args: unknown): args is {
  id: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'id' in args &&
    typeof (args as { id: string }).id === 'string'
  );
}

/**
 * Type guard for linear_searchProjects tool arguments
 */
export function isSearchProjectsArgs(args: unknown): args is {
  query: string;
  teamId?: string;
  state?: string;
  limit?: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'query' in args &&
    typeof (args as { query: string }).query === 'string'
  );
}

/**
 * Type guard for linear_getProjectByUrl tool arguments
 */
export function isGetProjectByUrlArgs(args: unknown): args is {
  url: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'url' in args &&
    typeof (args as { url: string }).url === 'string'
  );
}

/**
 * Type guard for linear_createProjectWithInitiative tool arguments
 */
export function isCreateProjectWithInitiativeArgs(args: unknown): args is {
  name: string;
  description?: string;
  teamIds: string[];
  initiativeId: string;
  icon?: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'name' in args &&
    typeof (args as { name: string }).name === 'string' &&
    'teamIds' in args &&
    Array.isArray((args as { teamIds: string[] }).teamIds) &&
    'initiativeId' in args &&
    typeof (args as { initiativeId: string }).initiativeId === 'string'
  );
}

/**
 * Type guard for linear_bulkCreateProjects tool arguments
 */
export function isBulkCreateProjectsArgs(args: unknown): args is {
  projects: Array<{
    name: string;
    description?: string;
    teamIds: string[];
    icon?: string;
    initiativeId?: string;
  }>;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'projects' in args &&
    Array.isArray((args as { projects: unknown[] }).projects)
  );
}

/**
 * Type guard for linear_createProject tool arguments
 */
export function isCreateProjectArgs(args: unknown): args is {
  name: string;
  description?: string;
  content?: string;
  teamIds: string[];
  state?: string;
  icon?: string;
  leadId?: string;
  memberIds?: string[];
  labelIds?: string[];
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'name' in args &&
    typeof (args as { name: string }).name === 'string' &&
    'teamIds' in args &&
    Array.isArray((args as { teamIds: string[] }).teamIds)
  );
}

/**
 * Type guard for linear_addIssueLabel tool arguments
 */
export function isAddIssueLabelArgs(args: unknown): args is {
  issueId: string;
  labelId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'issueId' in args &&
    typeof (args as { issueId: string }).issueId === 'string' &&
    'labelId' in args &&
    typeof (args as { labelId: string }).labelId === 'string'
  );
}

/**
 * Type guard for linear_removeIssueLabel tool arguments
 */
export function isRemoveIssueLabelArgs(args: unknown): args is {
  issueId: string;
  labelId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'issueId' in args &&
    typeof (args as { issueId: string }).issueId === 'string' &&
    'labelId' in args &&
    typeof (args as { labelId: string }).labelId === 'string'
  );
}

/**
 * Type guard for linear_assignIssue tool arguments
 */
export function isAssignIssueArgs(args: unknown): args is {
  issueId: string;
  assigneeId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'issueId' in args &&
    typeof (args as { issueId: string }).issueId === 'string' &&
    'assigneeId' in args &&
    typeof (args as { assigneeId: string }).assigneeId === 'string'
  );
}

/**
 * Type guard for linear_subscribeToIssue tool arguments
 */
export function isSubscribeToIssueArgs(args: unknown): args is {
  issueId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'issueId' in args &&
    typeof (args as { issueId: string }).issueId === 'string'
  );
}

/**
 * Type guard for linear_convertIssueToSubtask tool arguments
 */
export function isConvertIssueToSubtaskArgs(args: unknown): args is {
  issueId: string;
  parentIssueId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'issueId' in args &&
    typeof (args as { issueId: string }).issueId === 'string' &&
    'parentIssueId' in args &&
    typeof (args as { parentIssueId: string }).parentIssueId === 'string'
  );
}

/**
 * Type guard for linear_createIssueRelation tool arguments
 */
export function isCreateIssueRelationArgs(args: unknown): args is {
  issueId: string;
  relatedIssueId: string;
  type: 'blocks' | 'blocked_by' | 'related' | 'duplicate' | 'duplicate_of';
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'issueId' in args &&
    typeof (args as { issueId: string }).issueId === 'string' &&
    'relatedIssueId' in args &&
    typeof (args as { relatedIssueId: string }).relatedIssueId === 'string' &&
    'type' in args &&
    typeof (args as { type: string }).type === 'string' &&
    ['blocks', 'blocked_by', 'related', 'duplicate', 'duplicate_of'].includes(
      (args as { type: string }).type,
    )
  );
}

/**
 * Type guard for linear_archiveIssue tool arguments
 */
export function isArchiveIssueArgs(args: unknown): args is {
  issueId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'issueId' in args &&
    typeof (args as { issueId: string }).issueId === 'string'
  );
}

/**
 * Type guard for linear_setIssuePriority tool arguments
 */
export function isSetIssuePriorityArgs(args: unknown): args is {
  issueId: string;
  priority: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'issueId' in args &&
    typeof (args as { issueId: string }).issueId === 'string' &&
    'priority' in args &&
    typeof (args as { priority: number }).priority === 'number' &&
    [0, 1, 2, 3, 4].includes((args as { priority: number }).priority)
  );
}

/**
 * Type guard for linear_transferIssue tool arguments
 */
export function isTransferIssueArgs(args: unknown): args is {
  issueId: string;
  teamId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'issueId' in args &&
    typeof (args as { issueId: string }).issueId === 'string' &&
    'teamId' in args &&
    typeof (args as { teamId: string }).teamId === 'string'
  );
}

/**
 * Type guard for linear_duplicateIssue tool arguments
 */
export function isDuplicateIssueArgs(args: unknown): args is {
  issueId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'issueId' in args &&
    typeof (args as { issueId: string }).issueId === 'string'
  );
}

/**
 * Type guard for linear_getIssueHistory tool arguments
 */
export function isGetIssueHistoryArgs(args: unknown): args is {
  issueId: string;
  limit?: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'issueId' in args &&
    typeof (args as { issueId: string }).issueId === 'string' &&
    (!('limit' in args) || typeof (args as { limit: number }).limit === 'number')
  );
}

/**
 * Type guard for linear_getComments tool arguments
 */
export function isGetCommentsArgs(args: unknown): args is {
  issueId: string;
  limit?: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'issueId' in args &&
    typeof (args as { issueId: string }).issueId === 'string' &&
    (!('limit' in args) || typeof (args as { limit: number }).limit === 'number')
  );
}

/**
 * Type guard for linear_updateProject tool arguments
 */
export function isUpdateProjectArgs(args: unknown): args is {
  id: string;
  name?: string;
  description?: string;
  content?: string;
  statusId?: string;
  icon?: string;
  leadId?: string;
  memberIds?: string[];
  labelIds?: string[];
  teamIds?: string[];
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'id' in args &&
    typeof (args as { id: string }).id === 'string' &&
    (!('name' in args) || typeof (args as { name: string }).name === 'string') &&
    (!('description' in args) ||
      typeof (args as { description: string }).description === 'string') &&
    (!('content' in args) || typeof (args as { content: string }).content === 'string') &&
    (!('statusId' in args) || typeof (args as { statusId: string }).statusId === 'string') &&
    (!('icon' in args) || typeof (args as { icon: string }).icon === 'string') &&
    (!('leadId' in args) || typeof (args as { leadId: string }).leadId === 'string') &&
    (!('memberIds' in args) || Array.isArray((args as { memberIds: string[] }).memberIds)) &&
    (!('labelIds' in args) || Array.isArray((args as { labelIds: string[] }).labelIds)) &&
    (!('teamIds' in args) || Array.isArray((args as { teamIds: string[] }).teamIds))
  );
}

/**
 * Type guard for linear_addIssueToProject tool arguments
 */
export function isAddIssueToProjectArgs(args: unknown): args is {
  issueId: string;
  projectId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'issueId' in args &&
    typeof (args as { issueId: string }).issueId === 'string' &&
    'projectId' in args &&
    typeof (args as { projectId: string }).projectId === 'string'
  );
}

/**
 * Type guard for linear_getProjectIssues tool arguments
 */
export function isGetProjectIssuesArgs(args: unknown): args is {
  projectId: string;
  limit?: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'projectId' in args &&
    typeof (args as { projectId: string }).projectId === 'string' &&
    (!('limit' in args) || typeof (args as { limit: number }).limit === 'number')
  );
}

/**
 * Type guard for linear_getInitiativeById tool arguments
 */
export function isGetInitiativeByIdArgs(args: unknown): args is {
  id: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'id' in args &&
    typeof (args as { id: string }).id === 'string'
  );
}

/**
 * Type guard for linear_createInitiative tool arguments
 */
export function isCreateInitiativeArgs(args: unknown): args is {
  name: string;
  description?: string;
  content?: string;
  icon?: string;
  color?: string;
  status?: string;
  targetDate?: string;
  ownerId?: string;
  sortOrder?: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'name' in args &&
    typeof (args as { name: string }).name === 'string' &&
    (!('description' in args) ||
      typeof (args as { description: string }).description === 'string') &&
    (!('content' in args) || typeof (args as { content: string }).content === 'string') &&
    (!('icon' in args) || typeof (args as { icon: string }).icon === 'string') &&
    (!('color' in args) || typeof (args as { color: string }).color === 'string') &&
    (!('status' in args) || typeof (args as { status: string }).status === 'string') &&
    (!('targetDate' in args) || typeof (args as { targetDate: string }).targetDate === 'string') &&
    (!('ownerId' in args) || typeof (args as { ownerId: string }).ownerId === 'string') &&
    (!('sortOrder' in args) || typeof (args as { sortOrder: number }).sortOrder === 'number')
  );
}

/**
 * Type guard for linear_updateInitiative tool arguments
 */
export function isUpdateInitiativeArgs(args: unknown): args is {
  id: string;
  name?: string;
  description?: string;
  content?: string;
  icon?: string;
  color?: string;
  status?: string;
  targetDate?: string;
  ownerId?: string;
  sortOrder?: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'id' in args &&
    typeof (args as { id: string }).id === 'string' &&
    (!('name' in args) || typeof (args as { name: string }).name === 'string') &&
    (!('description' in args) ||
      typeof (args as { description: string }).description === 'string') &&
    (!('content' in args) || typeof (args as { content: string }).content === 'string') &&
    (!('icon' in args) || typeof (args as { icon: string }).icon === 'string') &&
    (!('color' in args) || typeof (args as { color: string }).color === 'string') &&
    (!('status' in args) || typeof (args as { status: string }).status === 'string') &&
    (!('targetDate' in args) || typeof (args as { targetDate: string }).targetDate === 'string') &&
    (!('ownerId' in args) || typeof (args as { ownerId: string }).ownerId === 'string') &&
    (!('sortOrder' in args) || typeof (args as { sortOrder: number }).sortOrder === 'number')
  );
}

/**
 * Type guard for linear_archiveInitiative tool arguments
 */
export function isArchiveInitiativeArgs(args: unknown): args is {
  id: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'id' in args &&
    typeof (args as { id: string }).id === 'string'
  );
}

/**
 * Type guard for linear_unarchiveInitiative tool arguments
 */
export function isUnarchiveInitiativeArgs(args: unknown): args is {
  id: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'id' in args &&
    typeof (args as { id: string }).id === 'string'
  );
}

/**
 * Type guard for linear_deleteInitiative tool arguments
 */
export function isDeleteInitiativeArgs(args: unknown): args is {
  id: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'id' in args &&
    typeof (args as { id: string }).id === 'string'
  );
}

/**
 * Type guard for linear_getInitiativeProjects tool arguments
 */
export function isGetInitiativeProjectsArgs(args: unknown): args is {
  initiativeId: string;
  limit?: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'initiativeId' in args &&
    typeof (args as { initiativeId: string }).initiativeId === 'string' &&
    (!('limit' in args) || typeof (args as { limit: number }).limit === 'number')
  );
}

/**
 * Type guard for linear_addProjectToInitiative tool arguments
 */
export function isAddProjectToInitiativeArgs(args: unknown): args is {
  projectId: string;
  initiativeId: string;
  sortOrder?: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'projectId' in args &&
    typeof (args as { projectId: string }).projectId === 'string' &&
    'initiativeId' in args &&
    typeof (args as { initiativeId: string }).initiativeId === 'string' &&
    (!('sortOrder' in args) || typeof (args as { sortOrder: number }).sortOrder === 'number')
  );
}

/**
 * Type guard for linear_removeProjectFromInitiative tool arguments
 */
export function isRemoveProjectFromInitiativeArgs(args: unknown): args is {
  projectId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'projectId' in args &&
    typeof (args as { projectId: string }).projectId === 'string'
  );
}

/**
 * Type guard for linear_getCycles tool arguments
 */
export function isGetCyclesArgs(args: unknown): args is {
  teamId?: string;
  limit?: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    (!('teamId' in args) || typeof (args as { teamId: string }).teamId === 'string') &&
    (!('limit' in args) || typeof (args as { limit: number }).limit === 'number')
  );
}

/**
 * Type guard for linear_getActiveCycle tool arguments
 */
export function isGetActiveCycleArgs(args: unknown): args is {
  teamId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'teamId' in args &&
    typeof (args as { teamId: string }).teamId === 'string'
  );
}

/**
 * Type guard for linear_addIssueToCycle tool arguments
 */
export function isAddIssueToCycleArgs(args: unknown): args is {
  issueId: string;
  cycleId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'issueId' in args &&
    typeof (args as { issueId: string }).issueId === 'string' &&
    'cycleId' in args &&
    typeof (args as { cycleId: string }).cycleId === 'string'
  );
}

/**
 * Type guard for linear_getWorkflowStates tool arguments
 */
export function isGetWorkflowStatesArgs(args: unknown): args is {
  teamId: string;
  includeArchived?: boolean;
} {
  if (
    typeof args !== 'object' ||
    args === null ||
    !('teamId' in args) ||
    typeof (args as { teamId: string }).teamId !== 'string'
  ) {
    return false;
  }

  if (
    'includeArchived' in args &&
    typeof (args as { includeArchived: boolean }).includeArchived !== 'boolean'
  ) {
    return false;
  }

  return true;
}

/**
 * Type guard for linear_searchInitiatives tool arguments
 */
export function isSearchInitiativesInput(args: unknown): args is {
  query: string;
  includeArchived?: boolean;
  limit?: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'query' in args &&
    typeof (args as { query: string }).query === 'string' &&
    (!('includeArchived' in args) ||
      typeof (args as { includeArchived: boolean }).includeArchived === 'boolean') &&
    (!('limit' in args) || typeof (args as { limit: number }).limit === 'number')
  );
}

/**
 * Type guard for linear_getInitiatives tool arguments
 */
export function isGetInitiativesInput(args: unknown): args is {
  includeArchived?: boolean;
  limit?: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    (!('includeArchived' in args) ||
      typeof (args as { includeArchived: boolean }).includeArchived === 'boolean') &&
    (!('limit' in args) || typeof (args as { limit: number }).limit === 'number')
  );
}

/**
 * Type guard for linear_getInitiativeById tool arguments
 */
export function isGetInitiativeByIdInput(args: unknown): args is {
  initiativeId: string;
  includeProjects?: boolean;
  includeSubInitiatives?: boolean;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'initiativeId' in args &&
    typeof (args as { initiativeId: string }).initiativeId === 'string' &&
    (!('includeProjects' in args) ||
      typeof (args as { includeProjects: boolean }).includeProjects === 'boolean') &&
    (!('includeSubInitiatives' in args) ||
      typeof (args as { includeSubInitiatives: boolean }).includeSubInitiatives === 'boolean')
  );
}

/**
 * Type guard for linear_createInitiative tool arguments
 */
export function isCreateInitiativeInput(args: unknown): args is {
  name: string;
  description?: string;
  content?: string;
  ownerId?: string;
  targetDate?: string;
  status?: string;
  icon?: string;
  color?: string;
  parentInitiativeId?: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'name' in args &&
    typeof (args as { name: string }).name === 'string' &&
    (!('description' in args) ||
      typeof (args as { description: string }).description === 'string') &&
    (!('content' in args) || typeof (args as { content: string }).content === 'string') &&
    (!('ownerId' in args) || typeof (args as { ownerId: string }).ownerId === 'string') &&
    (!('targetDate' in args) || typeof (args as { targetDate: string }).targetDate === 'string') &&
    (!('status' in args) || typeof (args as { status: string }).status === 'string') &&
    (!('icon' in args) || typeof (args as { icon: string }).icon === 'string') &&
    (!('color' in args) || typeof (args as { color: string }).color === 'string') &&
    (!('parentInitiativeId' in args) ||
      typeof (args as { parentInitiativeId: string }).parentInitiativeId === 'string')
  );
}

/**
 * Type guard for linear_updateInitiative tool arguments
 */
export function isUpdateInitiativeInput(args: unknown): args is {
  initiativeId: string;
  name?: string;
  description?: string;
  content?: string;
  ownerId?: string;
  targetDate?: string;
  status?: string;
  icon?: string;
  color?: string;
  parentInitiativeId?: string | null;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'initiativeId' in args &&
    typeof (args as { initiativeId: string }).initiativeId === 'string' &&
    (!('name' in args) || typeof (args as { name: string }).name === 'string') &&
    (!('description' in args) ||
      typeof (args as { description: string }).description === 'string') &&
    (!('content' in args) || typeof (args as { content: string }).content === 'string') &&
    (!('ownerId' in args) || typeof (args as { ownerId: string }).ownerId === 'string') &&
    (!('targetDate' in args) || typeof (args as { targetDate: string }).targetDate === 'string') &&
    (!('status' in args) || typeof (args as { status: string }).status === 'string') &&
    (!('icon' in args) || typeof (args as { icon: string }).icon === 'string') &&
    (!('color' in args) || typeof (args as { color: string }).color === 'string') &&
    (!('parentInitiativeId' in args) ||
      (args as { parentInitiativeId: string | null }).parentInitiativeId === null ||
      typeof (args as { parentInitiativeId: string }).parentInitiativeId === 'string')
  );
}

/**
 * Type guard for linear_archiveInitiative tool arguments
 */
export function isArchiveInitiativeInput(args: unknown): args is {
  initiativeId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'initiativeId' in args &&
    typeof (args as { initiativeId: string }).initiativeId === 'string'
  );
}

/**
 * Type guard for linear_deleteInitiative tool arguments
 */
export function isDeleteInitiativeInput(args: unknown): args is {
  initiativeId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'initiativeId' in args &&
    typeof (args as { initiativeId: string }).initiativeId === 'string'
  );
}

/**
 * Type guard for linear_getInitiativeProjects tool arguments
 */
export function isGetInitiativeProjectsInput(args: unknown): args is {
  initiativeId: string;
  includeArchived?: boolean;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'initiativeId' in args &&
    typeof (args as { initiativeId: string }).initiativeId === 'string' &&
    (!('includeArchived' in args) ||
      typeof (args as { includeArchived: boolean }).includeArchived === 'boolean')
  );
}

/**
 * Type guard for linear_addProjectToInitiative tool arguments
 */
export function isAddProjectToInitiativeInput(args: unknown): args is {
  initiativeId: string;
  projectId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'initiativeId' in args &&
    typeof (args as { initiativeId: string }).initiativeId === 'string' &&
    'projectId' in args &&
    typeof (args as { projectId: string }).projectId === 'string'
  );
}

/**
 * Type guard for linear_removeProjectFromInitiative tool arguments
 */
export function isRemoveProjectFromInitiativeInput(args: unknown): args is {
  initiativeId: string;
  projectId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'initiativeId' in args &&
    typeof (args as { initiativeId: string }).initiativeId === 'string' &&
    'projectId' in args &&
    typeof (args as { projectId: string }).projectId === 'string'
  );
}

/**
 * Type guard for linear_getSubInitiatives tool arguments
 */
export function isGetSubInitiativesInput(args: unknown): args is {
  initiativeId: string;
  includeArchived?: boolean;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'initiativeId' in args &&
    typeof (args as { initiativeId: string }).initiativeId === 'string' &&
    (!('includeArchived' in args) ||
      typeof (args as { includeArchived: boolean }).includeArchived === 'boolean')
  );
}

// ==================== PROJECT LABEL TYPE GUARDS ====================

/**
 * Type guard for linear_getProjectLabels tool arguments
 */
export function isGetProjectLabelsArgs(args: unknown): args is {
  includeArchived?: boolean;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    (!('includeArchived' in args) ||
      typeof (args as { includeArchived: boolean }).includeArchived === 'boolean')
  );
}

/**
 * Type guard for linear_createProjectLabel tool arguments
 */
export function isCreateProjectLabelArgs(args: unknown): args is {
  name: string;
  color?: string;
  description?: string;
  isGroup?: boolean;
  parentId?: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'name' in args &&
    typeof (args as { name: string }).name === 'string' &&
    (!('color' in args) || typeof (args as { color: string }).color === 'string') &&
    (!('description' in args) ||
      typeof (args as { description: string }).description === 'string') &&
    (!('isGroup' in args) || typeof (args as { isGroup: boolean }).isGroup === 'boolean') &&
    (!('parentId' in args) || typeof (args as { parentId: string }).parentId === 'string')
  );
}

/**
 * Type guard for linear_updateProjectLabel tool arguments
 */
export function isUpdateProjectLabelArgs(args: unknown): args is {
  id: string;
  name?: string;
  color?: string;
  description?: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'id' in args &&
    typeof (args as { id: string }).id === 'string' &&
    (!('name' in args) || typeof (args as { name: string }).name === 'string') &&
    (!('color' in args) || typeof (args as { color: string }).color === 'string') &&
    (!('description' in args) ||
      typeof (args as { description: string }).description === 'string')
  );
}

// ==================== MILESTONE TYPE GUARDS ====================

/**
 * Type guard for linear_getProjectMilestones tool arguments
 */
export function isGetProjectMilestonesArgs(args: unknown): args is {
  projectId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'projectId' in args &&
    typeof (args as { projectId: string }).projectId === 'string'
  );
}

/**
 * Type guard for linear_createProjectMilestone tool arguments
 */
export function isCreateProjectMilestoneArgs(args: unknown): args is {
  projectId: string;
  name: string;
  description?: string;
  targetDate?: string;
  sortOrder?: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'projectId' in args &&
    typeof (args as { projectId: string }).projectId === 'string' &&
    'name' in args &&
    typeof (args as { name: string }).name === 'string' &&
    (!('description' in args) ||
      typeof (args as { description: string }).description === 'string') &&
    (!('targetDate' in args) ||
      typeof (args as { targetDate: string }).targetDate === 'string') &&
    (!('sortOrder' in args) || typeof (args as { sortOrder: number }).sortOrder === 'number')
  );
}

/**
 * Type guard for linear_updateProjectMilestone tool arguments
 */
export function isUpdateProjectMilestoneArgs(args: unknown): args is {
  id: string;
  name?: string;
  description?: string;
  targetDate?: string;
  sortOrder?: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'id' in args &&
    typeof (args as { id: string }).id === 'string' &&
    (!('name' in args) || typeof (args as { name: string }).name === 'string') &&
    (!('description' in args) ||
      typeof (args as { description: string }).description === 'string') &&
    (!('targetDate' in args) ||
      typeof (args as { targetDate: string }).targetDate === 'string') &&
    (!('sortOrder' in args) || typeof (args as { sortOrder: number }).sortOrder === 'number')
  );
}

// ==================== ENTITY LINK TYPE GUARDS ====================

/**
 * Type guard for linear_addEntityLink tool arguments
 */
export function isAddEntityLinkArgs(args: unknown): args is {
  label: string;
  url: string;
  projectId?: string;
  initiativeId?: string;
  sortOrder?: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'label' in args &&
    typeof (args as { label: string }).label === 'string' &&
    'url' in args &&
    typeof (args as { url: string }).url === 'string' &&
    (!('projectId' in args) || typeof (args as { projectId: string }).projectId === 'string') &&
    (!('initiativeId' in args) ||
      typeof (args as { initiativeId: string }).initiativeId === 'string') &&
    (!('sortOrder' in args) || typeof (args as { sortOrder: number }).sortOrder === 'number')
  );
}

/**
 * Type guard for linear_getEntityLinks tool arguments
 */
export function isGetEntityLinksArgs(args: unknown): args is {
  projectId?: string;
  initiativeId?: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    (!('projectId' in args) || typeof (args as { projectId: string }).projectId === 'string') &&
    (!('initiativeId' in args) ||
      typeof (args as { initiativeId: string }).initiativeId === 'string')
  );
}

/**
 * Type guard for linear_deleteEntityLink tool arguments
 */
export function isDeleteEntityLinkArgs(args: unknown): args is {
  id: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'id' in args &&
    typeof (args as { id: string }).id === 'string'
  );
}

// ==================== CUSTOMER NEED TYPE GUARDS ====================

/**
 * Type guard for linear_createCustomerNeed tool arguments
 */
export function isCreateCustomerNeedArgs(args: unknown): args is {
  body?: string;
  customerId?: string;
  customerExternalId?: string;
  issueId?: string;
  projectId?: string;
  priority?: number;
  attachmentUrl?: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    (!('body' in args) || typeof (args as { body: string }).body === 'string') &&
    (!('customerId' in args) ||
      typeof (args as { customerId: string }).customerId === 'string') &&
    (!('customerExternalId' in args) ||
      typeof (args as { customerExternalId: string }).customerExternalId === 'string') &&
    (!('issueId' in args) || typeof (args as { issueId: string }).issueId === 'string') &&
    (!('projectId' in args) || typeof (args as { projectId: string }).projectId === 'string') &&
    (!('priority' in args) || typeof (args as { priority: number }).priority === 'number') &&
    (!('attachmentUrl' in args) ||
      typeof (args as { attachmentUrl: string }).attachmentUrl === 'string')
  );
}

/**
 * Type guard for linear_getCustomerNeeds tool arguments
 */
export function isGetCustomerNeedsArgs(args: unknown): args is {
  issueId?: string;
  projectId?: string;
  limit?: number;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    (!('issueId' in args) || typeof (args as { issueId: string }).issueId === 'string') &&
    (!('projectId' in args) || typeof (args as { projectId: string }).projectId === 'string') &&
    (!('limit' in args) || typeof (args as { limit: number }).limit === 'number')
  );
}

// ==================== PROJECT ATTACHMENT TYPE GUARDS ====================

/**
 * Type guard for linear_createProjectAttachment tool arguments
 */
export function isCreateProjectAttachmentArgs(args: unknown): args is {
  projectId: string;
  title: string;
  url: string;
  subtitle?: string;
  metadata?: Record<string, unknown>;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'projectId' in args &&
    typeof (args as { projectId: string }).projectId === 'string' &&
    'title' in args &&
    typeof (args as { title: string }).title === 'string' &&
    'url' in args &&
    typeof (args as { url: string }).url === 'string' &&
    (!('subtitle' in args) || typeof (args as { subtitle: string }).subtitle === 'string') &&
    (!('metadata' in args) || typeof (args as { metadata: object }).metadata === 'object')
  );
}

/**
 * Type guard for linear_getProjectAttachments tool arguments
 */
export function isGetProjectAttachmentsArgs(args: unknown): args is {
  projectId: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'projectId' in args &&
    typeof (args as { projectId: string }).projectId === 'string'
  );
}

/**
 * Type guard for linear_deleteProjectAttachment tool arguments
 */
export function isDeleteProjectAttachmentArgs(args: unknown): args is {
  id: string;
} {
  return (
    typeof args === 'object' &&
    args !== null &&
    'id' in args &&
    typeof (args as { id: string }).id === 'string'
  );
}
