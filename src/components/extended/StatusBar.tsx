import React from 'react'
import StatusBarButtonElement from "./StatusBarButtonElement"
import StatusBarElement from "./StatusBarElement"
import { IoLanguage } from "react-icons/io5"
import StatusBarUserAvatar from './StatusBarUserAvatar'

const StatusBar = () => {
    return <StatusBarElement>
        <StatusBarButtonElement>

        </StatusBarButtonElement>
        <StatusBarButtonElement>
            <IoLanguage />
        </StatusBarButtonElement>
        <StatusBarUserAvatar name='V' />
    </StatusBarElement>
}

export default StatusBar