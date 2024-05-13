import React, { ForwardedRef, forwardRef } from 'react'
import ToggleElement from './ToggleElement'
import ToggleDotElement from './ToggleDotElement'
interface ToggleProps {
    isOn: boolean
    setIsOn?(on: boolean): void
    disabled?: boolean
}

const Toggle = forwardRef(({ isOn, setIsOn, disabled }: ToggleProps, ref: ForwardedRef<HTMLDivElement>) => {
    return <ToggleElement ref={ref} tabIndex={0} isOn={isOn} disabled={disabled} onClick={(e) => {
        e.stopPropagation()
        if (disabled) {
            return
        }
        if (setIsOn) {
            setIsOn(!isOn)
        }
    }}>
        <ToggleDotElement />
    </ToggleElement>
})

export default Toggle