import { createContext, ReactNode } from "react"
import { StatusBarItemsOwner } from "./useStatusBarItemsOwner"

const StatusBarItemsContext = createContext<StatusBarItemsOwner>({
    leadingItems: [],
    centerItems: [],
    setLeadingItems: () => {},
    setCenterItems: () => {},
    stackItemIndexRef: {} as any,
})

export default StatusBarItemsContext