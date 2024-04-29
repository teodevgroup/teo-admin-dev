import { diff } from "radash"
import defaultPreferences from "./defaultPreferences"
import { NavItem, Preferences, SignInPreferences } from "./preferences"

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

const mergePreferences: (preferences: Partial<Preferences>) => Preferences = (preferences: Partial<Preferences>) => {
    return {
        lang: preferences.lang ?? defaultPreferences.lang,
        nav: {
            collapsed: preferences.nav?.collapsed ?? defaultPreferences.nav.collapsed,
            items: mergeNavItems(preferences.nav?.items, defaultPreferences.nav.items),
        },
        signIn: mergeSignInEntry(preferences.signIn, defaultPreferences.signIn),
    }
}

export default mergePreferences