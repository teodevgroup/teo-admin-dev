// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { ReactElement, useState, cloneElement, useEffect } from 'react'
import { FloatingPortal } from '@floating-ui/react'

type WithContextMenuProps = {
    children: ReactElement,
    contextMenu: any,
}

/// Component passed into <WithContextMenu> must accept ref.
const WithContextMenu = (props: WithContextMenuProps) => {
    const [mouseEvent, setMouseEvent] = useState<MouseEvent>()
    const [isOpen, setIsOpen] = useState(false)
    const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault()
        setMouseEvent(e)
        setIsOpen(true)
    }
    useEffect(() => {
        const dismissMenu = () => setIsOpen(false)
        document.addEventListener("click", dismissMenu)
        return () => {
            document.removeEventListener("click", dismissMenu)
        }
    }, [])
    const menuContext = {
        mouseEvent,
        isOpen,
        setIsOpen,
    }
    return <>
        {cloneElement(props.children, { onContextMenu: handleContextMenu })}
        <FloatingPortal>
            {isOpen ? cloneElement(props.contextMenu as any, { menuContext }) : null}
        </FloatingPortal>
    </>
}

export default WithContextMenu