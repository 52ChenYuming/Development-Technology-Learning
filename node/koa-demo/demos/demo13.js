const Koa = require('koa');
const app = new Koa();

const main = ctx => {//抛出错误
  throw (500)
}

app.use(main);


app.listen(3000, () => {
  console.log('项目启动ing');
})