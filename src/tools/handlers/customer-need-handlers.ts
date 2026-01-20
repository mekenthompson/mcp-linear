import { LinearService } from '../../services/linear-service.js';
import { isCreateCustomerNeedArgs, isGetCustomerNeedsArgs } from '../type-guards.js';

/**
 * Handler for linear_createCustomerNeed tool
 */
export function handleCreateCustomerNeed(linearService: LinearService) {
  return async (args: unknown) => {
    if (!isCreateCustomerNeedArgs(args)) {
      throw new Error('Invalid arguments for createCustomerNeed');
    }

    return await linearService.createCustomerNeed(args);
  };
}

/**
 * Handler for linear_getCustomerNeeds tool
 */
export function handleGetCustomerNeeds(linearService: LinearService) {
  return async (args: unknown) => {
    if (!isGetCustomerNeedsArgs(args)) {
      throw new Error('Invalid arguments for getCustomerNeeds');
    }

    return await linearService.getCustomerNeeds(args.issueId, args.projectId, args.limit);
  };
}
