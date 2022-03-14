const { _ } = require('../helpers/router')
const { m } = require('../helpers/models')

_({
  method: 'GET',
  path: '/api/posts',
  handler: [
    async (ctx, next) => {
      try {
        const posts = await m('Post').all(ctx)
        ctx.body = posts.map(s => s.data)
      } catch (e) {
        throw e
      }
    }
  ]
})