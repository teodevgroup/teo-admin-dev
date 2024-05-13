// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { forwardRef, ComponentPropsWithoutRef, ForwardedRef, useState } from 'react'
import InputElement from "./InputElement"
import CombinedFormControlGroup from '../combinedFormControlGroup/CombinedFormControlGroup'
import Button from '../../extended/button/Button'
import { RxValueNone } from 'react-icons/rx'

type NullableInputProps = ComponentPropsWithoutRef<'input'> & {
    setValue: (value: string | null) => void
}

const NullableInput = forwardRef(({ setValue, value, ...props }: NullableInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <CombinedFormControlGroup>
        <InputElement {...props} ref={ref} value={value || ''} onChange={(e) => setValue(e.target.value)} onContextMenu={(e) => {
            e.stopPropagation()
        }} />
        <Button type="button" selected={value === null} onClick={() => {
            (setValue(null))
        }}><RxValueNone /></Button>
    </CombinedFormControlGroup>
})

export default NullableInput