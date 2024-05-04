import { styled } from "@linaria/react"
import { dark, flexContainer, light } from "../../../lib/generated/theme"
import { controlBackgroundColorDark, controlBackgroundColorLight, controlBorderColorDark, controlBorderColorLight, controlTextColorDark, controlTextColorLight, radius, spacing, textColorOnTintedBackgroundDark, textColorOnTintedBackgroundLight, tintColorDark, tintColorLight } from "../../../lib/extended/theme"

type NavListItemElementProps = {
    collapsed: boolean
    isDragging?: boolean
    isSelected?: boolean
}

const NavListItemElement = styled.div<NavListItemElementProps>`
    ${flexContainer("row", "center", "flex-start")}
    padding: 1rem;
    height: 3rem;
    &:hover {
        ${light} {
            background-color: ${({ isSelected}) => isSelected ? tintColorLight : controlBackgroundColorLight};
        }
        ${dark} {
            background-color: ${({ isSelected}) => isSelected ? tintColorDark : controlBackgroundColorDark};
        }
    }
    ${light} {
        background-color: ${({ isSelected}) => isSelected ? tintColorLight : "transparent"};
        color: ${({ isSelected}) => isSelected ? textColorOnTintedBackgroundLight : controlTextColorLight};
    }
    ${dark} {
        background-color: ${({ isSelected}) => isSelected ? tintColorDark : "transparent"};
        color: ${({ isSelected}) => isSelected ? textColorOnTintedBackgroundDark : controlTextColorDark};
    }
    border-radius: ${radius};
    opacity: ${({ isDragging }) => isDragging ? 0.5 : 1};
    cursor: default !important;
`

export default NavListItemElement