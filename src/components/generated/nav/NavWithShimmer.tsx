import React, { Suspense } from 'react'
import Nav from './Nav'
import NavShimmer from '../../extended/nav/NavShimmer'

const NavWithShimmer = () => <Suspense fallback={<NavShimmer />}>
    <Nav />
</Suspense>

export default NavWithShimmer