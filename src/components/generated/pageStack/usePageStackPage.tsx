import { useContext } from "react"
import PageStackContext from "./PageStackContext"
import { StacksProps } from "./usePageStackOwner"

const usePageStackPage = (): StacksProps => {
    return useContext(PageStackContext)
}

export default usePageStackPage