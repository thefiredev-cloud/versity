import type { FastifyPluginAsync } from 'fastify';

export const contextRoutes: FastifyPluginAsync = async (app) => {
  app.post('/context', async (request, reply) => {
    // TODO: Process and embed uploaded documents into vector store
    return reply.code(202).send({ status: 'processing', documents_queued: 0 });
  });

  app.delete('/context', async (request, reply) => {
    // TODO: Clear tenant's vector store namespace
    return reply.send({ status: 'cleared' });
  });
};
