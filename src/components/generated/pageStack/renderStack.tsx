import React from 'react'
import renderStackItem from "../../extended/pageStack/renderStackItem"
import { PageStackData } from "./PageStackData"
import PageStackItemContainerElement from './PageStackItemContainerElement'

export default function renderStack(data: PageStackData) {
    const dataLength = data.length
    return data.map((item, index) => <PageStackItemContainerElement key={index}>
            {renderStackItem(item, index, index === dataLength - 1)}
        </PageStackItemContainerElement>)
}
