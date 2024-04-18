import React, { Children, createContext, ReactElement, useContext } from 'react'
import NavBarElement from "./NavBarElement"
import NavBarItemsContainerElement from './NavBarItemsContainerElement'

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
    const context = useContext(NavBarRenderStateContext)
    const childrenArray = Children.toArray(children)
    if (!context.leading) {
        childrenArray.splice(0, 0, <NavBarItemsContainerElement key="__leading" />)
    }
    if (!context.trailing) {
        childrenArray.push(<NavBarItemsContainerElement key="__trailing" />)
    }
    return <NavBarElement>
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