// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { useState } from 'react'
import PageProps from "../../pageStack/PageProps"
import { suspend } from 'suspend-react'
import { isEqual, omit } from 'radash'
import { teo, TeoError, NullableRecord, NullableRecordCreateInput, NullableRecordUpdateInput } from '../../../../lib/generated/teo'
import FormContainer from '../../form/FormContainer'
import FormPaddedMainContent from '../../form/FormPaddedMainContent'
import Button from '../../../extended/button/Button'
import { useForm } from 'react-hook-form'
import usePageStackPage from '../../pageStack/usePageStackPage'
import useRefreshToken from '../../../../lib/generated/refreshToken'
import { useTranslation } from 'react-i18next'
import renderFormEntry from '../../form/renderFormEntry'
import useRerender from '../../../../lib/useRerender'
import { useModelNullableRecordFormPreferences } from '../../../../lib/generated/preferences'
import CenteredButtonGroup from '../../form/CenteredButtonGroup'
import decodeFormErrors from '../../../../lib/generated/formErrors/decodeFormErrors'

const NullableRecordForm = ({ item }: PageProps) => {
    const { popStack } = usePageStackPage()
    const rerender = useRerender()
    const { refresh } = useRefreshToken("models.nullableRecord")
    const { t } = useTranslation("translations")
    const [formPreferences, setFormPreferences] = useModelNullableRecordFormPreferences()
    const data: Partial<NullableRecord & NullableRecordCreateInput & NullableRecordUpdateInput> = suspend(async () => {
        if (isEqual(item.query, {}) || !item.query) {
            return {}
        } else {
            return (await teo.nullableRecord.findUnique({
                where: item.query as any
            })).data
        }
    }, [item])
    const form = useForm({ defaultValues: Object.assign({}, omit(data, ["id"])) })
    const [loading, setLoading] = useState(false)
    const onSubmit = async (data: any) => {
        setLoading(true)
        try {
            if (isEqual(item.query, {}) || !item.query) {
                const _ = await teo.nullableRecord.create({
                    "create": data
                })
                setLoading(false)
                refresh()
                popStack()
            } else {
                const _ = await teo.nullableRecord.update({
                    "where": item.query as any,
                    "update": data
                })
                setLoading(false)
                refresh()
                popStack()
            }
        } catch(e) {
            if (e instanceof TeoError) {
                if (e.errors) {
                    Object.entries(decodeFormErrors(e.errors)).forEach(([k ,v]) => {
                        form.setError(k as any, v as any)
                    })
                } else {
                    if (isEqual(item.query, {}) || !item.query) {
                        alert(`Cannot create new record: ${e.message}`)
                    } else {
                        alert(`Cannot update this record: ${e.message}`)
                    }
                }
            } else {
                alert("Unknown error occurred.")
            }
            setLoading(false)
        }
    }
    const onDelete = async () => {
        setLoading(true)
        try {
            const _ = await teo.nullableRecord.delete({
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
        <FormPaddedMainContent>
            {renderFormEntry(formPreferences, setFormPreferences, t('model.nullableRecord.string.name'), "string", { type: "String", optional: true }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.nullableRecord.bool.name'), "bool", { type: "Bool", optional: true }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.nullableRecord.int.name'), "int", { type: "Int", optional: true }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.nullableRecord.float.name'), "float", { type: "Float", optional: true }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.nullableRecord.decimal.name'), "decimal", { type: "Decimal", optional: true }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.nullableRecord.date.name'), "date", { type: "Date", optional: true }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.nullableRecord.dateTime.name'), "dateTime", { type: "DateTime", optional: true }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.nullableRecord.sex.name'), "sex", { type: "Enum", optional: true, enumName: "Sex", enumNameCamelcase: "sex" }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.nullableRecord.strings.name'), "strings", { type: "Array", optional: true, child: { type: "String", optional: false } }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.nullableRecord.genders.name'), "genders", { type: "Array", optional: true, child: { type: "Enum", optional: true , enumName: "Sex", enumNameCamelcase: "sex"} }, form, loading, t, rerender)}
            <CenteredButtonGroup>
                <Button disabled={loading} type='submit'>{t("form.submit")}</Button>
                {!(isEqual(item.query, {}) || !item.query) ? <Button disabled={loading} type="button" onClick={onDelete}>{t("form.delete")}</Button> : null}
            </CenteredButtonGroup>
        </FormPaddedMainContent>
    </FormContainer>
}

export default NullableRecordForm