import React, { ReactElement } from 'react'
import { PageStackItem } from "../../generated/pageStack/PageStackItem"
import Input from '../../extended/input/Input'
import Button from '../../extended/button/Button'
import Page from './Page'
import NavBar from './NavBar'
import NavBarTitleItems from './NavBarTitleItems'
import Main from './Main'

const AdminPage = () => {
    return <Page>
        <NavBar>
            <NavBarTitleItems>Admin Page Title</NavBarTitleItems>
        </NavBar>
        <Main>
            <div style={{
                background: "white", 
                paddingBottom: "20px",
                margin: "20px",
                borderRadius: 10,
            }}>
                <Input /><Button onClick={() => {}}>Button</Button>
            </div>
        </Main>
    </Page>
}

const UserPage = () => {
    return <Page>
        <NavBar>
            <NavBarTitleItems>User Page Title</NavBarTitleItems>
        </NavBar>
        <Main>
            <div style={{
                background: "white", 
                paddingBottom: "20px",
                margin: "20px",
                borderRadius: 10,
            }}>
                <Input /><Button onClick={() => {}}>Button</Button>
            </div>
        </Main>
    </Page>
}

export default function renderDefaultStackItem(item: PageStackItem): ReactElement | undefined {
    switch (item.key) {
        case "Admin":
            return <AdminPage />
        case "User":
            return <UserPage />
        case "Admin.Variant":
            return <div key="Admin.Variant">Admin.Variant</div>
        case "User.Variant":
            return <div key="User.Variant">User.Variant</div>
    }
}