import { styled } from '@linaria/react'
import { dark, flexContainer, light, transitionAll } from '../../../lib/generated/theme'
import { appNavBackgroundColorDark, appNavBackgroundColorLight, margin } from '../../../lib/extended/theme'

type NavElementProps = {
    collapsed: boolean
}

const NavElement = styled.div<NavElementProps>`
    ${flexContainer("column", "center", "flex-start")}
    ${light} {
        background-color: ${appNavBackgroundColorLight};
    }
    ${dark} {
        background-color: ${appNavBackgroundColorDark};
    }
    padding: ${margin};
    width: ${({ collapsed }) => collapsed ? `calc(5rem + ${margin})` : `calc(16rem + ${margin})`};
    ${transitionAll}
`

export default NavElement