import { LinearClient } from '@linear/sdk';
import { LinearService } from '../../services/linear-service.js';

const TEST_TEAM_ID = '1be78878-e938-47e0-b887-fbd1c85b9602';

describe('Links and Attachments Integration Tests', () => {
  let linearService: LinearService;
  let createdProjectId: string | null = null;
  let createdLinkId: string | null = null;
  let createdAttachmentId: string | null = null;

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

  it('should create a project for link/attachment tests', async () => {
    if (!process.env.LINEAR_API_KEY) {
      return;
    }

    const project = await linearService.createProject({
      name: `Links Attachments Test Project ${Date.now()}`,
      description: 'Project for links and attachments integration tests',
      teamIds: [TEST_TEAM_ID],
    });

    expect(project).toBeDefined();
    createdProjectId = project.id;
  });

  // Entity Link Tests
  it('should create an entity link on the project', async () => {
    if (!process.env.LINEAR_API_KEY || !createdProjectId) {
      return;
    }

    const link = await linearService.createEntityLink({
      label: 'Test Documentation',
      url: 'https://example.com/docs',
      projectId: createdProjectId,
    });

    expect(link).toBeDefined();
    expect(link.id).toBeDefined();
    expect(link.label).toBe('Test Documentation');
    createdLinkId = link.id;
  });

  it('should list entity links and find the created link', async () => {
    if (!process.env.LINEAR_API_KEY || !createdProjectId || !createdLinkId) {
      return;
    }

    const links = await linearService.getEntityLinks(createdProjectId);

    expect(links).toBeDefined();
    expect(Array.isArray(links)).toBe(true);
    const found = links.find((l) => l.id === createdLinkId);
    expect(found).toBeDefined();
    expect(found?.label).toBe('Test Documentation');
  });

  it('should delete the entity link', async () => {
    if (!process.env.LINEAR_API_KEY || !createdLinkId) {
      return;
    }

    const result = await linearService.deleteEntityLink(createdLinkId);

    expect(result).toBeDefined();
    expect(result.success).toBe(true);
    createdLinkId = null;
  });

  // Project Attachment Tests
  it('should create a project attachment', async () => {
    if (!process.env.LINEAR_API_KEY || !createdProjectId) {
      return;
    }

    const attachment = await linearService.createProjectAttachment({
      projectId: createdProjectId,
      title: 'Test Attachment',
      url: 'https://example.com/attachment.pdf',
      subtitle: 'A test attachment for integration testing',
    });

    expect(attachment).toBeDefined();
    expect(attachment.id).toBeDefined();
    expect(attachment.title).toBe('Test Attachment');
    createdAttachmentId = attachment.id;
  });

  it('should list project attachments and find the created attachment', async () => {
    if (!process.env.LINEAR_API_KEY || !createdProjectId || !createdAttachmentId) {
      return;
    }

    const attachments = await linearService.getProjectAttachments(createdProjectId);

    expect(attachments).toBeDefined();
    expect(Array.isArray(attachments)).toBe(true);
    const found = attachments.find((a) => a.id === createdAttachmentId);
    expect(found).toBeDefined();
    expect(found?.title).toBe('Test Attachment');
  });

  it('should delete the project attachment', async () => {
    if (!process.env.LINEAR_API_KEY || !createdAttachmentId) {
      return;
    }

    const result = await linearService.deleteProjectAttachment(createdAttachmentId);

    expect(result).toBeDefined();
    expect(result.success).toBe(true);
    createdAttachmentId = null;
  });
});
