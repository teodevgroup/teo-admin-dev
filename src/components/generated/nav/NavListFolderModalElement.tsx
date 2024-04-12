import { styled } from "@linaria/react"
import { dark, light } from "../../../lib/generated/theme"
import { margin } from "../../../lib/extended/theme"

const NavListFolderModalElement = styled.div`
    border: 1px solid gray;
    padding: ${margin};
    ${light} {
        background-color: white;
    }
    ${dark} {
        background-color: black;
    }
`

export default NavListFolderModalElement