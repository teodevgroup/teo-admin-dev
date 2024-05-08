// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import { format } from "date-fns"
import Decimal from "decimal.js"
import { ReactNode } from "react"
import enumDefinitions from './enumDefinitions'
import DimmedText from '../../components/generated/dimmedText/DimmedText'

const displayValue = (value: any, t: any, enumName?: string): ReactNode => {
    if (value === undefined) {
        return ''
    }
    if (value === null) {
        return <DimmedText>{t("null.empty")}</DimmedText>
    }
    if (Array.isArray(value)) {
        return <DimmedText>{value.length === 1 ? `1${t('count.item')}` : `${value.length}${t('count.items')}`}</DimmedText>
    }
    if (enumName && !Array.isArray(value)) {
        return t(enumDefinitions[enumName as string].members.find((m) => m.value === value)!.name)
    }
    if (value instanceof Decimal) {
        return value.toString()
    }
    if (value instanceof Date) {
        return format(value, "yyyy-MM-dd hh:mm aa")
    }
    if (typeof value === "boolean") {
        if (value) {
            return t("bool.yes")
        } else {
            return t("bool.no")
        }
    }
    if (typeof value === 'string') {
        if (value.length > 60) {
            return value.substring(0, 60) + "..."
        } else {
            return value
        }
    }
    return value
}

export default displayValue