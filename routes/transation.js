const { _ } = require('../helpers/router')
const { m } = require('../helpers/models')

_({
  method: 'POST',
  path: '/api/transations',
  input: {
    body: {
      from: 'required',
      to: 'required',
      amount: 'required',
      // ...
    },
  },
  handler: [
    async (ctx, next) => {
      try {
        //
      } catch (e) {
        throw e
      }
    }
  ]
})