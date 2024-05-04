import React, { ComponentPropsWithoutRef, ForwardedRef, forwardRef, useState } from 'react'
import { flip, offset, useFloating, useHover, useInteractions, shift, useMergeRefs, FloatingPortal, safePolygon, useClick, useTransitionStyles, useDismiss } from "@floating-ui/react"

import { useTranslation } from 'react-i18next'
import { IconCode, iconsMap } from '../../../lib/extended/icons'
import NavListItemIconElement from '../../extended/nav/NavListItemIconElement'
import NavListItemTextElement from '../../extended/nav/NavListItemTextElement'
import NavListFolderItemElement from '../../extended/nav/NavListFolderItemElement'
import NavListFolderModalElement from '../../extended/nav/NavListFolderModalElement'
import { useNavItems } from '../../../lib/generated/preferences'
import { navItemsAtPath } from './navItemsUtility'
import NavDragDropContainer from './NavDragDropContainer'

export type NavListFolderItemProps = ComponentPropsWithoutRef<'div'> & {
    collapsed: boolean
    isDragging?: boolean
    isReceivingDragging?: boolean
    text: string
    iconCode: IconCode
    folderPath: string[]
}

const NavListFolderItem = forwardRef(({ collapsed, isDragging, isReceivingDragging, text, iconCode, folderPath, ...props }: NavListFolderItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    // floating model
    const { t } = useTranslation("translations")
    const [isOpen, setIsOpen] = useState(false)
    const { context, floatingStyles, refs } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [
            offset({ mainAxis: 20, alignmentAxis: -8 }),
            flip({
              fallbackPlacements: ["left-start"]
            }),
            shift({ padding: 20 })
        ],
        placement: "right-start",
        strategy: "fixed",
    })
    const click = useClick(context, {})
    const dismiss = useDismiss(context)
    const hover = useHover(context, {
        enabled: true,
        handleClose: safePolygon({ blockPointerEvents: true }),
    })
    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
        click,
        dismiss
    ])
    // nav items
    const [navItems] = useNavItems()
    const items = navItemsAtPath(navItems, folderPath)
    const portalTransform = floatingStyles.transform
    return <>
        <NavListFolderItemElement collapsed={collapsed} isDragging={isDragging} isReceivingDragging={isReceivingDragging} ref={useMergeRefs([ref, refs.setReference])} {...getReferenceProps(props)}>
            <NavListItemIconElement collapsed={collapsed}>{iconsMap[iconCode]}</NavListItemIconElement>
            <NavListItemTextElement collapsed={collapsed}>{t(text)}</NavListItemTextElement>
        </NavListFolderItemElement>
        <FloatingPortal>
            {isOpen && <NavListFolderModalElement ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
                <NavDragDropContainer collapsed={collapsed} displayingItems={items} folderPath={folderPath} portalTransform={portalTransform as string} />
            </NavListFolderModalElement>}
        </FloatingPortal>
    </>
})

export default NavListFolderItem