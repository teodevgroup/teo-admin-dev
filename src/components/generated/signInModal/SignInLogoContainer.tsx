// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { dark, flexContainer, light } from "../../../lib/generated/theme"
import { appBackgroundColorDark, appBackgroundColorLight, tintColorDark, tintColorLight } from "../../../lib/extended/theme"

const SignInLogoContainer = styled.div`
    ${flexContainer("column", "center", "center")}
    width: 280px;
    height: 100%;
    ${light} {
        color: ${tintColorLight};
        background-color: ${appBackgroundColorLight};
    }
    ${dark} {
        color: ${tintColorDark};
        background-color: ${appBackgroundColorDark};
    }
`

export default SignInLogoContainer