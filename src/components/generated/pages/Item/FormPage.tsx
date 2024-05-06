// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { Suspense } from 'react'
import NavBar from "../../pageStack/NavBar"
import NavBarTitleItems from "../../pageStack/NavBarTitleItems"
import Page from "../../pageStack/Page"
import HideContentShimmerIfNotSignedIn from '../../shimmer/HideContentShimmerIfNotSignedIn'
import Main from '../../pageStack/Main'
import PageProps from '../../pageStack/PageProps'
import PaddedMainContent from '../../pageStack/PaddedMainContent'
import { isEqual } from 'radash'
import ItemForm from './Form'
import { useTranslation } from 'react-i18next'

const ItemFormPage = ({ item }: PageProps) => {
    const { t } = useTranslation("translations")
    return <Page>
        <NavBar>
            <NavBarTitleItems>
                <HideContentShimmerIfNotSignedIn>
                    {isEqual(item.query, {}) ? t("form.createARecord") : t("form.updateARecord")}
                </HideContentShimmerIfNotSignedIn>
            </NavBarTitleItems>
        </NavBar>
        <Main>
            <PaddedMainContent>
                <Suspense fallback={<div>Loading...</div>}>
                    <ItemForm item={item} />
                </Suspense>
            </PaddedMainContent>
        </Main>
    </Page>
}

export default ItemFormPage