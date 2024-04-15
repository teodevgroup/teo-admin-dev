import { useContext } from "react"
import StatusBarItemsContext from './StatusBarItemsContext'

const useStatusBarRenderer = () => {
    return useContext(StatusBarItemsContext)
}

export default useStatusBarRenderer