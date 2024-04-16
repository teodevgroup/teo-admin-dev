import { createContext } from "react"
import { StacksProps } from "./usePageStackOwner"

const PageStackContext = createContext<StacksProps>({
    stack: [],
    setStack: () => {},
    pushStack: () => {},
    popStack: () => {},
    alterStackWithRootKey: () => {},
    useLeadingItems: () => {},
    useTitleItems: () => {}
})

export default PageStackContext