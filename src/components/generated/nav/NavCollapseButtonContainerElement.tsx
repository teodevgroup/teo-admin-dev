import { styled } from "@linaria/react"
import { flexContainer, transitionAll } from "../../../lib/generated/theme"

export const NavCollapseButtonOuterContainerElement = styled.div`
    ${flexContainer("row", "center", "center")}
    width: 100%;
    ${transitionAll}
`

export type NavCollapseButtonInnerContainerElementProps = {
    collapsed: boolean
}

export const NavCollapseButtonInnerContainerElement = styled.div<NavCollapseButtonInnerContainerElementProps>`
    ${flexContainer("row", "flex-end", "flex-end")}
    flex: ${({ collapsed }) => collapsed ? 0 : 1};
    ${transitionAll}
`
