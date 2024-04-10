import React, { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import { IconCode, iconsMap } from '../../../lib/extended/icons'
import NavListItemElement from "../../extended/nav/NavListItemElement"
import NavListItemIconElement from '../../extended/nav/NavListItemIconElement'
import NavListItemTextElement from '../../extended/nav/NavListItemTextElement'

export type NavListItemProps = {
    isDragging?: boolean
    text: string
    iconCode: IconCode
} & ComponentPropsWithoutRef<'div'>

const NavListItem = forwardRef(({ isDragging, text, iconCode, ...props }: NavListItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { t } = useTranslation("translations")
    return <NavListItemElement isDragging={isDragging} ref={ref} {...props}>
        <NavListItemIconElement>{iconsMap[iconCode]}</NavListItemIconElement>
        <NavListItemTextElement>{t(text)}</NavListItemTextElement>
    </NavListItemElement>
})

export default NavListItem