import Fastify from 'fastify';
import health from './routes/health.js';
import coov from './routes/coov.js';

if (!process.env.PORT) {
  throw new Error(
    'Please specify a PORT in the environment. (eg. PORT=3001 npm start)'
  );
}

const fastify = new Fastify({ logger: true });
const baseOptions = {
  private_key: process.env.PRIVATE_KEY || 'set PRIVATE_KEY in your environment',
  mongo_key: process.env.MONGO_KEY || 'set MONGO_KEY in your environment',
};

fastify.register((fastify, options, done) => {
  return health(
    fastify,
    {
      ...baseOptions,
      ...options,
    },
    done
  );
});
fastify.register((fastify, options, done) => {
  return coov(
    fastify,
    {
      ...baseOptions,
      ...options,
    },
    done
  );
});

// Start the server
const start = async () => {
  try {
    await fastify.listen(process.env.PORT, '0.0.0.0');
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
