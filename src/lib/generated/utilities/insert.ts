export default function insert<T>(value: T, path: (string|number)[], item: any): T {
    if (!value) {
        return value
    }
    if (path.length === 0) {
        return value
    }
    const _insert = (node: any): any => {
        const newNode = Array.isArray(node) ? [...node] : { ...node }
        if (path.length > 1) {
            const key = path.shift()
            const nextIsNum = typeof path[0] === 'number'
            newNode[key as string] = newNode[key as string] === undefined ? nextIsNum ? [] : {} : _insert(newNode[key as string]) as T
            return newNode as T
        } else {
            if (Array.isArray(newNode)) {
                newNode.splice(path[0] as number, 0, item)
            } else {
                newNode[path[0]] = item
            }
            return newNode as T
        }
    }
    return _insert(value) as T
}
