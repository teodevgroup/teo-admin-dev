import { createContext } from "react"

export type StackItemIndexContextProps = {
    index: number
    topMost: boolean
}

const StackItemIndexContext = createContext<StackItemIndexContextProps>({
    index: 0,
    topMost: true,
})

export default StackItemIndexContext