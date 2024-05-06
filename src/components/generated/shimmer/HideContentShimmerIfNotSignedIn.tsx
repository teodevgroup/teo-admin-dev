// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { ReactNode, Suspense } from "react"
import HideContentShimmer from "./HideContentShimmer"
import { useAccount } from "../../../lib/generated/signIn"

type HideContentShimmerIfNotSignedInProps = {
    children?: ReactNode | ReactNode[]
    rounded?: boolean
}

const NotSignedInWrapper = ({ children }: HideContentShimmerIfNotSignedInProps) => {
    let _ = useAccount()
    return children
}

const HideContentShimmerIfNotSignedIn = ({ children, rounded }: HideContentShimmerIfNotSignedInProps) => {
    return <Suspense fallback={<HideContentShimmer rounded={rounded}>{children}</HideContentShimmer>}>
        <NotSignedInWrapper>{children}</NotSignedInWrapper>
    </Suspense>
}

export default HideContentShimmerIfNotSignedIn