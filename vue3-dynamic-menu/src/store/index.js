import { createStore } from 'vuex'
import module_tabs from './module_tabs'
import module_side_menus from './module_side_menus'

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
     tabs: module_tabs,
     side_menus: module_side_menus
   }
})

export default store
