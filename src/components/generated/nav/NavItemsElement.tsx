import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"

const NavItemsElement = styled.div`
    ${flexContainer("column", "stretch", "flex-start")}
    align-self: stretch;
`

export default NavItemsElement