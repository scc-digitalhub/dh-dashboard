import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MonitorView from '../views/MonitorView.vue'
import ComponentsView from '../views/ComponentsView.vue'
import OidcCallback from '../views/OidcCallback.vue'

import { vuexOidcCreateRouterMiddleware } from 'vuex-oidc'

import store from '../store'

import { env } from '../config/env.js'

const router = createRouter({
  history: createWebHistory(env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/monitor',
      name: 'monitor',
      component: MonitorView
    },
    {
      path: '/components',
      name: 'components',
      component: ComponentsView
    },
    {
      path: '/oidc-callback', 
      name: 'oidcCallback',
      component: OidcCallback
    }
  ]
})
if (env.VITE_OIDC_CONFIG) {
  router.beforeEach(vuexOidcCreateRouterMiddleware(store))
}

export default router
