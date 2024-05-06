// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import { useNavItems } from "../../../lib/generated/preferences"
import NavItemShimmer from './NavItemShimmer'
import NavItemsElement from './NavItemsElement'

const NavItemsShimmer = () => {
    const [items] = useNavItems()
    return <NavItemsElement>
        {items.map((_, index) => <NavItemShimmer key={index} />)}
    </NavItemsElement>
}

export default NavItemsShimmer