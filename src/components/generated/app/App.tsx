// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import usePath from 'react-use-path'
import AppRootElement from '../../extended/app/AppRootElement'
import AppNavLayout from '../../extended/app/AppNavLayout'
import AppContentLayout from '../../extended/app/AppContentLayout'
import SignInModal from '../../generated/signInModal/SignInModal'
import NavWithShimmer from '../nav/NavWithShimmer'
import StatusBarWithShimmer from '../statusBar/StatusBarWithShimmer'
import pageStackDataFromPath from '../pageStack/pageStackDataFromPath'
import usePageStackOwner from '../pageStack/usePageStackOwner'
import PageStacksCache from '../pageStack/PageStacksCache'

const App = () => {
    const [{ path }] = usePath()
    const initialPageStack = pageStackDataFromPath(path)
    const stackProps = usePageStackOwner(initialPageStack)
    return <AppRootElement>
        <AppNavLayout>
            <NavWithShimmer />
            <AppContentLayout>
                <StatusBarWithShimmer />
                <PageStacksCache stackProps={stackProps} />
            </AppContentLayout>
        </AppNavLayout>
        <SignInModal />
    </AppRootElement>
}

export default App