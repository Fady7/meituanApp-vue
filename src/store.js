import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    position: '蓬安',
    userName: ''
  },
  mutations: {
    setPosition(state, val) {
      state.position = val;
    },
    setUserName(state, val) {
      state.userName = val;
    }
  },
  actions: {
    setPosition({
      commit,
      state
    }, val) {
      //ajax
      commit('setPosition', val)
    }
  }
})
