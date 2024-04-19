import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"
import { spacing } from "../../../lib/extended/theme"

const SelectIndicatorElement = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: ${spacing};
    ${flexContainer("row", "center", "center")}
    line-height: 0;
`

export default SelectIndicatorElement