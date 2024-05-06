// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import NavElement from '../../extended/nav/NavElement'
import { useNavCollapsed } from '../../../lib/generated/preferences'
import Shimmer from '../shimmer/Shimmer'
import { NavCollapseButtonInnerContainerElement, NavCollapseButtonOuterContainerElement } from './NavCollapseButtonContainerElement'
import RoundedButtonShimmer from '../button/RoundedButtonShimmer'
import NavLogo from './NavLogo'
import NavLogoElement from './NavLogoElement'
import LogoShimmer from './LogoShimmer'
import NavItemsShimmer from './NavItemsShimmer'
import NavLogoContainerElement from './NavLogoContainerElement'

const NavShimmer = () => {
    const [navCollapsed] = useNavCollapsed()
    return <NavElement collapsed={navCollapsed}>
        <NavCollapseButtonOuterContainerElement>
            <NavCollapseButtonInnerContainerElement collapsed={navCollapsed}>
                <RoundedButtonShimmer />
            </NavCollapseButtonInnerContainerElement>
        </NavCollapseButtonOuterContainerElement>
        <NavLogoContainerElement>
            <NavLogoElement collapsed={navCollapsed}>
                <LogoShimmer />
            </NavLogoElement>
        </NavLogoContainerElement>
        <NavItemsShimmer />
    </NavElement>
}

export default NavShimmer