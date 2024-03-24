import React from 'react'
import { styled } from "@linaria/react"
import { margin, tintColorDark, tintColorLight } from '../../lib/extended/theme'
import Logo from './Logo'
import { dark, light } from '../../lib/generated/theme'

const NavLogoElement = styled.div`
    margin-top: ${margin};
    ${light} {
        color: ${tintColorLight};
    }
    ${dark} {
        color: ${tintColorDark};
    }
`

const NavLogo = () => <NavLogoElement>
    <Logo />
</NavLogoElement>

export default NavLogo