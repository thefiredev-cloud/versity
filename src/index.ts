import { createServer } from './api/server.js';
import { logger } from './utils/logger.js';

const PORT = parseInt(process.env.PORT ?? '3003', 10);
const HOST = process.env.HOST ?? '0.0.0.0';

async function main() {
  const server = await createServer();
  try {
    await server.listen({ port: PORT, host: HOST });
    logger.info(`Versity API running on http://${HOST}:${PORT}`);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
}

main();
