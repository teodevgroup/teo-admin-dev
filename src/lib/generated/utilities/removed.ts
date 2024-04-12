export default function removed<T, U>(value: T, path: (string|number)[]): [T, U | undefined] {
    if (!value) {
        return [value, undefined]
    }
    if (path.length === 0) {
        return [value, undefined]
    }
    path = [...path]
    let removedItem = undefined
    const _removed = (node: any): any => {
        const newNode = Array.isArray(node) ? [...node] : { ...node }
        if (path.length > 1) {
            const key = path.shift()
            const nextIsNum = typeof path[0] === 'number'
            newNode[key as string] = newNode[key as string] === undefined ? nextIsNum ? [] : {} : _removed(newNode[key as string]) as T
            return newNode as T
        } else {
            if (Array.isArray(newNode)) {
                removedItem = newNode[path[0] as number]
                newNode.splice(path[0] as number, 1)
            } else {
                removedItem = newNode[path[0]]
                delete newNode[path[0]]
            }
            return newNode as T
        }
    }
    const object = _removed(value) as T
    return [object, removedItem]
}
