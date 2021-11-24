const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');

const main = (ctx) => {
  ctx.response.body = 'hello world';
}

const redirect = ctx => {
  ctx.response.redirect('/');//路由重定向
  ctx.response.body = '<a href="/">Index Page</a>';
}

app.use(route.get('/', main));
app.use(route.get('/redirect', redirect));

app.listen(3000, () => {
  console.log('项目启动ing');
})