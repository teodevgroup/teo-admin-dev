import React, { forwardRef, useRef, useState } from 'react'
import { ComponentPropsWithRef } from "react"
import ContextMenuElement from './ContextMenuElement'
import { useListNavigation } from '@floating-ui/react'

type ContextMenuProps = ComponentPropsWithRef<'div'> & { context: any }

const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>((props: ContextMenuProps, ref) => {
    // const [activeIndex, setActiveIndex] = useState<number | null>(null);
    // const listItemsRef = useRef<Array<HTMLButtonElement | null>>([])
    // const listNavigation = useListNavigation(props.context, {
    //     listRef: listItemsRef,
    //     onNavigate: setActiveIndex,
    //     activeIndex
    //   });
    return <ContextMenuElement ref={ref} {...props} />
})

export default ContextMenu