import { styled } from "@linaria/react"
import { clearButton } from "../../../lib/generated/theme"

const StatusBarButtonElement = styled.button`
    ${clearButton}
    line-height: 0;
    font-size: 1.25rem;
`

export default StatusBarButtonElement