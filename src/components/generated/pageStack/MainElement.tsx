// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from "@linaria/react"
import { dark, light } from "../../../lib/generated/theme"
import { appBackgroundColorDark, appBackgroundColorLight, navBarHeight } from "../../../lib/extended/theme"

const MainElement = styled.div`
    margin-top: ${navBarHeight};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: scroll;
    ${light} {
        background-color: ${appBackgroundColorLight};
    }
    ${dark} {
        background-color: ${appBackgroundColorDark};
    }
`

export default MainElement