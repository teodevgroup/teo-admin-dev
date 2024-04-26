import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"
import { margin } from "../../../lib/extended/theme"

const LabeledGroup = styled.div`
    ${flexContainer("column", "stretch", "stretch")}
    margin-bottom: ${margin};
`

export default LabeledGroup