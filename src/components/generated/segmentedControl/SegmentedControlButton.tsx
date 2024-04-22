import { styled } from "@linaria/react"
import { dark, light, shallowShadow, transitionShort } from "../../../lib/generated/theme"
import { borderThin, controlActiveBackGroundColorDark, controlActiveBackgroundColorLight, controlBackgroundColorDark, controlBackgroundColorLight, controlBorderColorDark, controlBorderColorLight, controlHintBackgroundColorDark, controlHintBackgroundColorLight, controlTextColorDark, controlTextColorLight } from "../../../lib/extended/theme"

export type SegmentedControlButtonProps = {
    selected?: boolean
}

const SegmentedControlButton = styled.button<SegmentedControlButtonProps>`
    flex: 1;
    height: calc(1.25rem + 12px);
    border-radius: calc((1.25rem + 12px) / 2);
    padding: 0 calc((1.25rem + 12px) / 2);
    &:hover {
        ${light} {
            background-color: ${({ selected }) => selected ? controlHintBackgroundColorLight : "transparent"};
        }
        ${dark} {
            background-color: ${({ selected }) => selected ? controlHintBackgroundColorDark : "transparent"};
        }
    }
    &:active {
        ${light} {
            background-color: ${({ selected }) => selected ? controlActiveBackgroundColorLight : "transparent"};
        }
        ${dark} {
            background-color: ${({ selected }) => selected ? controlActiveBackGroundColorDark : "transparent"};
        }
    }
    ${light} {   
        border: ${({ selected }) => selected ? `${borderThin} solid ${controlBorderColorLight}` : "none"};
        background-color: ${({ selected }) => selected ? controlBackgroundColorLight : "transparent"};
        color: ${controlTextColorLight};
    }
    ${dark} {
        border: ${({ selected }) => selected ? `${borderThin} solid ${controlBorderColorDark}` : "none"};
        background-color: ${({ selected }) => selected ? controlBackgroundColorDark : "transparent"};
        color: ${controlTextColorDark};
    }
    ${transitionShort('border-color,background-color')}
    box-shadow: ${({ selected }) => selected ? shallowShadow : "none"};
`

export default SegmentedControlButton