const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.throw(500);
}

//注册错误监听事件
app.on('error', (error, ctx) => {
  console.error('server error', error);
});
app.use(main);



app.listen(3000, () => {
  console.log('项目启动ing');
})