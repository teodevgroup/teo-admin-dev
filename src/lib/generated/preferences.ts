// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import useLocalStorage from 'use-local-storage'
import defaultPreferences from '../extended/defaultPreferences'
import { Dispatch, SetStateAction } from 'react'
import { Language } from './translations/languages'
import { AccountModel } from './signIn'
import { IconCode } from '../extended/icons'
import { Translatable } from './lang/tr'
import set from './utilities/set'
import get from './utilities/get'
import { PageStackItemKey } from '../../components/extended/pageStack/PageStackItemKeys'

export type NavItem = {
    id: string
    name: Translatable
    icon: IconCode
    folder?: boolean
    childItems?: NavItem[]
    path?: PageStackItemKey
}

export interface NavPreferences {
    collapsed: boolean
    items: NavItem[]
}

export interface SignInUserPreferences {
    defaultIdKey: string
    defaultCheckerKey: string
}

export interface SignInAdminPreferences {
    defaultIdKey: string
    defaultCheckerKey: string
}

export interface SignInPreferences {
    defaultModel: AccountModel
    user: SignInUserPreferences
    admin: SignInAdminPreferences
}

export interface Preferences {
    lang: Language
    nav: NavPreferences
    signIn: SignInPreferences
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
        return [get(preferences, path), (newValue: T) => {
            setPreferences(set(preferences, path as any, newValue))
        }]
    }
    return result as any
}

export const useNavPreferences = makePathedPreferencesHook<NavPreferences>(["nav"])
export const useNavCollapsed = makePathedPreferencesHook<boolean>(["nav", "collapsed"])
export const useNavItems = makePathedPreferencesHook<NavItem[]>(["nav", "items"])

export const useLang = makePathedPreferencesHook<Language>(["lang"])

export const useSignInDefaultModel = makePathedPreferencesHook<AccountModel>(["signIn", "defaultModel"])
export const useSignInUserDefaultIdKey = makePathedPreferencesHook<string>(["signIn", "user", "defaultIdKey"])
export const useSignInUserDefaultCheckerKey = makePathedPreferencesHook<string>(["signIn", "user", "defaultCheckerKey"])
export const useSignInAdminDefaultIdKey = makePathedPreferencesHook<string>(["signIn", "admin", "defaultIdKey"])
export const useSignInAdminDefaultCheckerKey = makePathedPreferencesHook<string>(["signIn", "admin", "defaultCheckerKey"])
