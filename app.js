const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');
const fp = require('fastify-plugin');

// MongoDB connection URI
const mongoUri = 'mongodb://localhost:27017/mydatabase';  // Replace with your MongoDB URI

// MongoDB connection plugin
async function dbConnector(fastify, options) {
  mongoose.connect(mongoUri).then(() => {
    fastify.log.info('MongoDB connected!');
  }).catch(err => {
    fastify.log.error(err);
  });

  const db = mongoose.connection;
  db.on('error', (err) => fastify.log.error(err));
}


fastify.register(fp(dbConnector));

// Define a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

