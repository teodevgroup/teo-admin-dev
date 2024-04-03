// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { useCallback, useState } from 'react'
import SignInFormElement from "../../extended/signInModal/SignInFormElement"
import Select from '../select/Select'
import Option from '../select/Option'
import { useForm } from 'react-hook-form'
import { useSignInAdminDefaultCheckerKey, useSignInAdminDefaultIdKey, useSignInDefaultModel, useSignInUserDefaultCheckerKey, useSignInUserDefaultIdKey } from '../../../lib/generated/hooks/preferences'
import { accountModels } from '../../../lib/generated/signIn'
import SignInLineGroup from './SignInLineGroup'
import { checkerFieldsForModel, idFieldsForModel } from '../../../lib/generated/signIn/keys'
import { useTranslation } from 'react-i18next'

const SignInForm = () => {
    const { t } = useTranslation("translations")
    const [signInModel, setSignInModel] = useSignInDefaultModel()
    const [userIdKey, setUserIdKey] = useSignInUserDefaultIdKey()
    const [userCheckerKey, setUserCheckerKey] = useSignInUserDefaultCheckerKey()
    const [adminIdKey, setAdminIdKey] = useSignInAdminDefaultIdKey()
    const [adminCheckerKey, setAdminCheckerKey] = useSignInAdminDefaultCheckerKey()
    const idKey = () => {
        if (signInModel === "Admin") {
            return adminIdKey
        }
        if (signInModel === "User") {
            return userIdKey
        }
        return ""
    }
    const setIdKey = (newValue: string) => {
        if (signInModel === "Admin") {
            setAdminIdKey(newValue)
        }
        if (signInModel === "User") {
            setUserIdKey(newValue)
        }
    }
    const checkerKey = () => {
        if (signInModel === "Admin") {
            return adminCheckerKey
        }
        if (signInModel === "User") {
            return userCheckerKey
        }
        return ""
    }
    const setCheckerKey = (newValue: string) => {
        if (signInModel === "Admin") {
            setAdminCheckerKey(newValue)
        }
        if (signInModel === "User") {
            setUserCheckerKey(newValue)
        }
    }
    const { reset, getValues } = useForm()
    return <SignInFormElement>
        <div>Sign In</div>
        <Select value={signInModel} onChange={(v) => {
            setSignInModel(v)
            reset()
        }} allowsNull={false}>
            {accountModels.map((value) => <Option value={value} key={value}>
                <span>{value}</span>
            </Option>)}
        </Select>
        <SignInLineGroup>
            <Select value={idKey()} onChange={(v) => setIdKey(v)}>
                {idFieldsForModel(signInModel).map((v) => <Option key={v.key} value={v.key}>
                    <span>{v.name}</span>
                </Option>)}
            </Select>
            <input />
        </SignInLineGroup>
        <SignInLineGroup>
            <Select value={checkerKey()} onChange={(v) => setCheckerKey(v)}>
                {checkerFieldsForModel(signInModel).map((v) => <Option key={v.key} value={v.key}>
                    <span>{v.name}</span>
                </Option>)}
            </Select>
            <input />
        </SignInLineGroup>
        <button type='submit'>{t("signIn.signIn")}</button>
    </SignInFormElement>
}

export default SignInForm