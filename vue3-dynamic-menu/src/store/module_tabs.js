const module_tabs = {
    namespaced: true, // 需要开启命名空间 识别这个module
    state: {
      items: [
        { name: '主页', to: '/home' }
      ]
    },
    mutations: {
      add_item() {},
      del_item() {}
    },
    actions: {},
    getters: {}
  }

export default module_tabs