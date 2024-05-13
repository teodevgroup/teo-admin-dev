import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"
import { margin } from "../../../lib/extended/theme"

const ArrayFieldContainer = styled.div`
    ${flexContainer("column", "flex-start", "flex-start")}
    gap: ${margin};
`

export default ArrayFieldContainer