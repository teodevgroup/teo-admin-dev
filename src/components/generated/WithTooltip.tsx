import React, { ReactElement, ReactNode, cloneElement, useState } from 'react'
import { autoUpdate, flip, offset, shift, useDismiss, useFloating, useFocus, useHover, useInteractions, FloatingPortal, useRole } from '@floating-ui/react'

type WithTooltipProps = {
    children: ReactElement,
    tooltip: ReactElement,
}

const WithTooltip = (props: WithTooltipProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const { refs, floatingStyles, context } = useFloating({ 
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [offset(10), flip(), shift()],
        whileElementsMounted: autoUpdate,
        placement: "bottom-end"
    })
    const hover = useHover(context)
    const focus = useFocus(context)
    const dismiss = useDismiss(context)
    const role = useRole(context, { role: "tooltip" })
    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
        focus,
        dismiss,
        role
    ])
    return <div>
        <div ref={refs.setReference} {...getReferenceProps()}>button</div>
        <FloatingPortal>
            <div ref={refs.setFloating} {...getFloatingProps()}>float</div>
        </FloatingPortal>
    </div>
    return <>
        {cloneElement(props.children, { ref: refs.setReference, ...getReferenceProps() })}
        <FloatingPortal>
            {isOpen ? cloneElement(props.tooltip, { ref: refs.setFloating, style: floatingStyles, ...getFloatingProps() }): null}
        </FloatingPortal>
    </>
}

export default WithTooltip