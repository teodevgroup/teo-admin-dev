import React from 'react'
import PaddedMainContent from "../../pageStack/PaddedMainContent"
import PageProps from '../../pageStack/PageProps'
import HideContentShimmerIfNotSignedIn from '../../shimmer/HideContentShimmerIfNotSignedIn'

const AdminDashboard = ({ item }: PageProps) => {
    return <PaddedMainContent>
        <HideContentShimmerIfNotSignedIn>
            Dashboard is not implemented.
        </HideContentShimmerIfNotSignedIn>
    </PaddedMainContent>
}

export default AdminDashboard