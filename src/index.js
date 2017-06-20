import Vue from 'vue'
import VueBreadcrumbs from 'vue-breadcrumbs'
import App from './App.vue'

import router from './router'
import store from './store'

import './styles.scss'

Vue.use(VueBreadcrumbs)

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
