// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

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