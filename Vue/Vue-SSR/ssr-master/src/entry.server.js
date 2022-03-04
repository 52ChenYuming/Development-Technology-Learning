import context from 'koa/lib/context'
import { createApp } from './main'
 
export default context => { // 生成Vue实例
  return new Promise((resolve,rejecte) => {
    const app = createApp()
    const router = app.$router

    const { url } = context //服务端传递过来的参数
  })
}