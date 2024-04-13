// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { clearButton, dark, flexContainer, light, size } from "../../../lib/generated/theme"
import { controlBackgroundColorDark, controlBackgroundColorLight, controlBorderColorDark, controlBorderColorLight, controlHeight, controlRadius, spacing } from "../../../lib/extended/theme"

const StatusBarUserAvatarElement = styled.button`
    ${clearButton}
    ${flexContainer("row", "center", "center")}
    ${size(controlHeight)}
    border-radius: ${controlRadius};
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    font-size: 1.25rem;
    ${light} {
        background-color: ${controlBackgroundColorLight};
        border: 0.5px solid ${controlBorderColorLight};
    }
    ${dark} {
        background-color: ${controlBackgroundColorDark};
        border: 0.5px solid ${controlBorderColorDark};
    }
`

export default StatusBarUserAvatarElement