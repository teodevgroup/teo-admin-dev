// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { clearButton, dark, light } from "../../../lib/generated/theme"
import { controlTintColorDark, controlTintColorLight, spacing } from "../../../lib/extended/theme"

export type OptionElementProps = {
    active: boolean
    selected: boolean
}

const OptionElement = styled.button<OptionElementProps>`
    ${clearButton}
    flex-grow: 1;
    height: calc(1rem + ${spacing});
    ${light} {
        background: ${({ active }) => active ? controlTintColorLight : "transparent"};
        color: ${({ active }) => active ? "white" : "currentColor"};
    }
    ${dark} {
        background: ${({ active }) => active ? controlTintColorDark : "transparent"};
        color: ${({ active }) => active ? "white" : "currentColor"};
    }
    padding: 0 ${spacing};
    font-weight: ${({ selected }) => selected ? "bold" : "normal"};
    border-radius: 6px;
`

export default OptionElement