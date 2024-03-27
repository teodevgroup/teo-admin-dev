import React, { forwardRef, useContext } from 'react'
import { ComponentPropsWithRef } from "react"
import MenuItemElement, { MenuItemElementProps } from '../extended/MenuItemElement'
import { omit } from 'radash'
import MenuItemTextElement from '../extended/MenuItemTextElement'
import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react'
import ContextMenuContext from './MenuContext'

type MenuProps = ComponentPropsWithRef<'button'> & MenuItemElementProps & { action?: () => void, label: string }

const Menu = forwardRef<HTMLButtonElement, MenuProps>((props: MenuProps, forwardedRef) => {
    const contextMenu = useContext(ContextMenuContext)
    const item = useListItem({ label: props.disabled ? null : props.label })
    const tree = useFloatingTree()
    const isActive = item.index === contextMenu.activeIndex
    return <MenuItemElement type="button" role="menuitem" tabIndex={isActive ? 0 : -1} disabled={props.disabled} ref={useMergeRefs([item.ref, forwardedRef])} {...omit(props, ['action', 'label'])} {...contextMenu.getItemProps({
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
        <MenuItemTextElement>
            {props.label}
        </MenuItemTextElement>
    </MenuItemElement>
})

export default Menu