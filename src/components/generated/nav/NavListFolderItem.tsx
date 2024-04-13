import React, { ComponentPropsWithoutRef, ForwardedRef, forwardRef, useState } from 'react'
import { flip, offset, useFloating, useHover, useInteractions, shift, useMergeRefs, FloatingPortal, safePolygon, useClick, useTransitionStyles } from "@floating-ui/react"

import { useTranslation } from 'react-i18next'
import { IconCode, iconsMap } from '../../../lib/extended/icons'
import NavListItemIconElement from '../../extended/nav/NavListItemIconElement'
import NavListItemTextElement from '../../extended/nav/NavListItemTextElement'
import NavListFolderItemElement from '../../extended/nav/NavListFolderItemElement'
import NavListFolderModalElement from '../../extended/nav/NavListFolderModalElement'
import { useNavItems } from '../../../lib/generated/preferences'
import { navItemsAtPath } from './navItemsUtility'
import NavDragDropContainer from './NavDragDropContainer'
import untransform from '../../../lib/generated/modal/untransform'

export type NavListFolderItemProps = ComponentPropsWithoutRef<'div'> & {
    isDragging?: boolean
    isReceivingDragging?: boolean
    text: string
    iconCode: IconCode
    folderPath: string[]
}

const NavListFolderItem = forwardRef(({ isDragging, isReceivingDragging, text, iconCode, folderPath, ...props }: NavListFolderItemProps, ref: ForwardedRef<HTMLDivElement>) => {
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
    // const hover = useHover(context, {
    //     enabled: true,
    //     handleClose: safePolygon({ blockPointerEvents: true }),
    // })
    const { getReferenceProps, getFloatingProps } = useInteractions([
        //hover,
        click
    ])
    // nav items
    const [navItems] = useNavItems()
    const items = navItemsAtPath(navItems, folderPath)
    const portalTransform = floatingStyles.transform
    return <>
        <NavListFolderItemElement isDragging={isDragging} isReceivingDragging={isReceivingDragging} ref={useMergeRefs([ref, refs.setReference])} {...getReferenceProps(props)}>
            <NavListItemIconElement>{iconsMap[iconCode]}</NavListItemIconElement>
            <NavListItemTextElement>{t(text)}</NavListItemTextElement>
        </NavListFolderItemElement>
        <FloatingPortal>
            {isOpen && <NavListFolderModalElement ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
                <NavDragDropContainer displayingItems={items} folderPath={folderPath} portalTransform={portalTransform as string} />
            </NavListFolderModalElement>}
        </FloatingPortal>
    </>
})

export default NavListFolderItem