const router = require('koa-router')();

module.exports = (app) => {
  // 从数据库取文章数据
  router.get('/', require('./home').index);
  router.get('/signup', require('./user').signup);
  router.post('/signup', require('./user').signup);
  router.get('/signin', require('./user').signin);
  router.post('/signin', require('./user').signin);
  router.post('/', require('./user').signin);
  router.get('/signout', require('./user').signin);

  router.get('/posts/new', require('./posts').create);

  // 文章
  router.get('/', require('./posts').index);
  router.get('/posts', require('./posts').index);
  router.post('/posts/new', require('./posts').create);
  app
    .use(router.routes())
    .use(router.allowedMethods())
}