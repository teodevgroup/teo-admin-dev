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
`

export default Td