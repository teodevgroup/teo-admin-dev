// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { styled } from '@linaria/react'
import { dark, light } from '../../../lib/generated/theme'
import { appBackgroundColorDark, appBackgroundColorLight } from '../../../lib/extended/theme'

const AppRootElement = styled.div`
    :global() {
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
        html {
            overscroll-behavior: none; // for Safari
        }
        body {
            margin: 0;
            font-family: Noto Sans, sans-serif;
            overscroll-behavior: none; // for Chrome
        }
        * {
            box-sizing: border-box;
        }
    }
    ${light} {
        :global() {
            body {
                background-color: ${appBackgroundColorLight};
            }
        }
    }
    ${dark} {
        :global() {
            body {
                background-color: ${appBackgroundColorDark};
            }
        }
    }
    min-height: 100vh;
    display: flex;
`

export default AppRootElement