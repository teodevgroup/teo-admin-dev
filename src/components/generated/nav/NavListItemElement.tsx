import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"

type NavListItemElementProps = {
    isDragging?: boolean
}

const NavListItemElement = styled.div<NavListItemElementProps>`
    ${flexContainer("row", "center", "flex-start")}
    background-color: lightgray;
    opacity: ${({ isDragging }) => isDragging ? 0.5 : 1};
`

export default NavListItemElement