// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { dark, flexContainer, light } from "../../../lib/generated/theme"
import { appContentBackgroundColorDark, appContentBackgroundColorLight, panelBoxShadow } from "../../../lib/extended/theme"

const SelectContentElement = styled.div`
    ${flexContainer("column", "stretch", "center")}
    ${light} {
        background: ${appContentBackgroundColorLight};
    }
    ${dark} {
        background: ${appContentBackgroundColorDark};
    }
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