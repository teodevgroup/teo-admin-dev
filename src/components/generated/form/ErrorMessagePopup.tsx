import { styled } from "@linaria/react"
import { appBackgroundColorDark, appContentBackgroundColorDark, appContentBackgroundColorLight, controlBorderColorDark, controlBorderColorLight, panelBoxShadow, paperRadius } from "../../../lib/extended/theme"
import { dark, light } from "../../../lib/generated/theme"

const ErrorMessagePopup = styled.div`
    ${light} {
        background-color: ${appContentBackgroundColorLight};
        border: 1px solid ${controlBorderColorLight};
    }
    ${dark} {
        background-color: ${appBackgroundColorDark};
        border: 1px solid ${controlBorderColorDark};
    }
    font-size: 0.75rem;
    padding: 0.5rem;
    border-radius: ${paperRadius};
    background-clip: padding-box;
    svg:last-child {
        path:first-child {
            ${light} {
                stroke: ${controlBorderColorLight} !important;
            }
            ${dark} {
                stroke: ${controlBorderColorDark} !important;
            }
        }
        path:nth-child(2) {
            stroke-width: 1px;
            ${light} {
                stroke: ${appContentBackgroundColorLight} !important;
            }
            ${dark} {
                stroke: ${appContentBackgroundColorDark} !important;
            }
        }
    }
`

export default ErrorMessagePopup