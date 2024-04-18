import React, { ReactNode, useContext } from "react"
import NavBarItemsContainerElement from "./NavBarItemsContainerElement"
import { NavBarRenderStateContext } from "./NavBar"
import StackItemIndexContext from "./stackItemIndexContext"
import WithTooltip from "../tooltip/WithTooltip"
import Tooltip from "../tooltip/Tooltip"
import { useTranslation } from "react-i18next"
import RoundedButtonElement from "../button/RoundedButtonElement"
import { IoIosArrowBack } from 'react-icons/io'
import usePageStackPage from "./usePageStackPage"

type NavBarLeadingItemsProps = {
    children?: ReactNode | ReactNode[]
}

const NavBarLeadingItems = ({ children }: NavBarLeadingItemsProps) => {
    const { t } = useTranslation("translations")
    const indexContext = useContext(StackItemIndexContext)
    const navBarContext = useContext(NavBarRenderStateContext)
    const { popStack } = usePageStackPage()
    navBarContext.leading = true
    return <NavBarItemsContainerElement>
        {indexContext.index > 0 ? <WithTooltip tooltip={<Tooltip>{t("Back")}</Tooltip>}>
            <RoundedButtonElement onClick={() => popStack()}>
                <IoIosArrowBack />
            </RoundedButtonElement>
        </WithTooltip> : null}
        {children}
    </NavBarItemsContainerElement>
}

export default NavBarLeadingItems
