import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import {Global, Layout} from 'dit-vue'

import IndexPage from './pages/IndexPage.vue'

import './styles.scss'

Vue.use(Vuex)
Vue.use(VueRouter)

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
})

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: IndexPage },
    { path: '*', redirect: '/' }
  ]
})

new Vue({
  store,
  router,
  el: '#app',
  data: {
    phase: 'beta',
  },
  components: {
    ...Global,
    ...Layout,
  },
})
