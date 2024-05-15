import { useState } from "react"

const useRerender = () => {
    const [value, setValue] = useState(0)
    return () => {
        setValue(value + 1)
    }
}

export default useRerender