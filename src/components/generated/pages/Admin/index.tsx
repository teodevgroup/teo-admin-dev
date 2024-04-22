import React from 'react'
import NavBar from "../../pageStack/NavBar"
import NavBarTitleItems from "../../pageStack/NavBarTitleItems"
import Page from "../../pageStack/Page"
import usePageStackPage from "../../pageStack/usePageStackPage"
import HideContentShimmerIfNotSignedIn from '../../shimmer/HideContentShimmerIfNotSignedIn'
import Main from '../../pageStack/Main'
import Input from '../../../extended/input/Input'
import Button from '../../../extended/button/Button'
import SegmentedControl from '../../segmentedControl/SegmentedControl'
import SegmentedControlButton from '../../segmentedControl/SegmentedControlButton'
import PageProps from '../PageProps'



const AdminPage = ({ item }: PageProps) => {
    const { pushStack, updateCurrentStackItem } = usePageStackPage()
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
                        <SegmentedControlButton>Dashboard</SegmentedControlButton>
                        <SegmentedControlButton>Records</SegmentedControlButton>
                    </SegmentedControl>
                </HideContentShimmerIfNotSignedIn>
            </NavBarTitleItems>
        </NavBar>
        <Main>
            <div style={{
                background: "white", 
                paddingBottom: "20px",
                margin: "20px",
                borderRadius: 10,
            }}>
                <Input /><Button onClick={() => pushStack({
                    key: "User",
                    variant: undefined,
                    "query": undefined,
                })}>Button</Button>
            </div>
        </Main>
    </Page>
}

export default AdminPage