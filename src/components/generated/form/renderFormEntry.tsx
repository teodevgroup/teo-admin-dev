import React from 'react'
import LabeledGroup from './LabeledGroup'
import Label from './Label'
import Input from '../../extended/input/Input'
import { Controller, ErrorOption } from 'react-hook-form'
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
import NullableInput from '../input/NullableInput'
import NullableNumberInput from '../numberInput/NullableNumberInput'
import CombinedFormControlGroup from '../combinedFormControlGroup/CombinedFormControlGroup'
import { RxValueNone } from 'react-icons/rx'

export type FormTypeName = "String" | "Bool" | "Int" | "Int64" | "Float" | "Float32" | "Decimal" | "Date" | "DateTime" | "Array" | "Enum"

export type FormType = {
    type: FormTypeName
    optional: boolean
    child?: FormType
    enumName?: string
    enumNameCamelcase?: string
}

const formatError = (error: ErrorOption) => {
    if (error.type === "required") {
        return "Value required"
    } else {
        return error.message || "Unknown error type"
    }
}

const renderFormEntry = (formPreferences: any, setFormPreferences: any, readableName: string, key: string, type: FormType, form: any, disabled: boolean, t: any, rerender: () => void, secure?: boolean) => {
    return <WithContextMenu contextMenu={<Menu>
        <MenuItem label={t('form.control.width')}>
            <Menu>
                <MenuItem action={() => setFormPreferences(set(formPreferences, [key, "width"], "full"))} checked={!formPreferences[key] || (formPreferences[key]?.width === 'full') || (!formPreferences[key]?.width)} label={t('form.control.width.full')} />
                <MenuItem action={() => setFormPreferences(set(formPreferences, [key, "width"], "half"))} checked={formPreferences[key] && formPreferences[key].width === 'half'} label={t('form.control.width.half')} />
                <MenuItem action={() => setFormPreferences(set(formPreferences, [key, "width"], "oneThird"))} checked={formPreferences[key] && formPreferences[key].width === 'oneThird'} label={t('form.control.width.oneThird')} />
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
        if (type.optional) {
            return <Controller defaultValue={null} disabled={disabled} control={form.control} name={key} render={({ field }) => {
                return <>
                    {form.formState.errors[key] ? formatError(form.formState.errors[key]) : null}
                    <NullableInput disabled={disabled} value={field.value} setValue={(v) => field.onChange(v)} {...(secure ? { type: "password" } : {})} />
                </>
            }} />
        } else {
            return <>
                {form.formState.errors[key] ? formatError(form.formState.errors[key]) : null}
                <Input disabled={disabled} {...form.register(key, { required: true })} {...(secure ? { type: "password" } : {})} />
            </>
        }
    } else if (type.type === "Int" || type.type === "Int64") {
        if (type.optional) {
            return <Controller defaultValue={null} rules={{ validate: (v) => Number.isInteger(v) || v === null }} disabled={disabled} control={form.control} name={key} render={({ field }) => {
                return <>
                    {form.formState.errors[key] ? formatError(form.formState.errors[key]) : null}
                    <NullableNumberInput valueAsNumber type="number" disabled={disabled} value={field.value} setValue={(v: any) => field.onChange(v)} />
                </>            
            }} />
        } else {
            console.log(form.formState.errors[key])
            return <>
                {form.formState.errors[key] ? formatError(form.formState.errors[key]) : null}
                <NumberInput type="number" disabled={disabled} {...form.register(key, { required: true, valueAsNumber: true, validate: Number.isInteger })} />            
            </>
        }
    } else if (type.type === "Float" || type.type === "Float32") {
        if (type.optional) {
            return <Controller defaultValue={null} rules={{ validate: (v) => !Number.isNaN(v) || v === null }} disabled={disabled} control={form.control} name={key} render={({ field }) => {
                return <>
                    {form.formState.errors[key] ? formatError(form.formState.errors[key]) : null}
                    <NullableNumberInput valueAsNumber type="number" step="any" disabled={disabled} value={field.value} setValue={(v: any) => field.onChange(v)} />
                </>
            }} />
        } else {
            return <>
                {form.formState.errors[key] ? formatError(form.formState.errors[key]) : null}
                <NumberInput type="number" step="any" disabled={disabled} {...form.register(key, { required: true, valueAsNumber: true })} />            
            </>
        }
    } else if (type.type === "Bool") {
        if (type.optional) {
            return <Controller defaultValue={null} disabled={disabled} control={form.control} name={key} render={({ field }) => {
                return <>
                    {form.formState.errors[key] ? formatError(form.formState.errors[key]) : null}
                    <ControlGroup>
                        <Toggle ref={field.ref} disabled={field.disabled} isOn={!!field.value} setIsOn={(on) => field.onChange(on) } />
                        <Button type="button" disabled={field.disabled} selected={field.value === null} onClick={() => field.onChange(null)}><RxValueNone /></Button>
                    </ControlGroup>                 
                </>
            }} />
    
        } else {
            return <Controller rules={{ required: true }} disabled={disabled} control={form.control} name={key} render={({ field }) => {
                return <>
                    {form.formState.errors[key] ? formatError(form.formState.errors[key]) : null}
                    <Toggle ref={field.ref} disabled={field.disabled} isOn={!!field.value} setIsOn={(on) => field.onChange(on) } />                
                </> 
            }} />    
        }
    } else if (type.type === "Decimal") {
        if (type.optional) {
            return <Controller defaultValue={null} disabled={disabled} control={form.control} name={key} render={({ field }) => {
                return <>
                    {form.formState.errors[key] ? formatError(form.formState.errors[key]) : null}
                    <NullableNumberInput type="number" step="any" disabled={disabled} value={field.value} setValue={(v: any) => field.onChange(v)} />                
                </>
            }} />
        } else {
            return <>
                {form.formState.errors[key] ? formatError(form.formState.errors[key]) : null}
                <NumberInput type="number" step="any" disabled={disabled} {...form.register(key, { required: true })} />            
            </>
        }
    } else if (type.type === "Date") {
        if (type.optional) {
            return <Controller disabled={disabled} defaultValue={null as any} control={form.control} name={key} render={({ field }) => {
                return <>
                    {form.formState.errors[key] ? formatError(form.formState.errors[key]) : null}
                    <CombinedFormControlGroup>
                        <ReactDatePicker customInput={<DateInput />} dateFormat="yyyy-MM-dd" disabled={field.disabled} selected={field.value ? new Date(field.value) : null} onSelect={(value) => field.onChange(value.toISOString().substring(0, 10))} onChange={(value) => value ? field.onChange(value?.toISOString().substring(0, 10)) : null} />
                        <Button type="button" disabled={field.disabled} selected={field.value === null} onClick={() => field.onChange(null)}><RxValueNone /></Button>
                    </CombinedFormControlGroup>                
                </>
            }} />    
        } else {
            return <Controller disabled={disabled} defaultValue={null as any} control={form.control} name={key} render={({ field }) => {
                return <>
                    {form.formState.errors[key] ? formatError(form.formState.errors[key]) : null}
                    <ReactDatePicker required customInput={<DateInput />} dateFormat="yyyy-MM-dd" disabled={field.disabled} selected={field.value ? new Date(field.value) : null} onSelect={(value) => field.onChange(value.toISOString().substring(0, 10))} onChange={(value) => value ? field.onChange(value?.toISOString().substring(0, 10)) : null} />                
                </>
            }} />    
        }
    } else if (type.type === "DateTime") {
        if (type.optional) {
            return <Controller disabled={disabled} defaultValue={null as any} control={form.control} name={key} render={({ field }) => {
                return <>
                    {form.formState.errors[key] ? formatError(form.formState.errors[key]) : null}
                    <CombinedFormControlGroup>
                        <ReactDatePicker dateFormat="yyyy-MM-dd hh:mm aa" customInput={<DateInput />} showTimeInput disabled={field.disabled} selected={field.value ? new Date(field.value) : null} onSelect={(value) => field.onChange(value)} onChange={(value) => field.onChange(value)} />
                        <Button type="button" disabled={field.disabled} selected={field.value === null} onClick={() => field.onChange(null)}><RxValueNone /></Button>
                    </CombinedFormControlGroup>                
                </>
            }} />    
        } else {
            return <Controller disabled={disabled} defaultValue={null as any} control={form.control} name={key} render={({ field }) => {
                return <>
                    {form.formState.errors[key] ? formatError(form.formState.errors[key]) : null}
                    <ReactDatePicker required dateFormat="yyyy-MM-dd hh:mm aa" customInput={<DateInput />} showTimeInput disabled={field.disabled} selected={field.value ? new Date(field.value) : null} onSelect={(value) => field.onChange(value)} onChange={(value) => field.onChange(value)} />                
                </>
            }} />    
        }
    } else if (type.type === "Enum") {
        if (type.optional) {
            return <Controller disabled={disabled} defaultValue={null as any} control={form.control} name={key} render={({ field }) => {
                return <>
                    {form.formState.errors[key] ? formatError(form.formState.errors[key]) : null}
                    <ControlGroup>
                        <Select value={field.value} display={field.value === null ? t("null.empty") : t(`enum.${type.enumNameCamelcase}.${field.value}.name`)} onChange={(v) => field.onChange(v)}>
                            {(enumDefinitions[type.enumName!]).members.map((m) => {
                                return <Option key={m.value} value={m.value}>
                                    {t(m.name)}
                                </Option>
                            })}
                        </Select>
                        <Button type="button" disabled={field.disabled} selected={field.value === null} onClick={() => field.onChange(null)}><RxValueNone /></Button>
                    </ControlGroup>                
                </>
            }} />    
        } else {
            return <Controller disabled={disabled} rules={{ required: true }} defaultValue={null as any} control={form.control} name={key} render={({ field }) => {
                return <>
                    {form.formState.errors[key] ? formatError(form.formState.errors[key]) : null}
                    <Select value={field.value} display={field.value === null ? t("null.empty") : t(`enum.${type.enumNameCamelcase}.${field.value}.name`)} onChange={(v) => field.onChange(v)}>
                        {(enumDefinitions[type.enumName!]).members.map((m) => {
                            return <Option key={m.value} value={m.value}>
                                {t(m.name)}
                            </Option>
                        })}
                    </Select>                
                </>
            }} />    
        }
    } else if (type.type === "Array") {
        return <>
            {form.formState.errors[key] ? formatError(form.formState.errors[key]) : null}
            <ArrayFieldContainer>
                {(!form.getValues()[key] || form.getValues()[key]?.length === 0) ? <ControlGroup>
                    <Button disabled={disabled} type="button" onClick={() => {
                        form.setValue(key, [null as any])
                        rerender()
                    }}><FaPlus /></Button>
                    {type.optional ? <Controller disabled={disabled} control={form.control} defaultValue={null} name={key} render={({ field }) => {
                        return <Button type='button' disabled={disabled} onClick={() => field.onChange(null)} selected={field.value === null}>
                        <RxValueNone />
                    </Button>
                    }} /> : null}
                </ControlGroup> : form.getValues()[key]?.map((v: any, i: number) => {
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
        </>
    } else {
        return null
    }
}

export default renderFormEntry