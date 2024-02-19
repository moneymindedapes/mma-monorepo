import Fastify from 'fastify';
import health from './routes/health.js';

if (!process.env.PORT) {
  throw new Error(
    'Please specify a PORT in the environment. (eg. PORT=3001 npm start)'
  );
}

const fastify = new Fastify({ logger: true });

fastify.register(health);

// Start the server
const start = async () => {
  try {
    await fastify.listen(process.env.PORT);
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
