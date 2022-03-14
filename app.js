const path = require('path')
const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const { createClient } = require('./helpers/database')
const { router } = require('./helpers/router')
const dirimport = require('./helpers/dirimport')
const mongodbconfig = require(process.env.MONGODB || './keys/mongodb.json')

const server = async () => {
  try {
    await createClient(mongodbconfig.connection).connect()
    dirimport(path.join(__dirname, 'routes'))
    dirimport(path.join(__dirname, 'models'))
    
    const app = new koa()
    const port = process.env.PORT || 8000
    app.use(bodyParser())
    app.use(async (ctx, next) => {
      ctx.set('Access-Control-Allow-Origin', '*')
      ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
      ctx.set('Access-Control-Allow-Headers', 'content-type, authorization')
      ctx.set('Access-Control-Max-Age', '1728000')
      if (ctx.request.method === 'OPTIONS') {
        return ctx.body = ''
      }
      try {
        await next()
      } catch (e) {
        console.log(e)
        throw e
      }
    })
    app.use(router())
    app.listen(port)
    console.log('Server running on port ' + port)
  } catch (e) {
    console.error(e)
  }
}
server()