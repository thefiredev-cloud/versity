import type { FastifyPluginAsync } from 'fastify';

export const requestRoutes: FastifyPluginAsync = async (app) => {
  app.post('/request', async (request, reply) => {
    // TODO: Route to appropriate role module, execute with context, return response
    return reply.code(202).send({ request_id: 'placeholder', status: 'processing', role: 'unknown' });
  });
};
