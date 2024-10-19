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
    path: '/test',
    handler: function (request, h) {
      return h.view('test', {
        layout: 'default',
      })
    },
  },
]

module.exports = { routes }
