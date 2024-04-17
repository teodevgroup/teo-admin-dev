import { createContext } from "react"
import { StatusBarItemsOwner } from "./useStatusBarItemsOwner"

const StatusBarItemsContext = createContext<StatusBarItemsOwner>({
    leadingItems: [],
    centerItems: [],
    setLeadingItems: () => {},
    setCenterItems: () => {},
    stackItemIndexRef: { current: 0 },
    isActiveStackRef: { current: false },
})

export default StatusBarItemsContext