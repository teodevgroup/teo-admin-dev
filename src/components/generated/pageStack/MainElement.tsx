import { styled } from "@linaria/react"
import { dark, light, navBarHeight } from "../../../lib/generated/theme"
import { appBackgroundColorDark, appBackgroundColorLight } from "../../../lib/extended/theme"

const MainElement = styled.div`
    margin-top: ${navBarHeight};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${light} {
        background-color: ${appBackgroundColorLight};
    }
    ${dark} {
        background-color: ${appBackgroundColorDark};
    }
`

export default MainElement