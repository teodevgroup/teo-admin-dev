import { createContext } from "react"
import { StacksProps } from "./usePageStackOwner"

const PageStackContext = createContext<StacksProps>({
    stack: [],
    setStack: () => {},
    pushStack: () => {},
    popStack: () => {}
})

export default PageStackContext