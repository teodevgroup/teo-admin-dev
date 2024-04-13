import { styled } from "@linaria/react"
import { dark, light } from "../../../lib/generated/theme"
import { appNavBackgroundColorDark, appNavBackgroundColorLight, controlBackgroundColorDark, controlBackgroundColorLight, margin, radius, spacing } from "../../../lib/extended/theme"

const NavListFolderModalElement = styled.div`
    position: relative;
    border-radius: 1.5rem;
    padding: ${spacing} ${margin} 0 ${margin};
    width: 16rem;
    ${light} {
        background-color: ${appNavBackgroundColorLight};
        border: 0.5px solid ${controlBackgroundColorLight};
    }
    ${dark} {
        background-color: ${appNavBackgroundColorDark};
        border: 0.5px solid ${controlBackgroundColorDark};
    }
`

export default NavListFolderModalElement