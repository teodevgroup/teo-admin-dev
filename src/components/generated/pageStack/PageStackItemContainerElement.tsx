import { styled } from "@linaria/react"
import { dark, flexContainer, light } from "../../../lib/generated/theme"
import { appBackgroundColorDark, appBackgroundColorLight } from "../../../lib/extended/theme"

const PageStackItemContainerElement = styled.div`
    ${flexContainer("column", "stretch", "stretch")}
    flex-grow: 1;
    ${light} {
        background-color: ${appBackgroundColorLight};
    }
    ${dark} {
        background-color: ${appBackgroundColorDark};
    }
`

export default PageStackItemContainerElement
