import { Draggable, Droppable } from '@hello-pangea/dnd'
import React from 'react'
import { droppableIdForNavItemAtPath } from './navItemsUtility'
import { NavItem } from '../../../lib/generated/preferences'
import NavItemsElement from './NavItemsElement'
import NavListFolderItem from './NavListFolderItem'
import NavListItem from './NavListItem'
import { useTranslation } from 'react-i18next'
import { tr } from '../../../lib/generated/lang/tr'
import untransform from '../../../lib/generated/modal/untransform'
import NavListItemMenuWrapper from './NavListItemMenuWrapper'
import usePageStackPage from '../pageStack/usePageStackPage'

export type NavDragDropContainerProps = {
    displayingItems: NavItem[]
    folderPath: string[]
    portalTransform: string | undefined
}

const NavDragDropContainer = ({ displayingItems, folderPath, portalTransform }: NavDragDropContainerProps) => {
    const { t, i18n } = useTranslation("translations")
    const { stack } = usePageStackPage()
    return <Droppable key={droppableIdForNavItemAtPath(folderPath)} droppableId={droppableIdForNavItemAtPath(folderPath)}>
        {(provided, snapshot) => (
            <NavItemsElement ref={provided.innerRef} {...provided.droppableProps}>
                {displayingItems.map((item, index) => {
                    const isSelected = stack[0] ? item.path === stack[0].key : false
                    return <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => {
                            if (provided.draggableProps.style) {
                                if (snapshot.isDragging) {
                                    if (portalTransform && (provided.draggableProps.style as any).transform) {
                                        provided.draggableProps.style.transform = untransform((provided.draggableProps.style as any).transform, portalTransform)
                                    }
                                }
                            }
                            return item.folder
                            ? <NavListItemMenuWrapper>
                                <NavListFolderItem folderPath={[...folderPath, item.id]} text={tr(item.name, t, i18n)} iconCode={item.icon} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} />
                            </NavListItemMenuWrapper>
                            : <NavListItemMenuWrapper>
                                <NavListItem isSelected={isSelected} path={item.path} text={tr(item.name, t, i18n)} iconCode={item.icon} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} />
                            </NavListItemMenuWrapper>
                        }}
                    </Draggable>
                })}
                {provided.placeholder}
            </NavItemsElement>
        )}
    </Droppable>
}

export default NavDragDropContainer