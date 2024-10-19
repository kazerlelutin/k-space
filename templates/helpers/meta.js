const baseMeta = {
  title: 'KLL SPACE',
  description: 'Une App Complète',
}
module.exports = function (ctx) {
  const { data } = ctx
  const meta = data?.meta
  console.log(ctx)
  if (!meta) return
}
