// This file is generated by Teo generator for extending purpose.
// The file content will not be overwritten between generations. Be careful to 
// modify this file. Do not modify export names and siganatures. Modify values 
// with care.

import React from 'react'
import AppRootElement from './AppRootElement'
import AppNavLayout from './AppNavLayout'
import Nav from '../../generated/nav/Nav'
import AppContentLayout from './AppContentLayout'
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