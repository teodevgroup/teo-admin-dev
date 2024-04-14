// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { dark, flexContainer, light } from "../../../lib/generated/theme"
import { appStatusBarBackgroundColorDark, appStatusBarBackgroundColorLight, borderThin, controlBorderColorDark, controlBorderColorLight, margin } from "../../../lib/extended/theme"

const StatusBarElement = styled.div`
    ${flexContainer("row", "center", "flex-end")}
    gap: ${margin};
    padding: ${margin};
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    ${light} {
        background-color: ${appStatusBarBackgroundColorLight};
        border-bottom: ${borderThin} solid ${controlBorderColorLight};
    }
    ${dark} {
        background-color: ${appStatusBarBackgroundColorDark};
        border-bottom: ${borderThin} solid ${controlBorderColorDark};
    }
`

export default StatusBarElement