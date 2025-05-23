/*
 * Copyright (c) 2024 Antmicro <www.antmicro.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/// <reference types="vite/client" />
// Module to support reading custom import.meta.env variables

interface ImportMetaEnv {
    readonly VITE_SERVER_URL: string
    readonly VITE_RDFM_BACKEND: string
    readonly VITE_LOGIN_URL: string
    readonly VITE_LOGOUT_URL: string
    readonly VITE_OAUTH2_CLIENT: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
