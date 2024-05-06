import { styled } from "@linaria/react"
import ToggleDotElement from "./ToggleDotElement"

interface ToggleElementProps {
    isOn: boolean
    disabled?: boolean
}

const ToggleElement = styled.div<ToggleElementProps>`
    position: relative;
    background-color: ${({ disabled, isOn }) => disabled ? "lightgray" : (isOn ? "#41435e" : "#2b2c3b")};
    width: 44px;
    height: 22px;
    border-radius: 20px 20px;
    border: 1px solid #222435;
    transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
    cursor: default;
    ${ToggleDotElement} {
        background-color: ${({ disabled }) => disabled ? "darkgray" : "#FABD05"};
        position: absolute;
        left: ${({ isOn }) => isOn ? "22px" : "0"};
        top: 0;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
        transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
    }
`

export default ToggleElement