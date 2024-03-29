import React, { useState } from 'react'
import StatusBarButtonElement from "./StatusBarButtonElement"
import StatusBarElement from "./StatusBarElement"
import { IoLanguage } from "react-icons/io5"
import StatusBarUserAvatar from './StatusBarUserAvatar'
import Modal from '../../generated/modal/Modal'

const StatusBar = () => {
    const [langModalIsOpen, setLangModalIsOpen] = useState(false)
    return <StatusBarElement>
        <StatusBarButtonElement onClick={() => setLangModalIsOpen(!langModalIsOpen)}>
            <IoLanguage />
        </StatusBarButtonElement>
        <StatusBarUserAvatar name='V' />
        <Modal isOpen={langModalIsOpen} setIsOpen={setLangModalIsOpen} dismissWithEscKey dismissWithOutsideClick>
            <div>Lang modal</div>
        </Modal>
    </StatusBarElement>
}

export default StatusBar