import type { FastifyPluginAsync } from 'fastify';
import { ROLE_REGISTRY } from '../../core/role-registry.js';

export const roleRoutes: FastifyPluginAsync = async (app) => {
  app.get('/roles', async () => ({
    roles: Object.entries(ROLE_REGISTRY).map(([id, config]) => ({
      id,
      name: config.name,
      description: config.description,
      capabilities: config.capabilities,
    })),
  }));
};
