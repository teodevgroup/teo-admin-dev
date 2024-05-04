import { useEffect, useState } from "react"

const tokens: { [key: string]: number } = { }
const setters: { [key: string]: (() => void)[]} = { }

const tokenOfKey = (key: string) => {
    if (tokens[key]) {
        return tokens[key]
    }
    tokens[key] = 1
    return tokens[key]
}

const useRefreshToken = (key: string) => {
    const [token, originalSetter] = useState(tokenOfKey(key))
    const setter = () => {
        tokens[key] = token + 1
        originalSetter(tokens[key])
    }
    useEffect(() => {
        if (!setters[key]) {
            setters[key] = [] 
        }
        setters[key].push(setter)
        return () => {
            let index = setters[key].indexOf(setter)
            setters[key].splice(index, 1)
        }
    }, [token])
    const refresh = () => {
        setters[key].forEach((setter) => {
            setter()
        })
    }
    return { refresh, token }
}

export default useRefreshToken