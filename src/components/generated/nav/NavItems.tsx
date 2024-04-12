import React from 'react'
import { useNavItems } from '../../../lib/generated/preferences'
import NavDragDropContainer from './NavDragDropContainer'

const NavItems = () => {
    const [items, setItems] = useNavItems()
    return <NavDragDropContainer displayingItems={items} folderPath={[]} />
}

export default NavItems