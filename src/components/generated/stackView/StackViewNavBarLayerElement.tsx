import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"

const StackViewNavBarLayerElement = styled.div`
    ${flexContainer("row", "center", "space-between")}
    flex-grow: 1;
`

export default StackViewNavBarLayerElement