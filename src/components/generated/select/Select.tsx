import React, { ForwardedRef, forwardRef, PropsWithRef, useEffect, useRef, useState } from 'react'
import SelectElement from "../../extended/select/SelectElement"
import { inner, SideObject, useFloating, autoUpdate, offset, shift, flip, size, useInteractions, useClick, useDismiss, useRole, useInnerOffset, useListNavigation, useTypeahead, useMergeRefs, FloatingPortal, FloatingOverlay, FloatingFocusManager, FloatingList } from '@floating-ui/react'
import { flushSync } from 'react-dom'
import mergeProps from 'merge-props'
import SelectContentElement from '../../extended/select/SelectContentElement'
import SelectScrollArrow from './SelectScrollArrow'
import SelectPanelElement from '../../extended/select/SelectPanelElement'
import SelectContext from './selectContext'

type SelectProps<T> = PropsWithRef<HTMLButtonElement> & {
    value: T
    onChange: (newValue: T) => void
    allowsNull?: boolean
    valueFormatter?: (value: T) => string
}

const Select = forwardRef<HTMLButtonElement, SelectProps<any>>(({ value, onChange, allowsNull, children, valueFormatter = String, ...props }: SelectProps<any>, forwardedRef: ForwardedRef<HTMLButtonElement>) => {
    const listRef = useRef<Array<HTMLButtonElement | null>>([])
    const listContentRef = useRef<Array<string | null>>([])
    const overflowRef = useRef<SideObject>(null)
    const allowSelectRef = useRef(false)
    const allowMouseUpRef = useRef(true)
    const selectTimeoutRef = useRef<any>()
    const scrollRef = useRef<HTMLDivElement>(null)
    
    const [isOpen, setIsOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const [fallback, setFallback] = useState(false)
    const [innerOffset, setInnerOffset] = useState(0)
    const [touch, setTouch] = useState(false)
    const [scrollTop, setScrollTop] = useState(0)
    const [blockSelection, setBlockSelection] = useState(false)
    
    if (!isOpen) {
        if (innerOffset !== 0) { 
            setInnerOffset(0)
        }
        if (fallback) {
            setFallback(false)
        }
        if (blockSelection) { 
            setBlockSelection(false)
        }
    }
    
    const { refs, floatingStyles, context: floatingContext, isPositioned } = useFloating({
        placement: "bottom-start",
        open: isOpen,
        onOpenChange: setIsOpen,
        whileElementsMounted: autoUpdate,
        transform: false,
        middleware: fallback
        ? [
            offset(5),
            touch
            ? shift({ crossAxis: true, padding: 10 })
            : flip({ padding: 10 }),
            size({
                apply({ availableHeight }) {
                    Object.assign(scrollRef.current?.style ?? {}, {
                        maxHeight: `${availableHeight}px`
                    });
                },
                padding: 10
            })
        ]
        : [
            inner({
                listRef,
                overflowRef,
                scrollRef,
                index: selectedIndex ?? 0,
                offset: innerOffset,
                onFallbackChange: setFallback,
                padding: 10,
                minItemsVisible: touch ? 8 : 4,
                referenceOverflowThreshold: 20
            }),
            offset({ crossAxis: -4 })
        ]
    })
    
    const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
        [
            useClick(floatingContext, { event: "mousedown" }),
            useDismiss(floatingContext),
            useRole(floatingContext, { role: "listbox" }),
            useInnerOffset(floatingContext, {
                enabled: !fallback,
                onChange: setInnerOffset,
                overflowRef,
                scrollRef
            }),
            useListNavigation(floatingContext, {
                listRef,
                activeIndex,
                selectedIndex,
                onNavigate: setActiveIndex
            }),
            useTypeahead(floatingContext, {
                listRef: listContentRef,
                activeIndex,
                onMatch: isOpen ? setActiveIndex : setSelectedIndex
            })
        ]
    )
    
    useEffect(() => {
        if (isOpen) {
            selectTimeoutRef.current = setTimeout(() => {
                allowSelectRef.current = true;
            }, 300)
            
            return () => {
                clearTimeout(selectTimeoutRef.current);
            }
        } else {
            allowSelectRef.current = false
            allowMouseUpRef.current = true
        }
    }, [isOpen])
    
    const handleArrowScroll = (amount: number) => {
        if (fallback) {
            if (scrollRef.current) {
                scrollRef.current.scrollTop -= amount;
                flushSync(() => setScrollTop(scrollRef.current?.scrollTop ?? 0))
            }
        } else {
            flushSync(() => setInnerOffset((value) => value - amount))
        }
    }

    const handleArrowHide = () => {
        if (touch) {
            clearTimeout(selectTimeoutRef.current)
            setBlockSelection(true)
            selectTimeoutRef.current = setTimeout(() => {
                setBlockSelection(false)
            }, 400)
        }
    }
    
    return <>
        <SelectElement ref={useMergeRefs([forwardedRef, refs.setReference])} {...getReferenceProps(mergeProps(props, {
            onTouchStart() {
                setTouch(true)
            },
            onPointerMove(e: any) {
                if (e.pointerType !== "touch") {
                    setTouch(false)
                }
            }
        }) as any)}>
            <span>{valueFormatter(value)}</span>
        </SelectElement>
        {isOpen && <FloatingList elementsRef={listRef} labelsRef={listContentRef}>
            <SelectContext.Provider value={{
                isOpen,
                setIsOpen,
                blockSelection,
                setBlockSelection,
                selectedIndex,
                setSelectedIndex,
                activeIndex,
                setActiveIndex,
                getItemProps,
                allowSelectRef,
                allowMouseUpRef,
                selectTimeoutRef,
            }}>
                <FloatingPortal>
                    <FloatingOverlay lockScroll={!touch} style={{ zIndex: 1 }}>
                        <FloatingFocusManager context={floatingContext} modal={false}>
                            <SelectPanelElement ref={refs.setFloating} style={{ ...floatingStyles, outline: "0" }}>
                                <SelectContentElement ref={scrollRef} {...getFloatingProps({
                                    onScroll({ currentTarget }) {
                                        flushSync(() => setScrollTop(currentTarget.scrollTop))
                                    },
                                    onContextMenu(e) {
                                        e.preventDefault()
                                    }
                                })}>
                                    {children as any}
                                </SelectContentElement>
                                {(["up", "down"] as Array<"up" | "down">).map((dir) => (
                                    <SelectScrollArrow
                                        key={dir}
                                        dir={dir}
                                        scrollTop={scrollTop}
                                        scrollRef={scrollRef}
                                        innerOffset={innerOffset}
                                        isPositioned={isPositioned}
                                        onScroll={handleArrowScroll}
                                        onHide={handleArrowHide}
                                    />
                                ))}
                            </SelectPanelElement>
                        </FloatingFocusManager>
                    </FloatingOverlay>
                </FloatingPortal>
            </SelectContext.Provider>
        </FloatingList>}
    </>
})

export default Select