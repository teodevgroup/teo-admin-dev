// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { format } from "date-fns"
import Decimal from "decimal.js"

const displayValue = (value: any, t: any) => {
    if (value === undefined) {
        return ''
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