import React, { ReactNode, useContext, useState } from "react"
import NavBarItemsContainerElement from "./NavBarItemsContainerElement"
import { NavBarRenderStateContext } from "./NavBar"
import { useLang } from "../../../lib/generated/preferences"
import { useTranslation } from "react-i18next"
import WithTooltip from "../tooltip/WithTooltip"
import Tooltip from "../tooltip/Tooltip"
import RoundedButtonElement from "../button/RoundedButtonElement"
import { IoLanguage, IoNotifications } from "react-icons/io5"
import StatusBarUserAvatar from "../statusBar/StatusBarUserAvatar"
import { signOut } from "../../../lib/generated/signIn"
import Modal from "../modal/Modal"
import ModalSheet from "../modal/ModalSheet"
import ModalSheetTitle from "../modal/ModalSheetTitle"
import ModalSheetDescription from "../modal/ModalSheetDescription"
import SelectList from "../selectList/SelectList"
import { languageNamesArray, languageNamesMap } from "../../../lib/extended/language"
import SelectListVerticalLayout from "../selectList/SelectListVerticalLayout"
import SelectListItem from "../selectList/SelectListItem"
import StatusBarLanguageListCell from "../statusBar/StatusBarLanguageListCell"
import Button from "../../extended/button/Button"

type NavBarTrailingItemsProps = {
    children?: ReactNode | ReactNode[]
}

const NavBarTrailingItems = ({ children }: NavBarTrailingItemsProps) => {

    const context = useContext(NavBarRenderStateContext)
    context.trailing = true

    return <NavBarItemsContainerElement>
        {children}
        <NavBarTrailingGlobalItems />
    </NavBarItemsContainerElement>
}

const NavBarTrailingGlobalItems = () => {
    const [langModalIsOpen, setLangModalIsOpen] = useState(false)
    const [lang, setLang] = useLang()
    const [selectedLang, setSelectedLang] = useState(lang)
    const { t, i18n } = useTranslation("translations")
    return <>
        <WithTooltip tooltip={<Tooltip>{t("statusBar.langButton.tooltip")}</Tooltip>}>
            <RoundedButtonElement onClick={() => setLangModalIsOpen(!langModalIsOpen)}>
                <IoLanguage />
            </RoundedButtonElement>
        </WithTooltip>
        <WithTooltip tooltip={<Tooltip>{t("statusBar.notificationButton.tooltip")}</Tooltip>}>
            <RoundedButtonElement>
                <IoNotifications />
            </RoundedButtonElement>
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
    </>
}

export default NavBarTrailingItems