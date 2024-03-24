import React, { ReactElement, useState } from 'react'
import { autoUpdate, flip, offset, shift, useDismiss, useFloating, useFocus, useHover, useInteractions, FloatingPortal, useRole, useClientPoint } from '@floating-ui/react'

type WithTooltipProps = {
    children: (props: any) => ReactElement,
    tooltip: (props: any) => ReactElement,
}

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
        {props.children({ ref: refs.setReference, ...getReferenceProps() })}
        <FloatingPortal>
            {isOpen ? props.tooltip({ ref: refs.setFloating, style: floatingStyles, ...getFloatingProps() }) : null}
        </FloatingPortal>
    </>
}

export default WithTooltip