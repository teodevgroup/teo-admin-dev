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