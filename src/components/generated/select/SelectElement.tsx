// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"
import ButtonElement from "../button/ButtonElement"
import { margin } from "../../../lib/extended/theme"

const SelectElement = styled(ButtonElement)`
    position: relative;
    ${flexContainer("row", "center", "flex-start")}
    padding-right: calc((1.25rem + ${margin}) / 2 + 0.5rem);
`

export default SelectElement