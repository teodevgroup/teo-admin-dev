// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { dark, light } from "../../../lib/generated/theme"
import { tintColorDark, tintColorLight } from "../../../lib/extended/theme"

const Link = styled.a`
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    &:active {
        text-decoration: underline;
    }
    ${light} {
        color: ${tintColorLight};
    }
    ${dark} {
        color: ${tintColorDark};
    }
`

export default Link