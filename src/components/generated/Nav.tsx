import React from 'react'
import NavElement from '../extended/NavElement'
import NavCollapseButton from '../extended/NavCollapseButton'
import { useNavCollapsed } from '../../lib/generated/hooks/preferences'
import NavAppTitle from '../extended/NavAppTitle'
import NavLogo from '../extended/NavLogo'
import WithTooltip from './WithTooltip'
import Tooltip from '../extended/Tooltip'

const Nav = () => {
    const [navCollapsed, setNavCollapsed] = useNavCollapsed()
    return <NavElement collapsed={navCollapsed}>
        <WithTooltip tooltip={(props) => <Tooltip {...props}>{navCollapsed ? "Expand navigation area" : "Collapse navigation area"}</Tooltip>}>
            {(props) => <NavCollapseButton collapsed={navCollapsed} onClick={() => setNavCollapsed(!navCollapsed)} {...props} />}
        </WithTooltip>
        <NavLogo />
        <NavAppTitle collapsed={navCollapsed} />
    </NavElement>
}

export default Nav