import React from 'react'
import NavElement from '../../extended/nav/NavElement'
import { useNavCollapsed } from '../../../lib/generated/preferences'
import Shimmer from '../shimmer/Shimmer'

const NavShimmer = () => {
    const [navCollapsed] = useNavCollapsed()
    return <NavElement collapsed={navCollapsed}>
        <Shimmer />
    </NavElement>
}

export default NavShimmer