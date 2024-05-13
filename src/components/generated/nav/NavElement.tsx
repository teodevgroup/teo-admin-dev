// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from '@linaria/react'
import { dark, flexContainer, light, transitionAll } from '../../../lib/generated/theme'
import { zIndexNav, appNavBackgroundColorDark, appNavBackgroundColorLight, borderThin, controlBorderColorDark, controlBorderColorLight, margin, spacing } from '../../../lib/extended/theme'

type NavElementProps = {
    collapsed: boolean
}

const NavElement = styled.div<NavElementProps>`
    ${flexContainer("column", "center", "flex-start")}
    ${light} {
        background-color: ${appNavBackgroundColorLight};
        border-right: ${borderThin} solid ${controlBorderColorLight};
    }
    ${dark} {
        background-color: ${appNavBackgroundColorDark};
        border-right: ${borderThin} solid ${controlBorderColorDark};
    }
    padding: ${margin};
    width: ${({ collapsed }) => collapsed ? `calc(5rem + ${margin})` : `calc(16rem)`};
    ${transitionAll}
    z-index: ${zIndexNav};
    box-shadow: rgba(0, 0, 0, .05) 1px 0 4px;
`

export default NavElement