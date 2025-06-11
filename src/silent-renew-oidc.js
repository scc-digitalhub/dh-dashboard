// SPDX-FileCopyrightText: © 2025 DSLab - Fondazione Bruno Kessler
//
// SPDX-License-Identifier: Apache-2.0

import { vuexOidcProcessSilentSignInCallback } from 'vuex-oidc'

import { oidcSettings } from './config/oidc'

if (oidcSettings) {
  vuexOidcProcessSilentSignInCallback(oidcSettings)
}
