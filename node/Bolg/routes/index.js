const router = require('koa-router')();

async function isLoginUser(ctx, next) {
  if (!ctx.session.user) {
    ctx.flash = { warning: '未登录，请先登录' }
    return ctx.redirect('/signin')
  }
  await next()
}

async function isAdmin(ctx, next) {
  if (!ctx.session.user) {
    ctx.flash = { warning: '未登录，请先登录' }
    return ctx.redirect('/signin')
  }
  if (!ctx.session.user.isAdmin) {
    ctx.flash = { warning: '没有权限' }
    return ctx.redirect('back')
  }
  await next();
}

module.exports = (app) => {
  // 从数据库取文章数据
  // router.get('/', require('./home').index);
  router.get('/signup', require('./user').signup);
  router.post('/signup', require('./user').signup);
  router.get('/signin', require('./user').signin);
  router.post('/signin', require('./user').signin);
  router.post('/', require('./user').signin);
  router.get('/signout', isLoginUser, require('./user').signout);
  router.get('/posts/new', isLoginUser, require('./posts').create);

  // 文章
  router.get('/', require('./posts').index);
  router.get('/posts', require('./posts').index);
  router.post('/posts/new', isLoginUser, require('./posts').create);
  router.get('/posts/:id', require('./posts').show);

  // 评论
  router.post('/comments/new', isLoginUser, require('./comments').create);
  router.get('/comments/:id/delete', isLoginUser, require('./comments').delete);

  // 分类
  router.get('/category', require('./category').list);
  app
    .use(router.routes())
    .use(router.allowedMethods())
}