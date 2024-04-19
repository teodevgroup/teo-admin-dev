import { styled } from "@linaria/react"
import { margin, paperRadius } from "../../../lib/extended/theme"
import { dark, light } from "../../../lib/generated/theme"

const SignInFormWrapper = styled.div`
    padding: ${margin};
    ${light} {
        background-color: white;
    }
    ${dark} {
        background-color: black;
    }
`

export default SignInFormWrapper