import { defineStore } from "pinia";
import { ReqParams } from '../type/user'


interface UserState {
  auths: string[]
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    auths: []
  }),
  actions: {
    async login(params: ReqParams) { 
      setTimeout(() => { // 模拟登录接口
        this.auths = ['cym']
      }, 1000)
    }
  },
  persist: true
})