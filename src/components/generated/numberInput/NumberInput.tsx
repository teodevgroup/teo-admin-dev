import React, { forwardRef } from 'react'
import CombinedFormControlGroup from '../../generated/combinedFormControlGroup/CombinedFormControlGroup'
import Button from '../../extended/button/Button'
import Input from '../../extended/input/Input'
import { FaMinus } from 'react-icons/fa6'
import { FaPlus } from 'react-icons/fa'

const NumberInput = forwardRef<HTMLInputElement>((props, ref) => {
    return <CombinedFormControlGroup>
        <Button>
            <FaMinus />
        </Button>
        <Input {...props} ref={ref} />
        <Button>
            <FaPlus />
        </Button>
    </CombinedFormControlGroup>
})

export default NumberInput