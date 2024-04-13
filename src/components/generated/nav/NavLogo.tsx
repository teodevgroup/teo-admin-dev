// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import NavLogoElement from './NavLogoElement'
import Logo from '../../extended/logo/Logo'

type NavLogoProps = {
    collapsed: boolean
}

const NavLogo = ({ collapsed }: NavLogoProps) => <NavLogoElement collapsed={collapsed}>
    <Logo />
</NavLogoElement>

export default NavLogo