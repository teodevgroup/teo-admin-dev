import React from 'react'
import { useNavItems } from '../../../lib/generated/preferences'
import NavDragDropContainer from './NavDragDropContainer'
import { isNavItemDroppableId, moveNavItemWithSourceAndDestInfo, navItemsAtPath } from './navItemsUtility'
import { DragDropContext } from '@hello-pangea/dnd'

const NavItems = () => {
    const [items, setItems] = useNavItems()
    return <>
        <DragDropContext onDragEnd={(result) => {
            if (!result.destination) {
                return
            }
            const sourceId = result.source.droppableId
            const sourceIndex = result.source.index
            const destId = result.destination.droppableId
            const destIndex = result.destination.index
            if (!isNavItemDroppableId(sourceId) || !isNavItemDroppableId(destId)) {
                return
            }
            setItems(moveNavItemWithSourceAndDestInfo(items, sourceId, sourceIndex, destId, destIndex))
        }}>
            <NavDragDropContainer displayingItems={items} folderPath={[]} portalTransform={undefined} />
        </DragDropContext>
    </>
}

export default NavItems