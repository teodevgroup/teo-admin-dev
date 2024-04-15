// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import NavLogoElement from './NavLogoElement'
import Logo from '../../extended/logo/Logo'
import NavLogoContainerElement from './NavLogoContainerElement'

type NavLogoProps = {
    collapsed: boolean
}

const NavLogo = ({ collapsed }: NavLogoProps) => <NavLogoContainerElement>
    <NavLogoElement collapsed={collapsed}>
        <Logo />
    </NavLogoElement>
</NavLogoContainerElement>

export default NavLogo