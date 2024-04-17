import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"

const StackViewNavBarTrailingItemsElement = styled.div`
    ${flexContainer("row", "center", "flex-end")}
    flex-grow: 1;
`

export default StackViewNavBarTrailingItemsElement