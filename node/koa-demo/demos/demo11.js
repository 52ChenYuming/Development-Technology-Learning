const Koa = require('koa');
const app = new Koa();
const path = require('path');
const server = require('koa-static');

const main = server(path.join(__dirname));//可以读到绝对路径
console.log(path.join(__dirname));

app.use(main);

app.listen(3000, () => {
  console.log('项目启动ing');
})