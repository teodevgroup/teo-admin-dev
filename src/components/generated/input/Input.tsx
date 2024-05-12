// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { forwardRef, ComponentPropsWithoutRef, ForwardedRef } from 'react'
import InputElement from "./InputElement"

const Input = forwardRef(({ ...props }: ComponentPropsWithoutRef<'input'>, ref: ForwardedRef<HTMLInputElement>) => {
    return <InputElement {...props} ref={ref} onContextMenu={(e) => {
        e.stopPropagation()
    }} />
})

export default Input