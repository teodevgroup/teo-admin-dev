// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { useState } from 'react'
import SignInFormElement from "../../extended/signInModal/SignInFormElement"
import Select from '../select/Select'
import Option from '../select/Option'
import { useForm } from 'react-hook-form'
import { useSignInDefaultModel, useSignInAdminDefaultCheckerKey, useSignInAdminDefaultIdKey, useSignInRootDefaultCheckerKey, useSignInRootDefaultIdKey } from '../../../lib/generated/preferences'
import { accountModelNames, accountModels, signIn } from '../../../lib/generated/signIn'
import CombinedFormControlGroup from '../../generated/combinedFormControlGroup/CombinedFormControlGroup'
import { checkerFieldsForModel, idFieldsForModel } from '../../../lib/generated/signIn/keys'
import { useTranslation } from 'react-i18next'
import Button from '../../extended/button/Button'
import Input from '../../extended/input/Input'
import ModalSheetDescription from '../modal/ModalSheetDescription'
import ModalSheetTitle from '../modal/ModalSheetTitle'
import SignInSplitElement from './SignInSplitElement'
import SignInFormWrapper from './SignInFormWrapper'
import SignInLogoContainer from './SignInLogoContainer'
import Logo from '../../extended/logo/Logo'
import SignInCaption from '../../extended/signInModal/SignInCaption'
import SignInAdditionals from '../../extended/signInModal/SignInAdditionals'

const SignInForm = () => {
    const { t } = useTranslation("translations")
    const [signInModel, setSignInModel] = useSignInDefaultModel()
    const [adminIdKey, setAdminIdKey] = useSignInAdminDefaultIdKey()
    const [adminCheckerKey, setAdminCheckerKey] = useSignInAdminDefaultCheckerKey()
    const [rootIdKey, setRootIdKey] = useSignInRootDefaultIdKey()
    const [rootCheckerKey, setRootCheckerKey] = useSignInRootDefaultCheckerKey()
    const idKey = () => {
        if (signInModel === "Admin") {
            return adminIdKey
        }
        if (signInModel === "Root") {
            return rootIdKey
        }
        return ""
    }
    const setIdKey = (newValue: string) => {
        if (signInModel === "Admin") {
            setAdminIdKey(newValue)
        }
        if (signInModel === "Root") {
            setRootIdKey(newValue)
        }
    }
    const checkerKey = () => {
        if (signInModel === "Admin") {
            return adminCheckerKey
        }
        if (signInModel === "Root") {
            return rootCheckerKey
        }
        return ""
    }
    const setCheckerKey = (newValue: string) => {
        if (signInModel === "Admin") {
            setAdminCheckerKey(newValue)
        }
        if (signInModel === "Root") {
            setRootCheckerKey(newValue)
        }
    }
    const checkerInputType = () => {
        if (signInModel === "Admin") {
            if ((["password"] as string[]).includes(adminCheckerKey)) {
                return "password"
            }
        }
        if (signInModel === "Root") {
            if ((["password"] as string[]).includes(rootCheckerKey)) {
                return "password"
            }
        }
        return "text"
    }
    const { reset, register, handleSubmit } = useForm()
    const [isLoading, setIsLoading] = useState(false)
    const submit = async (data: any) => {
        let error = false
        setIsLoading(true)
        try {
            await signIn(signInModel, {
                [idKey()]: data.id,
                [checkerKey()]: data.checker,
            })
        } catch(e) {
            error = true
            alert("Please check your input")
        }
        setIsLoading(false)
        if (!error) {
            reset()
        }
    }
    return <>
        <SignInSplitElement>
            <SignInLogoContainer>
                <Logo />
            </SignInLogoContainer>
            <SignInFormWrapper>
                <ModalSheetTitle>{t("signIn.signIn")}</ModalSheetTitle>
                <ModalSheetDescription>{t("signIn.pleaseSignIn")}</ModalSheetDescription>
                <SignInFormElement onSubmit={handleSubmit(submit)}>
                    <Select value={t(accountModelNames[signInModel])} onChange={(v) => {
                        setSignInModel(v)
                        reset()
                    }} allowsNull={false}>
                        {accountModels.map((value) => <Option value={value} key={value}>
                            <span>{t(accountModelNames[value])}</span>
                        </Option>)}
                    </Select>
                    <CombinedFormControlGroup>
                        <Select value={t(idFieldsForModel(signInModel).find((f) => f.key === idKey())?.name || idKey())} onChange={(v) => {
                            setIdKey(v)
                            reset()
                        }}>
                            {idFieldsForModel(signInModel).map((v) => <Option key={v.key} value={v.key}>
                                <span>{t(v.name)}</span>
                            </Option>)}
                        </Select>
                        <Input {...register("id")} disabled={isLoading} />
                    </CombinedFormControlGroup>
                    <CombinedFormControlGroup>
                        <Select value={t(checkerFieldsForModel(signInModel).find((f) => f.key === checkerKey())?.name || checkerKey())} onChange={(v) => {
                            setCheckerKey(v)
                            reset()
                        }}>
                            {checkerFieldsForModel(signInModel).map((v) => <Option key={v.key} value={v.key}>
                                <span>{t(v.name)}</span>
                            </Option>)}
                        </Select>
                        <Input type={checkerInputType()} {...register("checker")} disabled={isLoading} />
                    </CombinedFormControlGroup>
                    <Button type='submit' disabled={isLoading}>{t("signIn.signIn")}</Button>
                </SignInFormElement>
                <SignInAdditionals />
                <SignInCaption />
            </SignInFormWrapper>
        </SignInSplitElement>
    </>
}

export default SignInForm