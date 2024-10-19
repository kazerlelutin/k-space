const Hapi = require('@hapi/hapi')
const Path = require('path')
const { build } = require('./utils/build')
const { routes } = require('./routes')

if (process.env.MODE === 'dev') {
  console.log('🚧 dev mode')
  build()
}

const start = async () => {
  const server = Hapi.server({
    port: 3000,
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public'),
      },
    },
    compression: {
      minBytes: 1024,
    },
  })

  await server.register([require('@hapi/inert'), require('@hapi/vision')])

  server.views({
    engines: {
      html: require('handlebars'),
    },
    layout: true,
    relativeTo: __dirname,
    layoutPath: 'templates/layouts',
    helpersPath: 'templates/helpers',
    path: 'templates',
    partialsPath: 'templates/partials',
  })

  server.route(routes)

  await server.start()

  console.log('🚀 en ligne ==> %s', 'http://localhost:' + server.info.port)

  return server
}

module.exports = { start }
