/**
 * Test configuration for integration tests
 * Uses the RDMP26 test team in Buildkite Linear workspace
 */

export const TEST_CONFIG = {
  // Test team: "TEST Roadmap" (RDMP26)
  teamId: '1be78878-e938-47e0-b887-fbd1c85b9602',
  teamKey: 'RDMP26',

  // Skip integration tests if no API key
  skipIfNoApiKey: () => {
    if (!process.env.LINEAR_API_KEY) {
      console.log('Skipping integration tests: LINEAR_API_KEY not set');
      return true;
    }
    return false;
  },

  // Generate unique names for test resources to avoid conflicts
  generateTestName: (prefix: string) => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    return `[TEST] ${prefix} ${timestamp}-${random}`;
  },
};
