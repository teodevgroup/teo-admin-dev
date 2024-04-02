import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"

const ModalElement = styled.div`
    ${flexContainer("row", "center", "center")}
    &:focus {
        outline: none;
    }
`

export default ModalElement