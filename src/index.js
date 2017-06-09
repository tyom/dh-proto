import Vue from 'vue'
import {Global, Layout} from 'dit-vue'
import Login from './components/Login.vue'

import './styles.scss'

new Vue({
  el: '#app',
  data: {
    phase: 'beta',
  },
  components: {
    ...Global,
    ...Layout,
    Login,
  },
  methods: {
  }
})
