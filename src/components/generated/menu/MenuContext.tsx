import { ExtendedRefs, FloatingContext, FloatingTreeType, ReferenceType } from "@floating-ui/react"
import { createContext, CSSProperties, Dispatch, HTMLProps, MutableRefObject } from "react"

export interface MenuContextProps {
    isOpen: boolean
    setIsOpen: Dispatch<React.SetStateAction<boolean>>
    getReferenceProps: (userProps?: HTMLProps<Element>) => Record<string, unknown>
    getFloatingProps: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>
    getItemProps: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>
    refs: ExtendedRefs<ReferenceType>
    floatingStyles: CSSProperties
    listItemsRef: MutableRefObject<(HTMLButtonElement | null)[]>
    labelsRef: MutableRefObject<(string | null)[]>
    activeIndex: number | null
    setActiveIndex: Dispatch<React.SetStateAction<number | null>>
    tree: FloatingTreeType<ReferenceType> | null
    nodeId: string
    parentId: string | null
    isNested: boolean
    hasFocusInside: boolean
    setHasFocusInside: Dispatch<React.SetStateAction<boolean>>
    floatingContext: FloatingContext
}

const MenuContext = createContext<MenuContextProps>({} as any)

export default MenuContext