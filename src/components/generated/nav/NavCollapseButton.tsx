// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { forwardRef } from 'react'
import { ComponentPropsWithRef } from "react"
import NavCollapseButtonElement from "../../extended/nav/NavCollapseButtonElement"
import { LuMenu } from 'react-icons/lu'

export type NavCollapseButtonProps = Omit<ComponentPropsWithRef<'button'>, 'children'> & { collapsed: boolean }

const NavCollapseButton = forwardRef<HTMLButtonElement, NavCollapseButtonProps>(({ collapsed, ...props }: NavCollapseButtonProps, ref) => {
    return <NavCollapseButtonElement ref={ref} {...props}>
        <LuMenu />
    </NavCollapseButtonElement>
})

export default NavCollapseButton