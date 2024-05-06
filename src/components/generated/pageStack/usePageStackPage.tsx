// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { useContext } from "react"
import PageStackContext from "./PageStackContext"
import { StacksProps } from "./usePageStackOwner"

const usePageStackPage = (): StacksProps => {
    return useContext(PageStackContext)
}

export default usePageStackPage