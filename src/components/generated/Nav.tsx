import React from 'react'
import NavElement from '../extended/NavElement'
import NavCollapseButton from '../extended/NavCollapseButton'
import { useNavCollapsed } from '../../lib/generated/hooks/preferences'
import NavAppTitle from '../extended/NavAppTitle'
import NavLogo from '../extended/NavLogo'
import WithTooltip from './WithTooltip'

const Nav = () => {
    const [navCollapsed, setNavCollapsed] = useNavCollapsed()
    return <NavElement collapsed={navCollapsed}>
        <WithTooltip tooltip={<div>ok</div>}>
            <NavCollapseButton collapsed={navCollapsed} onClick={() => setNavCollapsed(!navCollapsed)} />
        </WithTooltip>
        <NavLogo />
        <NavAppTitle collapsed={navCollapsed} />
    </NavElement>
}

export default Nav