import { styled } from "@linaria/react"
import Shimmer from "./Shimmer"
import { radius } from "../../../lib/extended/theme"

type HideContentShimmerElementProps = {
    rounded?: boolean
}

const HideContentShimmerElement = styled(Shimmer)<HideContentShimmerElementProps>`
    width: auto !important;
    height: auto !important;
    border-radius: ${({ rounded }) => rounded ? '50vh' : radius};
`

export default HideContentShimmerElement