import { styled } from "@linaria/react"
import Shimmer from "../shimmer/Shimmer"
import { size } from "../../../lib/generated/theme"
import { controlHeight, controlRadius } from "../../../lib/extended/theme"

const RoundedButtonShimmer = styled(Shimmer)`
    ${size(controlHeight)}
    border-radius: ${controlRadius};
`

export default RoundedButtonShimmer