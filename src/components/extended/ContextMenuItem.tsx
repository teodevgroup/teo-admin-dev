import React, { forwardRef, useContext } from 'react'
import { ComponentPropsWithRef } from "react"
import ContextMenuItemElement, { ContextMenuItemElementProps } from './ContextMenuItemElement'
import { omit } from 'radash'
import ContextMenuItemText from './ContextMenuItemtext'
import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react'
import ContextMenuContext from '../generated/ContextMenuContext'

type ContextMenuItemProps = ComponentPropsWithRef<'button'> & ContextMenuItemElementProps & { action?: () => void, label: string }

const ContextMenuItem = forwardRef<HTMLButtonElement, ContextMenuItemProps>((props: ContextMenuItemProps, forwardedRef) => {
    const contextMenu = useContext(ContextMenuContext)
    const item = useListItem({ label: props.disabled ? null : props.label })
    const tree = useFloatingTree()
    const isActive = item.index === contextMenu.activeIndex
    return <ContextMenuItemElement type="button" role="menuitem" tabIndex={isActive ? 0 : -1} disabled={props.disabled} ref={useMergeRefs([item.ref, forwardedRef])} {...omit(props, ['action', 'label'])} {...contextMenu.getItemProps({
        onClick(event: React.MouseEvent<HTMLButtonElement>) {
            if (props.disabled) {
                event.stopPropagation()
            } else if (props.action) {
                props.action()
            }
            tree?.events.emit("click")
        },
        onFocus(event: React.FocusEvent<HTMLButtonElement>) {
            props.onFocus?.(event);
            contextMenu.setHasFocusInside(true);
        }
    })}>
        <ContextMenuItemText>
            {props.label}
        </ContextMenuItemText>
    </ContextMenuItemElement>
})

export default ContextMenuItem