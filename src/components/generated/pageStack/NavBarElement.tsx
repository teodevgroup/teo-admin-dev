// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { dark, flexContainer, light, navBarHeight, zIndexStatusBar } from "../../../lib/generated/theme"
import { appStatusBarBackgroundColorDark, appStatusBarBackgroundColorLight, borderThin, controlBorderColorDark, controlBorderColorLight } from "../../../lib/extended/theme"

export type NavBarElementProps = {
    topMost: boolean
}

const NavBarElement = styled.div<NavBarElementProps>`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: ${navBarHeight};
    ${flexContainer("row", "stretch", "space-between")}
    opacity: ${({ topMost }) => topMost ? 1 : 0};
    height: ${navBarHeight};
    text-align: center;
    white-space: nowrap;
    ${light} {
        background-color: ${appStatusBarBackgroundColorLight};
        border-bottom: ${borderThin} solid ${controlBorderColorLight};
    }
    ${dark} {
        background-color: ${appStatusBarBackgroundColorDark};
        border-bottom: ${borderThin} solid ${controlBorderColorDark};
    }
    z-index: ${zIndexStatusBar};
    box-shadow: rgba(0, 0, 0, .05) 0 1px 4px;
`

export default NavBarElement