// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { useState } from 'react'
import PageProps from "../../pageStack/PageProps"
import { suspend } from 'suspend-react'
import { isEqual, omit } from 'radash'
import { teo, Admin, AdminCreateInput, AdminUpdateInput } from '../../../../lib/generated/teo'
import FormContainer from '../../form/FormContainer'
import LabeledGroup from '../../form/LabeledGroup'
import PaddedMainContent from '../../pageStack/PaddedMainContent'
import Button from '../../../extended/button/Button'
import { useForm } from 'react-hook-form'
import usePageStackPage from '../../pageStack/usePageStackPage'
import useRefreshToken from '../../../../lib/generated/refreshToken'
import { useTranslation } from 'react-i18next'
import renderFormEntry from '../../form/renderFormEntry'
import useRerender from '../../../../lib/useRerender'
import { useModelAdminFormPreferences } from '../../../../lib/generated/preferences'

const AdminForm = ({ item }: PageProps) => {
    const { popStack } = usePageStackPage()
    const rerender = useRerender()
    const { refresh } = useRefreshToken("models.admin")
    const { t } = useTranslation("translations")
    const [formPreferences, setFormPreferences] = useModelRecordFormPreferences()
    const data: Partial<Admin & AdminCreateInput & AdminUpdateInput> = suspend(async () => {
        if (isEqual(item.query, {}) || !item.query) {
            return {}
        } else {
            return (await teo.admin.findUnique({
                where: item.query as any
            })).data
        }
    }, [item])
    const form = useForm({ defaultValues: omit(data, ["id"]) })
    const [loading, setLoading] = useState(false)
    const onSubmit = async (data: any) => {
        setLoading(true)
        try {
            if (isEqual(item.query, {}) || !item.query) {
                const _ = await teo.admin.create({
                    "create": data
                })
                setLoading(false)
                refresh()
                popStack()
            } else {
                const _ = await teo.admin.update({
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
            const _ = await teo.admin.delete({
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
    return <FormContainer onSubmit={form.handleSubmit(onSubmit)}>
        <PaddedMainContent>
            {renderFormEntry(formPreferences, setFormPreferences, t('model.admin.email.name'), "email", { type: "String", optional: false }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.admin.phoneNo.name'), "phoneNo", { type: "String", optional: false }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.admin.password.name'), "password", { type: "String", optional: false }, form, loading, t, rerender, true)}
            <LabeledGroup>
                <Button disabled={loading} type='submit'>{t("form.submit")}</Button>
            </LabeledGroup>
            {!(isEqual(item.query, {}) || !item.query) ? <LabeledGroup>
                <Button disabled={loading} type="button" onClick={onDelete}>{t("form.delete")}</Button>
            </LabeledGroup> : null}
        </PaddedMainContent>
    </FormContainer>
}

export default AdminForm