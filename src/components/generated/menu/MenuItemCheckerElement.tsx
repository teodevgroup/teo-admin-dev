import { styled } from "@linaria/react"
import { spacing } from "../../../lib/extended/theme"

type MenuItemCheckerElementProps = {
    checked?: boolean
}

const MenuItemCheckerElement = styled.div<MenuItemCheckerElementProps>`
    opacity: ${({ checked }) => checked ? 1 : 0};
    display: inline-block;
    margin-right: ${spacing};
`

export default MenuItemCheckerElement