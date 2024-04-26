import { styled } from "@linaria/react"
import { borderThin, controlActiveBackGroundColorDark, controlActiveBackgroundColorLight, controlBackgroundColorDark, controlBackgroundColorLight, controlBorderColorDark, controlBorderColorLight, controlHeight, controlHintBackgroundColorDark, controlHintBackgroundColorLight, controlRadius, controlTextColorDark, controlTextColorLight, controlTintColorLight, margin } from "../../../lib/extended/theme"
import { dark, light, shallowShadow, transitionShort } from "../../../lib/generated/theme"

const ButtonElement = styled.button`
    height: ${controlHeight};
    border-radius: ${controlRadius};
    padding: 0 ${controlRadius};
    &:hover {
        ${light} {
            background-color: ${controlHintBackgroundColorLight};
        }
        ${dark} {
            background-color: ${controlHintBackgroundColorDark};
        }
    }
    &:active {
        ${light} {
            background-color: ${controlActiveBackgroundColorLight};
        }
        ${dark} {
            background-color: ${controlActiveBackGroundColorDark};
        }
    }
    ${light} {   
        border: ${borderThin} solid ${controlBorderColorLight};
        background-color: ${controlBackgroundColorLight};
        color: ${controlTextColorLight};
    }
    ${dark} {
        background-color: ${controlBackgroundColorDark};
        border: ${borderThin} solid ${controlBorderColorDark};
        color: ${controlTextColorDark};
    }
    ${transitionShort('border-color,background-color')}
    box-shadow: ${shallowShadow};
`

export default ButtonElement