// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { borderThin, controlBorderColorDark, controlBorderColorLight, spacing } from "../../../lib/extended/theme"
import { dark, light } from "../../../lib/generated/theme"

const Th = styled.th`
    ${light} {
        border: ${borderThin} solid ${controlBorderColorLight};
    }
    ${dark} {
        border: ${borderThin} solid ${controlBorderColorDark};
    }
    text-align: left;
    padding: ${spacing};
    font-size: 0.875rem;
`

export default Th