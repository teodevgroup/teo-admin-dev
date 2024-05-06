// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { Suspense } from 'react'
import Nav from './Nav'
import NavShimmer from '../../extended/nav/NavShimmer'

const NavWithShimmer = () => <Suspense fallback={<NavShimmer />}>
    <Nav />
</Suspense>

export default NavWithShimmer