const Hapi = require('@hapi/hapi')
const Path = require('path')
const { build } = require('./utils/build')

let cache = {
  expiresIn: 24 * 60 * 60 * 1000,
  privacy: 'public',
}

if (process.env.MODE === 'dev') {
  console.log('🚧 dev mode')
  build()
  cache = undefined
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

  server.route({
    method: 'GET',
    path: '/public/{param*}',
    handler: function (request, h) {
      return h.file(request.params.param)
    },
    options: {
      cache,
    },
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: function (_req, h) {
      return h.redirect('/fr')
    },
  })

  server.route({
    method: 'GET',
    path: '/{lang}',
    handler: function (req, h) {
      return h.view('index', {
        lang: req.params.lang,
        meta: {
          title: 'Accueil',
          description: 'Bienvenue sur notre site',
        },
      })
    },
  })

  server.route({
    method: 'GET',
    path: '/test',
    handler: function (request, h) {
      return h.view('test', {
        layout: 'default',
      })
    },
  })
  await server.start()
  console.log('🚀 en ligne ==> %s', 'http://localhost:' + server.info.port)
}

start()
