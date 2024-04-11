import { styled } from "@linaria/react"
import NavListItemElement from "../../extended/nav/NavListItemElement"

export type NavListFolderItemElementProps = {
    isDragging?: boolean
    isReceivingDragging?: boolean
}

const NavListFolderItemElement = styled(NavListItemElement)<NavListFolderItemElementProps>`
`

export default NavListFolderItemElement