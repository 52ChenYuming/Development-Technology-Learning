// let http = require('http');

// let server = http.createServer();
// server.on('request', (req, res) => {
//     console.log('浏览器正在朝我发请求');

//     res.write('hello');
//     res.end('520');
// })


// server.listen(3000, () => {
//     console.log('服务器已启动');
// });


const Koa = require('koa');
const app = new Koa();

app.use((ctx) => {
    ctx.response.body = '去过520吧';
})
app.listen(3000, () => {
    console.log('项目启动ing');
})