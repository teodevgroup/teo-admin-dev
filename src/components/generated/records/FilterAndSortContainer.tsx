import { styled } from "@linaria/react"
import { flexContainer } from "../../../lib/generated/theme"
import { margin } from "../../../lib/extended/theme"

const FilterAndSortContainer = styled.div`
    ${flexContainer("row", "center", "center")}
    gap: ${margin};
`

export default FilterAndSortContainer