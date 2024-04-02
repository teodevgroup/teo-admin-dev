// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import AppRootElement from '../../extended/app/AppRootElement'
import AppNavLayout from '../../extended/app/AppNavLayout'
import Nav from '../../generated/nav/Nav'
import AppContentLayout from '../../extended/app/AppContentLayout'
import StatusBar from '../statusBar/StatusBar'
import SignInModal from '../../generated/signInModal/SignInModal'

const App = () => {
    return <AppRootElement>
        <AppNavLayout>
            <Nav />
            <AppContentLayout>
                <StatusBar />
            </AppContentLayout>
        </AppNavLayout>
        <SignInModal />
    </AppRootElement>
}

export default App