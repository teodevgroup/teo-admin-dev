import React, { ReactElement } from "react"
import WithContextMenu from "../menu/WithContextMenu"
import Menu from "../menu/Menu"
import MenuItem from "../menu/MenuItem"

export type NavListItemMenuWrapperProps = {
    children: ReactElement
}

const NavListItemMenuWrapper = ({ children }: NavListItemMenuWrapperProps) => {
    return <WithContextMenu contextMenu={<Menu>
        <MenuItem label="Customize nav item" />
    </Menu>}>
        {children}
    </WithContextMenu>
}

export default NavListItemMenuWrapper