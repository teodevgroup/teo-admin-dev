import React, { ReactNode, Suspense } from "react"
import HideContentShimmer from "./HideContentShimmer"
import { useAccount } from "../../../lib/generated/signIn"

type HideContentShimmerIfNotSignedInProps = {
    children?: ReactNode | ReactNode[]
}

const NotSignedInWrapper = ({ children }: HideContentShimmerIfNotSignedInProps) => {
    let _ = useAccount()
    return children
}

const HideContentShimmerIfNotSignedIn = ({ children }: HideContentShimmerIfNotSignedInProps) => {
    return <Suspense fallback={<HideContentShimmer>{children}</HideContentShimmer>}>
        <NotSignedInWrapper>{children}</NotSignedInWrapper>
    </Suspense>
}

export default HideContentShimmerIfNotSignedIn