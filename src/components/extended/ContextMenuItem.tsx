import React, { forwardRef } from 'react'
import { ComponentPropsWithRef } from "react"
import ContextMenuItemElement, { ContextMenuItemElementProps } from './ContextMenuItemElement'
import { omit } from 'radash'
import ContextMenuItemText from './ContextMenuItemtext'

type ContextMenuItemProps = Omit<ComponentPropsWithRef<'div'>, 'children'> & ContextMenuItemElementProps & { action?: () => void, label: string }

const ContextMenuItem = forwardRef<HTMLDivElement, ContextMenuItemProps>((props: ContextMenuItemProps, ref) => {
    return <ContextMenuItemElement ref={ref} {...omit(props, ['action', 'label'])} onClick={(e) => {
        if (props.disabled) {
            e.stopPropagation()
        } else if (props.action) {
            props.action()
        }
    }}>
        <ContextMenuItemText>
            {props.label}
        </ContextMenuItemText>
    </ContextMenuItemElement>
})

export default ContextMenuItem