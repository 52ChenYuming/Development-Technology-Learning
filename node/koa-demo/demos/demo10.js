const Koa = require('koa');
const compose = require('koa-compose');//中间件合并
const route = require('koa-route');
const app = new Koa();

const logger = (ctx, next) => {//中间件
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
}

const main = (ctx) => {
  ctx.response.body = 'hello world';
}

const middlewares = compose([logger, main]);//将中间件合并
app.use(logger);
app.use(main);

app.listen(3000, () => {
  console.log('服务已启动');
});