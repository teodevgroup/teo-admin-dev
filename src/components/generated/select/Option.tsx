import React, { ForwardedRef, forwardRef, ComponentPropsWithRef, ReactNode, useContext } from 'react'
import OptionElement from '../../extended/select/OptionElement'
import SelectContext from './SelectContext'
import { useListItem, useMergeRefs } from '@floating-ui/react'
import { controlTintColorLight } from '../../../lib/extended/theme'

export type OptionProps<T> = ComponentPropsWithRef<'button'> & {
    value: T
    valueFormatter?: (value: any) => string
    children: any
}

const Option = forwardRef(({ value, valueFormatter = String, children, ...props }: OptionProps<any>, forwardedRef: ForwardedRef<HTMLButtonElement>) => {
    const context = useContext(SelectContext)
    const { ref, index } = useListItem({ label: valueFormatter(value) })
    return <OptionElement
        selected={context.selectedIndex === index}
        active={context.activeIndex === index}
        {...props}
        // Prevent immediate selection on touch devices when
        // pressing the ScrollArrows
        disabled={context.blockSelection}
        aria-selected={context.selectedIndex === index}
        role="option"
        tabIndex={context.activeIndex === index ? 0 : -1}
        ref={useMergeRefs([ref, forwardedRef])}
        {...context.getItemProps({
        onTouchStart() {
            context.allowSelectRef.current = true
            context.allowMouseUpRef.current = false
        },
        onKeyDown() {
            context.allowSelectRef.current = true
        },
        onClick() {
            if (context.allowSelectRef.current) {
            context.setSelectedIndex(index)
            context.onChange(value)
            context.setIsOpen(false)
            }
        },
        onMouseUp() {
            if (!context.allowMouseUpRef.current) {
                return;
            }

            if (context.allowSelectRef.current) {
                context.setSelectedIndex(index)
                context.onChange(value)
                context.setIsOpen(false)
            }

            // On touch devices, prevent the element from
            // immediately closing `onClick` by deferring it
            clearTimeout(context.selectTimeoutRef.current)
            context.selectTimeoutRef.current = setTimeout(() => {
                context.allowSelectRef.current = true
            })
        }
        })}
    >
        {children as any}
    </OptionElement>
})

export default Option