// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { dark, flexContainer, light } from "../../../lib/generated/theme"
import { margin, paperRadius } from "../../../lib/extended/theme"

const SignInFormElement = styled.form`
    display: block;
    ${flexContainer("column", "center", "center")}
    padding: ${margin};
    border-radius: ${paperRadius};
    ${light} {
        background-color: white;
    }
    ${dark} {
        background-color: black;
    }
`

export default SignInFormElement