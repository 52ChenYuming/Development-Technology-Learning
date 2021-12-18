const CategoryModel = require('../models/category')
const PostModel = require('../models/post')

module.exports = {
  // 从数据库获取文章数据
  async index(ctx, next) {
    const pageSize = 5;
    const currentPage = parseInt(ctx.query.page) || 1
    const cname = ctx.query.c
    let cid;
    if (cname) {// 返回对应的分类文章

    }
  },
  async create(ctx, next) {
    if (ctx.method === 'GET') {
      const categories = await CategoryModel.find({})
      await ctx.render('create', {
        title: '新建文章',
        categories
      })
      return
    } else { //发布文章
      const { title, content } = ctx.request.body
      let errMsg = ''
      if (!title) {
        errMsg = '标题不能为空'
      } else if (!content) {
        errMsg = '内容不能为空'
      }
      if (errMsg) {
        ctx.flash = { warning: errMsg }
        ctx.redirect('back')
        return
      } else {// 写入数据库
        const post = Object.assign(ctx.request.body, {
          author: ctx.session.user._id
        })
        const res = await PostModel.create(post)
        console.log(res);
      }
    }
  }
}