// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { borderThin, controlActiveBackGroundColorDark, controlActiveBackgroundColorLight, controlBorderColorDark, controlBorderColorLight, controlHintBackgroundColorDark, controlHintBackgroundColorLight, spacing } from "../../../lib/extended/theme"
import { dark, light } from "../../../lib/generated/theme"

const Tr = styled.tr`
    ${light} {
        &:hover td {
            background-color: ${controlHintBackgroundColorLight};
        }
    }
    ${dark} {
        &:hover td {
            background-color: ${controlHintBackgroundColorDark};
        }
    }
`

export default Tr