import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { ComponentPropsWithRef } from "react"
import ContextMenuElement from './ContextMenuElement'
import { autoUpdate, flip, offset, shift, useDismiss, useFloating, useInteractions, useListNavigation, useRole, useTypeahead } from '@floating-ui/react'

interface ContextMenuOwnerProps {
    menuContext?: {
        mouseEvent?: MouseEvent
        isOpen: boolean
        setIsOpen: (open: boolean) => void
    }
}

type ContextMenuProps = ComponentPropsWithRef<'div'> & ContextMenuOwnerProps

const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>((props: ContextMenuProps, ref) => {
    const { refs, floatingStyles, context } = useFloating({ 
        open: props.menuContext?.isOpen,
        onOpenChange: props.menuContext?.setIsOpen,
        middleware: [
            offset({ mainAxis: 0, alignmentAxis: -8 }),
            flip({
              fallbackPlacements: ["left-start"]
            }),
            shift({ padding: 10 })
        ],
        placement: "right-start",
        strategy: "fixed",
        whileElementsMounted: autoUpdate
    })
    
    const dismiss = useDismiss(context, { referencePress: true })
    const role = useRole(context, { role: "menu" })
    const { getFloatingProps } = useInteractions([
        dismiss,
        role
    ])
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const listItemsRef = useRef<Array<HTMLButtonElement | null>>([])
    const listNavigation = useListNavigation(context, {
        listRef: listItemsRef,
        onNavigate: setActiveIndex,
        activeIndex
    })
    // const typeahead = useTypeahead(context, {
    //     listRef: labelsRef,
    //     onMatch: setActiveIndex,
    //     activeIndex
    //   });
    
    //   const {
    //     getReferenceProps,
    //     getFloatingProps,
    //     getItemProps
    //   } = useInteractions([hover, click, role, dismiss, listNavigation, typeahead]);
    useEffect(() => {
        refs.setPositionReference({
            getBoundingClientRect() {
                return {
                    width: 0,
                    height: 0,
                    x: props.menuContext?.mouseEvent?.clientX ?? 0,
                    y: props.menuContext?.mouseEvent?.clientY ?? 0,
                    top: props.menuContext?.mouseEvent?.clientY ?? 0,
                    right: props.menuContext?.mouseEvent?.clientX ?? 0,
                    bottom: props.menuContext?.mouseEvent?.clientY ?? 0,
                    left: props.menuContext?.mouseEvent?.clientX ?? 0
                }                
            }
        })
    }, [props.menuContext?.mouseEvent])
    return <ContextMenuElement ref={refs.setFloating} style={floatingStyles} {...props} {...getFloatingProps()} />
})

export default ContextMenu