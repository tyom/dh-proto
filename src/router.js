import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexPage from './pages/IndexPage.vue'
import LoginPage from './pages/LoginPage.vue'
import SupportPage from './pages/SupportPage.vue'

import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: IndexPage,
      meta: {
        requiresAuth: true,
        breadcrumb: 'Home page',
      },
    },
    {
      path: '/support',
      component: SupportPage,
      meta: {
        breadcrumb: 'Support'
      }
    },
    {
      path: '/login',
      component: LoginPage,
    },
    {
      path: '/logout',
      beforeEnter: () => {
        store.commit('authenticate', false)
        router.push('/login')
      }
    },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.state.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
