// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { margin, tintColorDark, tintColorLight } from '../../../lib/extended/theme'
import { dark, flexContainer, light, transitionAll } from '../../../lib/generated/theme'

type NavLogoElementProps = {
    collapsed: boolean
}

const NavLogoElement = styled.div<NavLogoElementProps>`
    margin-top: ${margin};
    margin-bottom: ${margin};
    ${flexContainer("row", "flex-start", "flex-start")}
    ${light} {
        color: ${tintColorLight};
    }
    ${dark} {
        color: ${tintColorDark};
    }
    flex: ${({ collapsed }) => collapsed ? "0" : "1"};
    ${transitionAll}
`

export default NavLogoElement