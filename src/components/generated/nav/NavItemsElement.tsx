import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"
import { margin, spacing } from "../../../lib/extended/theme"

const NavItemsElement = styled.div`
    ${flexContainer("column", "stretch", "flex-start")}
    margin-top: ${margin};
    align-self: stretch;
`

export default NavItemsElement