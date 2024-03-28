import React, { forwardRef, useContext } from 'react'
import { ComponentPropsWithRef } from "react"
import MenuItemElement, { MenuItemElementProps } from '../../extended/MenuItemElement'
import { omit } from 'radash'
import MenuItemTextElement from '../../extended/MenuItemTextElement'
import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react'
import MenuContext from './MenuContext'
import MenuItemKeyboardShortcutElement from '../../extended/MenuItemKeyboardShortcutElement'
import useMenuOwner from './useMenuOwner'

type MenuItemProps = ComponentPropsWithRef<'button'> & MenuItemElementProps & { action?: () => void, label: string, keyboardShortcut?: string }

const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>((props: MenuItemProps, forwardedRef) => {
    const menuContext = useContext(MenuContext)
    const item = useListItem({ label: props.disabled ? null : props.label })
    const tree = useFloatingTree()
    const isActive = item.index === menuContext.activeIndex
    const childMenuContext = props.children ? useMenuOwner() : null
    return <MenuItemElement type="button" role="menuitem" tabIndex={isActive ? 0 : -1} disabled={props.disabled} ref={useMergeRefs([item.ref, forwardedRef])} {...omit(props, ['action', 'label'])} {...menuContext.getItemProps({
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
            menuContext.setHasFocusInside(true);
        }
    })}>
        <MenuItemTextElement>
            {props.label}
        </MenuItemTextElement>
        <MenuItemKeyboardShortcutElement>
            {props.keyboardShortcut}
        </MenuItemKeyboardShortcutElement>
        {props.children ? <MenuContext.Provider value={childMenuContext as any}>
            {props.children}
        </MenuContext.Provider> : null}

        {props.children ? props.children : null}
    </MenuItemElement>
})

export default MenuItem