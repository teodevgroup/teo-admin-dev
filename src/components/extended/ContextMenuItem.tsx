import React, { forwardRef } from 'react'
import { ComponentPropsWithRef } from "react"
import ContextMenuItemElement, { ContextMenuItemElementProps } from './ContextMenuItemElement'
import { omit } from 'radash'

type ContextMenuItemProps = ComponentPropsWithRef<'div'> & ContextMenuItemElementProps & { action?: () => void }

const ContextMenuItem = forwardRef<HTMLDivElement, ContextMenuItemProps>((props: ContextMenuItemProps, ref) => {
    return <ContextMenuItemElement ref={ref} {...omit(props, ['action'])} onClick={(e) => {
        if (props.disabled) {
            e.stopPropagation()
        } else if (props.action) {
            props.action()
        }
    }} />
})

export default ContextMenuItem