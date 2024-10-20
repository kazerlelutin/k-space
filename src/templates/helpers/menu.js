const { translator } = require('../../utils/translator')

module.exports = function (ctx) {
  const { data } = ctx
  if (!data) return

  const lang = data.root.lang || 'en'

  ctx.data.root.menuEntries = [
    {
      name: translator(lang, 'learn korean'),
      url: `/${lang}/learn-kr`,
      submenu: [
        {
          name: translator(lang, 'dashboard'),
          url: `/${lang}/learn-kr/dashboard`,
        },
        {
          name: translator(lang, 'lexique'),
          url: `/${lang}/learn-kr/lexique`,
        },
        {
          name: translator(lang, 'lesson', 1),
          url: `/${lang}/learn-kr/lessons`,
        },
        {
          name: translator(lang, 'revision'),
          url: `/${lang}/learn-kr/revision`,
        },
        {
          name: translator(lang, 'librairie'),
          url: `/${lang}/learn-kr/librairie`,
        },
      ],
    },
  ].filter((entry) => {
    if (entry.url.match(/learn-kr/) && lang === 'kr') return false
    return true
  })
}
