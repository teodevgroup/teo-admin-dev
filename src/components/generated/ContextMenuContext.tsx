import { createContext } from "react"

const ContextMenuContext = createContext<{
    contextMenuTriggerMouseEvent: React.MouseEvent<HTMLElement, MouseEvent> | null,
    getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>
    activeIndex: number | null
    setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>
    setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>
    isOpen: boolean,
    setIsOpen: (open: boolean) => void,
}>({
    contextMenuTriggerMouseEvent: null,
    getItemProps: () => ({}),
    activeIndex: null,
    setActiveIndex: () => {},
    setHasFocusInside: () => {},
    isOpen: false,
    setIsOpen: () => {},
})

export default ContextMenuContext