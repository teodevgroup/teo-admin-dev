import React from 'react'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import NavItemsElement from '../../extended/nav/NavItemsElement'
import { useNavItems } from '../../../lib/generated/preferences'
import NavListItem from './NavListItem'
import { useTranslation } from 'react-i18next'
import { tr } from '../../../lib/generated/lang/tr'
import { isNavItemDroppableId } from './navItemsUtility'

const NavItems = () => {
    const [items, setItems] = useNavItems()
    const { t, i18n } = useTranslation("translations")
    return <DragDropContext onDragEnd={(result) => {
        if (!result.destination) {
            return;
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
        <Droppable key="-nav-items" droppableId="-nav-items">
            {(provided, snapshot) => (
                <NavItemsElement ref={provided.innerRef} {...provided.droppableProps}>
                    {items.map((item, index) => {
                        return <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => (
                                item.folder
                                ? null
                                : <NavListItem text={tr(item.name, t, i18n)} iconCode={item.icon} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} />
                            )}
                        </Draggable>
                    })}
                    {provided.placeholder}
                </NavItemsElement>
            )}
        </Droppable>
    </DragDropContext>
}

export default NavItems