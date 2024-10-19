const { readFileSync } = require('fs')
const path = require('path')

module.exports = function ({ data, hash }) {
  if (!data || !hash?.key) return
  const lang = data?.root?.lang || 'en'

  if (!lang.match(/^(en|fr|kr)$/)) return hash.key

  try {
    const json = readFileSync(
      path.join(process.cwd(), 'translate', `${lang}.json`),
      'utf8'
    )
    const obj = JSON.parse(json)
    return obj[hash.key]
  } catch (e) {
    return hash.key
  }
}
