import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

declare class State {
  count: number
}

// Create a new store instance.
export default createStore({
  state: () => ({
    count: 0,
  }),
  mutations: {
    INCREMENT(state: State) {
      state.count++
    },
  },
  actions: {
    increment(context) {
      context.commit('INCREMENT')
    },
  },
  getters: {
    double(state: State) {
      return 2 * state.count
    },
  },
})
