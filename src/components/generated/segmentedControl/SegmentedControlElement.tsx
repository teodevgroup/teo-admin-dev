// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { shallowShadow, controlBackgroundColorDark, controlBackgroundColorLight, controlHeight, controlRadius, controlTextColorDark, controlTextColorLight } from "../../../lib/extended/theme"
import { dark, flexContainer, light } from "../../../lib/generated/theme"

const SegmentedControlElement = styled.div`
    ${flexContainer("row", "center", "center")}
    height: ${controlHeight};
    border-radius: ${controlRadius};
    padding: 0 2px;
    ${light} {   
        background-color: ${controlBackgroundColorLight};
        color: ${controlTextColorLight};
    }
    ${dark} {
        background-color: ${controlBackgroundColorDark};
        color: ${controlTextColorDark};
    }
    box-shadow: ${shallowShadow};
`

export default SegmentedControlElement