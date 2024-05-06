// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { ReactElement } from "react"
import WithContextMenu from "../menu/WithContextMenu"
import Menu from "../menu/Menu"
import MenuItem from "../menu/MenuItem"

export type NavListItemMenuWrapperProps = {
    children: ReactElement
}

const NavListItemMenuWrapper = ({ children }: NavListItemMenuWrapperProps) => {
    return <WithContextMenu contextMenu={<Menu>
        <MenuItem label="Customize Nav Item" />
    </Menu>}>
        {children}
    </WithContextMenu>
}

export default NavListItemMenuWrapper