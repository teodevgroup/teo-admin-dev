import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"
import SelectElement from "../select/SelectElement"

const SignInLineGroup = styled.div`
    ${flexContainer("row", "center", "center")}
    & > *:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    & > *:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    input {
        z-index: 4;
    }
    ${SelectElement} {
        width: 40%;
    }
`

export default SignInLineGroup