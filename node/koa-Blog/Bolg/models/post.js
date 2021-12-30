const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//设计文章的表模型
const PostSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    require: true
  },
  pv: {
    type: Number,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

PostSchema.pre('save', function (next) {//监听文章是否初次保存
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now()
  }
  next();
})
//通过 mongoose.model 往mongoodb数据库里面映射出一张User表 
module.exports = mongoose.model('Post', PostSchema);