import React, { forwardRef } from 'react'
import { ComponentPropsWithRef } from "react"
import NavCollapseButtonElement, { NavCollapseButtonElementProps } from "./NavCollapseButtonElement"
import { RiMenuLine } from "react-icons/ri"

type NavCollapseButton = Omit<ComponentPropsWithRef<'button'>, 'children'> & NavCollapseButtonElementProps

const NavCollapseButton = forwardRef<HTMLButtonElement, NavCollapseButton>((props: NavCollapseButton, ref) => {
    return <NavCollapseButtonElement ref={ref} {...props}>
        <RiMenuLine />
    </NavCollapseButtonElement>
})

export default NavCollapseButton