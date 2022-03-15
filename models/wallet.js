const ObjectID = require('mongodb').ObjectID
const { dbclient } = require('../helpers/database')
const { register } = require('../helpers/models')

const WalletCollection = dbclient.db('wallet').collection('wallets')

class Wallet {
  constructor(ctx, data) {
    this.ctx = ctx
    this.data = data
  }
  static findById = async (ctx, id) => {
    try {
      const result = await WalletCollection.findOne({ _id: ObjectID(id) })
      if (result) {
        return new Wallet(ctx, result)
      }
      return null
    } catch (e) {
      throw e
    }
  }
  static create = async ctx => {
    try {
      const data = {
        status: 'inactive',
        createdAt: moment().unix(),
      }
      const result = await WalletCollection.insertOne(data)
      return new Wallet(ctx, { ...data, _id: result.insertedId })
    } catch (e) {
      throw e
    }
  }
}

register('Wallet', Wallet)