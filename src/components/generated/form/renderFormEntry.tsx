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
import enumDefinitions from '../../../lib/generated/enumDefinitions'
import Button from '../../extended/button/Button'
import insert from '../../../lib/generated/utilities/insert'
import remove from '../../../lib/generated/utilities/remove'
import { FaMinus, FaPlus } from 'react-icons/fa'
import ArrayFieldContainer from './ArrayFieldContainer'
import ControlGroup from '../controlGroup/ControlGroup'
import WithContextMenu from '../menu/WithContextMenu'
import Menu from '../menu/Menu'
import MenuItem from '../menu/MenuItem'
import set from '../../../lib/generated/utilities/set'

export type FormTypeName = "String" | "Bool" | "Int" | "Int64" | "Float" | "Float32" | "Decimal" | "Date" | "DateTime" | "Array" | "Enum"

export type FormType = {
    type: FormTypeName
    optional: boolean
    child?: FormType
    enumName?: string
    enumNameCamelcase?: string
}

const renderFormEntry = (formPreferences: any, setFormPreferences: any, readableName: string, key: string, type: FormType, form: any, disabled: boolean, t: any, rerender: () => void, secure?: boolean) => {
    return <WithContextMenu contextMenu={<Menu>
        <MenuItem action={() => setFormPreferences(set(formPreferences, [key, "width"], "full"))} checked={!formPreferences[key] || (formPreferences[key]?.width === 'full') || (!formPreferences[key]?.width)} label="Full Line Width" />
        <MenuItem action={() => setFormPreferences(set(formPreferences, [key, "width"], "half"))} checked={formPreferences[key] && formPreferences[key].width === 'half'} label="Half Line Width" />
        <MenuItem action={() => setFormPreferences(set(formPreferences, [key, "width"], "oneThird"))} checked={formPreferences[key] && formPreferences[key].width === 'oneThird'} label="One-third Line Width" />
        <MenuItem label='Control Width'>
            <Menu>
                <MenuItem action={() => setFormPreferences(set(formPreferences, [key, "width"], "full"))} checked={!formPreferences[key] || (formPreferences[key]?.width === 'full') || (!formPreferences[key]?.width)} label="Full Line Width" />
                <MenuItem action={() => setFormPreferences(set(formPreferences, [key, "width"], "half"))} checked={formPreferences[key] && formPreferences[key].width === 'half'} label="Half Line Width" />
                <MenuItem action={() => setFormPreferences(set(formPreferences, [key, "width"], "oneThird"))} checked={formPreferences[key] && formPreferences[key].width === 'oneThird'} label="One-third Line Width" />
            </Menu>
        </MenuItem>
    </Menu>}>
        <LabeledGroup width={formPreferences[key].width}>
            <Label>{readableName}</Label>
            {renderFormInput(key, type, form, disabled, t, rerender, secure)}
        </LabeledGroup>
    </WithContextMenu>
}

const renderFormInput = (key: string, type: FormType, form: any, disabled: boolean, t: any, rerender: () => void, secure?: boolean) => {
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
            return <Select value={field.value} display={field.value === null ? t("null.empty") : t(`enum.${type.enumNameCamelcase}.${field.value}.name`)} onChange={(v) => field.onChange(v)}>
                {(enumDefinitions[type.enumName!]).members.map((m) => {
                    return <Option key={m.value} value={m.value}>
                        {t(m.name)}
                    </Option>
                })}
            </Select>
        }} />
    } else if (type.type === "Array") {
        return <ArrayFieldContainer>
            {(!form.getValues()[key] || form.getValues()[key]?.length === 0) ? <Button type="button" onClick={() => {
                form.setValue(key, [null as any])
                rerender()
            }}><FaPlus /></Button> : form.getValues()[key]?.map((v: any, i: number) => {
                return <ControlGroup key={i}>
                    {renderFormInput(`${key}.${i}`, type.child!, form, disabled, t, rerender, secure)}
                    <Button type="button" onClick={() => {
                        form.setValue(key, remove(form.getValues()[key], [i]))
                        rerender()
                    }}>
                        <FaMinus />
                    </Button>
                    <Button type="button" onClick={() => {
                        form.setValue(key, insert(form.getValues()[key], [i + 1], null))
                        rerender()
                    }}>
                        <FaPlus />
                    </Button>
                </ControlGroup>
            })}
        </ArrayFieldContainer>
    } else {
        return null
    }
}

export default renderFormEntry