// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { forwardRef, useContext } from 'react'
import { ComponentPropsWithRef } from "react"
import MenuItemElement, { MenuItemElementProps } from '../../extended/menu/MenuItemElement'
import { omit } from 'radash'
import MenuItemTextElement from '../../extended/menu/MenuItemTextElement'
import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react'
import MenuContext from './MenuContext'
import MenuItemKeyboardShortcutElement from '../../extended/menu/MenuItemKeyboardShortcutElement'
import useMenuOwner from './useMenuOwner'
import MenuItemAccessoryElement from '../../extended/menu/MenuItemAccessoryElement'
import mergeProps from 'merge-props'

type MenuItemProps = ComponentPropsWithRef<'button'> & MenuItemElementProps & { action?: () => void, label: string, keyboardShortcut?: string }

const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>((props: MenuItemProps, forwardedRef) => {
    const parentMenuContext = useContext(MenuContext)
    const item = useListItem({ label: props.disabled ? null : props.label })
    const tree = useFloatingTree()
    const isActive = item.index === parentMenuContext.activeIndex
    const childMenuContext = props.children ? useMenuOwner() : null
    const element = <MenuItemElement highlighted={isActive} type="button" role="menuitem" tabIndex={isActive ? 0 : -1} disabled={props.disabled} ref={useMergeRefs([forwardedRef, childMenuContext?.refs.setPositionReference, item.ref])} {...mergeProps(parentMenuContext.getItemProps(), 
        omit(props, ['action', 'label']),
        {
            onClick(event: React.MouseEvent<HTMLButtonElement>) {
                if (props.disabled) {
                    event.stopPropagation()
                } else if (props.action) {
                    props.action()
                }
                tree?.events.emit("click")
            },
            onFocus(event: React.FocusEvent<HTMLButtonElement>) {
                props.onFocus?.(event)
                parentMenuContext.setHasFocusInside(true)
            }
        },
        childMenuContext?.getReferenceProps({}) as any)}>
        <MenuItemTextElement>
            {props.label}
        </MenuItemTextElement>
        <MenuItemAccessoryElement>
            <MenuItemKeyboardShortcutElement>
                {props.keyboardShortcut}
            </MenuItemKeyboardShortcutElement>
            {props.children ? "▶" : null}
        </MenuItemAccessoryElement>
        {props.children && childMenuContext?.isOpen ? <MenuContext.Provider value={childMenuContext as any}>
            {props.children}
        </MenuContext.Provider> : null}
    </MenuItemElement>
    if (childMenuContext) {
        return <div ref={childMenuContext.refs.setReference}>
            {element}
        </div>
    } else {
        return element
    }
})

export default MenuItem