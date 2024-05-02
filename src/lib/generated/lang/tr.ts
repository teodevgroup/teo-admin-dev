import { i18n, TFunction } from "i18next"
import { Language } from "../translations/language"

export type Translatable = string | { [key in Language]: string }

export const tr = (translatable: Translatable, t: TFunction<"translations", undefined>, i18n: i18n) => {
    if (typeof translatable === 'string') {
        return t(translatable)
    } else {
        return translatable[i18n.language as Language] ?? (Object.values(translatable)[0] || "Untranslated text")
    }
}