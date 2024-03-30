import { createContext, Dispatch, MutableRefObject, SetStateAction } from "react";

type SelectListContextProps = {
    selectedIndex: number | null
    setSelectedIndex: Dispatch<SetStateAction<number | null>>
    activeIndex: number | null
    setActiveIndex: Dispatch<SetStateAction<number | null>>
    refs: MutableRefObject<(HTMLButtonElement | null)[]> 
}

const SelectListContext = createContext<SelectListContextProps>({
    selectedIndex: null,
    setSelectedIndex: () => {},
    activeIndex: null,
    setActiveIndex: () => {},
    refs: {} as any
})

export default SelectListContext