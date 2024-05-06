import { styled } from "@linaria/react"
import ToggleDotElement from "./ToggleDotElement"
import { controlBackgroundColorDark, controlBackgroundColorLight, controlHeight, controlHeightDoubled, controlHintBackgroundColorDark, controlHintBackgroundColorLight, controlRadius, controlTintColorDark, controlTintColorLight } from "../../../lib/extended/theme"
import { dark, light } from "../../../lib/generated/theme"

interface ToggleElementProps {
    isOn: boolean
    disabled?: boolean
}

const ToggleElement = styled.div<ToggleElementProps>`
    position: relative;
    ${light} {
        background-color: ${({ disabled, isOn }) => disabled ? "lightgray" : (isOn ? controlTintColorLight : controlBackgroundColorLight)};
    }
    ${dark} {
        background-color: ${({ disabled, isOn }) => disabled ? "lightgray" : (isOn ? controlTintColorDark : controlBackgroundColorDark)};
    }
    width: ${controlHeightDoubled};
    height: ${controlHeight};
    border-radius: ${controlRadius};
    transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
    cursor: default;
    ${ToggleDotElement} {
        ${light} {
            background-color: ${({ disabled }) => disabled ? "darkgray" : controlHintBackgroundColorLight};
        }
        ${dark} {
            background-color: ${({ disabled }) => disabled ? "darkgray" : controlHintBackgroundColorDark};
        }
        background-color: ${({ disabled }) => disabled ? "darkgray" : controlTintColorLight};
        position: absolute;
        left: ${({ isOn }) => isOn ? controlHeight : "0"};
        top: 0;
        width: ${controlHeight};
        height: ${controlHeight};
        border-radius: ${controlRadius};
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
        transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
    }
`

export default ToggleElement