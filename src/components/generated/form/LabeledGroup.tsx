// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"
import { margin } from "../../../lib/extended/theme"
import { FormFieldWidth } from "../../../lib/generated/preferences"

export type LabeledGroupProps = {
    width?: FormFieldWidth
}

const LabeledGroup = styled.div<LabeledGroupProps>`
    ${flexContainer("column", "stretch", "stretch")}
    margin-bottom: ${margin};
    padding-right: ${margin};
    width: ${({ width }) => (width === 'full' || !width) ? '100%' : (width === 'half' ? '50%' : '33.333%')}
`

export default LabeledGroup