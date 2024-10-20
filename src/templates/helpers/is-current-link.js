module.exports = function (ctx) {
  const { hash } = ctx

  const lang = ctx?.data?.root?.lang || 'en'
  const urn = ctx?.data?.root?.urn || ''
  const url = hash?.url || ''
  if (!url || !urn) return false

  if (url.replace('{{lang}}', lang) === urn) return true

  return 'window.location.pathname' === url
}
