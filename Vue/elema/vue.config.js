module.exports = {
  // 跨域代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://ustbhuangyi.com/sell/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}