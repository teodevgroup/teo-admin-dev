import React, { ReactElement } from 'react'
import { PageStackItem } from "../../generated/pageStack/PageStackItem"
import AdminPage from '../pages/Admin'
import UserPage from '../pages/User'
import _IndexPage from '../pages/_Index'
import AdminFormPage from '../pages/Admin/FormPage'

export default function renderDefaultStackItem(item: PageStackItem): ReactElement | undefined {
    switch (item.key) {
        case "_Index": 
            return <_IndexPage item={item} />
        case "Admin":
            return <AdminPage item={item} />
        case "User":
            return <UserPage item={item} />
        case "AdminForm":
            return <AdminFormPage item={item} />
        case "UserForm":
            return <AdminFormPage item={item} />
    }
}