import { styled } from "@linaria/react"
import { margin } from "../../../lib/extended/theme"
import { flexContainer } from "../../../lib/generated/theme"

const PaddedMainContent = styled.div`
    padding: ${margin};
    height: 100%;
    ${flexContainer("column", "stretch", "flex-start")}
`

export default PaddedMainContent