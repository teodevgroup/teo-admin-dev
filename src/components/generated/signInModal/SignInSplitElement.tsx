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