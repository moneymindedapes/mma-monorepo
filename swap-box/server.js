import Fastify from 'fastify';
import health from './routes/health.js';

const fastify = new Fastify({ logger: true });

fastify.register(health, { prefix: '/v1' });

// Start the server
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
