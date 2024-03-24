import React from 'react'
import { styled } from "@linaria/react"
import { clearHeading, transitionAll } from '../../lib/generated/theme'
import { spacing } from '../../lib/extended/theme'

type NavAppTitleProps = {
    collapsed: boolean
}

const NavAppTitleElement = styled.h1<NavAppTitleProps>`
    ${clearHeading}
    margin-top: ${spacing};
    font-size: ${({ collapsed }) => collapsed ? `0.75rem` : `1rem`};
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    ${transitionAll}
`

const NavAppTitle = (props: NavAppTitleProps) => <NavAppTitleElement {...props}>
    Teo Admin{props.collapsed ? "" : " Dashboard"}
</NavAppTitleElement>

export default NavAppTitle