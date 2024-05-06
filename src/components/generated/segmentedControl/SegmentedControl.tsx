// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { cloneElement, ReactElement } from "react"
import SegmentedControlElement from "./SegmentedControlElement"

export type SegmentedControlProps = {
    index: number
    setIndex: (index: number) => void
    children: ReactElement[]
}

const SegmentedControl = ({ index, setIndex, children }: SegmentedControlProps) => {
    return <SegmentedControlElement>
        {children.map((child, i) => cloneElement(child, { 
            selected: index === i,
            onClick: (e: MouseEvent) => {
                e.preventDefault()
                setIndex(i)
            }
        }))}
    </SegmentedControlElement>
}

export default SegmentedControl