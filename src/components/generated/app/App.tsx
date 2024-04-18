// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import usePath from 'react-use-path'
import AppRootElement from '../../extended/app/AppRootElement'
import AppNavLayout from '../../extended/app/AppNavLayout'
import SignInModal from '../../generated/signInModal/SignInModal'
import NavWithShimmer from '../nav/NavWithShimmer'
import pageStackDataFromPath from '../pageStack/pageStackDataFromPath'
import usePageStackOwner from '../pageStack/usePageStackOwner'
import PageStackContext from '../pageStack/PageStackContext'
import ContentTabsCache from '../contentTabs/ContentTabsCache'

const App = () => {
    const [{ path }] = usePath()
    const initialPageStack = pageStackDataFromPath(path)
    const stackProps = usePageStackOwner(initialPageStack)
    return <AppRootElement>
        <PageStackContext.Provider value={stackProps}>
            <AppNavLayout>
                <NavWithShimmer />
                <ContentTabsCache stackProps={stackProps} />
            </AppNavLayout>
        </PageStackContext.Provider>
        <SignInModal />
    </AppRootElement>
}

export default App