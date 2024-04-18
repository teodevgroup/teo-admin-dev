import { styled } from "@linaria/react"
import { flexContainer, navBarHeight } from "../../../lib/generated/theme"

const NavBarElement = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: ${navBarHeight};
    ${flexContainer("row", "stretch", "space-between")}
`

export default NavBarElement