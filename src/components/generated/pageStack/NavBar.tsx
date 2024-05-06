// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { Children, createContext, ReactElement, useContext } from 'react'
import NavBarElement from "./NavBarElement"
import NavBarLeadingItems from './NavBarLeadingItems'
import NavBarTrailingItems from './NavBarTrailingItems'
import StackItemIndexContext from './stackItemIndexContext'

export type NavBarRenderState = {
    leading: boolean
    title: boolean
    trailing: boolean
}

export type NavBarProps = {
    children: ReactElement | ReactElement[]
}

export const NavBarRenderStateContext = createContext<NavBarRenderState>({
    leading: false,
    title: false,
    trailing: false,
})

const NavBarInner = ({ children }: NavBarProps) => {
    const navBarContext = useContext(NavBarRenderStateContext)
    const { topMost } = useContext(StackItemIndexContext)
    const childrenArray = Children.toArray(children)
    if (!navBarContext.leading) {
        childrenArray.splice(0, 0, <NavBarLeadingItems key="__leading" />)
    }
    if (!navBarContext.trailing) {
        childrenArray.push(<NavBarTrailingItems key="__trailing" />)
    }
    return <NavBarElement topMost={topMost}>
        {childrenArray}
    </NavBarElement>
}

const NavBar = ({ children }: NavBarProps) => {
    const navBarRenderState: NavBarRenderState = {
        leading: false,
        title: false,
        trailing: false
    }
    return <NavBarRenderStateContext.Provider value={navBarRenderState}>
        <NavBarInner>
            {children}
        </NavBarInner>
    </NavBarRenderStateContext.Provider>
}

export default NavBar