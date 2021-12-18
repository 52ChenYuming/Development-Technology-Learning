const { create } = require("../models/post");

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
      await ctx.render('create', {
        title: '新建文章',
        categories: [
          { id: 1, title: '随笔' },
          { id: 2, title: '生活' },
          { id: 3, title: '前端' },
          { id: 4, title: '后端' },
        ]
      })
      return
    } else { //发布文章

    }
  }
}