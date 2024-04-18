import React, { useEffect, useState } from "react"
import { PageStackItemKey } from "../../extended/pageStack/PageStackItemKeys"
import { PageStackData } from "../pageStack/PageStackData"
import { StacksProps } from "../pageStack/usePageStackOwner"
import ContentTabsContainer from "./ContentTabsContainer"
import ContentTab from "./ContentTab"
import renderStack from "../pageStack/renderStack"
import NavBarBackgroundElement from "../pageStack/NavBarBackgroundElement"

export type ContentTabsCacheMap = { [key in PageStackItemKey]?: PageStackData }

const mergeStackData: (map: ContentTabsCacheMap, stackData: PageStackData) => ContentTabsCacheMap = (map: ContentTabsCacheMap, stackData: PageStackData) => {
    if (stackData.length > 0) {
        return { ...map, [stackData[0].key]: stackData }
    } else {
        return map
    }
}

const ContentTabsCache = ({ stackProps }: { stackProps: StacksProps }) => {
    const [stackMap, setStackMap] = useState(mergeStackData({}, stackProps.stack))
    useEffect(() => {
        setStackMap(mergeStackData(stackMap, stackProps.stack))
    }, [stackProps.stack])
    const activeKey = stackProps.stack[0]?.key
    return <ContentTabsContainer>
        {Object.entries(stackMap).map(([key, items]) => (
            <ContentTab key={key} isHidden={activeKey !== key}>
                {renderStack(items)}
            </ContentTab>
        ))}
    </ContentTabsContainer>
    
}

export default ContentTabsCache