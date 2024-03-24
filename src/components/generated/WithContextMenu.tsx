// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { ReactElement, useState, cloneElement, useEffect } from 'react'
import { offset, shift, useDismiss, useFloating, useInteractions, FloatingPortal, useRole } from '@floating-ui/react'

type WithContextMenuProps = {
    children: ReactElement,
    contextMenu: ReactElement,
}

/// Component passed into <WithContextMenu> must accept ref.
const WithContextMenu = (props: WithContextMenuProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const { refs, floatingStyles, context } = useFloating({ 
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [offset(0), shift()],
        placement: "bottom-start",
        strategy: "fixed"
    })
    const dismiss = useDismiss(context, { referencePress: true })
    const role = useRole(context, { role: "menu" })
    const { getReferenceProps, getFloatingProps } = useInteractions([
        dismiss,
        role
    ])
    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault()
            refs.setPositionReference({
                getBoundingClientRect() {
                  return {
                    width: 0,
                    height: 0,
                    x: e.clientX,
                    y: e.clientY,
                    top: e.clientY,
                    right: e.clientX,
                    bottom: e.clientY,
                    left: e.clientX
                  };
                }
              });
            setIsOpen(true)
        }
        const dismissMenu = () => setIsOpen(false)
        if (refs.reference.current) {
            (refs.reference.current as any).addEventListener("contextmenu", handleContextMenu)
        }
        document.addEventListener("mousedown", dismissMenu)
        return () => {
            if (refs.reference.current) {
                (refs.reference.current as any).removeEventListener("contextmenu", handleContextMenu)
            }
            document.removeEventListener("mousedown", dismissMenu)
        }
    }, [])
    return <>
        {cloneElement(props.children, { ref: refs.setReference, ...getReferenceProps() })}
        <FloatingPortal>
            {isOpen ? cloneElement(props.contextMenu, { ref: refs.setFloating, style: floatingStyles, ...getFloatingProps() }) : null}
        </FloatingPortal>
    </>
}

export default WithContextMenu