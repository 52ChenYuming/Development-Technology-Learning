/* 旧版本 */
/* const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api1', { // 遇见/api1前缀的请求，就会触发该代理配置
      target: 'http://localhost:5000', //请求转发给谁
      changeOrigin: true, //控制服务器收到的请求头中的Host的值
      pathRewrite: { '^/api1': '' } //重写请求路径(必须)

    })
  )
} */

const { createProxyMiddleware } = require("http-proxy-middleware") // 更改引入方式

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {// 遇到api1前缀的请求，就会触发该代理配置
      target: 'http://localhost:5000',// 请求转发给谁
      changeOrigin: true,// 控制服务器收到的请求头中Host字段的值
      pathRewrite: { '^/api1': '' }
    })
  )
}
