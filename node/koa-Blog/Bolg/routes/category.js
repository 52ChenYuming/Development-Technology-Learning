const CategoryModel = require('../models/category')

module.exports = {
  async list(ctx, next) {
    const categories = await CategoryModel.find({})
    await ctx.render('category', {
      title: '新建分类',
      categories
    })
  },
  async newCategory(ctx, next) {
    if (ctx.method === 'GET') {
      await ctx.render('create_category', {
        title: '新建分类'
      })
    } else {
      const { name, title, desc } = ctx.request.body
      let errMsg = ''
      if (name === '') {
        errMsg = '分类名不能为空'
      } else if (title === '') {
        errMsg = '分类标题不能为空'
      }
      if (errMsg) {
        ctx.flash = { wraning: errMsg }
        ctx.redirect('back')
        return
      }
      const existed = await CategoryModel.findOne({ title })
      console.log(existed);
      if (existed) {
        ctx.flash = { warning: '分类已存在' }
        ctx.redirect('back')
        return
      }
      const category = {
        name,
        title,
        desc,
      }
      await CategoryModel.create(category)
      ctx.flash = {
        success: '新增分类成功'
      }
      ctx.redirect('/category')
    }
  },
  async delete(ctx, next) {
    const cid = ctx.params.id
    if (cid.length !== 24) {
      ctx.throw(404, '分类不存在')
      return
    }
    const category = await CategoryModel.findById(cid)
    if (!category) {
      ctx.throw(404, '分类不存在')
      return
    }

    await CategoryModel.findByIdAndRemove(cid)
    ctx.flash = { success: '删除分类成功' }
    ctx.redirect('back')
  }
}