import { styled } from "@linaria/react"
import { controlRadius } from "../../../lib/extended/theme"

const Label = styled.label`
    display: block;
    font-size: 0.875rem;
    font-weight: bold;
    padding-left: ${controlRadius};
    margin-bottom: 4px;
    cursor: default;
    user-select: none;
`

export default Label