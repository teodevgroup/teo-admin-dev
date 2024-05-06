// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { forwardRef } from 'react'
import RecordsContainer from '../../records/RecordsContainer'
import { TableVirtuoso } from 'react-virtuoso'
import { suspend } from 'suspend-react'
import { teo } from '../../../../lib/generated/teo'
import { pick } from 'radash'
import usePageStackPage from '../../pageStack/usePageStackPage'
import useRefreshToken from '../../../../lib/generated/refreshToken'
import { useAccount } from '../../../../lib/generated/signIn'
import Table from '../../records/Table'
import Td from '../../records/Td'
import Th from '../../records/Th'
import Tr from '../../records/Tr'

type RecordsListProps = {
    filter: any
}

const RecordsList = ({ filter }: RecordsListProps) => {
    const { pushStack } = usePageStackPage()
    const { token } = useRefreshToken("models.admin")
    const _ = useAccount()
    const { data, meta } = suspend(async () => {
        return await teo.admin.findMany(filter)
    }, [filter, token])
    return <RecordsContainer>
        <TableVirtuoso
            components={{
                Table: ({ ...props }) => {
                    return <Table {...props} />
                },
                TableHead: forwardRef(({ style, ...props }, ref) => {
                    return <thead {...props} ref={ref} />
                }),
                TableRow: ({ ...props }) => {
                    return <Tr {...props} onDoubleClick={() => {
                        const item = data[props["data-index"]]
                        pushStack({
                            key: "AdminForm",
                            query: pick(item, ["id"])
                        })
                    }} />
                },
            }}
            fixedHeaderContent={() => {
                return <tr>
                    <Th>Id</Th>
                    <Th>Email</Th>
                </tr>
            }}
            style={{ height: 400 }}
            data={data}
            totalCount={data.length}
            itemContent={(_, item) => (
                <>
                    <Td>{item.id}</Td>
                    <Td>{item.email}</Td>
                </>
            )}
        />
    </RecordsContainer>
}

export default RecordsList