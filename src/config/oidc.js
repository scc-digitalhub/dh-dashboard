// SPDX-FileCopyrightText: © 2025 DSLab - Fondazione Bruno Kessler
//
// SPDX-License-Identifier: Apache-2.0

import { env } from './env.js'

export const oidcSettings = !!env.VITE_OIDC_CONFIG ? JSON.parse(env.VITE_OIDC_CONFIG ): null