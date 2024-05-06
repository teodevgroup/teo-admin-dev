// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

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