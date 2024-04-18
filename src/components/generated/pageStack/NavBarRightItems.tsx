import React, { ReactNode } from "react"
import NavBarItemsContainerElement from "./NavBarItemsContainerElement"

type NavBarRightItemsProps = {
    children: ReactNode | ReactNode[]
}

const NavBarRightItems = ({ children }: NavBarRightItemsProps) => {
    return <NavBarItemsContainerElement>
        {children}
    </NavBarItemsContainerElement>
}

export default NavBarRightItems