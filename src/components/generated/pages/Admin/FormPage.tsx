import React, { Suspense } from 'react'
import NavBar from "../../pageStack/NavBar"
import NavBarTitleItems from "../../pageStack/NavBarTitleItems"
import Page from "../../pageStack/Page"
import HideContentShimmerIfNotSignedIn from '../../shimmer/HideContentShimmerIfNotSignedIn'
import Main from '../../pageStack/Main'
import PageProps from '../../pageStack/PageProps'
import PaddedMainContent from '../../pageStack/PaddedMainContent'
import { isEqual } from 'radash'
import AdminForm from './Form'

const AdminFormPage = ({ item }: PageProps) => {
    return <Page>
        <NavBar>
            <NavBarTitleItems>
                <HideContentShimmerIfNotSignedIn>
                    {isEqual(item.query, {}) ? "Create a new record" : "Update a record"}
                </HideContentShimmerIfNotSignedIn>
            </NavBarTitleItems>
        </NavBar>
        <Main>
            <PaddedMainContent>
                <Suspense fallback={<div>Loading...</div>}>
                    <AdminForm item={item} />
                </Suspense>
            </PaddedMainContent>
        </Main>
    </Page>
}

export default AdminFormPage