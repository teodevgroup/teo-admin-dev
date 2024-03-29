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

const StatusBar = () => {
    const [langModalIsOpen, setLangModalIsOpen] = useState(false)
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
                <div>Lang modal</div>                
            </ModalSheet>
        </Modal>
    </StatusBarElement>
}

export default StatusBar