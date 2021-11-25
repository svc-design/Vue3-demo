import { createStore } from 'vuex'

export default createStore({
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
    }
})
