import React, { ComponentPropsWithoutRef, forwardRef, useRef } from 'react'
import CombinedFormControlGroup from '../../generated/combinedFormControlGroup/CombinedFormControlGroup'
import Button from '../../extended/button/Button'
import Input from '../../extended/input/Input'
import { FaMinus } from 'react-icons/fa6'
import { FaPlus } from 'react-icons/fa'
import { useMergeRefs } from '@floating-ui/react'
import Decimal from 'decimal.js'

export const nextNumberValue = (value: string, n: number) => {
    const numberValue = Number(value)
    if (!Number.isNaN(numberValue)) {
        return (new Decimal(numberValue).add(n)).toString()
    } else {
        return value
    }
}

const NumberInput = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'>>((props, ref) => {
    const inputRef = useRef<HTMLInputElement>()
    return <CombinedFormControlGroup>
        <Button disabled={props.disabled} onClick={(e) => {
            e.preventDefault()
            if (inputRef.current) {
                inputRef.current.value = nextNumberValue(inputRef.current.value, -1)
            }
        }}>
            <FaMinus />
        </Button>
        <Input {...props} ref={useMergeRefs([ref, inputRef])} />
        <Button disabled={props.disabled} onClick={(e) => {
            e.preventDefault()
            if (inputRef.current) {
                inputRef.current.value = nextNumberValue(inputRef.current.value, 1)
            }
        }}>
            <FaPlus />
        </Button>
    </CombinedFormControlGroup>
})

export default NumberInput