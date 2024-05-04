import { styled } from "@linaria/react"
import { radius, spacing } from "../../../lib/extended/theme"
import Shimmer from "../shimmer/Shimmer"

const NavItemShimmer = styled(Shimmer)`
    padding: 1rem;
    height: calc(3rem - ${spacing});
    border-radius: ${radius};
    margin-bottom: ${spacing};
    width: 100%;
`

export default NavItemShimmer