const CategoryModel = require('../models/category')

module.exports = {
  async list(ctx, next) {
    const categories = await CategoryModel.find({});
    await ctx.render('category', {
      title: '新建分类',
      categories
    })
  }
}