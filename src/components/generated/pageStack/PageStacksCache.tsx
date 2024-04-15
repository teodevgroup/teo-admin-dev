import React, { useEffect, useState } from "react"
import { PageStackData } from "./PageStackData"
import { PageStackItemKey } from "../../extended/pageStack/PageStackItemKeys"
import PageStacksContainerElement from "./PageStacksContainerElement"
import renderStack from "./renderStack"
import { StacksProps } from "./usePageStackOwner"
import PageStackContainerElement from "./PageStackContainerElement"

export type PageStackCacheMap = { [key in PageStackItemKey]?: PageStackData }

const mergeStackData: (map: PageStackCacheMap, stackData: PageStackData) => PageStackCacheMap = (map: PageStackCacheMap, stackData: PageStackData) => {
    if (stackData.length > 0) {
        return { ...map, [stackData[0].key]: stackData }
    } else {
        return map
    }
}

const PageStacksCache = ({ stackProps }: { stackProps: StacksProps }) => {
    const [stackMap, setStackMap] = useState(mergeStackData({}, stackProps.stack))
    useEffect(() => {
        setStackMap(mergeStackData(stackMap, stackProps.stack))
    }, [stackProps.stack])
    const activeKey = stackProps.stack[0]?.key
    return <PageStacksContainerElement>
        {Object.entries(stackMap).map(([key, items]) => <PageStackContainerElement key={key} isHidden={activeKey !== key}>
            {renderStack(items)}
        </PageStackContainerElement>)}
    </PageStacksContainerElement>
}

export default PageStacksCache