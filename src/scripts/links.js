function handleLinks() {
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

        // Créer un document temporaire pour analyser la réponse HTML
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')

        // Remplacer uniquement le body
        const newBody = doc.querySelector('body')
        document.body.replaceWith(newBody)

        // Remplacer le title
        const newTitle = doc.querySelector('title')?.textContent
        if (newTitle) {
          document.title = newTitle
        }

        // Remettre à jour l'historique
        history.pushState({}, '', url)

        handleLinks()
      } catch (error) {
        // Afficher une page d'erreur personnalisée
        document.body.innerHTML = '<h1>Page non trouvée</h1>'
        console.error('Erreur de navigation:', error)
      }
    })
  })
}

// Recharger les listeners sur DOMContentLoaded et popstate
addEventListener('DOMContentLoaded', handleLinks)
addEventListener('popstate', handleLinks)
