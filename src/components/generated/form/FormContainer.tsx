// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { appContentBackgroundColorDark, appContentBackgroundColorLight, margin, paperRadius } from "../../../lib/extended/theme"
import { dark, light } from "../../../lib/generated/theme"

const FormContainer = styled.form`
    display: block;
    flex-grow: 1;
    border-radius: ${paperRadius};
    ${light} {
        background-color: ${appContentBackgroundColorLight};
    }
    ${dark} {
        background-color: ${appContentBackgroundColorDark};
    }
`

export default FormContainer