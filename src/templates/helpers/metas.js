const baseMeta = {
  title: 'KLL SPACE',
  description: 'Une App Complète',
}

const metaKeys = [
  {
    name: 'title',
    content: 'title',
  },
  {
    name: 'og:title',
    content: 'title',
  },
  {
    name: 'description',
    content: 'description',
  },
]

module.exports = function (context) {
  const meta = context.data?.meta || {}

  const newMeta = {
    ...baseMeta,
    ...meta,
  }

  return [
    ...metaKeys.map(({ name, content }) => {
      const value = newMeta[content]
      return `<meta name="${name}" content="${value}" />`
    }),
    `<title>${newMeta.title}</title>`,
  ].join('\n')
}
