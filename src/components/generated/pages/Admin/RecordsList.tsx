import React from 'react'
import RecordsContainer from '../../records/RecordsContainer'
import { TableVirtuoso } from 'react-virtuoso'
import { suspend } from 'suspend-react'
import { teo } from '../../../../lib/generated/teo'

type RecordsListProps = {
    filter: any
}

const RecordsList = ({ filter }: RecordsListProps) => {
    const { data, meta } = suspend(async () => {
        return await teo.admin.findMany(filter)
    }, [filter])
    return <RecordsContainer>
        <TableVirtuoso
            fixedHeaderContent={(index, item) => {
                return <tr>
                    <th>Id</th>
                    <th>Email</th>
                </tr>
            }}
            style={{ height: 400 }}
            data={data}
            totalCount={data.length}
            itemContent={(index, item) => (
                <>
                    <td style={{ width: 150 }}>{item.id}</td>
                    <td>{item.email}</td>
                </>
            )}
        />
    </RecordsContainer>
}

export default RecordsList