
import { vuexOidcProcessSilentSignInCallback } from 'vuex-oidc'

import { oidcSettings } from './config/oidc'

if (oidcSettings) {
  vuexOidcProcessSilentSignInCallback(oidcSettings)
}
