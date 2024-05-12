// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { ForwardedRef, forwardRef, useContext } from 'react'
import { ComponentPropsWithoutRef } from "react"
import MenuItemElement, { MenuItemElementProps } from '../../extended/menu/MenuItemElement'
import { omit } from 'radash'
import MenuItemTextElement from '../../extended/menu/MenuItemTextElement'
import { FloatingList, FloatingNode, useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react'
import MenuContext from './MenuContext'
import MenuItemKeyboardShortcutElement from '../../extended/menu/MenuItemKeyboardShortcutElement'
import useMenuOwner from './useMenuOwner'
import MenuItemAccessoryElement from '../../extended/menu/MenuItemAccessoryElement'
import mergeProps from 'merge-props'
import MenuItemChecker from './MenuItemChecker'

type MenuItemProps = ComponentPropsWithoutRef<'button'> & MenuItemElementProps & { 
    action?: () => void, 
    label: string, keyboardShortcut?: string,
    checked?: boolean
}

const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>((props: MenuItemProps, forwardedRef: ForwardedRef<HTMLButtonElement>) => {
    const parentMenuContext = useContext(MenuContext)
    const tree = useFloatingTree()
    const item = useListItem({ label: props.disabled ? null : props.label })
    const isActive = item.index === parentMenuContext.activeIndex
    const childMenuContext = props.children ? useMenuOwner() : null
    const element = <MenuItemElement highlighted={isActive} type="button" role="menuitem" tabIndex={isActive ? 0 : -1} disabled={props.disabled} ref={useMergeRefs([item.ref, forwardedRef, childMenuContext?.refs.setPositionReference])} {...mergeProps(parentMenuContext.getItemProps(), 
        omit(props, ['action', 'label']),
        {
            onClick(event: React.MouseEvent<HTMLButtonElement>) {
                if (props.disabled) {
                    event.stopPropagation()
                } else if (props.action) {
                    props.action()
                    tree?.events.emit("click")
                }
            },
            onFocus(event: React.FocusEvent<HTMLButtonElement>) {
                props.onFocus?.(event)
                parentMenuContext.setHasFocusInside(true)
            }
        },
        childMenuContext?.getReferenceProps({}) as any)}>
        {props.checked === undefined ? null : <MenuItemChecker checked={props.checked} />}
        <MenuItemTextElement>
            {props.label}
        </MenuItemTextElement>
        <MenuItemAccessoryElement>
            <MenuItemKeyboardShortcutElement>
                {props.keyboardShortcut}
            </MenuItemKeyboardShortcutElement>
            {props.children ? "▶" : null}
        </MenuItemAccessoryElement>
    </MenuItemElement>
    return childMenuContext ? <FloatingNode id={childMenuContext!.nodeId}>
        <div ref={childMenuContext.refs.setReference}>
            {element}
            <FloatingList elementsRef={childMenuContext.listItemsRef} labelsRef={childMenuContext.labelsRef}>
                {props.children && childMenuContext?.isOpen ? <MenuContext.Provider value={childMenuContext as any}>
            {props.children}
        </MenuContext.Provider> : null}
            </FloatingList>
        </div>
    </FloatingNode> : element
})

export default MenuItem