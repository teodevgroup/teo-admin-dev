import React, { ReactNode, useContext } from "react"
import NavBarItemsContainerElement from "./NavBarItemsContainerElement"
import { NavBarRenderStateContext } from "./NavBar"

type NavBarTrailingItemsProps = {
    children: ReactNode | ReactNode[]
}

const NavBarTrailingItems = ({ children }: NavBarTrailingItemsProps) => {
    const context = useContext(NavBarRenderStateContext)
    context.trailing = true
    return <NavBarItemsContainerElement>
        {children}
    </NavBarItemsContainerElement>
}

export default NavBarTrailingItems