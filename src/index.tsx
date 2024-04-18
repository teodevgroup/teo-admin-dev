// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/extended/app/App'
import { initReactI18next } from "react-i18next"
import i18n from "i18next"
import enUs from './lib/extended/transalations/enUk'
import enUk from './lib/extended/transalations/enUk'
import de from './lib/extended/transalations/de'
import fr from './lib/extended/transalations/fr'
import es from './lib/extended/transalations/es'
import hi from './lib/extended/transalations/hi'
import he from './lib/extended/transalations/he'
import ja from './lib/extended/transalations/ja'
import ko from './lib/extended/transalations/ko'
import zhCn from './lib/extended/transalations/zhCn'
import zhTw from './lib/extended/transalations/zhTw'

i18n.use(initReactI18next).init({
    lng: "enUs",
    fallbackLng: "enUs",
    resources: {
        "enUs": {
            "translations": enUs
        },
        "enUk": {
            "translations": enUk
        },
        "de": {
            "translations": de
        },
        "fr": {
            "translations": fr
        },
        "es": {
            "translations": es
        },
        "hi": {
            "translations": hi
        },
        "he": {
            "translations": he
        },
        "ja": {
            "translations": ja
        },
        "ko": {
            "translations": ko
        },
        "zhCn": {
            "translations": zhCn
        },
        "zhTw": {
            "translations": zhTw
        }
    },
    interpolation: {
        escapeValue: false
    }
})

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<StrictMode>
    <App />
</StrictMode>)
