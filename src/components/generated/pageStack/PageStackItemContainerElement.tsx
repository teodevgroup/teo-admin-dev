import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"

const PageStackItemContainerElement = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    ${flexContainer("column", "stretch", "stretch")}
    flex-grow: 1;
`

export default PageStackItemContainerElement
