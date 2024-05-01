import React, { ReactNode, Suspense, useContext } from "react"
import NavBarItemsContainerElement from "./NavBarItemsContainerElement"
import { NavBarRenderStateContext } from "./NavBar"
import StackItemIndexContext from "./stackItemIndexContext"
import WithTooltip from "../tooltip/WithTooltip"
import Tooltip from "../tooltip/Tooltip"
import { useTranslation } from "react-i18next"
import RoundedButtonElement from "../button/RoundedButtonElement"
import { IoIosArrowBack } from 'react-icons/io'
import usePageStackPage from "./usePageStackPage"
import StatusBarDefaultLeadingItemsShimmer from "../statusBar/StatusBarDefaultLeadingItemsShimmer"
import { useAccount } from "../../../lib/generated/signIn"

type NavBarLeadingItemsProps = {
    children?: ReactNode | ReactNode[]
}

type NavBarBackButtonProps = {
    popStack: () => void
}

const NavBarBackButton = ({ popStack }: NavBarBackButtonProps) => {
    const { t } = useTranslation("translations")
    const _ = useAccount()
    return <WithTooltip tooltip={<Tooltip>{t("Back")}</Tooltip>}>
        <RoundedButtonElement onClick={() => popStack()}>
            <IoIosArrowBack />
        </RoundedButtonElement>
    </WithTooltip>
}

const NavBarLeadingItems = ({ children }: NavBarLeadingItemsProps) => {
    const indexContext = useContext(StackItemIndexContext)
    const navBarContext = useContext(NavBarRenderStateContext)
    const { popStack } = usePageStackPage()
    navBarContext.leading = true
    return <NavBarItemsContainerElement>
        {indexContext.index > 0 ? <Suspense fallback={<StatusBarDefaultLeadingItemsShimmer />}>
            <NavBarBackButton popStack={popStack} />
        </Suspense> : null}
        {children}
    </NavBarItemsContainerElement>
}

export default NavBarLeadingItems
