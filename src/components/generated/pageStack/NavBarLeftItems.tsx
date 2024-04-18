import React, { ReactNode } from "react"
import NavBarItemsContainerElement from "./NavBarItemsContainerElement"

type NavBarLeftItemsProps = {
    children: ReactNode | ReactNode[]
}

const NavBarLeftItems = ({ children }: NavBarLeftItemsProps) => {
    return <NavBarItemsContainerElement>
        {children}
    </NavBarItemsContainerElement>
}

export default NavBarLeftItems