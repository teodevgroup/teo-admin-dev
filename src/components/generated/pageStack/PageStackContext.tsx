import { createContext } from "react"
import { StacksProps } from "./usePageStackOwner"

const PageStackContext = createContext<StacksProps>({
    stack: [],
    setStack: () => { },
    pushStack: () => { },
    popStack: () => { },
    alterStackWithRootKey: () => { },
    updateCurrentStackItem: () => { },
})

export default PageStackContext