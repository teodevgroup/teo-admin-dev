// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { useContext, useEffect, useRef, useState } from "react"
import MenuContext, { MenuContextProps } from "./MenuContext"
import { autoUpdate, flip, offset, useFloating, useFloatingNodeId, useFloatingParentNodeId, useFloatingTree, shift, useHover, safePolygon, useDismiss, useRole, useListNavigation, useTypeahead, useInteractions, useClick } from "@floating-ui/react"
import { setShouldDisplay } from "./shouldDisplayContextMenu"

const useMenuOwner: () => MenuContextProps = () => {
    const [isOpen, rawSetIsOpen] = useState(false)
    const setIsOpen = (value: boolean) => {
        if (!value) {
            setShouldDisplay(true)
        }
        rawSetIsOpen(value)
    }
    const [hasFocusInside, setHasFocusInside] = useState(false)
    const parentMenuContext = useContext(MenuContext)
    const tree = useFloatingTree()
    const parentId = useFloatingParentNodeId()
    const nodeId = useFloatingNodeId()
    const isNested = parentId != null
    useEffect(() => {
        const dismissMenu = () => setIsOpen(false)
        document.addEventListener("click", dismissMenu)
        return () => {
            document.removeEventListener("click", dismissMenu)
        }
    }, [])
    const { refs, floatingStyles, context: floatingContext } = useFloating({ 
        nodeId,
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [
            offset(isNested ? { mainAxis: 0, alignmentAxis: -4 } : { mainAxis: -8, alignmentAxis: 0 }),
            flip({
              fallbackPlacements: ["left-start"]
            }),
            shift({ padding: 10 })
        ],
        placement: isNested ? "right-start" : "bottom-start",
        strategy: isNested ? "fixed" : undefined,
        whileElementsMounted: autoUpdate
    })
    const hover = useHover(floatingContext, {
        enabled: true,
        delay: { open: 75 },
        handleClose: safePolygon({ blockPointerEvents: true })
    })
    const click = useClick(floatingContext, {
        event: "mousedown",
        toggle: true,
        ignoreMouse: false
    })
    const dismiss = useDismiss(floatingContext, { referencePress: true })
    const role = useRole(floatingContext, { role: "menu" })
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const listItemsRef = useRef<Array<HTMLButtonElement | null>>([])
    const labelsRef = useRef<Array<string | null>>([])
    const listNavigation = useListNavigation(floatingContext, {
        listRef: listItemsRef,
        onNavigate: setActiveIndex,
        nested: isNested,
        activeIndex
    })
    const typeahead = useTypeahead(floatingContext, {
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
        if (!tree) { return }
        function handleTreeClick() {
            if (parentMenuContext.setIsOpen) {
                parentMenuContext.setIsOpen(false)
            }
        }
    
        function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
            if (event.nodeId !== nodeId && event.parentId === parentId) {
                if (parentMenuContext.setIsOpen) {
                    parentMenuContext.setIsOpen(false)
                }
            }
        }
    
        tree.events.on("click", handleTreeClick);
        tree.events.on("menuopen", onSubMenuOpen);
    
        return () => {
          tree.events.off("click", handleTreeClick);
          tree.events.off("menuopen", onSubMenuOpen);
        };
    }, [tree, nodeId, parentId])
    useEffect(() => {
        if (parentMenuContext.isOpen && tree) {
            tree.events.emit("menuopen", { parentId, nodeId })
        }
    }, [tree, parentMenuContext.isOpen, nodeId, parentId])
    return {
        isOpen,
        setIsOpen,
        getReferenceProps,
        getFloatingProps,
        getItemProps,
        refs,
        floatingStyles,
        listItemsRef,
        labelsRef,
        activeIndex,
        setActiveIndex,
        tree,
        nodeId,
        parentId,
        isNested,
        hasFocusInside,
        setHasFocusInside,
        floatingContext,
    }
}

export default useMenuOwner

