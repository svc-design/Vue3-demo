import Vuex from 'vuex'

const store = {  
  state () {  
    return {      
      count: 1,
      name: 'global_state'
    }  
  },  
  mutations: { 
    add(state) {
          state.count++    
      },
    adds(state, num) {
        state.count += num 
      }  
  },
  getters: {
  },
  modules: {

  }
}

export default new Vuex.Store({
  store
})