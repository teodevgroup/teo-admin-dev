import React, { MutableRefObject } from 'react'
import renderStackItem from "../../extended/pageStack/renderStackItem"
import { PageStackData } from "./PageStackData"
import PageStackItemContainerElement from './PageStackItemContainerElement'

export default function renderStack(data: PageStackData, currentIndex: MutableRefObject<number>) {
    currentIndex.current = 0
    return data.map((item, index) => <PageStackItemContainerElement key={index}>
        {renderStackItem(item, currentIndex)}
    </PageStackItemContainerElement>)
}