import { styled } from "@linaria/react"
import { dark, light } from "../../../lib/generated/theme"
import { controlBackgroundColorDark, controlBackgroundColorLight, controlTextColorLight } from "../../../lib/extended/theme"

const DimmedText = styled.span`
    ${light} {
        color: ${controlBackgroundColorLight};
    }
    ${dark} {
        color: ${controlBackgroundColorDark};
    }
`

export default DimmedText