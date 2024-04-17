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
import PageStackContext from '../pageStack/PageStackContext'
import useStatusBarItemsOwner from '../statusBar/useStatusBarItemsOwner'
import StatusBarItemsContext from '../statusBar/StatusBarItemsContext'
import RootStackView from '../pageStack/RootStackView'
import ContentTabsCache from '../contentTabs/ContentTabsCache'

const App = () => {
    const [{ path }] = usePath()
    const initialPageStack = pageStackDataFromPath(path)
    const statusBarOwnerProps = useStatusBarItemsOwner()
    const stackProps = usePageStackOwner(initialPageStack, statusBarOwnerProps)
    return <AppRootElement>
        <StatusBarItemsContext.Provider value={statusBarOwnerProps}>
            <PageStackContext.Provider value={stackProps}>
                <AppNavLayout>
                    <NavWithShimmer />
                    <ContentTabsCache stackProps={stackProps} />
                    <AppContentLayout>
                        <StatusBarWithShimmer />
                        <PageStacksCache stackProps={stackProps} />
                    </AppContentLayout>
                </AppNavLayout>
            </PageStackContext.Provider>
        </StatusBarItemsContext.Provider>
        <SignInModal />
    </AppRootElement>
}

export default App