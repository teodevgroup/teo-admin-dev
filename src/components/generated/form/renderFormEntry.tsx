import React from 'react'
import LabeledGroup from './LabeledGroup'
import Label from './Label'
import Input from '../../extended/input/Input'
import { Controller } from 'react-hook-form'
import Toggle from '../toggle/Toggle'
import NumberInput from '../numberInput/NumberInput'
import ReactDatePicker from 'react-datepicker'
import DateInput from '../input/DateInput'
import Select from '../select/Select'
import Option from '../select/Option'
import enumDefinitions, { EnumNames } from '../../../lib/generated/enumDefinitions'

export type FormTypeName = "String" | "Bool" | "Int" | "Int64" | "Float" | "Float32" | "Decimal" | "Date" | "DateTime" | "Array" | "Enum"

export type FormType = {
    type: FormTypeName
    optional: boolean
    child?: FormType
    enumName?: EnumNames
    enumNameCamelcase?: string
}

const renderFormEntry = (readableName: string, key: string, type: FormType, form: any, disabled: boolean, t: any, secure?: boolean) => {
    return <LabeledGroup>
        <Label>{readableName}</Label>
        {renderFormInput(key, type, form, disabled, t, secure)}
    </LabeledGroup>
}

const renderFormInput = (key: string, type: FormType, form: any, disabled: boolean, t: any, secure?: boolean) => {
    if (type.type === "String") {
        return <Input disabled={disabled} {...form.register(key)} {...(secure ? { type: "password" } : {})} />
    } else if (type.type === "Int" || type.type === "Int64") {
        return <NumberInput type="number" disabled={disabled} {...form.register(key, { valueAsNumber: true, validate: Number.isInteger })} />
    } else if (type.type === "Float" || type.type === "Float32") {
        return <NumberInput type="number" step="any" disabled={disabled} {...form.register(key, { valueAsNumber: true })} />
    } else if (type.type === "Bool") {
        return <Controller disabled={disabled} control={form.control} name={key} render={({ field }) => {
            return <Toggle disabled={field.disabled} isOn={!!field.value} setIsOn={(on) => field.onChange(on) } /> 
        }} />
    } else if (type.type === "Decimal") {
        return <NumberInput type="number" step="any" disabled={disabled} {...form.register("decimal")} />
    } else if (type.type === "Date") {
        return <Controller disabled={disabled} defaultValue={null as any} control={form.control} name={key} render={({ field }) => {
            return <ReactDatePicker customInput={<DateInput />} dateFormat="yyyy-MM-dd" disabled={field.disabled} selected={field.value ? new Date(field.value) : null} onSelect={(value) => field.onChange(value.toISOString().substring(0, 10))} onChange={(value) => value ? field.onChange(value?.toISOString().substring(0, 10)) : null} />
        }} />
    } else if (type.type === "DateTime") {
        return <Controller disabled={disabled} defaultValue={null as any} control={form.control} name={key} render={({ field }) => {
            return <ReactDatePicker dateFormat="yyyy-MM-dd hh:mm aa" customInput={<DateInput />} showTimeInput disabled={field.disabled} selected={field.value ? new Date(field.value) : null} onSelect={(value) => field.onChange(value)} onChange={(value) => field.onChange(value)} />
        }} />
    } else if (type.type === "Enum") {
        return <Controller disabled={disabled} defaultValue={null as any} control={form.control} name={key} render={({ field }) => {
            return <Select value={field.value} display={field.value === null ? "(Empty)" : t(`enum.${type.enumNameCamelcase}.${field.value}.name`)} onChange={(v) => field.onChange(v)}>
                {(enumDefinitions[type.enumName!]).members.map((m) => {
                    return <Option key={m.value} value={m.value}>
                        {t(m.name)}
                    </Option>
                })}
            </Select>
        }} />
        return null
    } else {
        return null
    }
}

export default renderFormEntry