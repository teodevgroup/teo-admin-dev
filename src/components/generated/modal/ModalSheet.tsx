// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { dark, flexContainer, light } from "../../../lib/generated/theme"
import { margin, paperRadius } from "../../../lib/extended/theme"

const ModalSheet = styled.div`
    width: 640px;
    max-width: calc(100vw - 4rem);
    padding: ${margin};
    ${flexContainer("column", "flex-start", "flex-start")}
    border-radius: ${paperRadius};
    ${light} {
        color: black;
        background-color: white;
    }
    ${dark} {
        color: white;
        background-color: black;
    }
`

export default ModalSheet