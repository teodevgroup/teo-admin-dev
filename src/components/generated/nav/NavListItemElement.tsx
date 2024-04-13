import { styled } from "@linaria/react"
import { dark, flexContainer, light } from "../../../lib/generated/theme"
import { controlBackgroundColorDark, controlBackgroundColorLight, controlBorderColorDark, controlBorderColorLight, controlTextColorDark, controlTextColorLight, radius, spacing } from "../../../lib/extended/theme"

type NavListItemElementProps = {
    isDragging?: boolean
}

const NavListItemElement = styled.div<NavListItemElementProps>`
    ${flexContainer("row", "center", "flex-start")}
    padding: 1rem;
    height: 3rem;
    ${light} {
        background-color: ${controlBackgroundColorLight};
        border: 0.5px solid ${controlBorderColorLight};
        color: ${controlTextColorLight};
    }
    ${dark} {
        background-color: ${controlBackgroundColorDark};
        border: 0.5px solid ${controlBorderColorDark};
        color: ${controlTextColorDark};
    }
    border-radius: 1.5rem;
    opacity: ${({ isDragging }) => isDragging ? 0.5 : 1};
    margin-bottom: ${spacing};
    cursor: default !important;
`

export default NavListItemElement