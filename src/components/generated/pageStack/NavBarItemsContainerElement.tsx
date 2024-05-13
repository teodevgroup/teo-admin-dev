// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"
import { margin, zIndexStatusBar } from "../../../lib/extended/theme"

const NavBarItemsContainerElement = styled.div`
    ${flexContainer("row", "center", "center")}
    z-index: ${zIndexStatusBar};
    gap: ${margin};
    padding: 0 ${margin};
`

export default NavBarItemsContainerElement