import React, { forwardRef } from 'react'
import { ComponentPropsWithRef } from "react"
import ContextMenuElement from './ContextMenuElement'

type ContextMenuProps = ComponentPropsWithRef<'div'>

const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>((props: ContextMenuProps, ref) => {
    return <ContextMenuElement ref={ref} {...props} />
})

export default ContextMenu