/**
 * Factory function to create a route handler function.
 *
 * @param {Object} options - Options object.
 * @param {import('fastify').FastifyBaseLogger} options.l - Fastify logger instance.
 * @returns {Function} Returns a route handler function.
 */
const main = ({ l }) => {
  l.info('Testing logger.');
  /**
   * Route handler function.
   *
   * @param {import('fastify').FastifyRequest} req - The request object.
   * @param {import('fastify').FastifyReply} rep - The reply object.
   * @returns {string} Returns 'ok'.
   */
  return async (req, rep) => {
    return 'ok';
  };
};

/**
 * Route handler for fetching users.
 *
 * @param {import('fastify').FastifyInstance} app - The Fastify instance.
 * @param {import('fastify').FastifySchema} opts - Options for the route.
 */
export default async function (app, opts, third) {
  /**
   * GET /v1/users
   * Fetches users.
   *
   * @param {import('fastify').FastifyRequest} request - The request object.
   * @param {import('fastify').FastifyReply} reply - The reply object.
   */
  app.get('/health', async (req, rep) => main({ l: app.log })(req, rep));
}
