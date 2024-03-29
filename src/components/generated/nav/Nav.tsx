// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import NavElement from '../../extended/logo/NavElement'
import NavCollapseButton from '../../extended/logo/NavCollapseButton'
import { useNavCollapsed } from '../../../lib/generated/hooks/preferences'
import NavAppTitle from '../../extended/logo/NavAppTitle'
import NavLogo from '../../extended/logo/NavLogo'
import WithTooltip from '../tooltip/WithTooltip'
import Tooltip from '../../extended/tooltip/Tooltip'
import WithContextMenu from '../menu/WithContextMenu'
import Menu from '../menu/Menu'
import ContextMenuItem from '../menu/MenuItem'

const Nav = () => {
    const [navCollapsed, setNavCollapsed] = useNavCollapsed()
    return <WithContextMenu contextMenu={
        <Menu>
            <ContextMenuItem disabled={true} label="Menu A" />
            <ContextMenuItem label="Menu B" action={() => console.log("action B")} />
            <ContextMenuItem label="Download">
                <Menu>
                    <ContextMenuItem label="JSON" />
                    <ContextMenuItem label="CSV" />
                </Menu>
            </ContextMenuItem>
        </Menu>
    }>
        <NavElement collapsed={navCollapsed}>
            <WithTooltip tooltip={<Tooltip>{navCollapsed ? "Expand navigation area" : "Collapse navigation area"}</Tooltip>}>
                <NavCollapseButton collapsed={navCollapsed} onClick={() => setNavCollapsed(!navCollapsed)} />
            </WithTooltip>
            <NavLogo />
            <NavAppTitle collapsed={navCollapsed} />
        </NavElement>
    </WithContextMenu>
}

export default Nav