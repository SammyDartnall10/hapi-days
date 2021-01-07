const Hapi = require('hapi');

// const user = "Sammy"

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });
  // path is the route 
  //handler = business logic of the route and sets the response
  server.route({
    method: 'GET',
    path: '/hello/{user}',
    handler: (request, h) => {
      return `Hello ${request.params.user}`
    }
  })

  // route with an optional parameter
  // if you dont add a parameter comes through/returns undefined
  server.route({
    method: 'GET',
    path: '/optionalparams/{optional?}',
    handler: function (request, h) {
      return `Optional parameter is ${request.params.optional}`;
    }
  })

  //route with partial params coverage 
  // logging request and h just for interest
  server.route({
    method: 'GET',
    path: '/partials',
    handler: (request, h) => {
      console.log(h)
      console.log("--------------------------")
      console.log(request)
      return "hello"
    }
  })

  // query parameters
  // query is an object in the response object, so use dot notation too access each
  server.route({
    method: 'GET',
    path: '/testingquery',
    handler: function (request, h) {
      return `Hello ${request.query.name}`
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