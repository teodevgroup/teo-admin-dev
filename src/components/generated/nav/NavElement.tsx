// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from '@linaria/react'
import { dark, flexContainer, light, transitionAll } from '../../../lib/generated/theme'
import { appNavBackgroundColorDark, appNavBackgroundColorLight, margin, spacing } from '../../../lib/extended/theme'

type NavElementProps = {
    collapsed: boolean
}

const NavElement = styled.div<NavElementProps>`
    ${flexContainer("column", "center", "flex-start")}
    ${light} {
        background-color: ${appNavBackgroundColorLight};
    }
    ${dark} {
        background-color: ${appNavBackgroundColorDark};
    }
    padding: ${margin};
    width: ${({ collapsed }) => collapsed ? `calc(5rem + ${margin})` : `calc(16rem)`};
    ${transitionAll}
`

export default NavElement