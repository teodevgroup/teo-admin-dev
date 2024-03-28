import React, { cloneElement, forwardRef, useContext } from 'react'
import { ComponentPropsWithRef } from "react"
import MenuItemElement, { MenuItemElementProps } from '../../extended/MenuItemElement'
import { omit } from 'radash'
import MenuItemTextElement from '../../extended/MenuItemTextElement'
import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react'
import MenuContext from './MenuContext'
import MenuItemKeyboardShortcutElement from '../../extended/MenuItemKeyboardShortcutElement'
import useMenuOwner from './useMenuOwner'
import MenuItemAccessoryElement from '../../extended/MenuItemAccessoryElement'

type MenuItemProps = ComponentPropsWithRef<'button'> & MenuItemElementProps & { action?: () => void, label: string, keyboardShortcut?: string }

const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>((props: MenuItemProps, forwardedRef) => {
    const parentMenuContext = useContext(MenuContext)
    const item = useListItem({ label: props.disabled ? null : props.label })
    const tree = useFloatingTree()
    const isActive = item.index === parentMenuContext.activeIndex
    const childMenuContext = props.children ? useMenuOwner() : null
    console.log("see child is open: ", childMenuContext?.isOpen)
    return <MenuItemElement highlighted={isActive} type="button" role="menuitem" tabIndex={isActive ? 0 : -1} disabled={props.disabled} ref={useMergeRefs([item.ref, forwardedRef, childMenuContext?.refs.setPositionReference])} {...omit(props, ['action', 'label'])} {...parentMenuContext.getItemProps({
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
            parentMenuContext.setHasFocusInside(true);
        }
    })}>
        <MenuItemTextElement>
            {props.label}
        </MenuItemTextElement>
        <MenuItemAccessoryElement>
            <MenuItemKeyboardShortcutElement>
                {props.keyboardShortcut}
            </MenuItemKeyboardShortcutElement>
            {props.children ? ">" : null}
        </MenuItemAccessoryElement>
        {props.children && childMenuContext?.isOpen ? <MenuContext.Provider value={childMenuContext as any}>
            {props.children}
        </MenuContext.Provider> : null}
    </MenuItemElement>
})

export default MenuItem