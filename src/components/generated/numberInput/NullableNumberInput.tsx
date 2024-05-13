import React, { ComponentPropsWithoutRef, forwardRef, useRef } from 'react'
import CombinedFormControlGroup from '../../generated/combinedFormControlGroup/CombinedFormControlGroup'
import Button from '../../extended/button/Button'
import Input from '../../extended/input/Input'
import { FaMinus } from 'react-icons/fa6'
import { FaPlus } from 'react-icons/fa'
import { useMergeRefs } from '@floating-ui/react'
import { nextNumberValue } from './NumberInput'
import { RxValueNone } from 'react-icons/rx'

type NullableNumberInputProps = ComponentPropsWithoutRef<'input'> & {
    setValue: (value: number | null | string) => void
    valueAsNumber?: boolean
}

const NullableNumberInput = forwardRef<HTMLInputElement, NullableNumberInputProps>(({ valueAsNumber, setValue, value, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>()
    return <CombinedFormControlGroup>
        <Button disabled={props.disabled} onClick={(e) => {
            e.preventDefault()
            if (inputRef.current) {
                inputRef.current.value = nextNumberValue(inputRef.current.value, -1)
                if (valueAsNumber) {
                    setValue(+inputRef.current.value)
                } else {
                    setValue(inputRef.current.value)
                }
            }
        }}>
            <FaMinus />
        </Button>
        <Input value={value || ''} onChange={(e) => {
            if (valueAsNumber) {
                setValue(+e.target.value)
            } else {
                setValue(e.target.value)
            }
        }} {...props} ref={useMergeRefs([ref, inputRef])} />
        <Button disabled={props.disabled} onClick={(e) => {
            e.preventDefault()
            if (inputRef.current) {
                inputRef.current.value = nextNumberValue(inputRef.current.value, 1)
                if (valueAsNumber) {
                    setValue(+inputRef.current.value)
                } else {
                    setValue(inputRef.current.value)
                }
            }
        }}>
            <FaPlus />
        </Button>
        <Button disabled={props.disabled} type="button" selected={value === null} onClick={() => {
            (setValue(null))
        }}><RxValueNone /></Button>
    </CombinedFormControlGroup>
})

export default NullableNumberInput