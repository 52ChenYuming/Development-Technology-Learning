const Koa = require('koa');
const app = new Koa();

//中间件洋葱模型,中间件执行方式
app.use((ctx, next) => {
  console.log(1);
  next();
  console.log(2);
})

app.use((ctx, next) => {
  console.log(3);
  next();
  console.log(4);
})

app.use((ctx, next) => {
  console.log(5);
  next();
  console.log(6);
})

app.listen(3000, () => {
  console.log('服务已启动');
});