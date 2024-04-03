import { createContext, Dispatch, HTMLProps, MutableRefObject, SetStateAction } from "react"

export type SelectContextProps<T> = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    blockSelection: boolean
    setBlockSelection: Dispatch<SetStateAction<boolean>>
    selectedIndex: number | null
    setSelectedIndex: Dispatch<SetStateAction<number | null>>
    activeIndex: number | null
    setActiveIndex: Dispatch<SetStateAction<number | null>>
    getItemProps: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>
    allowSelectRef: MutableRefObject<boolean>
    allowMouseUpRef: MutableRefObject<boolean>
    selectTimeoutRef: MutableRefObject<any>
    onChange: (value: T) => void
}

const SelectContext = createContext<SelectContextProps<any>>({} as any)

export default SelectContext