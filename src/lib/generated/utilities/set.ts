export default function set<T>(value: T, path: (string|number)[], item: any): T {
    if (!value) {
        return value
    }
    if (path.length === 0) {
        return value
    }
    path = [...path]
    const _set = (node: any): any => {
        const newNode = Array.isArray(node) ? [...node] : { ...node }
        if (path.length > 1) {
            const key = path.shift()
            const nextIsNum = typeof path[0] === 'number'
            newNode[key as string] = newNode[key as string] === undefined ? nextIsNum ? [] : {} : _set(newNode[key as string]) as T
            return newNode as T
        } else {
            newNode[path[0]] = item
            return newNode as T
        }
    }
    return _set(value) as T
}
