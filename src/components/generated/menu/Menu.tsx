// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { forwardRef, useContext } from 'react'
import { ComponentPropsWithRef } from "react"
import MenuElement from '../../extended/MenuElement'
import { FloatingFocusManager, FloatingList, FloatingNode,  FloatingPortal,  useMergeRefs } from '@floating-ui/react'
import { omit } from 'radash'
import MenuContext from './MenuContext'

type MenuProps = ComponentPropsWithRef<'div'>

const Menu = forwardRef<HTMLDivElement, MenuProps>((props: MenuProps, forwardedRef) => {
    const menuContext = useContext(MenuContext)
    return <FloatingNode id={menuContext.nodeId}>
        <FloatingList elementsRef={menuContext.listItemsRef} labelsRef={menuContext.labelsRef}>
            {menuContext.isOpen ? <FloatingPortal>
                <FloatingFocusManager
                    context={menuContext.floatingContext}
                    modal={false}
                    initialFocus={menuContext.isNested ? -1 : 0}
                    returnFocus={!menuContext.isNested}
                >
                    <MenuElement ref={useMergeRefs([forwardedRef, menuContext.refs.setFloating])} style={menuContext.floatingStyles} {...omit(props, ['children'])} {...menuContext.getFloatingProps()}>
                        {props.children}
                    </MenuElement>
                </FloatingFocusManager>
            </FloatingPortal>  : null}
        </FloatingList>
    </FloatingNode>
})

export default Menu