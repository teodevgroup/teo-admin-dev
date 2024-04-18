import React, { ReactNode } from "react"
import NavBarItemsContainerElement from "./NavBarItemsContainerElement"

type NavBarTitleItemsProps = {
    children: ReactNode | ReactNode[]
}

const NavBarTitleItems = ({ children }: NavBarTitleItemsProps) => {
    return <NavBarItemsContainerElement>
        {children}
    </NavBarItemsContainerElement>
}

export default NavBarTitleItems