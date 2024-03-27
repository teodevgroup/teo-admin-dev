import { createContext } from "react"

export const MenuContextDefault = {
    contextMenuTriggerMouseEvent: null,
    getItemProps: () => ({}),
    activeIndex: null,
    setActiveIndex: () => {},
    setHasFocusInside: () => {},
    isOpen: false,
    setIsOpen: () => {},
}

const ContextMenuContext = createContext<{
    contextMenuTriggerMouseEvent: React.MouseEvent<HTMLElement, MouseEvent> | null,
    getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>
    activeIndex: number | null
    setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>
    setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>
    isOpen: boolean,
    setIsOpen: (open: boolean) => void,
}>(MenuContextDefault)

export default ContextMenuContext