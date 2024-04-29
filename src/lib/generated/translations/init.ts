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

export default function i18nInit() {
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
}
