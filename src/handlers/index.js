module.exports = (req, h) => {
  return h.view('index', {
    lang: req.params.lang,
    urn: req.url.pathname,
    meta: {
      title: 'Accueil',
      description: 'Bienvenue sur notre site',
    },
  })
}
