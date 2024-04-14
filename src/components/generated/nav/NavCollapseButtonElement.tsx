// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { clearButton, dark, flexContainer, light, transitionAll } from "../../../lib/generated/theme"
import { borderThin, controlBackgroundColorDark, controlBackgroundColorLight, controlBorderColorDark, controlBorderColorLight, controlHeight, controlRadius, controlTextColorDark, controlTextColorLight } from "../../../lib/extended/theme"

export type NavCollapseButtonElementProps = {
    collapsed: boolean
}

const NavCollapseButtonElement = styled.button<NavCollapseButtonElementProps>`
    ${clearButton}
    ${flexContainer("row", "center", "center")}
    line-height: 0;
    font-size: 1.25rem;
    align-self: ${({ collapsed }) => collapsed ? `center` : `flex-end`};
    ${transitionAll}
    width: ${controlHeight};
    height: ${controlHeight};
    border-radius: ${controlRadius};
    ${light} {
        background-color: ${controlBackgroundColorLight};
        color: ${controlTextColorLight};
        border: ${borderThin} solid ${controlBorderColorLight};
    }
    ${dark} {
        background-color: ${controlBackgroundColorDark};
        color: ${controlTextColorDark};
        border: ${borderThin} solid ${controlBorderColorDark};
    }
`

export default NavCollapseButtonElement