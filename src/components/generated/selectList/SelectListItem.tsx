// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { ComponentPropsWithRef, forwardRef, useContext, useEffect, useRef, useState } from 'react'
import SelectListItemElement from '../../extended/selectList/SelectListItemElement'
import SelectListContext from './SelectListContext'
import { useMergeRefs } from '@floating-ui/react'

type SelectListItemProps = ComponentPropsWithRef<'button'>

const SelectListItem = forwardRef<HTMLButtonElement, SelectListItemProps>(({ children, ...props }: SelectListItemProps, forwardedRef) => {
    const context = useContext(SelectListContext)
    const ref = useRef<HTMLButtonElement>(null)
    const [index, setIndex] = useState<number | null>(null)
    useEffect(() => {
        const index = context.refs.current.indexOf(ref.current)
        setIndex(index)
    }, [context])
    const highlighted = context.activeIndex === index
    const selected = context.selectedIndex === index
    return <SelectListItemElement highlighted={highlighted} selected={selected} {...props} ref={useMergeRefs([(r) => context.refs.current.push(r), forwardedRef, ref])} 
    onMouseEnter={(e) => {
        context.setActiveIndex(index)
    }} onMouseLeave={(e) => {
        context.setActiveIndex(null)
    }} onClick={(e) => {
        context.setSelectedIndex(index)
    }}>
        {children}
    </SelectListItemElement>
})

export default SelectListItem