import { useContext } from "react"
import StatusBarItemsContext from './StatusBarItemsContext'

const useRenderInStatusBar = () => {
    const { leadingItems, setLeadingItems, centerItems, setCenterItems } = useContext(StatusBarItemsContext)
}

export default useRenderInStatusBar