const Koa = require('koa');
const koaBody = require('koa-body');
const app = new Koa();
const KoaBody = require('koa-body');

const main = ctx => {
  const body = ctx.request.body;
  if (!body.name) {
    ctx.throw(400);
  }
  ctx.response.body = { name: body.name }
}

app.use(koaBody());
app.use(main);

app.listen(3000, () => {
  console.log('项目启动ing');
})