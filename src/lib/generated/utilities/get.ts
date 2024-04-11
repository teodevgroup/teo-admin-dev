export default function get<T>(value: T, path: (string|number)[]): T | undefined {
    let current = value as { [key: string]: any }
    for (const key of path) {
        if (current === null)
            return undefined
        if (current === undefined)
            return undefined
        current = current[key] as any
    }
    return current as T | undefined
}
