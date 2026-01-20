import { LinearClient } from '@linear/sdk';
import { LinearService } from '../../services/linear-service.js';

const TEST_TEAM_ID = '1be78878-e938-47e0-b887-fbd1c85b9602';

describe('Project Integration Tests', () => {
  let linearService: LinearService;
  let createdProjectId: string | null = null;

  beforeAll(() => {
    const apiKey = process.env.LINEAR_API_KEY;
    if (!apiKey) {
      return;
    }
    const client = new LinearClient({ apiKey });
    linearService = new LinearService(client);
  });

  afterAll(async () => {
    if (createdProjectId && linearService) {
      try {
        await linearService.archiveProject(createdProjectId);
      } catch (error) {
        console.log('Failed to cleanup project:', error);
      }
    }
  });

  it('should skip if LINEAR_API_KEY is not set', () => {
    if (!process.env.LINEAR_API_KEY) {
      console.log('Skipping - LINEAR_API_KEY not set');
      return;
    }
    expect(linearService).toBeDefined();
  });

  it('should create a project with leadId, memberIds, and labelIds', async () => {
    if (!process.env.LINEAR_API_KEY) {
      return;
    }

    const users = await linearService.getAllUsers();
    const leadId = users.length > 0 ? users[0].id : undefined;
    const memberIds = users.length > 1 ? [users[0].id, users[1].id] : undefined;

    const labels = await linearService.getProjectLabels();
    const labelIds = labels.length > 0 ? [labels[0].id] : undefined;

    const project = await linearService.createProject({
      name: `Integration Test Project ${Date.now()}`,
      description: 'Integration test project',
      teamIds: [TEST_TEAM_ID],
      leadId,
      memberIds,
      labelIds,
    });

    expect(project).toBeDefined();
    expect(project.id).toBeDefined();
    createdProjectId = project.id;
  });

  it('should update a project with new values', async () => {
    if (!process.env.LINEAR_API_KEY || !createdProjectId) {
      return;
    }

    const updatedProject = await linearService.updateProject({
      id: createdProjectId,
      name: `Updated Integration Test Project ${Date.now()}`,
      description: 'Updated integration test project',
    });

    expect(updatedProject).toBeDefined();
    expect(updatedProject.name).toContain('Updated Integration Test Project');
  });

  it('should fetch project and verify fields', async () => {
    if (!process.env.LINEAR_API_KEY || !createdProjectId) {
      return;
    }

    const project = await linearService.getProjectById(createdProjectId);

    expect(project).toBeDefined();
    expect(project.id).toBe(createdProjectId);
    expect(project.name).toContain('Updated Integration Test Project');
  });
});
