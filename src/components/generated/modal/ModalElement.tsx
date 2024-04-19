// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { flexContainer, zIndexModal } from "../../../lib/generated/theme"
import { panelBoxShadow, paperRadius } from "../../../lib/extended/theme"

const ModalElement = styled.div`
    ${flexContainer("column", "flex-start", "center")}
    &:focus {
        outline: none;
    }
    box-shadow: ${panelBoxShadow};
    border-radius: ${paperRadius};
    z-index: ${zIndexModal};
    overflow: hidden;
`

export default ModalElement