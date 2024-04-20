// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { subtitleTextColorDark, subtitleTextColorLight } from "../../../lib/extended/theme"
import { dark, light } from "../../../lib/generated/theme"

const ModalSheetDescription = styled.div`
    font-size: 0.875rem;
    line-height: 1.2;
    ${light} {
        color: ${subtitleTextColorLight};
    }
    ${dark} {
        color: ${subtitleTextColorDark};
    }
`

export default ModalSheetDescription