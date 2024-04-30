import React, { ReactElement } from 'react'
import { PageStackItem } from "../pageStack/PageStackItem"
import _IndexPage from './_Index'
import AdminPage from './Admin'
import UserPage from './User'
import AdminFormPage from './Admin/FormPage'

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