import React from 'react'
import { ComponentPropsWithoutRef } from "react"
import NavCollapseButtonElement, { NavCollapseButtonElementProps } from "./NavCollapseButtonElement"
import { RiMenuLine } from "react-icons/ri"

type NavCollapseButton = Omit<ComponentPropsWithoutRef<'button'>, 'children'> & NavCollapseButtonElementProps

const NavCollapseButton = (props: NavCollapseButton) => {
    return <NavCollapseButtonElement {...props}>
        <RiMenuLine />
    </NavCollapseButtonElement>
}

export default NavCollapseButton