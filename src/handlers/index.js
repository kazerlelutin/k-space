module.exports = (req, h) => {
  return h.view('index', {
    lang: req.params.lang,
    meta: {
      title: 'Accueil',
      description: 'Bienvenue sur notre site',
    },
  })
}
