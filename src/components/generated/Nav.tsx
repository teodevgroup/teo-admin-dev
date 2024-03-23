import React from 'react'
import NavElement from '../extended/NavElement'

const Nav = () => {
    return <NavElement>
        NAV
    </NavElement>
}

export const AsyncNav = () => {
    throw new Promise((resolve, reject) => {
        resolve("")
    })
    return <NavElement>
        NAV
    </NavElement>
}

export default Nav