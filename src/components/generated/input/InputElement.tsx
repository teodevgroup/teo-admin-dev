import { styled } from "@linaria/react"
import { borderThin, controlBackgroundColorDark, controlBackgroundColorLight, controlBorderColorDark, controlBorderColorLight, controlHeight, controlHintBackgroundColorDark, controlHintBackgroundColorLight, controlRadius, controlTextColorDark, controlTextColorLight, controlTintColorLight } from "../../../lib/extended/theme"
import { dark, light, transitionShort } from "../../../lib/generated/theme"

const InputElement = styled.input`
    flex-grow: 1;
    height: ${controlHeight};
    border-radius: ${controlRadius};
    padding: 0 ${controlRadius};
    &:focus {
        outline: ${controlTintColorLight} solid 2px;
        ${light} {
            background-color: ${controlHintBackgroundColorLight};
        }
        ${dark} {
            background-color: ${controlHintBackgroundColorDark};
        }        
    }
    &:hover {
        ${light} {
            background-color: ${controlHintBackgroundColorLight};
        }
        ${dark} {
            background-color: ${controlHintBackgroundColorDark};
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
`

export default InputElement