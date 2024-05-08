// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"
import { margin } from "../../../lib/extended/theme"
import SelectElement from "../select/SelectElement"

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
    ${SelectElement} {
        flex-grow: 1;
        align-self: stretch;
    }
`

export default ControlGroup