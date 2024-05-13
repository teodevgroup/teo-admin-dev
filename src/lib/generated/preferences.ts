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
export interface SignInAdminPreferences {
    defaultIdKey: string
    defaultCheckerKey: string
}
export interface SignInRootPreferences {
    defaultIdKey: string
    defaultCheckerKey: string
}

export interface SignInPreferences {
    defaultModel: AccountModel
    admin: SignInAdminPreferences
    root: SignInRootPreferences
}

export type FormFieldWidth = "full" | "half" | "oneThird"

export interface FormFieldPreferences {
    width: FormFieldWidth
}
export interface AdminModelFormPreferences {
    "email": FormFieldPreferences
    "phoneNo": FormFieldPreferences
    "password": FormFieldPreferences
}

export interface AdminModelPreferences {
    form: AdminModelFormPreferences
}
export interface CategoryModelFormPreferences {
    "name": FormFieldPreferences
}

export interface CategoryModelPreferences {
    form: CategoryModelFormPreferences
}
export interface ItemModelFormPreferences {
    "name": FormFieldPreferences
}

export interface ItemModelPreferences {
    form: ItemModelFormPreferences
}
export interface NullableRecordModelFormPreferences {
    "string": FormFieldPreferences
    "bool": FormFieldPreferences
    "int": FormFieldPreferences
    "float": FormFieldPreferences
    "decimal": FormFieldPreferences
    "date": FormFieldPreferences
    "dateTime": FormFieldPreferences
    "sex": FormFieldPreferences
    "strings": FormFieldPreferences
    "genders": FormFieldPreferences
}

export interface NullableRecordModelPreferences {
    form: NullableRecordModelFormPreferences
}
export interface ProductModelFormPreferences {
    "name": FormFieldPreferences
    "stock": FormFieldPreferences
}

export interface ProductModelPreferences {
    form: ProductModelFormPreferences
}
export interface RecordModelFormPreferences {
    "string": FormFieldPreferences
    "bool": FormFieldPreferences
    "int": FormFieldPreferences
    "float": FormFieldPreferences
    "decimal": FormFieldPreferences
    "date": FormFieldPreferences
    "dateTime": FormFieldPreferences
    "sex": FormFieldPreferences
    "strings": FormFieldPreferences
    "genders": FormFieldPreferences
}

export interface RecordModelPreferences {
    form: RecordModelFormPreferences
}
export interface RootModelFormPreferences {
    "email": FormFieldPreferences
    "password": FormFieldPreferences
}

export interface RootModelPreferences {
    form: RootModelFormPreferences
}

export interface ModelPreferences {
    "Admin": AdminModelPreferences
    "Category": CategoryModelPreferences
    "Item": ItemModelPreferences
    "NullableRecord": NullableRecordModelPreferences
    "Product": ProductModelPreferences
    "Record": RecordModelPreferences
    "Root": RootModelPreferences
}

export interface Preferences {
    lang: Language
    nav: NavPreferences
    signIn: SignInPreferences
    models: ModelPreferences
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
export const useSignInAdminDefaultIdKey = makePathedPreferencesHook<string>(["signIn", "admin", "defaultIdKey"])
export const useSignInAdminDefaultCheckerKey = makePathedPreferencesHook<string>(["signIn", "admin", "defaultCheckerKey"])
export const useSignInRootDefaultIdKey = makePathedPreferencesHook<string>(["signIn", "root", "defaultIdKey"])
export const useSignInRootDefaultCheckerKey = makePathedPreferencesHook<string>(["signIn", "root", "defaultCheckerKey"])
export const useModelAdminFormPreferences = makePathedPreferencesHook<AdminModelFormPreferences>(["models", "Admin", "form"])
export const useModelCategoryFormPreferences = makePathedPreferencesHook<CategoryModelFormPreferences>(["models", "Category", "form"])
export const useModelItemFormPreferences = makePathedPreferencesHook<ItemModelFormPreferences>(["models", "Item", "form"])
export const useModelNullableRecordFormPreferences = makePathedPreferencesHook<NullableRecordModelFormPreferences>(["models", "NullableRecord", "form"])
export const useModelProductFormPreferences = makePathedPreferencesHook<ProductModelFormPreferences>(["models", "Product", "form"])
export const useModelRecordFormPreferences = makePathedPreferencesHook<RecordModelFormPreferences>(["models", "Record", "form"])
export const useModelRootFormPreferences = makePathedPreferencesHook<RootModelFormPreferences>(["models", "Root", "form"])