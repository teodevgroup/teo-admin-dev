import React, { ComponentPropsWithoutRef, ForwardedRef, forwardRef, useState } from 'react'
import { flip, offset, useFloating, useHover, useInteractions, shift, useMergeRefs, FloatingPortal } from "@floating-ui/react"

import { useTranslation } from 'react-i18next'
import { IconCode, iconsMap } from '../../../lib/extended/icons'
import NavListItemIconElement from '../../extended/nav/NavListItemIconElement'
import NavListItemTextElement from '../../extended/nav/NavListItemTextElement'
import NavListFolderItemElement from '../../extended/nav/NavListFolderItemElement'
import NavListFolderModalElement from '../../extended/nav/NavListFolderModalElement'
import { useNavItems } from '../../../lib/generated/preferences'
import { navItemsAtPath } from './navItemsUtility'

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
            offset(20), flip(), shift()
        ]
    })
    const hover = useHover(context)
    const { getReferenceProps, getFloatingProps } = useInteractions([hover])
    // nav items
    const [navItems, setNavItems] = useNavItems()
    const items = navItemsAtPath(navItems, folderPath)
    return <>
        <NavListFolderItemElement isDragging={isDragging} isReceivingDragging={isReceivingDragging} ref={useMergeRefs([ref, refs.setReference])} {...getReferenceProps(props)}>
            <NavListItemIconElement>{iconsMap[iconCode]}</NavListItemIconElement>
            <NavListItemTextElement>{t(text)}</NavListItemTextElement>
        </NavListFolderItemElement>
        <FloatingPortal>
            <NavListFolderModalElement>
                
            </NavListFolderModalElement>
        </FloatingPortal>
    </>
})

export default NavListFolderItem