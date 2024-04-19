import React, { ReactNode } from "react"
import HideContentShimmerElement from "./HideContentShimmerElement"
import HideContentZeroOpacityElement from "./HideContentZeroOpacityElement"

type HideContentShimmerProps = {
    children?: ReactNode | ReactNode[]
}

const HideContentShimmer = ({ children }: HideContentShimmerProps) => {
    return <HideContentShimmerElement>
        <HideContentZeroOpacityElement>
            {children}
        </HideContentZeroOpacityElement>
    </HideContentShimmerElement>
}

export default HideContentShimmer