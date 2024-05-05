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
import { useTranslation } from 'react-i18next'

type RecordsListProps = {
    filter: any
}

const RecordsList = ({ filter }: RecordsListProps) => {
    const _ = useAccount()
    const { t } = useTranslation("translations")
    const { pushStack } = usePageStackPage()
    const { token } = useRefreshToken("models.admin")
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
                }
            }}
            fixedHeaderContent={() => {
                return <tr>
                    <Th>{t('model.admin.id.name')}</Th>
                    <Th>{t('model.admin.email.name')}</Th>
                    <Th>{t('model.admin.phoneNo.name')}</Th>
                    <Th>{t('model.admin.password.name')}</Th>
                </tr>
            }}
            style={{ height: 400 }}
            data={data}
            totalCount={data.length}
            itemContent={(_, item) => (
                <>
                    <Td>{item.id}</Td>
                    <Td>{item.email}</Td>
                    <Td>{item.phoneNo}</Td>
                    <Td>{item.password}</Td>
                </>
            )}
        />
    </RecordsContainer>
}

export default RecordsList