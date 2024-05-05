import React, { useState } from 'react'
import PageProps from "../../pageStack/PageProps"
import { suspend } from 'suspend-react'
import { isEqual, omit } from 'radash'
import { teo, Root, RootCreateInput, RootUpdateInput } from '../../../../lib/generated/teo'
import FormContainer from '../../form/FormContainer'
import Input from '../../../extended/input/Input'
import LabeledGroup from '../../form/LabeledGroup'
import Label from '../../form/Label'
import PaddedMainContent from '../../pageStack/PaddedMainContent'
import Button from '../../../extended/button/Button'
import { useForm } from 'react-hook-form'
import usePageStackPage from '../../pageStack/usePageStackPage'
import useRefreshToken from '../../../../lib/generated/refreshToken'
import { useTranslation } from 'react-i18next'

const RootForm = ({ item }: PageProps) => {
    const { popStack } = usePageStackPage()
    const { refresh } = useRefreshToken("models.root")
    const { t } = useTranslation("translations")
    const data: Partial<Root & RootCreateInput & RootUpdateInput> = suspend(async () => {
        if (isEqual(item.query, {}) || !item.query) {
            return {}
        } else {
            return (await teo.root.findUnique({
                where: item.query as any
            })).data
        }
    }, [item])
    const { register, handleSubmit } = useForm({ defaultValues: omit(data, ["id"]) })
    const [loading, setLoading] = useState(false)
    const onSubmit = async (data: any) => {
        setLoading(true)
        try {
            if (isEqual(item.query, {}) || !item.query) {
                const _ = await teo.root.create({
                    "create": data
                })
                setLoading(false)
                refresh()
                popStack()
            } else {
                const _ = await teo.root.update({
                    "where": item.query as any,
                    "update": data
                })
                setLoading(false)
                refresh()
                popStack()
            }
        } catch {
            if (isEqual(item.query, {}) || !item.query) {
                alert("Cannot create new record.")
            } else {
                alert("Cannot update this record.")
            }
            setLoading(false)
        }
    }
    const onDelete = async () => {
        setLoading(true)
        try {
            const _ = await teo.root.delete({
                "where": item.query as any
            })
            setLoading(false)
            refresh()
            popStack()
        } catch {
            alert("Cannot delete.")
            setLoading(false)
        }
    }
    return <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <PaddedMainContent>
            <LabeledGroup>
                <Label>{t('model.root.email.name')}</Label>
                <Input disabled={loading} {...register("email")} />
            </LabeledGroup>
            <LabeledGroup>
                <Label>{t('model.root.password.name')}</Label>
                <Input disabled={loading} type="password" {...register("password")} />
            </LabeledGroup>
            <LabeledGroup>
                <Button disabled={loading} type='submit'>{t("form.submit")}</Button>
            </LabeledGroup>
            {!(isEqual(item.query, {}) || !item.query) ? <LabeledGroup>
                <Button disabled={loading} type="button" onClick={onDelete}>{t("form.delete")}</Button>
            </LabeledGroup> : null}
        </PaddedMainContent>
    </FormContainer>
}

export default RootForm