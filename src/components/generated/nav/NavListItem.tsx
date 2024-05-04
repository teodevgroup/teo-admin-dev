import React, { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import { IconCode, iconsMap } from '../../../lib/extended/icons'
import NavListItemElement from "../../extended/nav/NavListItemElement"
import NavListItemIconElement from '../../extended/nav/NavListItemIconElement'
import NavListItemTextElement from '../../extended/nav/NavListItemTextElement'
import { PageStackItemKey } from '../../extended/pageStack/PageStackItemKeys'
import usePageStackPage from '../pageStack/usePageStackPage'

export type NavListItemProps = {
    collapsed: boolean
    isSelected: boolean
    isDragging?: boolean
    text: string
    iconCode: IconCode
    path?: PageStackItemKey
} & ComponentPropsWithoutRef<'div'>

const NavListItem = forwardRef(({ collapsed, isSelected, isDragging, text, iconCode, path, ...props }: NavListItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { alterStackWithRootKey } = usePageStackPage()
    const { t } = useTranslation("translations")
    return <NavListItemElement collapsed={collapsed} isSelected={isSelected} isDragging={isDragging} ref={ref} {...props} onClick={() => {
        if (path) {
            alterStackWithRootKey(path)
        }
    }}>
        <NavListItemIconElement collapsed={collapsed}>{iconsMap[iconCode]}</NavListItemIconElement>
        <NavListItemTextElement collapsed={collapsed}>{t(text)}</NavListItemTextElement>
    </NavListItemElement>
})

export default NavListItem