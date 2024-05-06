// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { spacing } from "../../../lib/extended/theme"

type NavListItemIconElementProps = {
    collapsed: boolean
}

const NavListItemIconElement = styled.div<NavListItemIconElementProps>`
    line-height: 0;
    margin-right: ${({ collapsed }) => collapsed ? "0" : spacing};
    font-size: 1.125rem;
`

export default NavListItemIconElement