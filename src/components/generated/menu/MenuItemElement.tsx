import { styled } from "@linaria/react"
import { radius } from "../../../lib/extended/theme"
import { clearButton, dark, flexContainer, light } from "../../../lib/generated/theme"

export type MenuItemElementProps = {
    highlighted?: boolean
}

const MenuItemElement = styled.button<MenuItemElementProps>`
    ${clearButton}
    line-height: 1;
    padding: ${radius};
    border-radius: ${radius};
    ${flexContainer("row", "center", "space-between")}
    user-select: none;
    cursor: default;
    ${light} {
        background-color: ${({ highlighted }) => highlighted ? `blue` : `white`};
        color: ${({ disabled }) => disabled ? `gray` : `black`}
    }
    ${dark} {
        background-color: ${({ highlighted }) => highlighted ? `blue` : `black`};
        color: ${({ disabled }) => disabled ? `gray` : `white`}
    }
`

export default MenuItemElement