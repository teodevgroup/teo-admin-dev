import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"
import { margin } from "../../../lib/extended/theme"

const ControlGroup = styled.div`
    &:not(:last-child) {
        margin-bottom: ${margin};
    }
    ${flexContainer("row", "flex-start", "flex-start")}
    & > *:not(:last-child) {
        margin-right: ${margin};
    }
    flex-grow: 1;
    align-self: stretch;
    input {
        flex-grow: 1;
        align-self: stretch;
    }
`

export default ControlGroup