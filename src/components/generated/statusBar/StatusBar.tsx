// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { useState } from 'react'
import StatusBarButtonElement from "../../generated/statusBar/StatusBarButtonElement"
import StatusBarElement from "../../generated/statusBar/StatusBarElement"
import { IoLanguage, IoNotifications } from "react-icons/io5"
import { IoIosArrowBack } from 'react-icons/io'
import StatusBarUserAvatar from '../../generated/statusBar/StatusBarUserAvatar'
import Modal from '../../generated/modal/Modal'
import ModalSheet from '../modal/ModalSheet'
import ModalSheetTitle from '../modal/ModalSheetTitle'
import ModalSheetDescription from '../modal/ModalSheetDescription'
import WithTooltip from '../../generated/tooltip/WithTooltip'
import Tooltip from '../tooltip/Tooltip'
import { useLang } from '../../../lib/generated/preferences'
import SelectList from '../../generated/selectList/SelectList'
import SelectListItem from '../../generated/selectList/SelectListItem'
import StatusBarLanguageListCell from '../../generated/statusBar/StatusBarLanguageListCell'
import SelectListVerticalLayout from '../../generated/selectList/SelectListVerticalLayout'
import { useTranslation } from 'react-i18next'
import { languageNamesArray, languageNamesMap } from '../../../lib/extended/language'
import { signOut, useAccount } from '../../../lib/generated/signIn'
import Button from '../../extended/button/Button'
import StatusBarTrailingItemsElement from './StatusBarTrailingItemsElement'
import StatusBarLeadingItemsElement from './StatusBarLeadingItemsElement'
import StatusBarTitleItemsElement from './StatusBarTitleItemsElement'
import useStatusBarRenderer from './useStatusBarRenderer'
import StatusBarPageItemsContainerElement from './StatusBarPageItemsContainerElement'
import { zip } from 'radash'
import usePageStackPage from '../pageStack/usePageStackPage'
import StatusBarPageItemsLayerElement from './StatusBarPageItemsLayerElement'
import StatusBarPageItemsLayerLeadingElement from './StatusBarPageItemsLayerLeadingElement'
import StatusBarPageItemsLayerTitleElement from './StatusBarPageItemsLayerTitleElement'

const StatusBar = () => {
    const { leadingItems, centerItems } = useStatusBarRenderer()
    const { popStack } = usePageStackPage()
    const zippedPageItems = zip(leadingItems, centerItems)
    const _ = useAccount()
    const [langModalIsOpen, setLangModalIsOpen] = useState(false)
    const [lang, setLang] = useLang()
    const [selectedLang, setSelectedLang] = useState(lang)
    const { t, i18n } = useTranslation("translations")
    return <StatusBarElement>
        <WithTooltip tooltip={<Tooltip>{t("Back")}</Tooltip>}>
            <StatusBarButtonElement onClick={() => popStack()}>
                <IoIosArrowBack />
            </StatusBarButtonElement>
        </WithTooltip>
        <StatusBarPageItemsContainerElement>
            {zippedPageItems.map(([leading, title]) => <StatusBarPageItemsLayerElement>
                <StatusBarPageItemsLayerLeadingElement>
                    {leading}
                </StatusBarPageItemsLayerLeadingElement>
                <StatusBarPageItemsLayerTitleElement>
                    {title}
                </StatusBarPageItemsLayerTitleElement>
            </StatusBarPageItemsLayerElement>)}
        </StatusBarPageItemsContainerElement>
        <StatusBarTrailingItemsElement>
            <WithTooltip tooltip={<Tooltip>{t("statusBar.langButton.tooltip")}</Tooltip>}>
                <StatusBarButtonElement onClick={() => setLangModalIsOpen(!langModalIsOpen)}>
                    <IoLanguage />
                </StatusBarButtonElement>
            </WithTooltip>
            <WithTooltip tooltip={<Tooltip>{t("statusBar.notificationButton.tooltip")}</Tooltip>}>
                <StatusBarButtonElement>
                    <IoNotifications />
                </StatusBarButtonElement>
            </WithTooltip>
            <StatusBarUserAvatar name='V' onClick={signOut} />
            <Modal isOpen={langModalIsOpen} setIsOpen={setLangModalIsOpen} dismissWithEscKey dismissWithOutsideClick>
                <ModalSheet>
                    <ModalSheetTitle>{t("statusBar.lang.language")}</ModalSheetTitle>
                    <ModalSheetDescription>{t("statusBar.lang.selectALanguage")}</ModalSheetDescription>
                    <SelectList selectedIndex={languageNamesArray.indexOf(selectedLang)} setSelectedIndex={(index) => setSelectedLang(languageNamesArray[index as any])}>
                        <SelectListVerticalLayout>
                            {languageNamesArray.map((name) => <SelectListItem key={name}>
                                <StatusBarLanguageListCell>
                                    {languageNamesMap[name]}
                                </StatusBarLanguageListCell>
                            </SelectListItem>)}
                        </SelectListVerticalLayout>
                    </SelectList>
                    <Button onClick={() => {
                        setLang(selectedLang)
                        setLangModalIsOpen(false)
                        i18n.changeLanguage(selectedLang)
                    }}>{t("confirm")}</Button>
                </ModalSheet>
            </Modal>
        </StatusBarTrailingItemsElement>
    </StatusBarElement>
}

export default StatusBar