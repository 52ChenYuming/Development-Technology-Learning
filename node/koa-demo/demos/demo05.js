const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const main = ctx => {
    ctx.response.body = '首页';
}
const about = ctx => {
    ctx.response.body = '关于';
}

app.use(route.get('/about', about));
app.use(route.get('/', main));

app.listen(3000);