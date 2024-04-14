import React, { ReactElement } from 'react'
import { PageStackItem } from "../../generated/pageStack/PageStackItem"
import Input from '../../extended/input/Input'

export default function renderDefaultStackItem(item: PageStackItem): ReactElement | undefined {
    switch (item.key) {
        case "Admin":
            return <div key="Admin"><Input /></div>
        case "User":
            return <div key="User">User</div>
        case "Admin.Variant":
            return <div key="Admin.Variant">Admin.Variant</div>
        case "User.Variant":
            return <div key="User.Variant">User.Variant</div>
    }
}