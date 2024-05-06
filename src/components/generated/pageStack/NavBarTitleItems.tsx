// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { ReactNode, useContext } from "react"
import NavBarItemsContainerElement from "./NavBarItemsContainerElement"
import { NavBarRenderStateContext } from "./NavBar"

type NavBarTitleItemsProps = {
    children: ReactNode | ReactNode[]
}

const NavBarTitleItems = ({ children }: NavBarTitleItemsProps) => {
    const context = useContext(NavBarRenderStateContext)
    context.title = true
    return <NavBarItemsContainerElement>
        {children}
    </NavBarItemsContainerElement>
}

export default NavBarTitleItems