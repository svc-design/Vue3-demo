import { createStore } from 'vuex'

const store = createStore({  
  state () {  
    return {      
      count: 1,
      name: 'global_state'    
    }  
  },  
  mutations: 
  {    add (state) {
          state.count++    
       },
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

export default store