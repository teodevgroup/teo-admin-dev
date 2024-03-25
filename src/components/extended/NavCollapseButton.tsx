import React, { forwardRef } from 'react'
import { ComponentPropsWithRef } from "react"
import NavCollapseButtonElement, { NavCollapseButtonElementProps } from "./NavCollapseButtonElement"
import { RiMenuLine } from "react-icons/ri"

type NavCollapseButtonProps = Omit<ComponentPropsWithRef<'button'>, 'children'> & NavCollapseButtonElementProps

const NavCollapseButton = forwardRef<HTMLButtonElement, NavCollapseButtonProps>((props: NavCollapseButtonProps, ref) => {
    return <NavCollapseButtonElement ref={ref} {...props}>
        <RiMenuLine />
    </NavCollapseButtonElement>
})

export default NavCollapseButton