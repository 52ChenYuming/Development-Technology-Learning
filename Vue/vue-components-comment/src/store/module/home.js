const home = {
  state: {
    count: 0
  },
  mutations: {
    add(state, num) { // mutations里面的方法天生就具备参数，且参数为state
      state.count += num
    },
    reduce(state, num) {
      state.count -= num
    }
  },
  actions: { // Action 提交的是 mutation，而不是直接变更状态, 可以包含任意异步操作。
    addAction(context) { // actions里面的函数天生就具备一个参数，为context（vuex的上下文）
      context.commit('add', 5)
    },
    reduceAction({ commit }, num) {
      commit('reduce', num)
    }
  },
  getters: { // 派生出一些状态, 相当于组件中的 computed
    newCount(state) { // getters 里面的方法天生就具备参数，且参数为state
      return state.count + '1'  
    }
  }
}

export default home