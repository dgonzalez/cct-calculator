operations = require('./operations')

const fastify = require('fastify')({
  logger: true
})

fastify.get('/sum', function (request, reply) {
  reply.send({ result: operations.sum(request.query.a, request.query.b) })
})

fastify.get('/mul', function (request, reply) {
  reply.send({ result: operations.mul(request.query.a, request.query.b) })
})

// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
