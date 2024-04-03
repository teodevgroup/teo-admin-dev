// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { useState } from 'react'
import SignInFormElement from "../../extended/signInModal/SignInFormElement"
import Select from '../select/Select'
import Option from '../select/Option'
import { useForm } from 'react-hook-form'
import { useSignInDefaultModel } from '../../../lib/generated/hooks/preferences'
import { accountModels } from '../../../lib/generated/signIn'

const SignInForm = () => {
    const [signInDefaultModel] = useSignInDefaultModel()
    const [modelName, setModelName] = useState(signInDefaultModel)
    useForm({

    })
    return <SignInFormElement>
        <div>Sign In</div>
        <Select value={modelName} onChange={(v) => setModelName(v)} allowsNull={false}>
            {accountModels.map((value) => <Option value={value} key={value}>
                <span>{value}</span>
            </Option>)}
        </Select>
    </SignInFormElement>
}

export default SignInForm