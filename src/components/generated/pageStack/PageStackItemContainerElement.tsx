import { styled } from "@linaria/react"
import { dark, light } from "../../../lib/generated/theme"
import { appBackgroundColorDark, appBackgroundColorLight } from "../../../lib/extended/theme"

const PageStackItemContainerElement = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    ${light} {
        background-color: ${appBackgroundColorLight};
    }
    ${dark} {
        background-color: ${appBackgroundColorDark};
    }
`

export default PageStackItemContainerElement