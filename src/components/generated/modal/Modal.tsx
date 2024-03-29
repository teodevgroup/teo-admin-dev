import React from 'react'
import { FloatingFocusManager, FloatingOverlay, FloatingPortal, useClick, useDismiss, useFloating, useInteractions, useRole } from "@floating-ui/react"
import { Dispatch, ReactNode, SetStateAction } from "react"
import ModalElement from '../../extended/modal/ModalElement'

type ModalProps = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    dismissWithOutsideClick?: boolean,
    dismissWithEscKey?: boolean,
    children: ReactNode,
}

const Modal = (props: ModalProps) => {
    const { refs, context: floatingContext, floatingStyles } = useFloating({ 
        open: props.isOpen,
        onOpenChange: props.setIsOpen,
    })
    const click = useClick(floatingContext)
    const dismiss = useDismiss(floatingContext, { 
        referencePress: true,
        escapeKey: props.dismissWithEscKey,
        outsidePress: props.dismissWithOutsideClick,
        outsidePressEvent: "mousedown",
    })
    const role = useRole(floatingContext)
    const {
        getFloatingProps,
    } = useInteractions([role, dismiss, click])
    console.log(props.isOpen)
    return <FloatingPortal>
        {props.isOpen && <FloatingOverlay lockScroll>
            <FloatingFocusManager context={floatingContext}>
                <ModalElement ref={refs.setFloating} {...getFloatingProps()} style={floatingStyles}>
                    {props.children}
                </ModalElement>
            </FloatingFocusManager>
        </FloatingOverlay>}
    </FloatingPortal>  
}

export default Modal