import { useCallback, useState } from "react"
import { PageStackData } from "./PageStackData"
import { PageStackItem } from "./PageStackItem"

export type StacksProps = {
    stack: PageStackData
    setStack: (data: PageStackData) => void
    pushStack: (item: PageStackItem) => void
    popStack: () => void
}

const usePageStackOwner = (data: PageStackData): StacksProps => {
    const [stack, setStack] = useState(data)
    const pushStack = useCallback((item: PageStackItem) => {
        const newStack = [...stack, item]
        setStack(newStack)
    }, [stack])
    const popStack = useCallback(() => {
        const newStack = [...stack]
        newStack.pop()
        return newStack
    }, [stack])
    return { stack, setStack, pushStack, popStack }
}

export default usePageStackOwner