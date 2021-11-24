const Koa = require('koa');
const app = new Koa()

//前端向我发送的请求体里面的method和url我要显示在前端页面上

const main = ctx => {
    console.log(ctx.request.method);
    console.log(ctx.request.url);
    ctx.response.body = `${ctx.request.method} -- ${ctx.request.url}`
}
app.use(main);
app.listen(3000);