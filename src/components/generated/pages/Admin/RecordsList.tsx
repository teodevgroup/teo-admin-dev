import React, { forwardRef } from 'react'
import RecordsContainer from '../../records/RecordsContainer'
import { TableVirtuoso } from 'react-virtuoso'
import { suspend } from 'suspend-react'
import { teo } from '../../../../lib/generated/teo'
import { pick } from 'radash'
import usePageStackPage from '../../pageStack/usePageStackPage'
import PaddedMainContent from '../../pageStack/PaddedMainContent'
import useRefreshToken from '../../../../lib/generated/refreshToken'

type RecordsListProps = {
    filter: any
}

const RecordsList = ({ filter }: RecordsListProps) => {
    const { pushStack } = usePageStackPage()
    const { token } = useRefreshToken("models.admin")
    const { data, meta } = suspend(async () => {
        return await teo.admin.findMany(filter)
    }, [filter, token])
    return <RecordsContainer>
        <PaddedMainContent>
            <TableVirtuoso
                components={{
                    TableHead: forwardRef(({ style, ...props }, ref) => {
                        return <thead {...props} ref={ref} />
                    }),
                    TableRow: ({ ...props }) => {
                        return <tr {...props} onDoubleClick={() => {
                            const item = data[props["data-index"]]
                            pushStack({
                                key: "AdminForm",
                                query: pick(item, ["id"])
                            })
                        }} />
                    }
                }}
                fixedHeaderContent={() => {
                    return <tr>
                        <th>Id</th>
                        <th>Email</th>
                    </tr>
                }}
                style={{ height: 400 }}
                data={data}
                totalCount={data.length}
                itemContent={(_, item) => (
                    <>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                    </>
                )}
            />
        </PaddedMainContent>
    </RecordsContainer>
}

export default RecordsList