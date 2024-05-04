// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { panelBoxShadow, radius } from "../../../lib/extended/theme"
import { dark, flexContainer, light, zIndexMenu } from "../../../lib/generated/theme"

const MenuElement = styled.div`
    padding: ${radius};
    border-radius: ${radius};
    font-size: 0.875rem;
    -webkit-backdrop-filter: 16px;
    backdrop-filter: 16px;
    ${flexContainer("column", "stretch")}
    ${light} {
        background-color: white;
    }
    ${dark} {
        background-color: black;
    }
    z-index: ${zIndexMenu};
    box-shadow: ${panelBoxShadow};
`

export default MenuElement