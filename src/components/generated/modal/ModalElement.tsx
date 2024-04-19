// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { flexContainer, zIndexMenu, zIndexModal } from "../../../lib/generated/theme"
import { panelBoxShadow, paperRadius } from "../../../lib/extended/theme"

const ModalElement = styled.div`
    ${flexContainer("row", "center", "center")}
    &:focus {
        outline: none;
    }
    box-shadow: ${panelBoxShadow};
    border-radius: ${paperRadius};
    z-index: ${zIndexModal};
`

export default ModalElement