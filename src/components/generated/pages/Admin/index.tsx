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
import AdminRecords from './Records'
import AdminDashboard from './Dashboard'

const AdminPage = ({ item }: PageProps) => {
    const { updateCurrentStackItem } = usePageStackPage()
    return <Page>
        <NavBar>
            <NavBarTitleItems>
                <HideContentShimmerIfNotSignedIn>
                    <SegmentedControl index={item.variant === "records" ? 1 : 0} setIndex={(index) => {
                        if (index === 0) {
                            updateCurrentStackItem({ ...item, variant: "dashboard" })
                        } else {
                            updateCurrentStackItem({ ...item, variant: "records" })
                        }
                    }}>
                        <SegmentedControlButton key="dashboard">Dashboard</SegmentedControlButton>
                        <SegmentedControlButton key="records">Records</SegmentedControlButton>
                    </SegmentedControl>
                </HideContentShimmerIfNotSignedIn>
            </NavBarTitleItems>
        </NavBar>
        <Main>
            {item.variant === "records" ? <AdminRecords item={item} /> : <AdminDashboard item={item} />}
        </Main>
    </Page>
}

export default AdminPage