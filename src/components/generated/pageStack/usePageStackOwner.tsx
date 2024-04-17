import { ReactNode, useCallback, useEffect, useState } from "react"
import { PageStackData } from "./PageStackData"
import { PageStackItem } from "./PageStackItem"
import { useCachedStacks } from "../../../lib/generated/browsingCaches"
import { PageStackItemKey } from "../../extended/pageStack/PageStackItemKeys"
import usePath from "react-use-path"
import pageStackDataToPath from "./pageStackDataToPath"
import pageStackDataFromPath from "./pageStackDataFromPath"
import { StatusBarItemsOwner } from "../statusBar/useStatusBarItemsOwner"
import set from "../../../lib/generated/utilities/set"

export type StacksProps = {
    stack: PageStackData
    setStack: (data: PageStackData) => void
    pushStack: (item: PageStackItem) => void
    popStack: () => void
    alterStackWithRootKey: (key: PageStackItemKey) => void
}

const usePageStackOwner = (
    data: PageStackData, {
        leadingItems,
        centerItems,
        setLeadingItems,
        setCenterItems,
    }: StatusBarItemsOwner
): StacksProps => {
    const [stack, setStack] = useState(data)
    const [_, setPath] = usePath()
    const { getCachedStack, setCachedStack } = useCachedStacks()

    useEffect(() => {
        const onPopSyncStack = () => {
            const newStackData = pageStackDataFromPath(window.location.pathname)
            setStack(newStackData)
        }
        window.addEventListener('popstate', onPopSyncStack)
        return () => {
            window.removeEventListener('popstate', onPopSyncStack)
        }
    }, [])
    const syncPath = useCallback((stack: PageStackData) => {
        setPath(pageStackDataToPath(stack))
    }, [])
    const pushStack = useCallback((item: PageStackItem) => {
        const newStack = [...stack, item]
        setCachedStack(stack[0].key, newStack)
        setStack(newStack)
        syncPath(newStack)
    }, [stack])
    const popStack = useCallback(() => {
        const newStack = [...stack]
        if (newStack.length >= 1) {
            setCachedStack(stack[0].key, newStack)
            newStack.pop()
            syncPath(newStack)
            return newStack    
        }
        return stack
    }, [stack])
    const alterStackWithRootKey = (key: PageStackItemKey) => {
        const stack = getCachedStack(key)
        setLeadingItems([])
        setCenterItems([])
        setStack(stack!)
        syncPath(stack!)
    }
    const useLeadingItems = (elements: ReactNode[]) => {
        console.log("see refs: ", stackItemIndexRef.current, isActiveStackRef.current)
        const index = stackItemIndexRef.current
        useEffect(() => {
            if (isActiveStackRef.current) {
                setLeadingItems(set(leadingItems, [index], elements))
            }
        }, [])
    }
    const useTitleItems = (elements: ReactNode[]) => {
        console.log("see refs: ", stackItemIndexRef.current, isActiveStackRef.current)
        const index = stackItemIndexRef.current
        useEffect(() => {
            if (isActiveStackRef.current) {
                setCenterItems(set(centerItems, [index], elements))
            }
        }, [])
    }
    return { 
        stack,
        setStack,
        pushStack,
        popStack,
        alterStackWithRootKey,
        useLeadingItems,
        useTitleItems,
    }
}

export default usePageStackOwner