// SPDX-FileCopyrightText: © 2025 DSLab - Fondazione Bruno Kessler
//
// SPDX-License-Identifier: Apache-2.0

import Vuex from 'vuex'
import { vuexOidcCreateStoreModule } from 'vuex-oidc'
import { WebStorageStateStore } from 'oidc-client-ts'

import { oidcSettings } from '../config/oidc'

let oidcStore = oidcSettings 
? {
    oidcStore: vuexOidcCreateStoreModule({
        ...oidcSettings,
        userStore: new WebStorageStateStore({ store: window.sessionStorage })
        }, {
        dispatchEventsOnWindow: true
    })} 
: {}

export default new Vuex.Store({
  modules: {
    ...oidcStore
  }
})