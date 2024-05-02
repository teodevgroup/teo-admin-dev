import { initReactI18next } from "react-i18next"
import i18n from "i18next"
import enUs from './enUs'
import enUk from './enUk'
import de from './de'
import fr from './fr'
import es from './es'
import hi from './hi'
import he from './he'
import ja from './ja'
import ko from './ko'
import zhCn from './zhCn'
import zhTw from './zhTw'

const defaultLang = "enUs"

const getDefaultLanguageCode = () => {
    const localStorageItemString = localStorage.getItem("__teo_admin_preferences__")
    if (!localStorageItemString) {
        return defaultLang
    }
    const localStorageItem = JSON.parse(localStorageItemString)
    if (localStorageItem.lang) {
        return localStorageItem.lang
    }
    return defaultLang
}

export default function i18nInit() {
    const defaultLanguageCode = getDefaultLanguageCode()
    i18n.use(initReactI18next).init({
        lng: defaultLanguageCode,
        fallbackLng: defaultLanguageCode,
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
}
