const path = require('path')
const { readFileSync } = require('fs')

function translator(lang, key, count = 0) {
  if (!key) return
  const currentLang = lang || 'en'

  if (!currentLang.match(/^(en|fr|kr)$/)) return key

  try {
    const json = readFileSync(
      path.join(process.cwd(), 'src', 'translate', `${currentLang}.json`),
      'utf8'
    )
    const obj = JSON.parse(json)
    return obj[count ? `${key}_plural` : key].replace('{{count}}', count)
  } catch (e) {
    return key
  }
}

module.exports = { translator }
