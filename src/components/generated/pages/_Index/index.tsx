import React from 'react'
import NavBar from "../../pageStack/NavBar"
import Page from "../../pageStack/Page"
import NavBarTitleItems from '../../pageStack/NavBarTitleItems'
import Main from '../../pageStack/Main'
import HideContentShimmerIfNotSignedIn from '../../shimmer/HideContentShimmerIfNotSignedIn'
import PaddedMainContent from '../../pageStack/PaddedMainContent'
import PageProps from '../../pageStack/PageProps'

const _IndexPage = ({ item }: PageProps) => {
    return <Page>
        <NavBar>
            <NavBarTitleItems>
                <HideContentShimmerIfNotSignedIn>
                    Welcome
                </HideContentShimmerIfNotSignedIn>
            </NavBarTitleItems>
        </NavBar>
        <Main>
            <PaddedMainContent>
                <HideContentShimmerIfNotSignedIn>
                    Welcome
                </HideContentShimmerIfNotSignedIn>
            </PaddedMainContent>
        </Main>
    </Page>
}

export default _IndexPage