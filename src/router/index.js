// SPDX-License-Identifier: Apache-2.0
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MonitorView from '../views/MonitorView.vue'
import ComponentsView from '../views/ComponentsView.vue'
import OidcCallback from '../views/OidcCallback.vue'

import { vuexOidcCreateRouterMiddleware } from 'vuex-oidc'

import DataService from '../service.js';

import store from '../store'

import { env } from '../config/env.js'

let hasMonitoring = null;

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

router.beforeEach(async (to) => {
  if (hasMonitoring === null) {
    hasMonitoring = await DataService.hasMonitoring();
  }
  if (!hasMonitoring && to.name === 'home') {
    return { name: 'components' }
  }
})

export default router
