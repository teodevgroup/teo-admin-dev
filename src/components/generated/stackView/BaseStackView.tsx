import React, { cloneElement, ReactElement, ReactNode } from 'react'
import StackViewElement from "../../extended/stackView/StackViewElement"
import StackViewContentContainerElement from './StackViewContentContainerElement'
import StackViewNavBarLayerElement from './StackViewNavBarLayerElement'
import StackNavBarItems from './StackNavBarItems'
import set from '../../../lib/generated/utilities/set'
import StatusBarLeadingItemsElement from '../statusBar/StatusBarLeadingItemsElement'
import StatusBarTitleItemsElement from '../statusBar/StatusBarTitleItemsElement'
import StatusBarTrailingItemsElement from '../statusBar/StatusBarTrailingItemsElement'
import StackNavBarLeadingItems from './StackNavBarLeadingItems'
import StackNavBarTitleItems from './StackNavBarTitleItems'
import StackNavBarTrailingItems from './StackNavBarTrailingItems'

export type BaseStackViewProps = {
    navBarElement: ReactElement
    backButtonElement: ReactElement
    staticLeadingItems?: ReactElement[]
    staticTrailingItems?: ReactElement[]
    children: ReactElement[]
}

const navBarItemsRemoved = (child: ReactElement) => {
    const childrenOfChild = child.props.children
    const newChildren = Array.isArray(childrenOfChild) ? childrenOfChild.filter((child) => child.type !== StackNavBarItems) : childrenOfChild
    return set(child, ["props", "children"], newChildren)
}

const emptyNavBarItems = (index: number, backButtonElement: ReactElement, staticLeadingItems: ReactElement[] | undefined, staticTrailingItems: ReactElement[] | undefined) => {
    return [
        <StatusBarLeadingItemsElement key="l">
            {index !== 0 ? backButtonElement : null}
            {staticLeadingItems}
        </StatusBarLeadingItemsElement>,
        <StatusBarTitleItemsElement key="c" />,
        <StatusBarTrailingItemsElement key="t">
            {staticTrailingItems}
        </StatusBarTrailingItemsElement>
    ]
}

const retrieveNavBarItems = (index: number, backButtonElement: ReactElement, child: ReactElement, staticLeadingItems: ReactElement[] | undefined, staticTrailingItems: ReactElement[] | undefined) => {
    if (!Array.isArray(child.props.children)) {
        return emptyNavBarItems(index, backButtonElement, staticLeadingItems, staticTrailingItems)
    }
    const navBarItemsElement: ReactElement | undefined = child.props.children.find((child: ReactElement) => child.type === StackNavBarItems)
    if (!navBarItemsElement) {
        return emptyNavBarItems(index, backButtonElement, staticLeadingItems, staticTrailingItems)
    }
    const itemsChildren = navBarItemsElement.props.children
    const leadingItemsComponent = itemsChildren.find((child: ReactElement) => child.type === StackNavBarLeadingItems)
    const titleItemsComponent = itemsChildren.find((child: ReactElement) => child.type === StackNavBarTitleItems)
    const trailingItemsComponent = itemsChildren.find((child: ReactElement) => child.type === StackNavBarTrailingItems)
    return [
        <StatusBarLeadingItemsElement key="l">
            {index !== 0 ? backButtonElement : null}
            {staticLeadingItems}
            {leadingItemsComponent ? leadingItemsComponent.props.children : null}
        </StatusBarLeadingItemsElement>,
        <StatusBarTitleItemsElement key="c">
            {titleItemsComponent ? titleItemsComponent.props.children : null}
        </StatusBarTitleItemsElement>,
        <StatusBarTrailingItemsElement key="t">
            {trailingItemsComponent ? trailingItemsComponent.props.children : null}
            {staticTrailingItems}
        </StatusBarTrailingItemsElement>
    ]
}

const BaseStackView = ({ children, navBarElement, staticLeadingItems, staticTrailingItems, backButtonElement }: BaseStackViewProps) => {
    const [stackNavBarLayers, contents] = children.map((child, index) => {
        return [
            <StackViewNavBarLayerElement key={index}>
                {retrieveNavBarItems(index, backButtonElement, child, staticLeadingItems, staticTrailingItems)}
            </StackViewNavBarLayerElement>,
            navBarItemsRemoved(child)
        ]
    })
    return <StackViewElement>
        {cloneElement(navBarElement, {
            children: stackNavBarLayers
        })}
        <StackViewContentContainerElement>
            {contents}
        </StackViewContentContainerElement>
    </StackViewElement>
}

export default BaseStackView