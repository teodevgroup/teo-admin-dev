import React, { Dispatch, ReactElement, SetStateAction, useRef, useState } from 'react'
import SelectListElement from '../../extended/selectList/SelectListElement'
import SelectListContext from './SelectListContext'

type SelectListProps = {
    selectedIndex: number | null
    setSelectedIndex: Dispatch<SetStateAction<number | null>>
    children: ReactElement[]
}

const SelectList = ({ selectedIndex, setSelectedIndex, children }: SelectListProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const refs = useRef<(HTMLButtonElement | null)[]>([])
    return <SelectListElement tabIndex={0} autoFocus>
        <SelectListContext.Provider value={{
            selectedIndex,
            setSelectedIndex,
            activeIndex,
            setActiveIndex,
            refs
        }}>
            {children}
        </SelectListContext.Provider>
    </SelectListElement>
}

export default SelectList