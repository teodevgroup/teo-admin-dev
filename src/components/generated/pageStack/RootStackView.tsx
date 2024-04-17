import React from 'react'
import BaseStackView from "../stackView/BaseStackView"
import StatusBarElement from '../statusBar/StatusBarElement'

const RootStackView = ({ backButtonElement, children }) => {
    return <BaseStackView backButtonElement={backButtonElement} navBarElement={<StatusBarElement />}>
        {children}
    </BaseStackView>
}

export default RootStackView

{/* <WithTooltip tooltip={<Tooltip>{t("Back")}</Tooltip>}>
            <StatusBarButtonElement onClick={() => popStack()}>
                <IoIosArrowBack />
            </StatusBarButtonElement>
        </WithTooltip> */}