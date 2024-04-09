import { styled } from "@linaria/react"

type NavListFolderItemElementProps = {
    isDragging?: boolean
}

const NavListFolderItemElement = styled.div<NavListFolderItemElementProps>`
    background-color: lightgray;
    opacity: ${({ isDragging }) => isDragging ? 0.5 : 1};
`

export default NavListFolderItemElement