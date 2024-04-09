import React, { Suspense } from 'react'
import StatusBar from '../../extended/statusBar/StatusBar'
import StatusBarShimmer from '../../extended/statusBar/StatusBarShimmer'

const StatusBarWithShimmer = () => <Suspense fallback={<StatusBarShimmer />}>
    <StatusBar />
</Suspense>

export default StatusBarWithShimmer