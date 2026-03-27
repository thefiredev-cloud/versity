import type { FastifyPluginAsync } from 'fastify';

export const historyRoutes: FastifyPluginAsync = async (app) => {
  app.get('/history', async () => ({ requests: [], total: 0 }));
};
