import { styled } from '@linaria/react'
import React from 'react'
import Shimmer from '../shimmer/Shimmer'
import { flexContainer } from '../../../lib/generated/theme'
import { margin, spacing } from '../../../lib/extended/theme'

const TableRowShimmerContainer = styled.div`
    ${flexContainer("row", "flex-start", "flex-start")}
    margin-bottom: ${margin};
`

const TableRowFirstCellShimmer = styled(Shimmer)`
    width: 20px;
    height: 20px;
    margin-right: ${spacing};
`

const TableRowSecondCellShimmer = styled(Shimmer)`
    width: 100px;
    height: 20px;
    margin-right: ${spacing};
`

const TableRowThirdCellShimmer = styled(Shimmer)`
    width: 60px;
    height: 20px;
    margin-right: ${spacing};
`

const TableRowFourthCellShimmer = styled(Shimmer)`
    width: 180px;
    height: 20px;
`

const TableRowShimmer = () => {
    return <TableRowShimmerContainer>
        <TableRowFirstCellShimmer />
        <TableRowSecondCellShimmer />
        <TableRowThirdCellShimmer />
        <TableRowFourthCellShimmer />
    </TableRowShimmerContainer>
}

export default TableRowShimmer