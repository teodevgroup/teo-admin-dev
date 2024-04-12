// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { margin, tintColorDark, tintColorLight } from '../../../lib/extended/theme'
import { dark, light } from '../../../lib/generated/theme'

const NavLogoElement = styled.div`
    margin-top: ${margin};
    margin-bottom: ${margin};
    ${light} {
        color: ${tintColorLight};
    }
    ${dark} {
        color: ${tintColorDark};
    }
`

export default NavLogoElement