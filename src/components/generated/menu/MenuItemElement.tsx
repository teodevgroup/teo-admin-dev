// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { controlTextColorDark, controlTextColorLight, radius, textColorOnTintedBackgroundDark, textColorOnTintedBackgroundLight, tintColorDark, tintColorLight } from "../../../lib/extended/theme"
import { clearButton, dark, flexContainer, light } from "../../../lib/generated/theme"

export type MenuItemElementProps = {
    highlighted?: boolean
}

const MenuItemElement = styled.button<MenuItemElementProps>`
    ${clearButton}
    line-height: 1;
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: .75rem;
    padding-right: .75rem;
    border-radius: ${radius};
    ${flexContainer("row", "center", "space-between")}
    user-select: none;
    cursor: default;
    ${light} {
        background-color: ${({ highlighted }) => highlighted ? tintColorLight : `transparent`};
        color: ${({ disabled, highlighted }) => disabled ? `gray` : (highlighted ? textColorOnTintedBackgroundLight : controlTextColorLight)}
    }
    ${dark} {
        background-color: ${({ highlighted }) => highlighted ? tintColorDark : `transparent`};
        color: ${({ disabled, highlighted }) => disabled ? `gray` : (highlighted ? textColorOnTintedBackgroundDark : controlTextColorDark)}
    }
`

export default MenuItemElement