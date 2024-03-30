// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import useLocalStorage from 'use-local-storage'
import defaultPreferences from '../../extended/defaultPreferences'
import cleanSet from 'clean-set'
import { Dispatch, SetStateAction } from 'react'
import { get } from 'object-path'

export type Language = "enUs" | "enUk" | "de" | "fr" | "es" | "hi" | "he" | "ja" | "ko" | "zhCn" | "zhTw"

export const languageNamesArray: Array<Language> = [
    "enUs",
    "enUk",
    "de",
    "fr",
    "es",
    "hi",
    "he",
    "ja",
    "ko",
    "zhCn",
    "zhTw",
]

export const languageNamesMap: { [key in Language]: string } = {
    "enUs": "English (United States)",
    "enUk": "English (United Kingdom)",
    "de": "Deutsch",
    "fr": "Français",
    "es": "Español",
    "hi": "हिन्दी",
    "he": "עברית",
    "ja": "日本語",
    "ko": "한국어",
    "zhCn": "中文（简体）",
    "zhTw": "中文（繁體）",
}

export interface Preferences {
    lang: Language
    nav: NavPreferences
}

export interface NavPreferences {
    navCollapsed: boolean
}

export const usePreferences = () => {
    return useLocalStorage<Preferences>("__teo_admin_preferences__", defaultPreferences, {
        serializer: JSON.stringify,
        parser: JSON.parse,
    })
}

const makePathedPreferencesHook = <T>(path: (string | number)[]): () => [T, Dispatch<SetStateAction<T>>] => {
    const result = () => {
        const [preferences, setPreferences] = usePreferences()
        return [get(preferences, path), (newValue: NavPreferences) => {
            setPreferences(cleanSet(preferences, path as any, newValue))
        }]
    }
    return result as any
}

export const useNavPreferences = makePathedPreferencesHook<NavPreferences>(["nav"])
export const useNavCollapsed = makePathedPreferencesHook<boolean>(["nav", "navCollapsed"])
export const useLang = makePathedPreferencesHook<Language>(["lang"])