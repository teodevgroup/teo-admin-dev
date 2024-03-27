import React, { Children, cloneElement, forwardRef, ReactElement, useContext, useEffect, useRef, useState } from 'react'
import { ComponentPropsWithRef } from "react"
import ContextMenuElement from './ContextMenuElement'
import { autoUpdate, flip, FloatingTree, offset, safePolygon, shift, useDismiss, useFloating, useFloatingNodeId, useFloatingParentNodeId, useFloatingTree, useHover, useInteractions, useListItem, useListNavigation, useRole, useTypeahead } from '@floating-ui/react'
import { omit } from 'radash'
import ContextMenuContext from '../generated/ContextMenuContext'

type ContextMenuProps = ComponentPropsWithRef<'div'>

const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>((props: ContextMenuProps, ref) => {
    const parentMenuContext = useContext(ContextMenuContext)
    const tree = useFloatingTree()
    const parentId = useFloatingParentNodeId()
    const nodeId = useFloatingNodeId()
    const item = useListItem()
    const isNested = parentId != null
    const { refs, floatingStyles, context } = useFloating({ 
        nodeId,
        open: parentMenuContext.isOpen,
        onOpenChange: parentMenuContext.setIsOpen,
        middleware: [
            offset({ mainAxis: 0, alignmentAxis: -8 }),
            flip({
              fallbackPlacements: ["left-start"]
            }),
            shift({ padding: 10 })
        ],
        placement: isNested ? "right-start" : "bottom-start",
        strategy: isNested ? "fixed" : undefined,
        whileElementsMounted: autoUpdate
    })
    const hover = useHover(context, {
        enabled: isNested,
        delay: { open: 75 },
        handleClose: safePolygon({ blockPointerEvents: true })
    })
    const dismiss = useDismiss(context, { referencePress: true })
    const role = useRole(context, { role: "menu" })
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const listItemsRef = useRef<Array<HTMLButtonElement | null>>([])
    const labelsRef = useRef<Array<string | null>>([])
    const listNavigation = useListNavigation(context, {
        listRef: listItemsRef,
        onNavigate: setActiveIndex,
        nested: isNested,
        activeIndex
    })
    const typeahead = useTypeahead(context, {
        listRef: labelsRef,
        onMatch: setActiveIndex,
        activeIndex
    })
    const {
        getReferenceProps,
        getFloatingProps,
        getItemProps
    } = useInteractions([hover, role, dismiss, listNavigation, typeahead])
    useEffect(() => {
        if (parentMenuContext.contextMenuTriggerMouseEvent) {
            refs.setPositionReference({
                getBoundingClientRect() {
                    return {
                        width: 0,
                        height: 0,
                        x: parentMenuContext.contextMenuTriggerMouseEvent?.clientX ?? 0,
                        y: parentMenuContext.contextMenuTriggerMouseEvent?.clientY ?? 0,
                        top: parentMenuContext.contextMenuTriggerMouseEvent?.clientY ?? 0,
                        right: parentMenuContext.contextMenuTriggerMouseEvent?.clientX ?? 0,
                        bottom: parentMenuContext.contextMenuTriggerMouseEvent?.clientY ?? 0,
                        left: parentMenuContext.contextMenuTriggerMouseEvent?.clientX ?? 0
                    }                
                }
            })
        }
    }, [parentMenuContext.contextMenuTriggerMouseEvent])
    useEffect(() => {
        if (!tree) return;
    
        function handleTreeClick() {
            parentMenuContext.setIsOpen(false)
        }
    
        function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
            if (event.nodeId !== nodeId && event.parentId === parentId) {
                parentMenuContext.setIsOpen(false)
            }
        }
    
        tree.events.on("click", handleTreeClick);
        tree.events.on("menuopen", onSubMenuOpen);
    
        return () => {
          tree.events.off("click", handleTreeClick);
          tree.events.off("menuopen", onSubMenuOpen);
        };
      }, [tree, nodeId, parentId]);
    
      useEffect(() => {
        if (parentMenuContext.isOpen && tree) {
          tree.events.emit("menuopen", { parentId, nodeId });
        }
      }, [tree, parentMenuContext.isOpen, nodeId, parentId]);
    const element = <ContextMenuElement ref={refs.setFloating} style={floatingStyles} {...omit(props, ['children'])} {...getFloatingProps()}>
        {Children.toArray(props.children).map((child: ReactElement) => cloneElement(child, {  }))}
    </ContextMenuElement>
    if (!isNested) {
        return <FloatingTree>
            {element}
        </FloatingTree>
    } else {
        return element
    }
})

export default ContextMenu