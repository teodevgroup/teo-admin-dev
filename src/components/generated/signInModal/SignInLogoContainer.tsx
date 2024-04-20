import { styled } from "@linaria/react"
import { dark, flexContainer, light } from "../../../lib/generated/theme"
import { tintColorDark, tintColorLight } from "../../../lib/extended/theme"

const SignInLogoContainer = styled.div`
    ${flexContainer("column", "center", "center")}
    width: 280px;
    ${light} {
        color: ${tintColorLight};
    }
    ${dark} {
        color: ${tintColorDark};
    }
`

export default SignInLogoContainer