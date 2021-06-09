import { createStore } from 'vuex'
let visitedViews: Array<any> = [{ fullPath: '/home', name: 'Home', title: '首页' }]
let test: string = 'this a title'
export default createStore({
  state: { test, visitedViews },
  getters: {
    catchedViews: (state) => state.visitedViews.map((item) => item.name),
  },
  mutations: {
    ADD_VIEW: (state, payload) => {
      let { meta, fullPath, name } = payload
      const isView = state.visitedViews.find((item) => item.fullPath == payload.fullPath)
      if (!isView) {
        state.visitedViews.push({ title: meta.title, fullPath, name })
      }
    },
    REMOVE_VIEW: (state, payload) => {
      state.visitedViews.splice(payload, 1)
    },
  },
  actions: {
    addView({ commit }, view) {
      commit('ADD_VIEW', view)
    },
    reomveView({ commit }, index) {
      commit('REMOVE_VIEW', index)
    },
  },
  modules: {},
})
