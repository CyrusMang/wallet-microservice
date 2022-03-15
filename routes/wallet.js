const { _ } = require('../helpers/router')
const { m } = require('../helpers/models')

_({
  method: 'POST',
  path: '/api/wallets',
  handler: [
    async (ctx, next) => {
      try {
        const wallet = await m('Wallet').create(ctx)
        ctx.body = wallet.data
      } catch (e) {
        throw e
      }
    }
  ]
})

_({
  method: 'GET',
  path: '/api/wallets/:id',
  handler: [
    async (ctx, next) => {
      try {
        const wallet = await m('Wallet').findById(ctx, ctx.params.id)
        ctx.body = wallet.data
      } catch (e) {
        throw e
      }
    }
  ]
})