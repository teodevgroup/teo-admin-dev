// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { forwardRef, useContext } from 'react'
import { ComponentPropsWithRef } from "react"
import MenuElement from '../../extended/MenuElement'
import { FloatingFocusManager, FloatingList, FloatingNode,  useMergeRefs } from '@floating-ui/react'
import { omit } from 'radash'
import MenuContext from './MenuContext'

type MenuProps = ComponentPropsWithRef<'div'>

const Menu = forwardRef<HTMLDivElement, MenuProps>((props: MenuProps, ref) => {
    const menuContext = useContext(MenuContext)
    return <FloatingNode id={menuContext.nodeId}>
        <FloatingList elementsRef={menuContext.listItemsRef} labelsRef={menuContext.labelsRef}>
            {menuContext.isOpen ? <FloatingFocusManager
                context={menuContext.floatingContext}
                modal={false}
                initialFocus={menuContext.isNested ? -1 : 0}
                returnFocus={!menuContext.isNested}
            >
                <MenuElement ref={useMergeRefs([ref, menuContext.refs.setFloating])} style={menuContext.floatingStyles} {...omit(props, ['children'])} {...menuContext.getFloatingProps()}>
                    {props.children}
                </MenuElement>
            </FloatingFocusManager> : null}
        </FloatingList>
    </FloatingNode>
})

export default Menu