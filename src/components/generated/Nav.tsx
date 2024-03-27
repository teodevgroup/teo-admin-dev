// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import NavElement from '../extended/NavElement'
import NavCollapseButton from '../extended/NavCollapseButton'
import { useNavCollapsed } from '../../lib/generated/hooks/preferences'
import NavAppTitle from '../extended/NavAppTitle'
import NavLogo from '../extended/NavLogo'
import WithTooltip from './WithTooltip'
import Tooltip from '../extended/Tooltip'
import WithContextMenu from './WithContextMenu'
import ContextMenu from '../extended/ContextMenu'
import ContextMenuItem from '../extended/ContextMenuItem'

const Nav = () => {
    const [navCollapsed, setNavCollapsed] = useNavCollapsed()
    return <WithContextMenu contextMenu={<ContextMenu>
        <ContextMenuItem disabled={true} label="Menu A" />
        <ContextMenuItem label="Menu B" action={() => console.log("action B")} />
    </ContextMenu>}>
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