import Vue from 'vue'
import VueBreadcrumbs from 'vue-breadcrumbs'
import {Global, Layout} from 'dit-vue'

import router from './router'
import store from './store'

import './styles.scss'

Vue.use(VueBreadcrumbs)

new Vue({
  store,
  router,
  el: '#app',
  components: {
    ...Global,
    ...Layout,
  },
})
