import Vue from 'vue'
import VueRouter from 'vue-router'

import DashboardPage from './pages/DashboardPage.vue'
import AuthenticatedPage from './pages/AuthenticatedPage.vue'
import CompanyPage from './pages/CompanyPage.vue'
import LoginPage from './pages/LoginPage.vue'
import SupportPage from './pages/SupportPage.vue'

import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: AuthenticatedPage,
      meta: {
        requiresAuth: true,
        breadcrumb: 'Home',
      },
      children: [
        {
          path: '',
          component: DashboardPage,
        },
        {
          path: '/company/:name',
          component: CompanyPage,
          meta: {
            breadcrumb: 'Company',
          },
        },
      ]
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
