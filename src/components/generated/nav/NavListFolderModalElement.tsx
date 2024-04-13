import { styled } from "@linaria/react"
import { dark, light } from "../../../lib/generated/theme"
import { margin, radius, spacing } from "../../../lib/extended/theme"

const NavListFolderModalElement = styled.div`
    position: relative;
    border: 0.5px solid gray;
    border-radius: ${radius};
    padding: ${spacing} ${margin} 0 ${margin};
    width: 12rem;
    ${light} {
        background-color: white;
    }
    ${dark} {
        background-color: black;
    }
`

export default NavListFolderModalElement