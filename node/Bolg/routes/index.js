const router = require('koa-router')();

module.exports = (app) => {
  router.get('/', require('./home').index);
  router.get('/signup', require('./user').signup);
  router.post('/signup', require('./user').signup);
  router.post('/signin', require('./user').signin);
  router.post('/  ', require('./user').signin);
  router.get('/signout', require('./user').signin);


  app
    .use(router.routes())
    .use(router.allowedMethods())
}