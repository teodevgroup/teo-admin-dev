// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { diff } from "radash"
import defaultPreferences from "./defaultPreferences"
import { ModelPreferences, NavItem, Preferences, SignInPreferences } from "./preferences"

const collectUserNavItemKeys = (user: NavItem[]) => {
    let keys = user.map((item) => item.id)
    user.forEach((item) => {
        if (item.childItems) {
            keys = [...keys, ...collectUserNavItemKeys(item.childItems)]
        }
    })
    return keys
}

const itemsRemoved = (user: NavItem[], keysToRemove: string[]): NavItem[] => {
    const filtered = user.filter((item) => !keysToRemove.includes(item.id))
    return filtered.map((item) => {
        const { childItems, ...other } = item
        return { ...other, childItems: childItems ? itemsRemoved(childItems, keysToRemove) : undefined }
    })
}

const mergeNavItems = (user: NavItem[] | undefined, generated: NavItem[]) => {
    if (!user) {
        return generated
    }
    const allowedKeys = generated.map((item) => item.id)
    const userKeys = !user ? [] : collectUserNavItemKeys(user)
    const keysToRemove = diff(userKeys, allowedKeys)
    const keysToAdd = diff(allowedKeys, userKeys)
    return [...itemsRemoved(user, keysToRemove), ...generated.filter((item) => keysToAdd.includes(item.id))]
}

const mergeSignInEntry = (user: Partial<SignInPreferences> | undefined, generated: SignInPreferences) => {
    if (!user) {
        return generated
    }
    let result: any = user ?? {} as SignInPreferences
    for (let [k, v] of Object.entries(generated)) {
        if (user && user[k as keyof SignInPreferences]) {
            result[k as keyof SignInPreferences] = user[k as keyof SignInPreferences]
        } else {
            result[k as keyof SignInPreferences] = v
        }
    }
    return result as SignInPreferences
}

const mergeModelForm = (user: any, generated: any) => {
    if (!user) {
        return generated
    }
    let result: any = {}
    for (let [k, v] of Object.entries(generated)) {
        if (user && user[k]) {
            result[k] = Object.assign({}, v, user[k])
        } else {
            result[k] = v
        }
    }
    return result
}

const mergeModels = (user: Partial<ModelPreferences> | undefined, generated: ModelPreferences) => {
    if (!user) {
        return generated
    }
    let result: ModelPreferences = {} as ModelPreferences
    for (let [k, v] of Object.entries(generated)) {
        if (user && user[k as keyof ModelPreferences]) {
            result[k as keyof ModelPreferences] = {
                form: mergeModelForm(user[k as keyof ModelPreferences]!.form, v.form) as any
            }
        } else {
            result[k as keyof ModelPreferences] = v
        }
    }
    return result
}

const mergePreferences: (preferences: Partial<Preferences>) => Preferences = (preferences: Partial<Preferences>) => {
    return {
        lang: preferences.lang ?? defaultPreferences.lang,
        nav: {
            collapsed: preferences.nav?.collapsed ?? defaultPreferences.nav.collapsed,
            items: mergeNavItems(preferences.nav?.items, defaultPreferences.nav.items),
        },
        signIn: mergeSignInEntry(preferences.signIn, defaultPreferences.signIn),
        models: mergeModels(preferences.models, defaultPreferences.models),
    }
}

export const preferencesInit = () => {
    const preferencesString = localStorage.getItem("__teo_admin_preferences__")
    if (preferencesString) {
        const mergedPreferences = mergePreferences(JSON.parse(preferencesString))
        localStorage.setItem("__teo_admin_preferences__", JSON.stringify(mergedPreferences))
    }
}

export default mergePreferences