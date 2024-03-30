import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"

const SelectListGridLayout = styled.div`
    ${flexContainer("row", "flex-start", "flex-start")}
    flex-wrap: wrap;
`

export default SelectListGridLayout