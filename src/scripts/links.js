addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('[data-link]')

  links.forEach((link) => {
    link.addEventListener('click', async (e) => {
      e.preventDefault()
      const url = link.getAttribute('href')

      try {
        const response = await fetch(url)
        if (!response.ok)
          throw new Error(`Erreur ${response.status}: ${response.statusText}`)

        const data = await response.text()
        //TODO faire un appe spécifique pour remplacer le contenu genre
        /*

        reponse =
        {
        header: 'header',}
        */
        history.pushState({}, '', url)
        document.body.innerHTML = data
      } catch (error) {
        //TODO call a template
        document.body.innerHTML = '<h1>Page non trouvée</h1>'
        console.error('Erreur de navigation:', error)
      }
    })
  })
})
