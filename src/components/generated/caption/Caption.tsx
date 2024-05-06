// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { dark, light } from "../../../lib/generated/theme"
import { captionTextColorDark, captionTextColorLight } from "../../../lib/extended/theme"

const Caption = styled.div`
    font-size: 0.75rem;
    font-weight: 300;
    ${light} {
        color: ${captionTextColorLight};
    }
    ${dark} {
        color: ${captionTextColorDark};
    }
`

export default Caption