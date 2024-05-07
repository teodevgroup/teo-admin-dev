import React from 'react'
import LabeledGroup from './LabeledGroup'
import Label from './Label'
import Input from '../../extended/input/Input'
import { Controller } from 'react-hook-form'
import Toggle from '../toggle/Toggle'
import NumberInput from '../numberInput/NumberInput'
import ReactDatePicker from 'react-datepicker'
import DateInput from '../input/DateInput'

export type FormTypeName = "String" | "Bool" | "Int" | "Int64" | "Float" | "Float32" | "Decimal" | "Date" | "DateTime" | "Array" | "Enum"

export type FormType = {
    type: FormTypeName
    optional: boolean
    child?: FormType
    enumName?: string
}

const renderFormEntry = (readableName: string, key: string, type: FormType, form: any, disabled: boolean, secure?: boolean) => {
    return <LabeledGroup>
        <Label>{readableName}</Label>
        {renderFormInput(key, type, form, disabled, secure)}
    </LabeledGroup>
}

const renderFormInput = (key: string, type: FormType, form: any, disabled: boolean, secure?: boolean) => {
    if (type.type === "String") {
        return <Input disabled={disabled} {...form.register(key)} {...(secure ? { type: "password" } : {})} />
    } else if (type.type === "Int" || type.type === "Int64") {
        return <NumberInput type="number" disabled={disabled} {...form.register("int", { valueAsNumber: true, validate: Number.isInteger })} />
    } else if (type.type === "Float" || type.type === "Float32") {
        return <NumberInput type="number" step="any" disabled={disabled} {...form.register("float", { valueAsNumber: true })} />
    } else if (type.type === "Bool") {
        return <Controller disabled={disabled} control={form.control} name="bool" render={({ field }) => {
            return <Toggle disabled={field.disabled} isOn={!!field.value} setIsOn={(on) => field.onChange(on) } /> 
        }} />
    } else if (type.type === "Decimal") {
        return <NumberInput type="number" step="any" disabled={disabled} {...form.register("decimal")} />
    } else if (type.type === "Date") {
        return <Controller disabled={disabled} defaultValue={null as any} control={form.control} name="date" render={({ field }) => {
            return <ReactDatePicker customInput={<DateInput />} dateFormat="yyyy-MM-dd" disabled={field.disabled} selected={field.value ? new Date(field.value) : null} onSelect={(value) => field.onChange(value.toISOString().substring(0, 10))} onChange={(value) => value ? field.onChange(value?.toISOString().substring(0, 10)) : null} />
        }} />
    } else if (type.type === "DateTime") {
        return <Controller disabled={disabled} defaultValue={null as any} control={form.control} name="dateTime" render={({ field }) => {
            return <ReactDatePicker dateFormat="yyyy-MM-dd hh:mm aa" customInput={<DateInput />} showTimeInput disabled={field.disabled} selected={field.value ? new Date(field.value) : null} onSelect={(value) => field.onChange(value)} onChange={(value) => field.onChange(value)} />
        }} />
    } else if (type.type === "Enum") {
        return null
    } else {
        return null
    }
}

export default renderFormEntry