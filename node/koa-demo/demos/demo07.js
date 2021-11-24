const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

// app.use((ctx) => {
//   ctx.response.body = 'hello world';
// })

const logger = (ctx, next) => {//中间件
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
}

const main = (ctx) => {
  ctx.response.body = 'hello world';
}

app.use(logger);
app.use(main);


app.listen(3000, () => {
  console.log('服务已启动');
});