const { dbclient } = require('../helpers/database')
const { register } = require('../helpers/models')

const TransactionCollection = dbclient.db('wallet').collection('transactions')

class Transaction {
  constructor(ctx, data) {
    this.ctx = ctx
    this.data = data
  }
  static findById = async (ctx, id) => {
    try {
      //
    } catch (e) {
      throw e
    }
  }
  static create = async ctx => {
    try {
      //
    } catch (e) {
      throw e
    }
  }
}

register('Transaction', Transaction)