// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import AppRootElement from '../../extended/app/AppRootElement'
import AppNavLayout from '../../extended/app/AppNavLayout'
import AppContentLayout from '../../extended/app/AppContentLayout'
import SignInModal from '../../generated/signInModal/SignInModal'
import NavWithShimmer from '../nav/NavWithShimmer'
import StatusBarWithShimmer from '../statusBar/StatusBarWithShimmer'

const App = () => {
    return <AppRootElement>
        <AppNavLayout>
            <NavWithShimmer />
            <AppContentLayout>
                <StatusBarWithShimmer />
            </AppContentLayout>
        </AppNavLayout>
        <SignInModal />
    </AppRootElement>
}

export default App