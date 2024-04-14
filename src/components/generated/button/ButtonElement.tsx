import { styled } from "@linaria/react"
import { borderThin, controlActiveBackGroundColorDark, controlActiveBackgroundColorLight, controlBackgroundColorDark, controlBackgroundColorLight, controlBorderColorDark, controlBorderColorLight, controlHeight, controlHintBackgroundColorDark, controlHintBackgroundColorLight, controlRadius, controlTextColorDark, controlTextColorLight, controlTintColorLight, margin } from "../../../lib/extended/theme"
import { dark, light, transitionShort } from "../../../lib/generated/theme"

const ButtonElement = styled.button`
    margin: 20px 0 0 20px;
    flex-grow: 1;
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
    box-shadow: rgba(0, 0, 0, .1) 0 1px 1px;
`

export default ButtonElement