import React, { ReactElement } from 'react'
import { PageStackItem } from "../../generated/pageStack/PageStackItem"
import AdminPage from '../pages/Admin'
import UserPage from '../pages/User'
import _IndexPage from '../pages/_Index'

export default function renderDefaultStackItem(item: PageStackItem): ReactElement | undefined {
    switch (item.key) {
        case "_Index": 
            return <_IndexPage />
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