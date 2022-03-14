const { dbclient } = require('../helpers/database')
const { register } = require('../helpers/models')

const PostCollection = dbclient.db('post').collection('posts')

class Post {
  constructor(ctx, data) {
    this.ctx = ctx
    this.data = data
  }
  static all = async ctx => {
    try {
      const posts = await PostCollection.find().toArray()
      return posts.map(data => new Post(ctx, data))
    } catch (e) {
      throw e
    }
  }
}

register('Post', Post)