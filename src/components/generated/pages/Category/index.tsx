// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

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
import CategoryRecords from './Records'
import CategoryDashboard from './Dashboard'
import { useTranslation } from 'react-i18next'

const CategoryPage = ({ item }: PageProps) => {
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
            {item.variant === "records" ? <CategoryRecords item={item} /> : <CategoryDashboard item={item} />}
        </Main>
    </Page>
}

export default CategoryPage