import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"

const StatusBarPageItemsLayerElement = styled.div`
    ${flexContainer("row", "center", "center")}
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`

export default StatusBarPageItemsLayerElement