// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { clearButton, dark, flexContainer, light } from "../../../lib/generated/theme"
import { controlBackgroundColorDark, controlBackgroundColorLight, controlBorderColorDark, controlBorderColorLight, controlHeight, controlRadius, controlTextColorDark, controlTextColorLight } from "../../../lib/extended/theme"

const StatusBarButtonElement = styled.button`
    ${clearButton}
    ${flexContainer("row", "center", "center")}
    line-height: 0;
    font-size: 1.25rem;
    width: ${controlHeight};
    height: ${controlHeight};
    border-radius: ${controlRadius};
    ${light} {
        background-color: ${controlBackgroundColorLight};
        color: ${controlTextColorLight};
        border: 0.5px solid ${controlBorderColorLight};
    }
    ${dark} {
        background-color: ${controlBackgroundColorDark};
        color: ${controlTextColorDark};
        border: 0.5px solid ${controlBorderColorDark};
    }
`

export default StatusBarButtonElement