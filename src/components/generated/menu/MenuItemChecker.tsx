import React from 'react'
import MenuItemCheckerElement from './MenuItemCheckerElement'
import { FaCheck } from 'react-icons/fa'

type MenuItemCheckerProps = {
    checked?: boolean
}

const MenuItemChecker = ({ checked }: MenuItemCheckerProps) => {
    return <MenuItemCheckerElement checked={checked}>
        <FaCheck />
    </MenuItemCheckerElement>
}

export default MenuItemChecker