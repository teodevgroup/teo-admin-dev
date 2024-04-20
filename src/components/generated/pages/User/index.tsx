import React from 'react'
import Page from '../../pageStack/Page'
import NavBar from '../../pageStack/NavBar'
import NavBarTitleItems from '../../pageStack/NavBarTitleItems'
import Main from '../../pageStack/Main'

const UserPage = () => {
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