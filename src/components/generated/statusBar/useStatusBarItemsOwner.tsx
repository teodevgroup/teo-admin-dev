import { ReactNode, useState } from "react"

export type StatusBarItemsOwner = {
    leadingItems: ReactNode[][]
    centerItems: ReactNode[][]
    setLeadingItems: (items: ReactNode[][]) => void
    setCenterItems: (items: ReactNode[][]) => void
}

const useStatusBarItemsOwner: () => StatusBarItemsOwner = () => {
    const [leadingItems, setLeadingItems] = useState<ReactNode[][]>([])
    const [centerItems, setCenterItems] = useState<ReactNode[][]>([])
    return { leadingItems, setLeadingItems, centerItems, setCenterItems }
}

export default useStatusBarItemsOwner