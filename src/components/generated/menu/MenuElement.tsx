// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { borderThin, radius } from "../../../lib/extended/theme"
import { dark, flexContainer, light } from "../../../lib/generated/theme"

const MenuElement = styled.div`
    padding: ${radius};
    border-radius: ${radius};
    font-size: 0.875rem;
    ${flexContainer("column", "stretch")}
    ${light} {
        background-color: white;
        border: ${borderThin} solid gray;
    }
    ${dark} {
        background-color: black;
        border: ${borderThin} solid gray;
    }
`

export default MenuElement