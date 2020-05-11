const fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.get('/sum', function (request, reply) {
  reply.send({ result: (parseInt(request.query.a) + parseInt(request.query.b)) })
})

// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
