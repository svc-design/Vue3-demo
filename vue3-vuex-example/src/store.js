import { createStore } from 'vuex'

const moduleA = {
  namespaced: true, // 需要开启命名空间 识别这个module
  state: () => ({
    name: '麦克斯',
    sex: '6'
  }),
  mutations: {},
  actions: {},
  getters: {}
}

const store = createStore ({
    state: {
	    name: 'global_state',
	    count: 1
    },
    mutations: {
	    add(state) {
              state.count++
	    },
	    adds(state, num) {
              state.count += num
	    }
    },
    actions: {
        async_add(context) {
            context.commit('add')          
	},
	async_commit_add({commit}) {
	    commit('add')
	},
	async_commit_adds({ commit }, data) {
	    commit('adds', data.num)
	}
    },
    getters: {
      name: state => {
          return state.name
      },
      count: state => {
          return state.count
      }
   },
   modules: {
     a: moduleA
   }
})

export default store
