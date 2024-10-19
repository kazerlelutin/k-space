const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')
const { afterEach, beforeEach, describe, it } = (exports.lab = Lab.script())
const { start } = require('../src/start')

describe('GET /', () => {
  let server

  beforeEach(async () => {
    server = await start()
  })

  afterEach(async () => {
    await server.stop()
  })

  it('responds with 302', async () => {
    const res = await server.inject({
      method: 'get',
      url: '/',
    })
    expect(res.statusCode).to.equal(302)
  })

  it('responds with 200 with lang parameters', async () => {
    const res = await server.inject({
      method: 'get',
      url: '/fr',
    })

    expect(res.statusCode).to.equal(200)
  })
})
