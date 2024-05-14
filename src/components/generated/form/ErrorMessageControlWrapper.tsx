import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"

const ErrorMessageControlWrapper = styled.div`
    flex-grow: 1;
    width: 100%;
    ${flexContainer("column", "stretch", "stretch")}
`

export default ErrorMessageControlWrapper