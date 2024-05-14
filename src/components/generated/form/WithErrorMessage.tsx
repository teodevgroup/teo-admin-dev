import { arrow, autoUpdate, flip, FloatingArrow, FloatingPortal, offset, shift, useFloating, useInteractions } from '@floating-ui/react'
import React, { ReactElement, ReactNode, useRef } from 'react'
import ErrorMessagePopup from './ErrorMessagePopup'
import ErrorMessageControlWrapper from './ErrorMessageControlWrapper'

export type WithErrorMessageProps = {
    errorMessage: ReactNode
    children: ReactElement
    display?: boolean
}

const WithErrorMessage = ({ errorMessage, children, display }: WithErrorMessageProps) => {
    const arrowRef = useRef(null)
    const { context, floatingStyles, refs } = useFloating({
        open: display,
        onOpenChange: () => {},
        placement: "top",
        middleware: [offset(20), flip(), shift(), arrow({
            element: arrowRef,
        })],
        whileElementsMounted: autoUpdate,
    })
    const {
        getReferenceProps,
        getFloatingProps,
    } = useInteractions([])
    return <>
        <ErrorMessageControlWrapper ref={refs.setReference} {...getReferenceProps()}>
            {children}
        </ErrorMessageControlWrapper>
        <FloatingPortal>
            {display ? <>
                <ErrorMessagePopup ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
                    {errorMessage}
                    <FloatingArrow ref={arrowRef} context={context} stroke="gray" strokeWidth={1} fill='white' />                    
                </ErrorMessagePopup>
            </> : null}
        </FloatingPortal>        
    </>
}

export default WithErrorMessage