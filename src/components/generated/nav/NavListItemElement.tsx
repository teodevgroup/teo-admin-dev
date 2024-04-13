import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"
import { radius, spacing } from "../../../lib/extended/theme"

type NavListItemElementProps = {
    isDragging?: boolean
}

const NavListItemElement = styled.div<NavListItemElementProps>`
    ${flexContainer("row", "center", "flex-start")}
    padding: 1rem;
    height: 3rem;
    background-color: lightgray;
    border-radius: ${radius};
    opacity: ${({ isDragging }) => isDragging ? 0.5 : 1};
    margin-bottom: ${spacing};
    cursor: default !important;
`

export default NavListItemElement