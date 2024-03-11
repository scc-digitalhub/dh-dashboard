import { env } from './env.js'

export const oidcSettings = !!env.VITE_OIDC_CONFIG ? JSON.parse(env.VITE_OIDC_CONFIG ): null