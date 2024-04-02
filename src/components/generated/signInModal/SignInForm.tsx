// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import SignInFormElement from "../../extended/signInModal/SignInFormElement"
import Select from '../select/Select'
import Option from '../select/Option'

const SignInForm = () => {
    return <SignInFormElement>
        <div>Sign In</div>
        <Select value={"Admin"}>
            <Option value="Admin">
                <span>Admin</span>
            </Option>
            <Option value="User">
                <span>User</span>
            </Option>
        </Select>
    </SignInFormElement>
}

export default SignInForm