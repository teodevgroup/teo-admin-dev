// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import useLocalStorage from 'use-local-storage'
import defaultPreferences from '../../extended/defaultPreferences'
import cleanSet from 'clean-set'
import { Dispatch, SetStateAction } from 'react'
import { get } from 'object-path'

export type Language = "en-us" | "en-uk" | "de" | "fr" | "es" | "hi" | "he" | "ja" | "ko" | "zh-cn" | "zh-tw"

export const languageNames: { [key in Language]: string } = {
    "en-us": "English (United States)",
    "en-uk": "English (United Kingdom)",
    "de": "Deutsch",
    "fr": "Français",
    "es": "Español",
    "hi": "हिन्दी",
    "he": "עברית",
    "ja": "日本語",
    "ko": "한국어",
    "zh-cn": "中文（简体）",
    "zh-tw": "中文（繁體）",
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