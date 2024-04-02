// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { borderThin, radius } from "../../../lib/extended/theme"
import { dark, light } from "../../../lib/generated/theme"

const Tooltip = styled.div`
    padding: ${radius};
    border-radius: ${radius};
    font-size: 0.75rem;
    ${light} {
        background-color: #FFC700;
        border: ${borderThin} solid orange;
    }
    ${dark} {
        background-color: #FFC700;
        border: ${borderThin} solid orange;
    }
`

export default Tooltip