import http from '../http'
import { message } from 'antd';

export default {
  async login(phone, password) {
    try {
      const res = await http.get('/login/cellphone', {
        phone,
        password
      })
      message.success(`登录成功！欢迎${res.profile.nickname}`)
      return res
    } catch (error) {
      const { msg = '账号或密码错误' } = error
      message.error(msg)
      return error
    }
  }
}