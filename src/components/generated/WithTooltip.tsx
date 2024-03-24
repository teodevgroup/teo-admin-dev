// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { ReactElement, useState, cloneElement } from 'react'
import { autoUpdate, offset, shift, useDismiss, useFloating, useFocus, useHover, useInteractions, FloatingPortal, useRole, useClientPoint } from '@floating-ui/react'

type WithTooltipProps = {
    children: ReactElement,
    tooltip: ReactElement,
}

/// Component passed into <WithTooltip> must accept ref.
const WithTooltip = (props: WithTooltipProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const { refs, floatingStyles, context } = useFloating({ 
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [offset(20), shift()],
        whileElementsMounted: autoUpdate,
        placement: "bottom-start"
    })
    const hover = useHover(context, { move: false, delay: {
        open: 2000,
        close: 0
    } })
    const focus = useFocus(context)
    const dismiss = useDismiss(context, { referencePress: true })
    const clientPoint = useClientPoint(context)
    const role = useRole(context, { role: "tooltip" })
    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
        focus,
        clientPoint,
        dismiss,
        role
    ])
    return <>
        {cloneElement(props.children, { ref: refs.setReference, ...getReferenceProps() })}
        <FloatingPortal>
            {isOpen ? cloneElement(props.tooltip, { ref: refs.setFloating, style: floatingStyles, ...getFloatingProps() }) : null}
        </FloatingPortal>
    </>
}

export default WithTooltip