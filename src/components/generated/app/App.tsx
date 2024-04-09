// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import AppRootElement from '../../extended/app/AppRootElement'
import AppNavLayout from '../../extended/app/AppNavLayout'
import AppContentLayout from '../../extended/app/AppContentLayout'
import StatusBar from '../statusBar/StatusBar'
import SignInModal from '../../generated/signInModal/SignInModal'
import NavWithShimmer from '../nav/NavWithShimmer'

const App = () => {
    return <AppRootElement>
        <AppNavLayout>
            <NavWithShimmer />
            <AppContentLayout>
                <StatusBar />
            </AppContentLayout>
        </AppNavLayout>
        <SignInModal />
    </AppRootElement>
}

export default App