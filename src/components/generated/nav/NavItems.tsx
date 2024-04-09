import { CSSProperties } from '@linaria/core'
import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'

const grid = 8

const getItems = (count: number) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
      id: `item-${k}`,
      content: `item ${k}`
}))

const getItemStyle = (isDragging: boolean, draggableStyle: CSSProperties) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
  
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",
    opacity: isDragging ? 0.5 : 1,
    // styles we need to apply on draggables
    ...draggableStyle
})

const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result
}

const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250
})

const NavItems = () => {
    const [items, setItems] = useState(getItems(10))
    return <DragDropContext onDragEnd={(result) => {
        if (!result.destination) {
            return;
        }
        const newItems = reorder(
            items,
            result.source.index,
            result.destination.index
        )
        setItems(newItems)
    }}>
        <Droppable key="droppable" droppableId="droppable">
            {(provided, snapshot) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                >
                    {items.map((item, index) => {
                        console.log("see item and index", item, index)
                        return <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                    )}
                                >
                                    {item.content}
                                </div>
                            )}
                        </Draggable>
                    })}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </DragDropContext>
}

export default NavItems