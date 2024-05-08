// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { borderThin, controlBorderColorDark, controlBorderColorLight, spacing } from "../../../lib/extended/theme"
import { dark, light } from "../../../lib/generated/theme"

const Td = styled.td`
    ${light} {
        border: ${borderThin} solid ${controlBorderColorLight};
    }
    ${dark} {
        border: ${borderThin} solid ${controlBorderColorDark};
    }
    padding: ${spacing};
    font-size: 0.875rem;
    white-space: nowrap;
`

export default Td