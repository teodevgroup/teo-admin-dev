import { styled } from "@linaria/react"
import { dark, light } from "../../../lib/generated/theme"
import { subtitleTextColorDark, subtitleTextColorLight } from "../../../lib/extended/theme"

const DimmedText = styled.span`
    ${light} {
        color: ${subtitleTextColorLight};
    }
    ${dark} {
        color: ${subtitleTextColorDark};
    }
`

export default DimmedText