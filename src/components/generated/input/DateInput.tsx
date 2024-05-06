import { styled } from "@linaria/react"
import Input from "../../extended/input/Input"
import { appContentBackgroundColorDark, appContentBackgroundColorLight, controlBackgroundColorDark, controlBackgroundColorLight, controlBorderColorDark, controlBorderColorLight, controlTintColorDark, controlTintColorLight, panelBoxShadow } from "../../../lib/extended/theme"
import { dark, light } from "../../../lib/generated/theme"

const DateInput = styled(Input)`
    :global() {
        @import "react-datepicker/dist/react-datepicker.css";
        .react-datepicker__input-container > input {
            width: 100%;
        }
        .react-datepicker-popper {
            z-index: 5;
        }
        .react-datepicker {
            box-shadow: ${panelBoxShadow};
            ${light} {
                border: 0.5px solid ${controlBorderColorLight} !important;
            }
            ${dark} {
                border: 0.5px solid ${controlBorderColorDark} !important;
            }
        }
        .react-datepicker__header {
            ${light} {
                background-color: ${controlBackgroundColorLight};
                border-bottom: 0.5px solid ${controlBorderColorLight};
            }
            ${dark} {
                background-color: ${controlBackgroundColorDark};
                border-bottom: 0.5px solid ${controlBorderColorDark};
            }
        }
        .react-datepicker__day--selected {
            ${light} {
                background-color: ${controlTintColorLight};
            }
            ${dark} {
                background-color: ${controlTintColorDark};
            }
        }
        .react-datepicker-popper > svg {
            ${light} {
                color: ${controlBackgroundColorLight};
            }
            ${dark} {
                color: ${controlBackgroundColorDark};
            }
        }
        .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle {
            ${light} {
                color: ${controlBackgroundColorLight} !important;
                fill: ${controlBackgroundColorLight} !important;
                stroke: ${controlBorderColorLight} !important;
            }
            ${dark} {
                color: ${controlBackgroundColorDark} !important;
                fill: ${controlBackgroundColorDark} !important;
                stroke: ${controlBorderColorDark} !important;
            }            
        }

        .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle {
            ${light} {
                color: ${appContentBackgroundColorLight} !important;
                fill: ${appContentBackgroundColorLight} !important;
                stroke: ${controlBorderColorLight} !important;
            }
            ${dark} {
                color: ${appContentBackgroundColorDark} !important;
                fill: ${appContentBackgroundColorDark} !important;
                stroke: ${controlBorderColorDark} !important;
            }
        }

    }
`

export default DateInput