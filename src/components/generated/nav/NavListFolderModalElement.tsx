import { styled } from "@linaria/react"
import { dark, light } from "../../../lib/generated/theme"
import { appNavBackgroundColorDark, appNavBackgroundColorLight, borderThin, controlBackgroundColorDark, controlBackgroundColorLight, margin, radius, spacing } from "../../../lib/extended/theme"

const NavListFolderModalElement = styled.div`
    position: relative;
    border-radius: 1.5rem;
    padding: ${spacing} ${margin} 0 ${margin};
    width: 16rem;
    ${light} {
        background-color: ${appNavBackgroundColorLight};
        border: ${borderThin} solid ${controlBackgroundColorLight};
    }
    ${dark} {
        background-color: ${appNavBackgroundColorDark};
        border: ${borderThin} solid ${controlBackgroundColorDark};
    }
`

export default NavListFolderModalElement