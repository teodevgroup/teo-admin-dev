// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import Page from '../../pageStack/Page'
import NavBar from '../../pageStack/NavBar'
import NavBarTitleItems from '../../pageStack/NavBarTitleItems'
import Main from '../../pageStack/Main'
import PageProps from '../../pageStack/PageProps'

const UserPage = ({ item }: PageProps) => {
    return <Page>
        <NavBar>
            <NavBarTitleItems>User Page Title</NavBarTitleItems>
        </NavBar>
        <Main>
            <div style={{height: 50}}>User Page Content</div>
        </Main>
    </Page>
}

export default UserPage