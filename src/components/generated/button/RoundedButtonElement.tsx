// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { dark, flexContainer, light, shallowShadow, size, transitionShort } from "../../../lib/generated/theme"
import { borderThin, controlActiveBackGroundColorDark, controlActiveBackgroundColorLight, controlBackgroundColorDark, controlBackgroundColorLight, controlBorderColorDark, controlBorderColorLight, controlHeight, controlHintBackgroundColorDark, controlHintBackgroundColorLight, controlRadius, controlTextColorDark, controlTextColorLight } from "../../../lib/extended/theme"

const RoundedButtonElement = styled.button`
    ${flexContainer("row", "center", "center")}
    line-height: 0;
    font-size: 1.25rem;
    ${size(controlHeight)}
    border-radius: ${controlRadius};
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

export default RoundedButtonElement