const mongodb = require('mongodb')

module.exports.dbclient = null
module.exports.createClient = str => {
  module.exports.dbclient = new mongodb.MongoClient(str, { useUnifiedTopology: true })
  return module.exports.dbclient
}
