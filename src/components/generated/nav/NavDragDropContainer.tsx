import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import React, { Dispatch, SetStateAction } from 'react'
import { droppableIdForNavItemAtPath, isNavItemDroppableId, moveNavItemWithSourceAndDestInfo } from './navItemsUtility'
import { NavItem, useNavItems } from '../../../lib/generated/preferences'
import NavItemsElement from './NavItemsElement'
import NavListFolderItem from './NavListFolderItem'
import NavListItem from './NavListItem'
import { useTranslation } from 'react-i18next'
import { tr } from '../../../lib/generated/lang/tr'

export type NavDragDropContainerProps = {
    displayingItems: NavItem[]
    folderPath: string[]
}

const NavDragDropContainer = ({ displayingItems, folderPath }: NavDragDropContainerProps) => {
    const [items, setItems] = useNavItems()
    const { t, i18n } = useTranslation("translations")
    return <DragDropContext onDragEnd={(result) => {
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
        <Droppable key={droppableIdForNavItemAtPath(folderPath)} droppableId={droppableIdForNavItemAtPath(folderPath)}>
            {(provided, snapshot) => (
                <NavItemsElement ref={provided.innerRef} {...provided.droppableProps}>
                    {displayingItems.map((item, index) => {
                        return <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => (
                                item.folder
                                ? <NavListFolderItem folderPath={[...folderPath, item.id]} text={tr(item.name, t, i18n)} iconCode={item.icon} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} />
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

export default NavDragDropContainer