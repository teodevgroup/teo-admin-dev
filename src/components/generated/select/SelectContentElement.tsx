import { styled } from "@linaria/react"

const SelectContentElement = styled.div`
    background: white;
    font-size: 15px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 1px, rgb(0 0 0 / 3%) 0px 100px 80px,
        rgb(0 0 0 / 2%) 0px 41.7776px 33.4221px,
        rgb(0 0 0 / 2%) 0px 22.3363px 17.869px,
        rgb(0 0 0 / 4%) 0px 12.5216px 10.0172px;
    border-radius: 8px;
    box-sizing: border-box;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: none;
    padding: 5px;
    outline: 0;
    user-select: none;
    width: 160px;
`

export default SelectContentElement