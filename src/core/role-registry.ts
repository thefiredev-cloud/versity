export interface RoleConfig {
  name: string;
  description: string;
  capabilities: string[];
  systemPromptFile: string;
  tools?: string[];
}

export const ROLE_REGISTRY: Record<string, RoleConfig> = {
  lawyer: {
    name: 'Junior Lawyer',
    description: 'Contract review, legal research, compliance, and document drafting',
    capabilities: ['contract-review', 'legal-research', 'nda-drafting', 'compliance-checklist', 'risk-flagging'],
    systemPromptFile: 'lawyer.md',
    tools: ['document-parser', 'case-law-search'],
  },
  accountant: {
    name: 'Accountant',
    description: 'Bookkeeping, financial statements, expense categorization, tax prep support',
    capabilities: ['bookkeeping', 'financial-statements', 'expense-categorization', 'budget-analysis', 'tax-prep'],
    systemPromptFile: 'accountant.md',
    tools: ['spreadsheet-engine', 'quickbooks-api'],
  },
  analyst: {
    name: 'Financial Analyst',
    description: 'Financial modeling, valuation, market research, investor materials',
    capabilities: ['financial-modeling', 'valuation', 'market-research', 'pitch-deck', 'cap-table'],
    systemPromptFile: 'analyst.md',
    tools: ['data-apis', 'model-templates'],
  },
  marketer: {
    name: 'Marketer',
    description: 'Content creation, campaign planning, SEO, social media, email sequences',
    capabilities: ['content-writing', 'campaign-planning', 'seo-briefs', 'social-content', 'email-sequences'],
    systemPromptFile: 'marketer.md',
    tools: ['seo-tools', 'content-planner'],
  },
  recruiter: {
    name: 'Recruiter',
    description: 'Job descriptions, candidate screening, interview questions, offer letters',
    capabilities: ['job-descriptions', 'candidate-screening', 'interview-questions', 'offer-letters', 'outreach'],
    systemPromptFile: 'recruiter.md',
    tools: ['linkedin-api', 'ats-integration'],
  },
  designer: {
    name: 'Designer',
    description: 'Brand specs, design briefs, UI copy, asset direction',
    capabilities: ['brand-briefs', 'design-specs', 'ui-copy', 'asset-direction', 'style-guides'],
    systemPromptFile: 'designer.md',
    tools: ['figma-api', 'brand-guidelines'],
  },
  ops: {
    name: 'Operations Analyst',
    description: 'SOPs, process documentation, workflow audits, efficiency analysis',
    capabilities: ['sop-writing', 'process-docs', 'workflow-audit', 'efficiency-analysis'],
    systemPromptFile: 'ops.md',
  },
  ea: {
    name: 'Executive Assistant',
    description: 'Scheduling, research, deck prep, correspondence',
    capabilities: ['scheduling', 'research', 'deck-prep', 'correspondence', 'meeting-notes'],
    systemPromptFile: 'ea.md',
    tools: ['calendar-api', 'email-api'],
  },
};
