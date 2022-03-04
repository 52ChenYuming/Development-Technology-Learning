// 服务端
const Koa = require('koa')
const router = require('koa-router')()
const Vue = require('vue')

const koa = new Koa()
koa.use(router.routes())

// 创建一个render实例,它可以帮我们把vue的语法编译成html
const render = require('vue-server-renderer').createRenderer()
const app = new Vue({
  template: `<div>{{msg}}</div>`,
  data() {
    return {
      msg: '这是已经被render编译后的页面'
    }
  }
})

router.get('/', (ctx) => {
  // 调用render将Vue实例渲染成为字符串
  // 第一个参数是vue的实例，第二个参数是回调函数，会在渲染字符串完成之后执行
  render.renderToString(app, (err, html) => {
    console.log(html);
    ctx.body =
      `
        <!DOCTYPE html>
        <html lang="">
        <head>
          <title>Vue SSR</title>
        </head>
        <body>
          ${html}
        </body>
        </html>
      `
  })
})

koa.listen(3000, () => {
  console.log('server is listening in 3000');
})