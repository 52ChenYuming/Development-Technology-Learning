import axios from 'axios'
import localStore from '../utils/localStore'
import { message } from 'antd';

const isDev = process.env.NODE_ENV === 'development'

class Http {
  instance = null;
  constructor() {
    this.init()
  }

  init() {
    this.instance = axios.create({
      baseURL: isDev ? 'http://localhost:3000' : '',
      timeout: 10000
    })
    this.instance.defaults.widthCredentials = true
    // 请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // 响应拦截
    this.instance.interceptors.response.use(
      (res) => {
        const { data: { code } } = res
        if (code === 200) {
          return res.data
        } else {
          return Promise.reject(res.data)
        }
      },
      (err) => {
        const { data: { code, msg } } = err 
        message.error(err.data.message);
        switch (code) {
          case 301:
            notLoginHander() // 没有登录
            return Promise.reject(msg)
          case 400:
            return Promise.reject(msg)
          default: 
            return '系统异常'
        }
      }
    )
  }

  get (url, params = {}) {
    return this.instance.get(url, {
      params
    })
  }

  post (url, data = {}) {
    return this.instance.post(url, {
      data
    })
  }
}

// 如果没有登录或登录失效
const notLoginHander = () => {
  // const userInfo = store.getState().user
  // const localUser = localStore.get('user')
  // const { phone, password, remember } = localUser

  // // 没有token记录，退回首页
  // if (userInfo?.token == undefined) { 
  //   // 。。。
  // } else { // token 过期
  //   // 。。。
  // }
}

export default new Http()
