import React from 'react'
import NavBar from "../../pageStack/NavBar"
import NavBarTitleItems from "../../pageStack/NavBarTitleItems"
import Page from "../../pageStack/Page"
import usePageStackPage from "../../pageStack/usePageStackPage"
import HideContentShimmerIfNotSignedIn from '../../shimmer/HideContentShimmerIfNotSignedIn'
import Main from '../../pageStack/Main'
import SegmentedControl from '../../segmentedControl/SegmentedControl'
import SegmentedControlButton from '../../segmentedControl/SegmentedControlButton'
import PageProps from '../PageProps'
import AdminRecords from './Records'
import AdminDashboard from './Dashboard'
import PaddedMainContent from '../../pageStack/PaddedMainContent'

const AdminFormPage = ({ item }: PageProps) => {
    const { updateCurrentStackItem } = usePageStackPage()
    return <Page>
        <NavBar>
            <NavBarTitleItems>
                <HideContentShimmerIfNotSignedIn>
                    Create a new record
                </HideContentShimmerIfNotSignedIn>
            </NavBarTitleItems>
        </NavBar>
        <Main>
            <PaddedMainContent>
                Form Page
            </PaddedMainContent>
        </Main>
    </Page>
}

export default AdminFormPage