import { LinearClient } from '@linear/sdk';
import { LinearService } from '../../services/linear-service.js';

const TEST_TEAM_ID = '1be78878-e938-47e0-b887-fbd1c85b9602';

describe('Milestone Integration Tests', () => {
  let linearService: LinearService;
  let createdProjectId: string | null = null;
  let createdMilestoneId: string | null = null;

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

  it('should create a project for milestone tests', async () => {
    if (!process.env.LINEAR_API_KEY) {
      return;
    }

    const project = await linearService.createProject({
      name: `Milestone Test Project ${Date.now()}`,
      description: 'Project for milestone integration tests',
      teamIds: [TEST_TEAM_ID],
    });

    expect(project).toBeDefined();
    createdProjectId = project.id;
  });

  it('should create a milestone on the project', async () => {
    if (!process.env.LINEAR_API_KEY || !createdProjectId) {
      return;
    }

    const targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0];

    const milestone = await linearService.createProjectMilestone({
      projectId: createdProjectId,
      name: `Test Milestone ${Date.now()}`,
      description: 'Integration test milestone',
      targetDate,
    });

    expect(milestone).toBeDefined();
    expect(milestone.id).toBeDefined();
    createdMilestoneId = milestone.id;
  });

  it('should update the milestone', async () => {
    if (!process.env.LINEAR_API_KEY || !createdMilestoneId) {
      return;
    }

    const updatedMilestone = await linearService.updateProjectMilestone(
      createdMilestoneId,
      {
        name: `Updated Test Milestone ${Date.now()}`,
        description: 'Updated integration test milestone',
      },
    );

    expect(updatedMilestone).toBeDefined();
    expect(updatedMilestone.name).toContain('Updated Test Milestone');
  });

  it('should list milestones and verify created milestone exists', async () => {
    if (!process.env.LINEAR_API_KEY || !createdProjectId || !createdMilestoneId) {
      return;
    }

    const milestones = await linearService.getProjectMilestones(createdProjectId);

    expect(milestones).toBeDefined();
    expect(Array.isArray(milestones)).toBe(true);
    const found = milestones.find((m) => m.id === createdMilestoneId);
    expect(found).toBeDefined();
  });
});
