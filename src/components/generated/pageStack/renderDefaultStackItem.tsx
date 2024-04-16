import React, { ReactElement } from 'react'
import { PageStackItem } from "../../generated/pageStack/PageStackItem"
import Input from '../../extended/input/Input'
import Button from '../../extended/button/Button'
import usePath from 'react-use-path'
import usePageStackPage from './usePageStackPage'

const AdminPage = () => {
    const { useTitleItems } = usePageStackPage()
    const [_, setPath] = usePath()
    useTitleItems([<div>SBVC</div>])
    return <div key="Admin" style={{
        background: "white", 
        paddingBottom: "20px",
        margin: "20px",
        borderRadius: 10,
    }}>
        <Input /><Button onClick={() => setPath("/abc")}>Button</Button>
    </div>
}

export default function renderDefaultStackItem(item: PageStackItem): ReactElement | undefined {
    switch (item.key) {
        case "Admin":
            return <AdminPage />
        case "User":
            return <div key="User">User</div>
        case "Admin.Variant":
            return <div key="Admin.Variant">Admin.Variant</div>
        case "User.Variant":
            return <div key="User.Variant">User.Variant</div>
    }
}