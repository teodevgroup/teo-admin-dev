import React from 'react'
import renderStackItem from "../../extended/pageStack/renderStackItem"
import { PageStackData } from "./PageStackData"
import PageStackItemContainerElement from './PageStackItemContainerElement'

export default function renderStack(data: PageStackData) {
    return data.map((item, index) => <PageStackItemContainerElement key={index}>
        {renderStackItem(item)}
    </PageStackItemContainerElement>)
}


// // This file is generated and managed by Teo generator internally.
// // It will be overwritten in next generation. Do not modify this file.

// import { styled } from '@linaria/react'
// import { flexContainer } from '../../../lib/generated/theme'

// const AppContentLayout = styled.div`
//     ${flexContainer("column", "stretch", "stretch")}
//     flex-grow: 1;
// `

// export default AppContentLayout