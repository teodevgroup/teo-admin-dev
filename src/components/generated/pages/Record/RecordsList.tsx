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
    const { token } = useRefreshToken("models.record")
    const { data, meta } = suspend(async () => {
        return await teo.record.findMany(filter)
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
                            key: "RecordForm",
                            query: pick(item, ["id"])
                        })
                    }} />
                }
            }}
            fixedHeaderContent={() => {
                return <tr>
                    <Th>{t('model.record.id.name')}</Th>
                    <Th>{t('model.record.string.name')}</Th>
                    <Th>{t('model.record.bool.name')}</Th>
                    <Th>{t('model.record.int.name')}</Th>
                    <Th>{t('model.record.float.name')}</Th>
                    <Th>{t('model.record.decimal.name')}</Th>
                    <Th>{t('model.record.date.name')}</Th>
                    <Th>{t('model.record.dateTime.name')}</Th>
                </tr>
            }}
            style={{ height: 400 }}
            data={data}
            totalCount={data.length}
            itemContent={(_, item) => (
                <>
                    <Td>{item.id}</Td>
                    <Td>{item.string}</Td>
                    <Td>{item.bool}</Td>
                    <Td>{item.int}</Td>
                    <Td>{item.float}</Td>
                    <Td>{item.decimal}</Td>
                    <Td>{item.date}</Td>
                    <Td>{item.dateTime}</Td>
                </>
            )}
        />
    </RecordsContainer>
}

export default RecordsList