// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { dark, flexContainer, light } from "../../../lib/generated/theme"
import { appBackgroundColorDark, appBackgroundColorLight } from "../../../lib/extended/theme"

const SignInSplitElement = styled.div`
    ${flexContainer("row", "center", "center")}
    ${light} {
        background-color: ${appBackgroundColorLight};
    }
    ${dark} {
        background-color: ${appBackgroundColorDark};
    }
`

export default SignInSplitElement