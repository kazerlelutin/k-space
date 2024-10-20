const cache =
  process.env.MODE === 'dev'
    ? undefined
    : {
        expiresIn: 24 * 60 * 60 * 1000,
        privacy: 'public',
      }

const routes = [
  {
    method: 'GET',
    path: '/public/{param*}',
    handler: function (request, h) {
      return h.file(request.params.param)
    },
    options: {
      cache,
    },
  },
  {
    method: 'GET',
    path: '/service-worker.js',
    handler: function (_req, h) {
      return h.file(`/public/js/service-worker.js`)
    },
    options: {
      cache,
    },
  },
  {
    // === 404 ===
    method: '*',
    path: '/{any*}',
    handler: function (_req, h) {
      return h.view('404', {
        layout: 'default',
        urn: '404',
        lang: 'en',
      })
    },
  },
  {
    method: 'GET',
    path: '/',
    handler: function (_req, h) {
      return h.redirect('/fr')
    },
  },
  {
    method: 'GET',
    path: '/{lang}',
    handler: require('./handlers/index'),
  },
  {
    method: 'GET',
    path: '/{lang}/learn-kr',
    handler: require('./handlers/index'),
  },
  {
    method: 'GET',
    path: '/{lang}/learn-kr/dashboard',
    handler: require('./handlers/index'),
  },
]

module.exports = { routes }
