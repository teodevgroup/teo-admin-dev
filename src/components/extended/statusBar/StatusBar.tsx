import React, { useState } from 'react'
import StatusBarButtonElement from "./StatusBarButtonElement"
import StatusBarElement from "./StatusBarElement"
import { IoLanguage } from "react-icons/io5"
import StatusBarUserAvatar from './StatusBarUserAvatar'
import Modal from '../../generated/modal/Modal'
import ModalSheet from '../modal/ModalSheet'
import ModalSheetTitle from '../modal/ModalSheetTitle'
import ModalSheetDescription from '../modal/ModalSheetDescription'
import WithTooltip from '../../generated/tooltip/WithTooltip'
import Tooltip from '../tooltip/Tooltip'
import { languageNamesArray, languageNamesMap, useLang } from '../../../lib/generated/hooks/preferences'
import SelectList from '../../generated/selectList/SelectList'
import SelectListItemElement from '../selectList/SelectListItemElement'
import SelectListItem from '../../generated/selectList/SelectListItem'
import StatusBarLanguageListCell from './StatusBarLanguageListCell'

const StatusBar = () => {
    const [langModalIsOpen, setLangModalIsOpen] = useState(false)
    const [lang, setLang] = useLang()
    const [selectedLang, setSelectedLang] = useState(lang)
    return <StatusBarElement>
        <WithTooltip tooltip={<Tooltip>Change the dashboard language</Tooltip>}>
            <StatusBarButtonElement onClick={() => setLangModalIsOpen(!langModalIsOpen)}>
                <IoLanguage />
            </StatusBarButtonElement>
        </WithTooltip>
        <StatusBarUserAvatar name='V' />
        <Modal isOpen={langModalIsOpen} setIsOpen={setLangModalIsOpen} dismissWithEscKey dismissWithOutsideClick>
            <ModalSheet>
                <ModalSheetTitle>Language</ModalSheetTitle>
                <ModalSheetDescription>Select a language.</ModalSheetDescription>
                <SelectList selectedIndex={languageNamesArray.indexOf(lang)} setSelectedIndex={(index) => setLang(languageNamesArray[index as any])}>
                    {languageNamesArray.map((name) => <SelectListItem key={name}>
                        <StatusBarLanguageListCell>
                            {languageNamesMap[name]}
                        </StatusBarLanguageListCell>
                    </SelectListItem>)}
                </SelectList>
                <button onClick={() => setLang(selectedLang)}>Confirm</button>
            </ModalSheet>
        </Modal>
    </StatusBarElement>
}

export default StatusBar