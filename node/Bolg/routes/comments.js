const CommentModel = require('../models/comment');

module.exports = {
  async create(ctx, next) {
    const { content } = ctx.request.body
    console.log(content);
    if (!content) {
      ctx.flash = { warning: '评论不能为空' }
      ctx.redirect('back')
      return
    }
    const comment = Object.assign(ctx.request.body, {
      from: ctx.session.user._id
    })
    await CommentModel.create(comment)
    ctx.flash = { success: '留言成功' }
    ctx.redirect('back');
  }
}