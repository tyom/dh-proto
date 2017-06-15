import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  isAuthenticated: false,
}

const mutations = {
  authenticate (state, isSuccess) {
    state.isAuthenticated = isSuccess
  },
}

const store = new Vuex.Store({
  state,
  mutations,
  plugins: [createPersistedState()],
})

export default store
