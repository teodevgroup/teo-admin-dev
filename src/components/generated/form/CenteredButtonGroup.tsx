// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"
import { margin } from "../../../lib/extended/theme"

const CenteredButtonGroup = styled.div`
    ${flexContainer("row", "center", "center")}
    margin-bottom: ${margin};
    padding-right: ${margin};
    button:not(:last-child) {
        margin-right: ${margin};
    }
    width: 100%;
    flex-grow: 1;
`

export default CenteredButtonGroup