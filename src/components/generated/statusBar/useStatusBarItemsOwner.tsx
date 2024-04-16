import { MutableRefObject, ReactNode, useRef, useState } from "react"

export type StatusBarItemsOwner = {
    leadingItems: ReactNode[][]
    centerItems: ReactNode[][]
    setLeadingItems: (items: ReactNode[][]) => void
    setCenterItems: (items: ReactNode[][]) => void
    stackItemIndexRef: MutableRefObject<number>
}

const useStatusBarItemsOwner: () => StatusBarItemsOwner = () => {
    const [leadingItems, setLeadingItems] = useState<ReactNode[][]>([])
    const [centerItems, setCenterItems] = useState<ReactNode[][]>([])
    const stackItemIndexRef = useRef(0)
    return { leadingItems, setLeadingItems, centerItems, setCenterItems, stackItemIndexRef }
}

export default useStatusBarItemsOwner