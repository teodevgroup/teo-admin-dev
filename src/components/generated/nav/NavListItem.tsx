import React from 'react'
import { useTranslation } from 'react-i18next'
import { IconCode, iconsMap } from '../../../lib/extended/icons'
import NavListItemElement from "../../extended/nav/NavListItemElement"
import NavListItemIconElement from '../../extended/nav/NavListItemIconElement'
import NavListItemTextElement from '../../extended/nav/NavListItemTextElement'

export type NavListItemProps = {
    isDragging?: boolean
    text: string
    iconCode: IconCode
}

const NavListItem = (props: NavListItemProps) => {
    const { t } = useTranslation("translations")
    return <NavListItemElement isDragging={props.isDragging}>
        <NavListItemIconElement>{iconsMap[props.iconCode]}</NavListItemIconElement>
        <NavListItemTextElement>{t(props.text)}</NavListItemTextElement>
    </NavListItemElement>
}

export default NavListItem