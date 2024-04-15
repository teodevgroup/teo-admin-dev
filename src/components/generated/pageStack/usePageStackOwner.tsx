import { useCallback, useState } from "react"
import { PageStackData } from "./PageStackData"
import { PageStackItem } from "./PageStackItem"
import { useCachedStacks } from "../../../lib/generated/browsingCaches"
import { PageStackItemKey } from "../../extended/pageStack/PageStackItemKeys"

export type StacksProps = {
    stack: PageStackData
    setStack: (data: PageStackData) => void
    pushStack: (item: PageStackItem) => void
    popStack: () => void
    alterStackWithRootKey: (key: PageStackItemKey) => void
}

const usePageStackOwner = (data: PageStackData): StacksProps => {
    const [stack, setStack] = useState(data)
    const { getCachedStack, setCachedStack } = useCachedStacks()
    const pushStack = useCallback((item: PageStackItem) => {
        const newStack = [...stack, item]
        setCachedStack(stack[0].key, newStack)
        setStack(newStack)
        
    }, [stack])
    const popStack = useCallback(() => {
        const newStack = [...stack]
        if (newStack.length) {
            setCachedStack(stack[0].key, newStack)
        }
        newStack.pop()
        return newStack
    }, [stack])
    const alterStackWithRootKey = (key: PageStackItemKey) => {
        const stack = getCachedStack(key)
        setStack(stack!)
    }
    return { stack, setStack, pushStack, popStack, alterStackWithRootKey }
}

export default usePageStackOwner