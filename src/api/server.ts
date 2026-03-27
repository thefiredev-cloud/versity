import Fastify from 'fastify';
import cors from '@fastify/cors';
import multipart from '@fastify/multipart';
import { requestRoutes } from './routes/request.js';
import { roleRoutes } from './routes/roles.js';
import { contextRoutes } from './routes/context.js';
import { historyRoutes } from './routes/history.js';

export async function createServer() {
  const app = Fastify({ logger: true });
  await app.register(cors, { origin: true });
  await app.register(multipart, { limits: { fileSize: 100 * 1024 * 1024 } }); // 100MB
  await app.register(requestRoutes, { prefix: '/api/v1' });
  await app.register(roleRoutes, { prefix: '/api/v1' });
  await app.register(contextRoutes, { prefix: '/api/v1' });
  await app.register(historyRoutes, { prefix: '/api/v1' });
  app.get('/health', async () => ({ status: 'ok', service: 'versity', version: '0.1.0' }));
  return app;
}
