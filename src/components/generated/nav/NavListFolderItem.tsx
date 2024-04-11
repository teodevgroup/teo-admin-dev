import React, { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import { IconCode, iconsMap } from '../../../lib/extended/icons'
import NavListItemIconElement from '../../extended/nav/NavListItemIconElement'
import NavListItemTextElement from '../../extended/nav/NavListItemTextElement'
import { NavItem } from '../../../lib/generated/preferences'
import NavListFolderItemElement from '../../extended/nav/NavListFolderItemElement'

export type NavListFolderItemProps = ComponentPropsWithoutRef<'div'> & {
    isDragging?: boolean
    isReceivingDragging?: boolean
    text: string
    iconCode: IconCode
    folderPath: string[]
}

const NavListFolderItem = forwardRef(({ isDragging, isReceivingDragging, text, iconCode, folderPath, ...props }: NavListFolderItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { t } = useTranslation("translations")
    return <NavListFolderItemElement isDragging={isDragging} isReceivingDragging={isReceivingDragging} ref={ref} {...props}>
        <NavListItemIconElement>{iconsMap[iconCode]}</NavListItemIconElement>
        <NavListItemTextElement>{t(text)}</NavListItemTextElement>
    </NavListFolderItemElement>
})

export default NavListFolderItem