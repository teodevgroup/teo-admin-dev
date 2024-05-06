// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"
import { panelBoxShadow } from "../../../lib/extended/theme"

const SelectContentElement = styled.div`
    ${flexContainer("column", "stretch", "center")}
    background: white;
    font-size: 15px;
    box-shadow: ${panelBoxShadow};
    border-radius: 8px;
    box-sizing: border-box;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: none;
    padding: 5px;
    outline: 0;
    user-select: none;
`

export default SelectContentElement