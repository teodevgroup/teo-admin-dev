import React, { ReactNode, useContext } from "react"
import NavBarItemsContainerElement from "./NavBarItemsContainerElement"
import { NavBarRenderStateContext } from "./NavBar"

type NavBarLeadingItemsProps = {
    children: ReactNode | ReactNode[]
}

const NavBarLeadingItems = ({ children }: NavBarLeadingItemsProps) => {
    const context = useContext(NavBarRenderStateContext)
    context.leading = true
    return <NavBarItemsContainerElement>
        {children}
    </NavBarItemsContainerElement>
}

export default NavBarLeadingItems