import useLocalStorage from "use-local-storage"
import { PageStackItemKey } from "../../components/extended/pageStack/PageStackItemKeys"
import { PageStackItem } from "../../components/generated/pageStack/PageStackItem"
import { Dispatch, SetStateAction, useCallback } from "react"
import set from "./utilities/set"
import get from "./utilities/get"

export type StacksMap = {
    [key in PageStackItemKey]?: PageStackItem[]
}

export interface BrowsingCaches {
    stacks: StacksMap
}

const defaultBrowsingCaches: BrowsingCaches = {
    stacks: {}
}

export const useBrowsingCaches = () => {
    return useLocalStorage<BrowsingCaches>("__teo_admin_browsing_caches__", defaultBrowsingCaches, {
        serializer: JSON.stringify,
        parser: JSON.parse,
    })
}

const makePathedBrowsingCachesHook = <T>(path: (string | number)[]): () => [T, Dispatch<SetStateAction<T>>] => {
    const result = () => {
        const [preferences, setPreferences] = useBrowsingCaches()
        return [get(preferences, path), (newValue: T) => {
            setPreferences(set(preferences, path as any, newValue))
        }]
    }
    return result as any
}

const _useCachedStacks = makePathedBrowsingCachesHook<StacksMap>(["stacks"])

export const useCachedStacks = () => {
    const [cachedStacks, setCachedStacks] = _useCachedStacks()
    const getCachedStack = useCallback((key: PageStackItemKey) => {
        if (cachedStacks[key]) {
            return cachedStacks[key]
        }
        const newCachedStack = set(cachedStacks, [key], [{ key } as PageStackItem])
        setCachedStacks(newCachedStack)
        return newCachedStack[key]
    }, [cachedStacks])
    const setCachedStack = useCallback((key: PageStackItemKey, value: PageStackItem[]) => {
        setCachedStacks(set(cachedStacks, [key], value))
    }, [cachedStacks])
    return { cachedStacks, setCachedStacks, getCachedStack, setCachedStack }
}