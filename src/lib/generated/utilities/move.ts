import insert from "./insert"
import removed from "./removed"

export default function move<T>(value: T, from: (string|number)[], to: (string|number)[]): T {
    if (!value) {
        return value
    }
    if (from.length === 0 || to.length === 0) {
        return value
    }
    const [newValue, removedItem] = removed(value, from)
    return insert(newValue, to, removedItem)
}
