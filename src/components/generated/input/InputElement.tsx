import { styled } from "@linaria/react"
import { borderThin, controlBackgroundColorDark, controlBackgroundColorLight, controlBorderColorDark, controlBorderColorLight, controlHeight, controlRadius, controlTextColorDark, controlTextColorLight } from "../../../lib/extended/theme"
import { dark, light } from "../../../lib/generated/theme"

const InputElement = styled.input`
    flex-grow: 1;
    height: ${controlHeight};
    border-radius: ${controlRadius};
    padding: 0 ${controlRadius};
    ${light} {
        border: ${borderThin} solid ${controlBorderColorLight};
        background-color: ${controlBackgroundColorLight};
        color: ${controlTextColorLight};
    }
    ${dark} {
        background-color: ${controlBackgroundColorDark};
        border: ${borderThin} solid ${controlBorderColorDark};
        color: ${controlTextColorDark};
    }
`

export default InputElement