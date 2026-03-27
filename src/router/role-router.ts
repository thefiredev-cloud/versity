import type { RoleConfig } from '../core/role-registry.js';
import { ROLE_REGISTRY } from '../core/role-registry.js';

export interface RoutedRequest {
  roleId: string;
  roleConfig: RoleConfig;
  task: string;
  context?: Record<string, unknown>;
}

export function routeRequest(roleId: string, task: string, context?: Record<string, unknown>): RoutedRequest {
  const roleConfig = ROLE_REGISTRY[roleId];
  if (!roleConfig) {
    throw new Error(`Unknown role: ${roleId}. Available roles: ${Object.keys(ROLE_REGISTRY).join(', ')}`);
  }
  return { roleId, roleConfig, task, context };
}

export function detectRole(task: string): string {
  const taskLower = task.toLowerCase();
  if (taskLower.match(/contract|nda|legal|law|compliance|clause|liability/)) return 'lawyer';
  if (taskLower.match(/accounting|bookkeep|expense|tax|invoice|balance sheet/)) return 'accountant';
  if (taskLower.match(/financial model|valuation|dcf|revenue|forecast|cap table/)) return 'analyst';
  if (taskLower.match(/market|campaign|seo|content|social|email|copy|brand/)) return 'marketer';
  if (taskLower.match(/hire|recruit|job description|candidate|interview|offer letter/)) return 'recruiter';
  if (taskLower.match(/design|brand|figma|ui|visual|logo|color/)) return 'designer';
  if (taskLower.match(/process|sop|workflow|procedure|operations/)) return 'ops';
  if (taskLower.match(/schedule|calendar|meeting|email|research|prep/)) return 'ea';
  return 'ea'; // default fallback
}
