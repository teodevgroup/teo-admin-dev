import React from 'react'
import ToggleElement from './ToggleElement'
import ToggleDotElement from './ToggleDotElement'

interface ToggleProps {
    isOn: boolean
    setIsOn?(on: boolean): void
    disabled?: boolean
}

const Toggle = ({ isOn, setIsOn, disabled }: ToggleProps) => {
    return <ToggleElement isOn={isOn} disabled={disabled} onClick={(e) => {
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
}

export default Toggle