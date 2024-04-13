import React from 'react'
import { useNavItems } from '../../../lib/generated/preferences'
import NavDragDropContainer from './NavDragDropContainer'

const NavItems = () => {
    const [items] = useNavItems()
    return <NavDragDropContainer displayingItems={items} folderPath={[]} portalTransform={undefined} />
}

export default NavItems