import { styled } from "@linaria/react"
import { clearButton, transitionAll } from "../../lib/generated/theme"

export type NavCollapseButtonElementProps = {
    collapsed: boolean
}

const NavCollapseButtonElement = styled.button<NavCollapseButtonElementProps>`
    ${clearButton}
    line-height: 0;
    align-self: ${({ collapsed }) => collapsed ? `center` : `flex-end`};
    font-size: 1.5rem;
    ${transitionAll}
`

export default NavCollapseButtonElement