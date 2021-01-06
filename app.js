const Hapi = require('hapi');

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  server.route({
    method: 'GET',
    path: '/hello',
    handler: (request, h) => {
      return 'Hello World!'
    }
  })

  await server.start();
  console.log(`Server running on ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exist(1);

})

init();