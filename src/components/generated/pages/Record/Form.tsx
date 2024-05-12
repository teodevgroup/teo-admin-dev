// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { useState } from 'react'
import PageProps from "../../pageStack/PageProps"
import { suspend } from 'suspend-react'
import { isEqual, omit } from 'radash'
import { teo, Record, RecordCreateInput, RecordUpdateInput } from '../../../../lib/generated/teo'
import FormContainer from '../../form/FormContainer'
import LabeledGroup from '../../form/LabeledGroup'
import FormPaddedMainContent from '../../form/FormPaddedMainContent'
import Button from '../../../extended/button/Button'
import { useForm } from 'react-hook-form'
import usePageStackPage from '../../pageStack/usePageStackPage'
import useRefreshToken from '../../../../lib/generated/refreshToken'
import { useTranslation } from 'react-i18next'
import renderFormEntry from '../../form/renderFormEntry'
import useRerender from '../../../../lib/useRerender'
import { useModelRecordFormPreferences } from '../../../../lib/generated/preferences'

const RecordForm = ({ item }: PageProps) => {
    const { popStack } = usePageStackPage()
    const rerender = useRerender()
    const { refresh } = useRefreshToken("models.record")
    const { t } = useTranslation("translations")
    const [formPreferences, setFormPreferences] = useModelRecordFormPreferences()
    const data: Partial<Record & RecordCreateInput & RecordUpdateInput> = suspend(async () => {
        if (isEqual(item.query, {}) || !item.query) {
            return {}
        } else {
            return (await teo.record.findUnique({
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
                const _ = await teo.record.create({
                    "create": data
                })
                setLoading(false)
                refresh()
                popStack()
            } else {
                const _ = await teo.record.update({
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
            const _ = await teo.record.delete({
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
            {renderFormEntry(formPreferences, setFormPreferences, t('model.record.string.name'), "string", { type: "String", optional: false }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.record.bool.name'), "bool", { type: "Bool", optional: false }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.record.int.name'), "int", { type: "Int", optional: false }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.record.float.name'), "float", { type: "Float", optional: false }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.record.decimal.name'), "decimal", { type: "Decimal", optional: false }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.record.date.name'), "date", { type: "Date", optional: false }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.record.dateTime.name'), "dateTime", { type: "DateTime", optional: false }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.record.sex.name'), "sex", { type: "Enum", optional: false, enumName: "Sex", enumNameCamelcase: "sex" }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.record.strings.name'), "strings", { type: "Array", optional: false, child: { type: "String", optional: false } }, form, loading, t, rerender)}
            {renderFormEntry(formPreferences, setFormPreferences, t('model.record.genders.name'), "genders", { type: "Array", optional: false, child: { type: "Enum", optional: false , enumName: "Sex", enumNameCamelcase: "sex"} }, form, loading, t, rerender)}
            <LabeledGroup>
                <Button disabled={loading} type='submit'>{t("form.submit")}</Button>
            </LabeledGroup>
            {!(isEqual(item.query, {}) || !item.query) ? <LabeledGroup>
                <Button disabled={loading} type="button" onClick={onDelete}>{t("form.delete")}</Button>
            </LabeledGroup> : null}
        </FormPaddedMainContent>
    </FormContainer>
}

export default RecordForm