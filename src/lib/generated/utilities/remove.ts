export default function remove<T>(value: T, path: (string|number)[]): T {
    if (!value) {
        return value
    }
    if (path.length === 0) {
        return value
    }
    path = [...path]
    const _remove = (node: any): any => {
        const newNode = Array.isArray(node) ? [...node] : { ...node }
        if (path.length > 1) {
            const key = path.shift()
            const nextIsNum = typeof path[0] === 'number'
            newNode[key as string] = newNode[key as string] === undefined ? nextIsNum ? [] : {} : _remove(newNode[key as string]) as T
            return newNode as T
        } else {
            if (Array.isArray(newNode)) {
                newNode.splice(path[0] as number, 1)
            } else {
                delete newNode[path[0]]
            }
            return newNode as T
        }
    }
    return _remove(value) as T
}
