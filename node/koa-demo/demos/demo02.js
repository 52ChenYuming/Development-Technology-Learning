const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');


const main = ctx => {
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml';
        ctx.response.body = '<data>Hello World</data>';
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html';
        ctx.response.body = '<p>Hello World</p>'
    } else if (ctx.request.accepts('json')) {
        ctx.response.type = 'json';
        ctx.response.body = '{data:Hello World}';
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'text';
        ctx.response.body = 'Hello World';
    }
}
app.use(cors());
app.use(main);

app.listen(3000);