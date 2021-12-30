
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//设计用户的模型
const CommentSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  from: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'User'
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: {
    type: String,
    require: true
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    }
  }
})

//通过 mongoose.model 往mongoodb数据库里面映射出一张User表 
module.exports = mongoose.model('Comment', CommentSchema);