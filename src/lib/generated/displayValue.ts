import Decimal from "decimal.js"

const displayValue = (value: any) => {
    if (value === undefined) {
        return ''
    }
    if (value instanceof Decimal) {
        return value.toString()
    }
    if (value instanceof Date) {
        return value.toLocaleString()
    }
    if (typeof value === "boolean") {
        if (value) {
            return "Yes"
        } else {
            return "No"
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