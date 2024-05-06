// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { ReactNode } from "react"
import HideContentShimmerElement from "./HideContentShimmerElement"
import HideContentZeroOpacityElement from "./HideContentZeroOpacityElement"

type HideContentShimmerProps = {
    children?: ReactNode | ReactNode[]
    rounded?: boolean
}

const HideContentShimmer = ({ children, rounded }: HideContentShimmerProps) => {
    return <HideContentShimmerElement rounded={rounded}>
        <HideContentZeroOpacityElement>
            {children}
        </HideContentZeroOpacityElement>
    </HideContentShimmerElement>
}

export default HideContentShimmer