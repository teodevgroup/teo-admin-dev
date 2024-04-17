import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"

const StackViewElement = styled.div`
    ${flexContainer("column", "stretch", "flex-start")}
    flex-grow: 1;
`

export default StackViewElement