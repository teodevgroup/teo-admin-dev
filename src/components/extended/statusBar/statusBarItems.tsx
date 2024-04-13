import { createContext, Dispatch, ReactElement, SetStateAction, useContext } from "react"

export type StatusBarItemsContextProps = {
    stack: ReactElement[][]
    setStack: Dispatch<SetStateAction<ReactElement[][]>>
    pushItems: (items: ReactElement[]) => void
    popItems: () => void
}

export const StatusBarItemsContext = createContext<StatusBarItemsContextProps>({ 
    stack: [],
    setStack: () => {},
    pushItems: () => {},
    popItems: () => {}
})

export const useStatusBarItems = () => {
    const { stack, setStack, pushItems, popItems } = useContext(StatusBarItemsContext)
    return { stack, setStack, pushItems, popItems }
}