// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"

type NavListItemTextElementProps = {
    collapsed: boolean
}

const NavListItemTextElement = styled.div<NavListItemTextElementProps>`
    font-size: ${({ collapsed }) => collapsed ? "0.6rem" : "0.875rem"};
    font-weight: ${({ collapsed }) => collapsed ? "bold" : "bold"};
    margin-top: ${({ collapsed }) => collapsed ? "3px" : "0"};
`

export default NavListItemTextElement