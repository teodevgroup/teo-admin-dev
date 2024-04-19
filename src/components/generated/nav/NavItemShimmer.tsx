import { styled } from "@linaria/react"
import { spacing } from "../../../lib/extended/theme"
import Shimmer from "../shimmer/Shimmer"

const NavItemShimmer = styled(Shimmer)`
    padding: 1rem;
    height: 3rem;
    border-radius: 1.5rem;
    margin-bottom: ${spacing};
    width: 100%;
`

export default NavItemShimmer