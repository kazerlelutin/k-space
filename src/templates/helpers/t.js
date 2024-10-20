const { translator } = require('../../utils/translator')

module.exports = function ({ data, hash }) {
  if (!data || !hash?.key) return

  return translator(data?.root?.lang, hash.key, data?.root?.count || 0)
}
