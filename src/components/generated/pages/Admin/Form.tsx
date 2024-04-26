import React from 'react'
import PageProps from "../PageProps"
import { suspend } from 'suspend-react'
import { isEqual } from 'radash'
import { teo } from '../../../../lib/generated/teo'

const AdminForm = ({ item }: PageProps) => {
    const data = suspend(async () => {
        if (isEqual(item.query, {}) || !item.query) {
            return {}
        } else {
            return (await teo.admin.findUnique({
                where: item.query
            })).data
        }
    }, [item])
    return <div>
        Form content
        {JSON.stringify(data)}
    </div>
}

export default AdminForm