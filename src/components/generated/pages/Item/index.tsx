import React from 'react'
import NavBar from "../../pageStack/NavBar"
import NavBarTitleItems from "../../pageStack/NavBarTitleItems"
import Page from "../../pageStack/Page"
import usePageStackPage from "../../pageStack/usePageStackPage"
import HideContentShimmerIfNotSignedIn from '../../shimmer/HideContentShimmerIfNotSignedIn'
import Main from '../../pageStack/Main'
import SegmentedControl from '../../segmentedControl/SegmentedControl'
import SegmentedControlButton from '../../segmentedControl/SegmentedControlButton'
import PageProps from '../../pageStack/PageProps'
import ItemRecords from './Records'
import ItemDashboard from './Dashboard'
import { useTranslation } from 'react-i18next'

const ItemPage = ({ item }: PageProps) => {
    const { t } = useTranslation("translations")
    const { updateCurrentStackItem } = usePageStackPage()
    return <Page>
        <NavBar>
            <NavBarTitleItems>
                <HideContentShimmerIfNotSignedIn rounded={true}>
                    <SegmentedControl index={item.variant === "records" ? 1 : 0} setIndex={(index) => {
                        if (index === 0) {
                            updateCurrentStackItem({ ...item, variant: "dashboard" })
                        } else {
                            updateCurrentStackItem({ ...item, variant: "records" })
                        }
                    }}>
                        <SegmentedControlButton key="dashboard">{t("page.dashboard")}</SegmentedControlButton>
                        <SegmentedControlButton key="records">{t("page.records")}</SegmentedControlButton>
                    </SegmentedControl>
                </HideContentShimmerIfNotSignedIn>
            </NavBarTitleItems>
        </NavBar>
        <Main>
            {item.variant === "records" ? <ItemRecords item={item} /> : <ItemDashboard item={item} />}
        </Main>
    </Page>
}

export default ItemPage