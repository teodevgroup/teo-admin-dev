import React, { useState } from 'react'
import PageProps from "../../pageStack/PageProps"
import { suspend } from 'suspend-react'
import { isEqual, omit } from 'radash'
import { teo, Record, RecordCreateInput, RecordUpdateInput } from '../../../../lib/generated/teo'
import FormContainer from '../../form/FormContainer'
import Input from '../../../extended/input/Input'
import LabeledGroup from '../../form/LabeledGroup'
import Label from '../../form/Label'
import PaddedMainContent from '../../pageStack/PaddedMainContent'
import Button from '../../../extended/button/Button'
import { Controller, useForm } from 'react-hook-form'
import usePageStackPage from '../../pageStack/usePageStackPage'
import useRefreshToken from '../../../../lib/generated/refreshToken'
import { useTranslation } from 'react-i18next'
import NumberInput from '../../numberInput/NumberInput'
import Toggle from '../../toggle/Toggle'
import DatePicker from "react-datepicker"
import DateInput from '../../input/DateInput'

const RecordForm = ({ item }: PageProps) => {
    const { popStack } = usePageStackPage()
    const { refresh } = useRefreshToken("models.record")
    const { t } = useTranslation("translations")
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
        console.log(data)
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
        <PaddedMainContent>
            <LabeledGroup>
                <Label>{t('model.record.string.name')}</Label>
                <Input disabled={loading} {...form.register("string")} />
            </LabeledGroup>
            <LabeledGroup>
                <Label>{t('model.record.bool.name')}</Label>
                <Controller disabled={loading} control={form.control} name="bool" render={({ field }) => {
                    return <Toggle disabled={field.disabled} isOn={!!field.value} setIsOn={(on) => field.onChange(on) } /> 
                }} />
            </LabeledGroup>
            <LabeledGroup>
                <Label>{t('model.record.int.name')}</Label>
                <NumberInput type="number" disabled={loading} {...form.register("int", { valueAsNumber: true, validate: Number.isInteger })} />
            </LabeledGroup>
            <LabeledGroup>
                <Label>{t('model.record.float.name')}</Label>
                <NumberInput type="number" step="any" disabled={loading} {...form.register("float", { valueAsNumber: true })} />
            </LabeledGroup>
            <LabeledGroup>
                <Label>{t('model.record.decimal.name')}</Label>
                <NumberInput type="number" step="any" disabled={loading} {...form.register("decimal")} />
            </LabeledGroup>
            <LabeledGroup>
                <Label>{t('model.record.date.name')}</Label>
                <Controller disabled={loading} defaultValue={null as any} control={form.control} name="date" render={({ field }) => {
                    return <DatePicker customInput={<DateInput />} dateFormat="yyyy/MM/dd" disabled={field.disabled} selected={field.value ? new Date(field.value) : null} onSelect={(value) => field.onChange(value.toISOString().substring(0, 10))} onChange={(value) => value ? field.onChange(value?.toISOString().substring(0, 10)) : null} />
                }} />
            </LabeledGroup>
            <LabeledGroup>
                <Label>{t('model.record.dateTime.name')}</Label>
                <Controller disabled={loading} defaultValue={null as any} control={form.control} name="dateTime" render={({ field }) => {
                    return <DatePicker dateFormat="yyyy/MM/dd h:mm aa" customInput={<DateInput />} showTimeInput disabled={field.disabled} selected={field.value ? new Date(field.value) : null} onSelect={(value) => field.onChange(value)} onChange={(value) => field.onChange(value)} />
                }} />
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

export default RecordForm