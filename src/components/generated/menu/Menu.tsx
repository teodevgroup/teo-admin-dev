// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { forwardRef, useContext } from 'react'
import { ComponentPropsWithRef } from "react"
import MenuElement from '../../extended/menu/MenuElement'
import { FloatingFocusManager, FloatingPortal, useMergeRefs } from '@floating-ui/react'
import { omit } from 'radash'
import MenuContext from './MenuContext'

type MenuProps = ComponentPropsWithRef<'div'>

const Menu = forwardRef<HTMLDivElement, MenuProps>((props: MenuProps, forwardedRef) => {
    const menuContext = useContext(MenuContext)
    return <FloatingPortal>
        <FloatingFocusManager
            context={menuContext.floatingContext}
            modal={false}
            initialFocus={menuContext.isNested ? -1 : 0}
            returnFocus={!menuContext.isNested}
        >
            <MenuElement role="menu" ref={useMergeRefs([forwardedRef, menuContext.refs.setFloating])} style={menuContext.floatingStyles} {...menuContext.getFloatingProps(omit(props, ['children']))}>
                {props.children}
            </MenuElement>
        </FloatingFocusManager>
    </FloatingPortal>
})

export default Menu