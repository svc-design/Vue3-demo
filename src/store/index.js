import { createStore } from 'vuex'

export default createStore({
  state: {
    name: 'global_state',
    count: 1
  },
  mutations: {
    // 状态更改的地方
    // 这里只能进行同步代码
    ADD(state) {
      state.count++
    },
   // 支持带参数
    ADDS(state, num) {
      state.count += num 
    }
  },
  actions: {
    // 异步操作mutations （变相让mutation支持异步）
  },
  modules: {
    // vuex 模块化
  }
})
