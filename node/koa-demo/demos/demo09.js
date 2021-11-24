const Koa = require('koa');
const fs = require('fs/promises');
const app = new Koa();

//异步中间件
const main = async function (ctx) {
  ctx.response.type = 'html';
  ctx.response.body = await fs.readFile('./template.html', 'utf-8');
}

app.use(main);
app.listen(3000, () => {
  console.log('服务已启动');
});